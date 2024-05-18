"use client";
import { CarouselBar } from '@/components/News/Carousel'
import React, { useEffect, useState } from 'react'
import NewsCard from '@/components/News/NewsCard'
import { fetchAllNews } from '@/helpers/api'
import { News } from '@/helpers/types'

const NewsSentiments = () => {
  const [NewsData,setNewsData] = useState<News|null>(null);
  useEffect(()=>{
    const fetchNews = async()=>{
      const data = await fetchAllNews();
      setNewsData(data);
      console.log(data)
    }
    fetchNews();
  }, [])
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <CarouselBar/>
      <div className='w-full max-h-5'>
        {NewsData?.feed.map((newsItem,index)=>(
          <NewsCard key={index} imageUrl={newsItem.banner_image} title={newsItem.title} author={newsItem.authors[0]} description={newsItem.summary} url={newsItem.url}/>
        ))}
      </div>
    </div>
  )
}

export default NewsSentiments
