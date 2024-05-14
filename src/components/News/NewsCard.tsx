/* eslint-disable @next/next/no-img-element */
// components/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import { Separator } from '../ui/separator';

import img from '../../../public/1.webp'
import { Card } from '../ui/card';


interface NewsCardProps {
  imageUrl: string;
  title: string;
  author: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, author, description }) => {
  return (
    <Card className="flex border-2 border-gray-500 rounded-lg shadow-lg overflow-hidden my-3" style={{height: 160, backgroundColor:"#232323"}}>
      <div>
        <Image src={img} alt={title} width={200} height={200}/>
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
  );
};

export default NewsCard;
