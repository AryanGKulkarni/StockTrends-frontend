import React, { useEffect, useState } from 'react'
import { fetchTopGainers } from '@/helpers/api'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "../ui/separator"
import { GainersType } from '@/helpers/types'

export function CarouselBar() {
  const [GainersData,setGainersData] = useState<GainersType|null>(null);
  useEffect(()=>{
    const fetch = async()=>{
      const data = await fetchTopGainers();
      setGainersData(data);
      console.log(data)
    }
    fetch();
  }, [])
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-81"
    >
      <CarouselContent>
        {GainersData?.top_gainers.map((item, index) => (
          <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/3">
            <div className="p-1">
              <Card  className="" style={{backgroundColor: "#232323"}}>
                <CardHeader>
                  <CardTitle>{item.ticker}</CardTitle>
                </CardHeader>
                <Separator/>
                <CardContent>
                  <div className="flex justify-between my-3">
                    <h2>{item.price}</h2>
                    <div>^</div>
                  </div>
                  <div className="my-3 text-green-600">
                    <h3>{item.change_amount}({item.change_percentage})</h3>
                  </div>
                  <div className="my-3">
                    <h3>{item.volume}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        {GainersData?.top_losers.map((item, index) => (
          <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/3">
            <div className="p-1">
              <Card  className="" style={{backgroundColor: "#232323"}}>
                <CardHeader>
                  <CardTitle>{item.ticker}</CardTitle>
                </CardHeader>
                <Separator/>
                <CardContent>
                  <div className="flex justify-between my-3">
                    <h2>{item.price}</h2>
                    <div>^^</div>
                  </div>
                  <div className="my-3 text-red-600">
                    <h3>{item.change_amount}({item.change_percentage})</h3>
                  </div>
                  <div className="my-3">
                    <h3>{item.volume}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
