// components/stockCard.tsx
import React from 'react'
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

interface stockCardProps {
    symbol: string;
    description: string;
    currency: string;
    type: string;
}

const StockCard: React.FC<stockCardProps> = ({symbol, description, currency, type}) => {
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
                <Button>Watchlist</Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default StockCard
