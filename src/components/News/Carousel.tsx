import * as React from "react"

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "../ui/separator"

export function CarouselBar() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-81"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/3">
            <div className="p-1">
              <Card  className="" style={{backgroundColor: "#232323"}}>
                <CardHeader>
                  <CardTitle>Ticker</CardTitle>
                </CardHeader>
                <Separator/>
                <CardContent>
                  <div className="flex justify-between my-3">
                    <h2>Price</h2>
                    <div>^</div>
                  </div>
                  <div className="my-3">
                    <h3>Change amount(percent)</h3>
                  </div>
                  <div className="my-3">
                    <h3>Volume</h3>
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
