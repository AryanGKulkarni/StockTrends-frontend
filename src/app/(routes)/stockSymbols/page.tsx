/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from 'react'
import StockCard from '@/components/stockSymbols/stockCard'
import { fetchStockSymbols } from '@/helpers/api'
import {StockSymbolType} from "@/helpers/types"

const stockSymbols = () => {
  const [stockSymbolsData, setStockSymbolsData] = useState<StockSymbolType[]>([]);
  useEffect(()=>{
    const fetch = async () =>{
        const data = await fetchStockSymbols();
        setStockSymbolsData(data);
        console.log(data)
    }
    if(stockSymbolsData.length===0){
        fetch();
    }
  })
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", marginLeft: "15px" }} >
        {stockSymbolsData.map((item,index)=>(
            <StockCard key={index} symbol={item.symbol} description={item.description} currency={item.currency} type={item.type}/>
        ))}
    </div>
  )
}

export default stockSymbols
