"use client"
import React, { useEffect, useState } from 'react'
import Chart from '@/components/Analysis/LineChart'
import { fetchOHLC } from '@/helpers/api';
import { OHLCData } from '@/helpers/split';

import {ohlc} from "@/dummy data/ohlc"

const Analysis = ({
  params,
}: {
  params: {
    symbol: string;
  };
}) => {
  const [ohlcData, setOhlcData] = useState<OHLCData|null>(ohlc);
  useEffect(()=>{
    const fetch = async ()=>{
      const data = await fetchOHLC(params.symbol);
      setOhlcData(data);
    }
    if(ohlcData===ohlc){
      fetch();
    }
  })
  return (
    <>
      <Chart ohlc={ohlcData}/>
    </>
  )
}

export default Analysis
