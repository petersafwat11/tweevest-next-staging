import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { RelativeStrengthCard } from "../RelativeStrengthCard";
import { ForecastCard } from "../ForecastCard";
import { SliderComponent } from "../SliderComponent/SliderComponent";
import { FundamentalsCard } from "../FundamentalsCard";
import { createChart } from 'lightweight-charts';


const DynamicSlider = dynamic(
  // @ts-ignore
  () => import("../SliderComponent/SliderComponent"),
  {
    suspense: true,
  }
);

const DynamicFundamentals = dynamic(
  // @ts-ignore
  () => import("../FundamentalsCard"),
  {
    suspense: true,
  }
);

const DynamicRelativeStrength = dynamic(
  // @ts-ignore
  () => import("../RelativeStrengthCard"),
  {
    suspense: true,
  }
);

const DynamicForecast = dynamic(
  // @ts-ignore
  () => import("../ForecastCard"),
  {
    suspense: true,
  }
);

interface Props {
  symbol: string;
  exchange: string;
  name: string;
  image?: string;
}

export const TabsComponent = ({ symbol, exchange, name, image }: Props) => {
//   const chart = createChart( document.getElementById('customizedChart') as HTMLElement);
//   const areaSeries = chart.addAreaSeries();
//   const volumeSeries = chart.addHistogramSeries({
//     priceFormat: {
//         type: 'volume',
//     },
//     priceScaleId: '', // set as an overlay by setting a blank priceScaleId
//     // set the positioning of the volume series
//     scaleMargins: {
//         top: 0.7, // highest point of the series will be 70% away from the top
//         bottom: 0,
//     },
//   });
// volumeSeries.setData([
// 	{ time: '2018-10-19', value: 19103293.00, color: '#26a69a' },
// ]);

//   areaSeries.setData([
//     { time: '2018-12-22', value: 32.51 },
//     { time: '2018-12-23', value: 31.11 },
//     { time: '2018-12-24', value: 27.02 },
//     { time: '2018-12-25', value: 27.32 },
//     { time: '2018-12-26', value: 25.17 },
//     { time: '2018-12-27', value: 28.89 },
//     { time: '2018-12-28', value: 25.46 },
//     { time: '2018-12-29', value: 23.92 },
//     { time: '2018-12-30', value: 22.68 },
//     { time: '2018-12-31', value: 22.67 },
// ]);
// chart.timeScale().fitContent();

  return (
    <div className="TabsComponent-main mb-[96px]">
      <div className="TabsComponent-row flex gap-[20px] p-[25px] 2xl:flex-wrap xl:px-[15px]">
        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
          {/*@ts-ignore*/}
          {/* <div id="customizedChart">

          </div> */}
          <Suspense
            fallback={
              <SliderComponent
                symbol={symbol}
                exchange={exchange}
                name={name}
                image={image}
                fallback={true}
              />
            }
          >
            <DynamicSlider
              symbol={symbol}
              exchange={exchange}
              name={name}
              image={image}
            />
          </Suspense>
        </div>
        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
          <Suspense
            fallback={<FundamentalsCard symbol={symbol} fallback={true} />}
          >
            <DynamicFundamentals symbol={symbol} />
          </Suspense>
        </div>
        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
          <Suspense
            fallback={<RelativeStrengthCard fallback={true} symbol={symbol} />}
          >
            <DynamicRelativeStrength symbol={symbol} />
          </Suspense>
        </div>
        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
          <Suspense fallback={<ForecastCard fallback={true} />}>
            <DynamicForecast symbol={symbol} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
