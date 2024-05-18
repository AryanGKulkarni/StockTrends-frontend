/* eslint-disable @next/next/no-img-element */
// components/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { Card } from '../ui/card';

const img: string = "https://cdn.benzinga.com/files/regularguy-eth-w9codxtsfts-unsplash_29.jpg?width=1200&height=800&fit=crop"


interface NewsCardProps {
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, author, description, url }) => {
  return (
    <a href={url} target='_blank'>
      <Card className="flex border-2 border-gray-500 rounded-lg shadow-lg overflow-hidden my-3" style={{ backgroundColor:"#232323"}}>
        <div>
          <img src={imageUrl? imageUrl:img} alt="" width={200}/>
        </div>
        <Separator orientation="vertical" className='mx-3' />
        <div className="w-2/3 mx-5">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">By {author}</p>
          </div>
          <p className="my-5">{description}</p>
        </div>
      </Card>
    </a>
  );
};

export default NewsCard;
