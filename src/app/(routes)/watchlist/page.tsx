/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from 'react'
import WatchlistCard from '@/components/Watchlist/Watchlist'
import { WatchlistType } from '@/helpers/types';
import { GetWatchlistAPI } from '@/helpers/api';
import { toast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

const WatchlistPage = () => {
  const router = useRouter();
  const [watchlistData, setWatchlistData] = useState<WatchlistType[]>([]);
  const [call, setCall] = useState<boolean>(true);
  const fetchData = async () => {
    const res = await GetWatchlistAPI();
      if (res.status === 200) {
        setWatchlistData(res.payload);
      } else {
        toast({
          title: "User not logged in",
          variant: "destructive",
        });
        router.push('/login'); // Redirect to login if not logged in
      }
  }
  useEffect(()=>{

    if(watchlistData.length==0&&call){        
        fetchData();
        setCall(false);
    }
  },[setCall,fetchData,watchlistData,call])
  
  return (
    <>
    {(watchlistData?.length==0)? (
        <>
            <div>
                No items were added in watchlist
            </div>
        </>
    ) : (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", marginLeft: "15px" }} >
                {watchlistData.map((item,index)=>(
                    <WatchlistCard key={index} id={item.id} symbol={item.symbol} description={item.description} currency={item.currency} type={item.type}/>
                ))}
            </div>
        </>
    )}
    </>
  )
}

export default WatchlistPage
