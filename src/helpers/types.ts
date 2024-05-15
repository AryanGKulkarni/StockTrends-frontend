// types.ts

export interface News {
    items: string;
    sentiment_score_definition: string;
    relevance_score_definition: string;
    feed: NewsItem[];
}

export interface NewsItem {
    title: string;
    url: string;
    time_published: string;
    authors: string[];
    summary: string;
    banner_image: string;
    source: string;
    category_within_source: string;
    source_domain: string;
    topics: Topic[];
    overall_sentiment_score: number;
    overall_sentiment_label: string;
    ticker_sentiment: TickerSentiment[];
}

export interface Topic {
    topic: string;
    relevance_score: string;
}

export interface TickerSentiment {
    ticker: string;
    relevance_score: string;
    ticker_sentiment_score: string;
    ticker_sentiment_label: string;
}

export interface TopGainers {
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
}

export interface GainersType {
    top_gainers: TopGainers[];
    top_losers: TopGainers[];
}

export interface StockSymbolType {
    currency: string;
    description: string;
    displaySymbol: string;
    figi: string;
    isin: string | null;
    mic: string;
    shareClassFIGI: string;
    symbol: string;
    symbol2: string;
    type: string;
}
  