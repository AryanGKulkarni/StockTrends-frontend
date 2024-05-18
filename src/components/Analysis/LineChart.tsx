"use client"
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import splitOHLCData, { SplitData, OHLCData } from '@/helpers/split'
import { Card, CardContent,CardHeader, CardTitle, CardDescription } from '../ui/card'

interface ChartProps {
  ohlc: any
}



const Chart: React.FC<ChartProps> = ({ohlc}) => {
  const [data,setData] = useState<SplitData[]>([])
  useEffect(()=>{
    if(ohlc!==null){
      console.log("ohlc: ",ohlc)
      const data1 = splitOHLCData(ohlc);
      const data2 = data1.openData.slice(0,20);
      console.log(data2);
      setData(data2);
    }
  },[setData,ohlc])
  return (
  <>
  <Card style={{ backgroundColor:"#232323"}}>
    <CardHeader>
      <CardTitle>{ohlc['Meta Data']['2. Symbol']}</CardTitle>
      <CardDescription>Time Series(INTRADAY)</CardDescription>
    </CardHeader>
    <CardContent>
      <LineChart width={600} height={200} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#FB8500" />
        <Line type="monotone" dataKey="high" stroke="#ef233c" />
        <Line type="monotone" dataKey="low" stroke="#f15bb5" />
        <Line type="monotone" dataKey="close" stroke="#70e000" />
      </LineChart>
    </CardContent>
  </Card>
  </>
  )
};

export default Chart;
