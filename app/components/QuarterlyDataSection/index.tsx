import React from "react";
import { ApiService } from "../../../utils";
import { QuarterlyDataSection } from "./QuarterlyDataSection";

interface Props {
  symbol: string;
}

export default async function ServerQuarterlyDataCard({ symbol }: Props) {
  const data = await ApiService.quarterlyDataset(symbol);
  return <QuarterlyDataSection data={data} fallback={false} />;
}
