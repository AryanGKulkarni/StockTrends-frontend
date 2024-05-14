import { CarouselBar } from '@/components/News/Carousel'
import React from 'react'
import NewsCard from '@/components/News/NewsCard'

const News = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <CarouselBar/>
      <div className='w-full max-h-5'>
        <NewsCard imageUrl='' title='Title' author='author' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus, placeat quidem error magnam neque perferendis debitis aliquam quae nesciunt'/>
      </div>
    </div>
  )
}

export default News
