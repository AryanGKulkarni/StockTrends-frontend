type MetaData = {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
};

type TimeSeriesData = {
    [date: string]: {
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
    };
};

export type OHLCData = {
    "Meta Data": MetaData;
    "Time Series (Daily)": TimeSeriesData;
};

export type SplitData = {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    date: string;
};

export default function splitOHLCData(data: OHLCData): {openData: SplitData[]} {
    const metaData = data["Meta Data"];
    const timeSeries = data["Time Series (Daily)"];
    const dates = Object.keys(timeSeries);

    const openData: SplitData[] = [];

    dates.forEach(date => {
        openData.push({
            open: parseFloat(timeSeries[date]["1. open"]),
            high: parseFloat(timeSeries[date]["2. high"]),
            low: parseFloat(timeSeries[date]["3. low"]),
            close: parseFloat(timeSeries[date]["4. close"]),
            volume: parseFloat(timeSeries[date]["5. volume"]),
            date: date
        });
    });
    return ({openData});
}


const ohlcData: OHLCData = {
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2024-05-14",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2024-05-14": {
        "1. open": "167.8600",
        "2. high": "168.1300",
        "3. low": "166.4800",
        "4. close": "167.3600",
        "5. volume": "2600967"
        },
        "2024-05-15": {
        "1. open": "167.8600",
        "2. high": "168.1300",
        "3. low": "166.4800",
        "4. close": "167.3600",
        "5. volume": "2600967"
        },
        "2024-05-16": {
        "1. open": "167.8600",
        "2. high": "168.1300",
        "3. low": "166.4800",
        "4. close": "167.3600",
        "5. volume": "2600967"
        },
        // ... additional data omitted for brevity
    }
};

// const splitData = splitOHLCData(ohlcData);
// console.log(splitData);
  