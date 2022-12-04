import axios from "axios";
import { FundamentalsSnapshot } from "../types";
import {
  AnalystConsensus,
  CompanyProfile,
  InstitutionalOwnership,
  LiveQuote,
  MarketStatusAndHolidays,
  NextYearEstimates,
  PriceTargetSummary,
  QuarterlyDataSet,
  RelativeStrengthVsSector,
  SharesFloat,
  StockPriceChange,
  UpgradesDowngrades,
} from "@tweevest/types";

// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

export const PublicApiService = {
  liveQuote: async (symbol: string) =>
    publicApi
      .get<LiveQuote>(`/stocks/live-quote/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
};

export const ApiService = {
  // 1 & 2 (were duplicated before
  liveQuote: async (symbol: string) =>
    api
      .get<LiveQuote>(`/stocks/live-quote/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  // 3
  sharesFloat: async (symbol: string) =>
    api
      .get<SharesFloat>(`/stocks/shares-float/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  // 4
  companyProfile: async (symbol: string) =>
    api
      .get<CompanyProfile>(`/stocks/company-profile/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  // 5
  stockPeers: async (symbol: string) =>
    api
      .get<string[]>(`/stocks/peers/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  // 6
  priceChange: async (symbol: string) =>
    api
      .get<StockPriceChange>(`/stocks/price-change/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  // 7
  /**
   * @deprecated
   * @param symbol
   */
  institutionalOwnership: async (symbol: string) =>
    api
      .get<InstitutionalOwnership[]>(
        `/stocks/institutional-ownership/${symbol.toUpperCase()}`
      )
      .then(({ data }) => data),
  // 8
  fundamentalsSnapshot: async (symbol: string) =>
    api
      .get<FundamentalsSnapshot>(
        `/stocks/fundamentals-snapshot/${symbol.toUpperCase()}`
      )
      .then(({ data }) => data),
  // 9 & 10
  getFundamentalsVsPeers: async (symbol: string) =>
    api
      .get<FundamentalsSnapshot[]>(
        `/stocks/fundamentals-snapshot-vs-peers/${symbol.toUpperCase()}`
      )
      .then(({ data }) => data),
  exchangeStatus: async (exchange: string) =>
    api
      .get<MarketStatusAndHolidays>(`/markets/status/${exchange}`)
      .then(({ data }) => data),
  // 11
  analystConsensus: async (symbol: string) =>
    api
      .get<AnalystConsensus>(
        `/stocks/analyst-consensus/${symbol.toUpperCase()}`
      )
      .then(({ data }) => data),
  // 12
  priceTarget: async (symbol: string) =>
    api
      .get<PriceTargetSummary>(`/stocks/price-target/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  // 13
  upgradesDowngrades: async (symbol: string) =>
    api
      .get<UpgradesDowngrades[]>(
        `/stocks/upgrades-downgrades/${symbol.toUpperCase()}`
      )
      .then(({ data }) => data),
  // 14
  quarterlyDataset: async (symbol: string, numberOfQuarters = 10) =>
    api
      .get<QuarterlyDataSet>(
        `/stocks/quarterly-data/all/${symbol.toUpperCase()}?limit=${numberOfQuarters}`
      )
      .then(({ data }) => data),
  prePostMarket: async (symbol: string) =>
    api
      .get(`/stocks/pre-post-market-quote/${symbol.toUpperCase()}`)
      .then(({ data }) => data),
  relativeStrengthVsSector: async (symbol: string) =>
    api
      .get<RelativeStrengthVsSector>(
        `/stocks/relative-strength-vs-sector/${symbol.toUpperCase()}?limitDays=7&limitTopRs=5`
      )
      .then(({ data }) => data),
  nextYearEstimates: async (symbol: string) =>
    api
      .get<NextYearEstimates>(
        `/stocks/next-year-estimates/${symbol.toUpperCase()}`
      )
      .then(({ data }) => data),
};
