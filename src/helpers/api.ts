const apikey = process.env.NEXT_PUBLIC_API_KEY
import { TopGainers } from "./types";

export const fetchAllNews = async () => {
    const res = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${apikey}`);
    const json = await res.json();
    return json;
};
export const fetchTopGainers = async () => {
    const res = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apikey}`);
    const json = await res.json();
    const topGainers: TopGainers[] = json.top_gainers.slice(0, 3);
    const topLosers: TopGainers[] = json.top_losers.slice(0, 3);

    return {
        top_gainers: topGainers,
        top_losers: topLosers
    };
};