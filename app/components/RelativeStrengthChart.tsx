"use client";
import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { TimeSeriesEntry } from "@tweevest/types";

const CustomTooltip = ({ active, payload, symbol }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip border border-[#ECEEF1] bg-white">
        {/* <p className="label heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">{`${payload[0].payload["name"]}`}</p> */}

        <p className="intro heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">
          <span className="text-[red]">Date&nbsp;</span>
          {payload[0].payload["name"]}
        </p>

        <p className="intro heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">
          <span className="text-[#FFC221]">{symbol}&nbsp;</span>
          {payload[0].payload["stock"]}
        </p>
        <p className="desc heading-XS py-2 px-4 border-[#ECEEF1] text-primary-dark2">
          <span className="text-[#00C2FF]">Sector&nbsp;</span>
          {payload[0].payload["sector"]}
        </p>
      </div>
    );
  }

  return null;
};

interface RsChartProps {
  stock?: TimeSeriesEntry[];
  sector?: TimeSeriesEntry[];
  symbol?: string;
}

interface ChartEntry {
  name: string;
  stock: number;
  sector: number;
}

export const RelativeStrengthChart = ({
  stock,
  sector,
  symbol,
}: RsChartProps) => {
  const data: ChartEntry[] = [];
  const length = Math.min(stock?.length || 0, sector?.length || 0);
  if (length > 0 && stock && sector) {
    for (let i = 0; i < length; i++) {
      data.push({
        name: stock[i].date,
        stock: stock[i].value,
        sector: sector[i].value,
      });
    }
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Line
          type="monotone"
          dot={false}
          dataKey="stock"
          stroke="#FFC221"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dot={false}
          dataKey="sector"
          stroke="#00C2FF"
          strokeWidth={2}
        />
        <Tooltip content={<CustomTooltip symbol={symbol} />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
