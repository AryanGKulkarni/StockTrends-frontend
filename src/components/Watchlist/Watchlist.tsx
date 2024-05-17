// components/stockCard.tsx
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DeleteWatchlistAPI } from '@/helpers/api';
import { toast } from "@/components/ui/use-toast"

interface stockCardProps {
    id: number;
    symbol: string;
    description: string;
    currency: string;
    type: string;
}

const WatchlistCard: React.FC<stockCardProps> = ({id, symbol, description, currency, type}) => {

    const router = useRouter();
    const handleClick = async (id: number) =>{
        const res = await DeleteWatchlistAPI(id);
        if (res.status === 200) {
            toast({
            title: "Deleted Successfully",
            });
        } else {
            toast({
            title: "User not logged in",
            variant: "destructive",
            });
            router.push('/login');
        }
    }

  return (
    <Card className='text-blue-500' style={{width: 250, backgroundColor:"#232323"}}>
        <CardHeader className='text-gray-300'>
            <CardTitle>{symbol}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className='text-gray-300'>
            <div className="flex justify-between">
                <h2>{currency}</h2>
                <h2>{type}</h2>
            </div>
            <Separator className='my-3'/>
            <div className="flex justify-between mt-2">
                <Link href={`/analysis/${symbol}`}><Button>Analysis</Button></Link>                
                <Button onClick={() => handleClick(id)}>Remove</Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default WatchlistCard
