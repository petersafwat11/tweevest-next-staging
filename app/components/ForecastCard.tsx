import React, { useEffect } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { ApiService, convertToInternationalCurrencySystem } from "../../utils";
import {
  AnalystConsensus,
  LiveQuote,
  NextYearEstimates,
  PriceTargetSummary,
  UpgradesDowngrades,
} from "@tweevest/types";

async function getData(symbol: string) {
  return Promise.all([
    ApiService.nextYearEstimates(symbol),
    ApiService.analystConsensus(symbol),
    ApiService.priceTarget(symbol),
    ApiService.liveQuote(symbol),
    ApiService.upgradesDowngrades(symbol),
  ]);
}

interface Props {
  symbol: string;
}

export default async function ServerForecastCard({ symbol }: Props) {
  const [
    nextYearEstimates,
    consensus,
    priceTarget,
    liveQuote,
    upgradesDowngrades,
  ] = await getData(symbol);

  return (
    <ForecastCard
      fallback={false}
      nextYearEstimates={nextYearEstimates}
      consensus={consensus}
      priceTarget={priceTarget}
      liveQuote={liveQuote}
      upgradesDowngrades={upgradesDowngrades}
    />
  );
}

interface ForecastCardProps {
  nextYearEstimates?: NextYearEstimates;
  consensus?: AnalystConsensus;
  priceTarget?: PriceTargetSummary;
  liveQuote?: LiveQuote;
  upgradesDowngrades?: UpgradesDowngrades[];
  fallback?: boolean;
}

export const ForecastCard = ({
  // fallback,
  nextYearEstimates,
  consensus,
  priceTarget,
  liveQuote,
  upgradesDowngrades,
}: ForecastCardProps) => {
  const rotate_degree: any = {
    "Strong Sell": -70,
    Sell: -45,
    Neutral: 0,
    Buy: 60,
    "Strong Buy": 70,
  };
//   useEffect(()=>{
//  console.log('consensus'+ consensus?.consensus);
//   },[])
 
  return (
    <div className={"ForcastComponent-box-otr"}>
      <div className="ForcastComponent-box-inr px-[32px] pt-[32px] pb-[40px]">
        <div className="chart-heading-otr">
          <p className="heading-SB text-primary-dark flex items-center">
            Forecast
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
          <div className="static-boxes-otr flex flex-wrap justify-between gap-[4px] 2xl:gap-[8px] mt-[16px]">
            <ForecastItem
              name={"estimatedRevenue"}
              label="Revenue"
              nextYearEstimates={nextYearEstimates}
            />
            <ForecastItem
              name={"estimatedEps"}
              label="EPS"
              nextYearEstimates={nextYearEstimates}
            />
            <ForecastItem
              name={"estimatedEbitda"}
              label="EBITDA"
              nextYearEstimates={nextYearEstimates}
            />
          </div>
        </div>
        <div className="analyst-rating-otr my-[32px]">
          <p className="heading-SB text-primary-dark">Analyst rating</p>
          <div className="chart-circle-otr relative flex items-center justify-center flex-col">
            <div className="circle-img-otr flex justify-center mt-[40px] mb-[18px] relative mx-[42px]">
              <div className="circle-text-otr absolute w-[100%] h-[100%]">
                <p className="circle-text1 heading-XXS text-primary-dark2 w-[42px] absolute left-[-45px] bottom-[16px]">
                  Strong Sell
                </p>
                <p className="circle-text1 heading-XXS text-primary-dark2 w-[42px] absolute left-[0px] bottom-[90px]">
                  Sell
                </p>
                <p className="circle-text1 heading-XXS text-primary-dark2 text-right w-[42px] absolute right-[0px] bottom-[90px]">
                  Buy
                </p>
                <p className="circle-text1 heading-XXS text-primary-dark2 text-center w-[42px] absolute left-[40%] top-[-20px]">
                  Neutral
                </p>
                <p  className="circle-text1 heading-XXS text-primary-dark2 text-right w-[42px] absolute right-[-45px] bottom-[16px]">
                  Strong Buy
                </p>
              </div>
              <Image
                className="object-contain"
                width="230"
                height="130"
                src="/chart-circle.svg"
                alt="Shape"
              />
              <div  className="circle-line absolute left-[48%] bottom-0 flex flex-col items-center justify-end h-[100%]">
                <div style={{ rotate:consensus?.consensus==='Neutral'?'0':consensus?.consensus==='Sell'?'-30deg':consensus?.consensus==='Strong Sell'?'-60deg': consensus?.consensus==='Buy'?'30deg':'60deg',
                 }}
                  className={`circle-line-inr flex flex-col-reverse items-center rotate-[${
                    rotate_degree[consensus?.consensus || "Neutral"]
                  }deg]`}
                >
                  <div className="circle w-[12px] h-[12px] border-[3px] border-primary-dark rounded-[100%]" />
                  <div className="line h-[60px] w-[4px] bg-primary-dark rounded-[60px] mb-[8px]" />
                </div>
              </div>
            </div>
            <p className="neutral-text heading-LB text-primary-dark text-center">
              Neutral
            </p>
          </div>
        </div>
        <div className="year-price-text-otr mb-[32px]">
          <div className="year-price-text-inr flex items-center justify-between mb-[4px]">
            <p className="heading-S text-primary-dark2">1 Year Price Target</p>
            <p className="heading-S text-primary-dark2 flex items-center">
              {Number(priceTarget?.target).toFixed(2)}
              <span className="text-green-default ml-[10px]">
                (
                {(
                  (((priceTarget?.target || 0) - (liveQuote?.price || 0)) /
                    (liveQuote?.price || 1)) *
                  100
                ).toFixed(0)}
                %)
              </span>
            </p>
          </div>
          <div className="year-price-text-inr flex items-center justify-between">
            <p className="heading-S text-primary-dark2">Number of analyst</p>
            <p className="heading-S text-primary-dark2 flex items-center">
              {priceTarget?.numberOfAnalyst}
              <span className="text-green-default ml-[10px]" />
            </p>
          </div>
        </div>
        <div className="table-otr">
          <p className="heading-SB text-primary-dark">
            Last analyst upgrade/downgrade
          </p>
          {/* <table className="table-main w-[100%] mt-[24px]">
            <thead>
              <tr>
                <th scope="col" className="w-[100px]">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="Symbol"
                    />
                  </div>
                </th>
                <th scope="col">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="Company"
                    />
                  </div>
                </th>
                <th scope="col" className="w-[50px]">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="RS"
                    />
                  </div>
                </th>
                <th scope="col" className="w-[70px]">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-center"
                      title="5-Day Perf."
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {upgradesDowngrades?.map?.((element: any) => {
                return (
                  <tr key={element.gradingCompany}>
                    <td scope="col" key={element}>
                      <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                        <p
                          className="heading-XS text-primary-dark2 body-text text-left"
                          title="22-01-2022"
                        >
                          {dayjs(element.publishedDate).format("DD-MM-YYYY")}
                          {}
                        </p>
                      </div>
                      
                    </td>
                    <td scope="col">
                      <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                        <p
                          className="heading-XS text-primary-dark2 body-text text-left"
                          title="Barclays"
                        >
                          {element.gradingCompany}
                        </p>
                      </div>
                    </td>
                    <td scope="col">
                      <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                        <p
                          className="heading-XS text-primary-dark2 body-text text-left"
                          title="Buy"
                        >
                          {element.newGrade}
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          <div className="grid grid-rows-4 grid-cols-1 my-4">
            <div className="flex items-center justify-between my-1">
              <div>
                <p className="font-[600] text-[14px] leading-[150%] text-[#4F5C80] ">JP Morgan</p>
                <p className="text-[#727FA4] font-[600] text-[12px] leading-[150%]">Previous: <span className="text-[#4377ff] ">Neutral</span></p>
              </div>
              <div>
                <p className=" text-[#4F5C80] font-[600] text-[14px] leading-[150%]">22-01-2022</p>
                <p className="font-[600] text-[#727FA4] text-[12px] leading-[150%]">Now: <span className="text-green-500 ">Overweight</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function UpDownIcon({ value }: { value: number | string | undefined }) {
  return (
    <span className="flex w-[16px] h-[16px]">
      <Image
        className="object-cover"
        width="16"
        height="16"
        src={
          Number(value) < 0
            ? "/svg/arrow-left-down.svg"
            : "/svg/arrow-right-up.svg"
        }
        alt="Shape"
      />
    </span>
  );
}

function ForecastItem({
  fallback,
  nextYearEstimates,
  name,
  label,
}: {
  fallback?: boolean;
  nextYearEstimates?: NextYearEstimates;
  name: keyof NextYearEstimates;
  label: string;
}) {
  return (
    <div className="static-box w-[32%] 2xl:w-[48%]">
      <div className="heading-otr flex-wrap mb-[8px] flex items-end">
        <h3
          className={`heading-h3 line-clamp-1 break-all text-primary-dark 4xl:text-[18px] 4xl:leading-[24px] ${
            fallback ? "blur-sm" : ""
          }`}
        >
          ${convertToInternationalCurrencySystem(nextYearEstimates?.[name])}
        </h3>
        <a href="" className="heading-S flex items-center text-green-default">
          <UpDownIcon
            value={
              nextYearEstimates?.[
                (name + "ChangePercent") as keyof NextYearEstimates
              ]
            }
          />
          <span className="4xl:text-[13px] 4xl:leading-[20px] flex-1">
            <span
              style={{
                color:
                  Number(
                    nextYearEstimates?.[
                      (name + "ChangePercent") as keyof NextYearEstimates
                    ]
                  ) > 0
                    ? "green"
                    : "red",
              }}
            >
              {Number(
                nextYearEstimates?.[
                  (name + "ChangePercent") as keyof NextYearEstimates
                ]
              ).toFixed(0)}
              %
            </span>
          </span>
        </a>
      </div>
      <p className="heading-XS text-primary-dark2 3xl:text-xs">
        {nextYearEstimates ? nextYearEstimates?.date?.split("-")[0] : ""}-
        {label}
      </p>
    </div>
  );
}
