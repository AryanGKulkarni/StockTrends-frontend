const apikey = process.env.NEXT_PUBLIC_API_KEY
const finhubkey = process.env.NEXT_PUBLIC_FINHUB_KEY
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
export const fetchStockSymbols = async () => {
    const res = await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${finhubkey}`);
    const json = await res.json();
    const data = json.slice(0,30);
    return data;
};