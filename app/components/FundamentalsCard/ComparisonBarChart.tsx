"use client";

import { BartextChart } from "../../../components";
import React, { useEffect, useState } from "react";
import { convertToInternationalCurrencySystem } from "../../../utils";
import { FundamentalsSnapshot } from "../../../types";
import Image from 'next/image'
const links = [
  { title: "PE", value: "pe" },
  { title: "Price To Sales", value: "priceToSales" },
  { title: "Price To Book", value: "priceToBook" },
  { title: "Revenue", value: "revenue" },
];

const colors = [
  "linechart-bg-red",
  "linechart-bg-secondary-blue",
  "linechart-bg-tertiary-yellow",
  "linechart-bg-state-success",
  "linechart-bg-primary-blue",
];

interface Props {
  data: FundamentalsSnapshot[];
}

export default function ComparisonBarChart({ data }: Props) {
  
  const [selectedValue, setSelectedValue] =
    useState<keyof FundamentalsSnapshot>("pe");
    const [showOption,setShowOption]= useState<boolean>(false)
    const [rangeValue, setRangeValue]=useState<number>(0);
    const [dashLinePosition, setDashLinePosition]=useState<number>(0);
    let x = Math.round(Number(data[0]?.[selectedValue]));
          let z:number[] =[];
          let y:number;
          let range: number;
          let symbolePosition: number;
          let newData:FundamentalsSnapshot[];
          useEffect(()=>{
          if(selectedValue==='pe'){
             z = data.slice(0,6).map(i=>(
             Number(i.pe)
            ));
          }          
          if(selectedValue==='priceToBook'){
             z = data.slice(0,6).map(i=>(
              Number(i.priceToBook)
            ))
          }          
          if(selectedValue==='priceToSales'){
             z = data.slice(0,6).map(i=>(
              Number(i.priceToSales)
            ))
          }          
          if(selectedValue==='revenue'){
           z = data.slice(0,6).map(i=>(
            Number(i.revenue)
            ))      
          }
    y = Math.max(...z)
    range =Math.round(y+y/8);
    setRangeValue(range);
    symbolePosition= Math.round((x/range)*100)
    setDashLinePosition(symbolePosition)
          // if(selectedValue==='pe'){
          //   newData= data.slice(1, 6).map(i=>(
          //     {...i,pe: Math.round((i.pe as number/range)*100) }
          //   ))         
          //  }          
          // if(selectedValue==='priceToBook'){
          //    newData= data.slice(1, 6).map(i=>(
          //     {...i,priceToBook:i.priceToBook as number/range }
          //   ))
          // }          
          // if(selectedValue==='priceToSales'){
          //    newData= data.slice(1, 6).map(i=>(
          //     {...i,priceToBook:i.priceToSales as number/range }
          //   ))
          // }          
          // if(selectedValue==='revenue'){
          //  newData= data.slice(1, 6).map(i=>(
          //     {...i,revenue:i.revenue/range }
          //   ))      
          // }
  },[selectedValue, setDashLinePosition,data])
    // console.log('test', Math.round(Number(data[0][selectedValue])))

  return (
    <div className="drop-chart-otr relative overflow-hidden">
      <div className="drop-inr flex items-center justify-end">
        <span onClick={()=>{
          setShowOption(!showOption);
        }} className="font-semibold  text-[#7e89ab] flex justify-between items-center cursor-pointer relative border border-1 border-solid border-gray-300 rounded-4 w-[130px] px-[10px] py-[5px] " >
           {selectedValue}
           <Image src='/svg/arrow-down.svg'
            width="14"
            height="14"
            alt='arrow-down'/>
           </span>
        {showOption&& <div style={{zIndex: '100'}} className="bg-white z-100 flex flex-col border-1 border border-solid  border-gray-300 rounded-8 absolute top-[34px] left-45 py-[4px] w-[160px]">
          <span onClick={()=>{
            setSelectedValue("pe" as keyof FundamentalsSnapshot);
            setShowOption(false);
          }} className=" cursor-pointer border-b-1 border border-solid w-full border-t-0  px-[6px]">PE</span>
          <span onClick={()=>{
            setSelectedValue("priceToSales" as keyof FundamentalsSnapshot);
            setShowOption(false);
          }}  className=" cursor-pointer border-b-1 border border-solid w-full  px-[6px]">Price To Sales</span>
          <span onClick={()=>{
            setSelectedValue("priceToBook" as keyof FundamentalsSnapshot);
            setShowOption(false);
          }}  className="cursor-pointer w-full  px-[6px]">Price To Book</span>
        </div>}
        {/* <select
          className="form-select appearance-none
                    block
                    w-[auto]
                    pt-[6px] pr-[32px] pb-[8px] pl-[8px]
                    border-[1px]
                    border-border-shade1
                    rounded-8
                    heading-XS
                    text-primary-dark2
                    bg-white
                    bg-clip-padding
                    bg-no-repeat
                    transition
                    ease-in-out
                    m-0
                    focus:border-[1px]
                    focus:border-border-shade1 focus:shadow-none focus:outline-none"
          aria-label="Default select example"
          onChange={(e) =>
            setSelectedValue(e.target.value as keyof FundamentalsSnapshot)
          }
        >
          {links.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select> */}
      </div>
      
      <div className="dropdown-chart-otr relative pt-[8px] pb-[8px] border-l-[1px] border-primary-dark2 mt-16" >
        <div className="drop-chart-inr relative z-10">
        <div className="absolute left-0 top-0 bg-yellow-100 h-screen" style={{width:Number(dashLinePosition)+'%'}}/>
        <div className="absolute content-otr text-center mr-[40px] mb-[16px]" style={{top:'-70px' ,left: Number(dashLinePosition)-8 +'%' }}>
          <p className="heading-MB text-primary-dark">{data[0]?.symbol}</p>
          <p className="heading-MB text-primary-dark2" >
            {convertToInternationalCurrencySystem(
              Math.round(Number(data[0]?.[selectedValue]))
            )}x
          </p>
        </div>

          <div className="line-dash absolute h-[100%] " style={{left: dashLinePosition +'%' }}/>

          {
          data.slice(1, 6).map((item, index) => (
            <BartextChart
              key={item.symbol}
              value={(Number(item[selectedValue])*100/rangeValue).toString()}
              text={`${item.symbol} ${convertToInternationalCurrencySystem(
                Math.round(Number(item[selectedValue]))
              )}
                `}
              color={colors[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
