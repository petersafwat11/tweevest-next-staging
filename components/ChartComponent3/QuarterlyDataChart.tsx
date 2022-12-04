"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data:{name: string;
    uv: number| string;
    pv: number|  string;
    amt: number| string;}[] = [
  {
    name: "Q1.19",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Q2.19",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Q3.19",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Q4.19",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Q1.20",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Q2.20",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const QuarterlyDataChart = (lineData: any) => {
  const getValues = () => {
    lineData?.boxData?.map((element: any, index: any) => {
      console.log("elementjjj : ", element);
      data[index]["uv"] = element.value ;
      data[index]["name"] = element.date;
    });
  };
  getValues();
  const formatYAxis = (labelValue: Number) => {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? String((Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B")
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? String((Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M")
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? String((Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K")
      : String(Math.abs(Number(labelValue)));
  };
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid stroke="#F4F5F8" /> */}
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="uv" stroke="#376FFF" fill="#EFF2FE" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
