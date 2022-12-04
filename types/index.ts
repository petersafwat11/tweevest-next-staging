export interface FundamentalsSnapshot {
  symbol: string;
  pe: number | null;
  priceToSales: number | null;
  priceToBook: number | null;
  revenue: number;
  eps: number;
}
