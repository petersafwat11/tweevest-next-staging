// import { Carousel } from "antd";
import Image from "next/image";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { ApiService } from "../../../utils";
import React, { useState } from "react";
import ArrowGreen from '/public/svg/arrow-green.svg'
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

interface Props {
  symbol: string;
  name: string;
  exchange: string;
  image?: string;
}

async function getData(symbol: string, exchange: string) {
  return Promise.all([
    ApiService.liveQuote(symbol),
    ApiService.priceChange(symbol),
    ApiService.exchangeStatus(exchange),
    ApiService.prePostMarket(symbol),
    ApiService.companyProfile(symbol),
  ]);
}

export default async function ServerSliderComponent({
  symbol,
  exchange,
  name,
  image,
}: Props) {
  const [
    liveQuote,
    priceChange,
    exchangeStatus,
    prePostMarketQuote,
    companyProfile,
  ] = await getData(symbol, exchange);
  return (
    <SliderComponent
      symbol={symbol}
      name={name}
      image={image}
      exchange={exchange}
      liveQuote={liveQuote}
      priceChange={priceChange}
      exchangeStatus={exchangeStatus}
      prePostMarketQuote={prePostMarketQuote}
      currency={companyProfile.currency}
    />
  );
}

interface SlideProps {
  symbol: string;
  name: string;
  image?: string;
  exchange: string;
  liveQuote?: any;
  priceChange?: any;
  exchangeStatus?: any;
  prePostMarketQuote?: any;
  currency?: string;
  fallback?: boolean;
}

export function SliderComponent({
  symbol,
  exchange,
  name,
  image,
  liveQuote = {},
  priceChange = {},
  exchangeStatus = {},
  prePostMarketQuote = {},
  currency,
  fallback,
}: SlideProps) {
  var current_time_est = dayjs().tz("EST").format("hh:mm:ss a");
  console.log(" ", current_time_est);

  var startTime: any;
  var endTime: any;
  startTime = 4 * 3600;
  endTime = 9 * 3600;
  var curr: any;
  curr = Number(current_time_est.toString().split(":")[0]) * 3600;
  const performanceList = ["5D", "1M", "3M", "6M", "ytd", "1Y"];
  const textColor = Number(liveQuote.changesPercentage) < 0 ? "red" : "green";

  const MarketClosedDate = dayjs
    .unix(fallback ? new Date().valueOf() : liveQuote.timestamp)
    .format("dddd, MMMM Do YYYY, h:mm:ss a");

  const PreMarketClosedDate = dayjs
    .unix(fallback ? new Date().valueOf() : prePostMarketQuote.timestamp)
    .format("dddd, MMMM Do YYYY, h:mm:ss a");
    // const [preTime, setPReTime]= useState<boolean>(false);
    // const [afterTime, setAfterTime]= useState<boolean>(false);
    // React.useEffect(()=>{
    //   setPReTime(true);
    //   setAfterTime(true);
    // },[setPReTime, setAfterTime])
  return (
    <div className="bg-white px-[32px] pt-[32px] pb-[40px]">
      <div className="heading-icon-otr flex items-center gap-[18px] pb-[12px] border-b-[1px] border-b-border-shade1">
        <div className="apple-img-otr w-[80px] h-[80px] rounded-[100%] flex items-center justify-center bg-white shadow-Shadow2">
          <Image
            className="object-contain"
            width="40"
            height="40"
            src={image || ""}
            alt="Shape"
          />
        </div>
        <div className="apple-content-otr">
          <h3 className="heading heading-h3 text-primary-dark mb-[8px]">
            {name}
          </h3>
          <div className="country-text-otr flex items-end gap-[12px]">
            <p className="country-text heading-S text-primary-dark2">
              {symbol}
            </p>
            <p className="country-text heading-S flex items-center text-primary-dark2">
              <span className="img-otr flex mr-[6px]">
                <Image
                  className="object-contain"
                  width="16"
                  height="12"
                  src="/america-icon.png"
                  alt="Shape"
                />
              </span>
              {exchange}
            </p>
          </div>
        </div>
      </div>
      <div className="usd-price-otr pt-[12px]">
        <div className="heading-otr flex items-end gap-[16px] mb-[8px]">
          <h3
            className={`heading heading-h3 text-primary-dark ${
              fallback ? "bg-gray-200 animate-pulse rounded-md w-32" : ""
            }`}
          >
            {fallback && <span>&nbsp;</span>}
            {!fallback && (
              <>
                {Number(liveQuote.price).toFixed(2)}
                <span className="heading-S ml-[4px]">
                  {currency?.toUpperCase() || "USD"}
                </span>
              </>
            )}
          </h3>
          <a href="" className="heading-S flex items-center text-red-default">
            {Number(liveQuote.changesPercentage) < 0 && (
              <Image
                className="object-cover"
                width="16"
                height="16"
                src="/svg/arrow-left-down.svg"
                alt="Shape"
              />
            )}
            {Number(liveQuote.changesPercentage) > 0 && (
              <Image
                className="object-cover"
                width="16"
                height="16"
                src="/svg/arrow-right-up.svg"
                alt="Shape"
              />
            )}
            <span style={{ color: textColor }}>
              {fallback ? "X.XX" : Number(liveQuote.change).toFixed(2)}
            </span>
            &nbsp;
            <span style={{ color: textColor }}>
              ({" "}
              {fallback
                ? "X.XX"
                : Number(liveQuote.changesPercentage).toFixed(2)}
              %)
            </span>
          </a>
        </div>
        <div >
          {/* {preTime&&  */}
          <div className="flex items-center font-semibod text-[14px] leading-5 font-gilmer ">
            <Image src='/sun-fog.png'
            width="18"
            height="18"
            alt='sun-fog'/>
            <span className=" ml-[5px] mr-[9px] text-[14px] leading-5 font-gilmer">Pre-market  149.89$</span>
            <Image
                  className="object-contain"
                  width="16"
                  height="16"
                  src="/svg/arrow-left-down.svg"
                  alt="arrow-left-down"
                />
              {/* <Image src={ArrowGreen} width={5} height={5} alt='moon'/> */}
              <span className="ml-1 text-[14px] leading-5 font-gilmer text-[#EB5757]">1.14 (0.74%)</span>
          </div>
           {/* }         
          {afterTime&&  */}
          <div className="flex items-center font-semibod text-[14px] leading-5 font-gilmer ">
            <Image src='/moon.png'
            width="18"
            height="18"
            alt='moon'/>
            <span className=" ml-[5px] mr-[9px] text-[14px] leading-5 font-gilmer">After-hours  149.89$</span>
            <Image
                  className="object-contain"
                  width="16"
                  height="16"
                  src="/svg/arrow-left-down.svg"
                  alt="arrow-left-down"
                />
              {/* <Image src={ArrowGreen} width={5} height={5} alt='moon'/> */}
              <span className="ml-1 text-[14px] leading-5 font-gilmer text-[#EB5757]">1.14 (0.74%)</span>
          </div>
          {/* } */}
          <div className="flex items-center">
             <Image
                  className="object-contain"
                  width="18"
                  height="18"
                  src="/Ellipse10.png"
                  alt="Ellipse10"
                />
           <span className="ml-[5px] text-[14px] leading-5 font-gilmer ">Market Open (as of Jul 25, 19:59 EDT)</span> 
          </div>
        </div>
        {/* <p className="heading-S text-primary-dark">
          Market {fallback ? "Closed" : exchangeStatus.marketStatus} (as{" "}
          {MarketClosedDate} EDT)
        </p>

        {current_time_est.toString().split(" ")[1] === "pm" &&
          startTime >= curr &&
          curr <= endTime && (
            <>
              <div className="heading-otr flex items-end gap-[10px] my-[4px]">
                <h3 className="heading heading-h3 text-primary-dark">
                  {Number(prePostMarketQuote.bid).toFixed(2)}
                  <span className="heading-S ml-[4px]">USD</span>
                </h3>
                <a
                  href=""
                  className="heading-S flex items-center text-red-default"
                >
                  {Number(exchangeStatus.changesPercentage) < 0 && (
                    <Image
                      className="object-cover"
                      width="16"
                      height="16"
                      src="/svg/arrow-left-down.svg"
                      alt="Shape"
                    />
                  )}
                  {Number(exchangeStatus.changesPercentage) > 0 && (
                    <Image
                      className="object-cover"
                      width="16"
                      height="16"
                      src="/svg/arrow-right-up.svg"
                      alt="Shape"
                    />
                  )}
                  <span style={{ color: textColor }}>
                    {Number(prePostMarketQuote.change).toFixed(2)}{" "}
                  </span>
                  &nbsp;
                  <span style={{ color: textColor }}>
                    ({Number(prePostMarketQuote.changesPercentage).toFixed(2)}%)
                  </span>
                </a>
              </div>
              <p className="heading-XS text-primary-dark">
                Pre-Market: {PreMarketClosedDate} EDT
              </p>
            </>
          )} */}
      </div>

      <div className="performance-otr py-[40px] border-b-[1px] border-b-border-shade1">
        <p className="Performance-heading heading-SB text-primary-dark mb-[16px]">
          Performance
        </p>

        <div className="performance-box-otr flex flex-wrap gap-[12px]">
          {performanceList?.map((element) => {
            return (
              <div
                key={element}
                className={`performance-box ${fallback ? "blur-xs" : ""} ${
                  Number(priceChange[element]) > 0
                    ? "bg-green-light"
                    : "bg-red-light"
                }   p-[8px] rounded-8 w-[30.5%] 2xl:w-[30%]`}
              >
                <p
                  className={`performance-box-text heading-SB ${
                    Number(priceChange[element]) > 0
                      ? "text-green-default"
                      : "text-red-default"
                  } text-center mb-[4px]`}
                >
                  {fallback ? "5.55" : priceChange[element]?.toFixed(2)}%
                </p>
                <p className="heading-XXS text-primary-dark2 text-center">
                  {element}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/*<Carousel afterChange={onChange} autoplay>*/}
      <div>
        <div className="Slide-box-otr">
          <div className="Slide-box-inr">
            <div className="stock-otr py-[40px]">
              <p className="stock-heading heading-SB text-primary-dark flex items-center mb-[16px]">
                Stock infos
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
              <ul className="stock-ul">
                <li className="stock-li flex items-center justify-between">
                  <p className="stock-p heading-S text-primary-dark2">
                    Market Cap
                  </p>
                  <p className="stock-p heading-S text-primary-dark2">1.8T</p>
                </li>
                <li className="stock-li flex items-center justify-between">
                  <p className="stock-p heading-S text-primary-dark2">
                    Shares outstanding
                  </p>
                  <p className="stock-p heading-S text-primary-dark2">365M</p>
                </li>
                <li className="stock-li flex items-center justify-between">
                  <p className="stock-p heading-S text-primary-dark2">
                    Share in Float
                  </p>
                  <p className="stock-p heading-S text-primary-dark2">450M</p>
                </li>
                <li className="stock-li flex items-center justify-between">
                  <p className="stock-p heading-S text-primary-dark2">
                    Price Target
                  </p>
                  <p className="stock-p heading-S text-primary-dark2">$190</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*</Carousel>*/}
    </div>
  );
}
