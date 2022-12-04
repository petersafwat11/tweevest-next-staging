import React from "react";
import Image from "next/image";
import { BartextChart2 } from "../../../components";
import {
  ApiService,
  convertToInternationalCurrencySystem,
} from "../../../utils";
import { FundamentalsSnapshot } from "../../../types";
import ComparisonBarChart from "./ComparisonBarChart";
// import { Dropdown } from "antd";

interface Props {
  symbol: string;
}

export default async function FundamentalsCardServer({ symbol }: Props) {
  const data = await ApiService.getFundamentalsVsPeers(symbol);
  return <FundamentalsCard symbol={symbol} data={data} fallback={false} />;
}

interface FundamentalsCardProps {
  data?: FundamentalsSnapshot[];
  symbol: string;
  fallback?: boolean;
}

export const FundamentalsCard = ({
  data,
  symbol,
  fallback,
}: FundamentalsCardProps) => {
  const stock = data?.find((item) => item.symbol === symbol);

  return (
    <>
      <div className="BarChart-box-otr">
        <div className="BarChart-box-inr px-[32px] pt-[32px] pb-[40px]">
          <div className="chart-heading-otr">
            <p className="heading-SB text-primary-dark flex items-center">
              Fundamentals
              <span className="ml-[8px] flex">
                <Image
                  className="object-contain"
                  width="16"
                  height="16"
                  src="/svg/info-circle.svg"
                  alt="Shape"
                />
              </span>
            </p>
            <div className="static-boxes-otr flex items-center flex-wrap gap-[7px] mt-[10px] mb-[40px]">
              <div className="static-box w-[31%] 2xl:w-[48%]">
                <h3
                  className={`heading-h3 text-primary-dark ${
                    fallback ? "bg-gray-200 animate-pulse rounded-lg" : ""
                  }`}
                >
                  {fallback && <span>&nbsp;</span>}
                  {!fallback && Number(stock?.pe).toFixed(2) + "x"}
                </h3>
                <p className="heading-XS text-primary-dark2">P/E Ratio</p>
              </div>
              <div className="static-box w-[31%] 2xl:w-[48%]">
                <h3
                  className={`heading-h3 text-primary-dark ${
                    fallback ? " blur" : ""
                  }`}
                >
                  {Number(fallback ? 20 : stock?.priceToSales).toFixed(2)}x
                </h3>
                <p className="heading-XS text-primary-dark2">P/S Ratio</p>
              </div>
              <div className="static-box w-[31%] 2xl:w-[48%]">
                <h3
                  className={`heading-h3 text-primary-dark ${
                    fallback ? " blur" : ""
                  }`}
                >
                  {Number(fallback ? 20 : stock?.priceToBook).toFixed(2)}x
                </h3>
                <p className="heading-XS text-primary-dark2">P/Book Ratio</p>
              </div>
            </div>
          </div>
          <div className="earning-revenue-otr mb-[24px] flex items-center gap-[16px]">
            <div className="content-otr">
              <p className="heading-XS text-primary-dark2 mb-[26px]">
                Earnings
              </p>
              <p className="heading-XS text-primary-dark2">Sales</p>
            </div>
            <div className="chart-otr relative z-10 pt-[20px] pb-[1px] border-l-[1px] border-primary-dark2 w-[100%]">
              <BartextChart2 type={1} value="80" text={"380"} />
              <BartextChart2
                type={2}
                value="50"
                // value={API8Data.revenue}
                text={convertToInternationalCurrencySystem(
                  stock?.revenue
                ).toString()}
              />
            </div>
          </div>
          <p className="heading-MB text-primary-default mb-[40px]">
            How {symbol} compares to sector?
          </p>
          {data && <ComparisonBarChart data={data} />}
        </div>
      </div>
    </>
  );
};
