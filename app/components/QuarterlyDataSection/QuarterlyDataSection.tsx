"use client";

import { QuarterlyDataSet } from "@tweevest/types";
import Image from "next/image";
import { FundamentalBox } from "../../../components";
import { QuarterlyDataChart } from "../../../components/ChartComponent3/QuarterlyDataChart";
import React, { useState, useCallback } from "react";

interface QuarterlyDataCardProps {
  data?: QuarterlyDataSet;
  fallback?: boolean;
}

export function QuarterlyDataSection({
  data,
  fallback,
}: QuarterlyDataCardProps) {
  if (fallback) {
    // TODO
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedGraph, setSelectedGraph] = useState("Earnings Growth");
  // selectedGraph==='Earnings Growth' && epsAdjusted, "Sales Growth"&&revenue, "Return on Equity"&& roe, "Institutionnal Ownership"?institutionalOwnership,"Net Margin" &&grossProfitMargin,"EV/sales"&&evToSales
  const insOwnership = [
    "epsAdjusted",
    "revenue",
    "roe",
    "institutionalOwnership",
    "eps",
    "grossProfitMargin",
    "evToSales",
  ];
  let lineData = data?.[insOwnership[0] as keyof typeof data];
  const changeLineData=useCallback(()=>{
    if(selectedGraph==='Earnings Growth'){
      lineData = data?.[insOwnership[0] as keyof typeof data]
    }
    if(selectedGraph==='Sales Growth'){
      lineData = data?.[insOwnership[1] as keyof typeof data]
    }
    if(selectedGraph==='Return on Equity'){
      lineData = data?.[insOwnership[2] as keyof typeof data]
    }
    if(selectedGraph==='Institutionnal Ownership'){
      lineData = data?.[insOwnership[3] as keyof typeof data]
    }
    if(selectedGraph==='Net Margin'){
      lineData = data?.[insOwnership[5] as keyof typeof data]
    }
    if(selectedGraph==='EV/sales'){
      lineData = data?.[insOwnership[6] as keyof typeof data]
    }
  },[selectedGraph])
  console.log('data'+lineData);
  const [matriciesDisplayed, setMatriciesDisplayed]= useState<string[]>(["Earnings Growth", "Sales Growth", "Return on Equity", "Institutionnal Ownership"]);
  const [matriciesNotDisplayed, setMatriciesNotDisplayed]= useState<string[]>(["Net Margin" ,"EV/sales"])
  // const [valArray,setValArray] =useState<{id:number, val:string}[]>([
  //   {
  //     id: 1,
  //     val: "Earnings Growth",
  //   },
  //   {
  //     id: 2,
  //     val: "Sales Growth",
  //   },
  //   {
  //     id: 3,
  //     val: "Return on Equity",
  //   },
  //   {
  //     id: 4,
  //     val: "Institutionnal Ownership",
  //   },
  // ]);
  return (
    <div className="InstitutionnalOwnership-main px-[75px] xl:px-[15px]">
      <div className="filter-otr bg-white border-border-shade1 border-[1px] shadow-Shadow2 rounded-16 p-[16px] mb-[44px]">
        <ul className="filter-ul flex items-center flex-wrap gap-[16px]">
         
          {matriciesDisplayed.length>0&&
            matriciesDisplayed.map
           (matrix=>
          (<li className="filter-li">
            <button className="filter-btn relative flex items-center bg-grey-shade2 hover:bg-primary-light px-[16px] py-[8px] rounded-[50px] gap-[8px]">
              <p className="heading-S text-textcolor">{matrix}</p>
              <div className="flex"onClick={()=>{
                setMatriciesNotDisplayed(matriciesNotDisplayed.concat(matrix));
                setMatriciesDisplayed((prev)=>{
                return prev.filter(i=> i!==matrix);
                
              })}} >
                <Image
                  className="object-cover"
                  width="20"
                  height="20"
                  src="/svg/close-circle.svg"
                  alt="Shape"
                />
              </div>
              {/* <div className="plus-icon absolute flex">
                <Image
                  className="object-cover"
                  width="20"
                  height="20"
                  src="/svg/plus-icon.svg"
                  alt="Shape"
                />
              </div> */}
            </button>
          </li>))}
          { matriciesNotDisplayed.length>0&&
          <li className="filter-li">
            <button className="filter-btn AddFilter relative flex items-center bg-primary-light hover:bg-primary-light px-[16px] py-[8px] rounded-[50px] gap-[8px]">
              <p className="heading-S text-textcolor">Add</p>
              <div className="close-icon flex">
                <Image
                  className="object-cover"
                  width="20"
                  height="20"
                  src="/svg/plus-icon.svg"
                  alt="Shape"
                />
              </div>

              <div className="drop-down-otr absolute top-[70px] left-0 pt-[24px] z-[999] sm:left-[-45px] xs:left-[-16px]">
                <ul className="drop-down-ul w-[220px] bg-white border-[1px] border-border-shade1 rounded-8 overflow-hidden shadow-Shadow2 sm:w-[160px]">
                  
                  {matriciesNotDisplayed.map(matrix=>
                  (<li className="drop-down-li text-left flex" onClick={()=>{
                setMatriciesDisplayed(matriciesDisplayed.concat(matrix));
                setMatriciesNotDisplayed((prev)=>{
                return prev.filter(i=> i!==matrix)})
              }}>
                    <span
                      className="drop-down-a heading-S p-[16px] text-primary-dark w-[100%] bg-white hover:bg-primary-default hover:text-white"
                    >
                      {matrix}
                    </span>
                  </li>))}
                </ul>
              </div>
            </button>
          </li>}
        </ul>
      </div>
      <div className="chart-row flex items-center gap-[30px] lg:flex-col">
        <div className="Institutionnal-data-otr w-[50%] lg:w-[100%]">
          {matriciesDisplayed.map((value, index) => {
            return (
              <div
                key={index}
                className={`Fundamentals-otr space-y-10`}
              >
                <div className="Fundamentals-heading-otr flex items-center justify-between mb-[24px] gap-[16px] sm:flex-col sm:items-start">
                  <div className="Fundamentals-heading-inr flex-1 flex items-center gap-[16px]">
                    <p className="heading-SB text-primary-dark flex items-center">
                      {value}
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
                    {value ==='Earnings Growth'||value=='Sales Growth' && (
                      <>
                        <p className="heading-XXSB text-primary-dark flex items-center">
                          <span className="w-[24px] h-[8px] border-[1px] border-border-shade2 bg-grey-shade1 rounded-[50px] mr-[6px]" />
                          Current
                        </p>
                        <p className="heading-XXSB text-primary-dark flex items-center">
                          <span className="w-[24px] h-[8px] border-[1px] border-primary-light bg-primary-light2 rounded-[50px] mr-[6px]" />
                          Estimates
                        </p>
                      </>
                    )}
                  </div>
                  <button className="Show-Graph relative flex items-center bg-grey-shade1 hover:bg-primary-default p-[8px] rounded-8 gap-[8px]">
                    <div className="graph-icon1 flex">
                      <Image
                        className="object-cover"
                        width="20"
                        height="20"
                        src="/svg/show-graph-icon.svg"
                        alt="Shape"
                      />
                    </div>
                    <div className="graph-icon2 absolute flex">
                      <Image
                        className="object-cover"
                        width="20"
                        height="20"
                        src="/svg/show-graph-icon-white.svg"
                        alt="Shape"
                      />
                    </div>
                    <div
                      onClick={() => {
                        setSelectedGraph(value);
                        // setLineData(data[insOwnership[index]]);
                      }}
                    >
                      <p className="heading-S text-primary-dark">Show Graph</p>
                    </div>
                  </button>
                </div>
                <div className="Fundamentals-boxes-otr flex items-center flex-wrap gap-[12px]">
                  {data && (
                    <FundamentalBox
                      boxData={
                        insOwnership[index] == "roe"
                          ? data?.[
                              insOwnership[index] as keyof typeof data
                            ]?.slice(0, 8)
                          : insOwnership[index] == "institutionalOwnership"
                          ? data?.[
                              insOwnership[index] as keyof typeof data
                            ]?.slice(0, 8)
                          : data?.[insOwnership[index] as keyof typeof data]
                      }
                      group={value}
                      dataType={insOwnership[index]}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="Institutionnal-chart-otr w-[50%] lg:w-[100%]">
          <div className="Institutionnal-chart pt-[24px] pr-[24px] pb-[32px] pl-[24px] bg-white border-[1px] border-border-shade1 rounded-16 sm:pl-[0px] sm:pr-[0px] sm:pb-[16px]">
            <h4 className="heading heading-LB text-primary-dark sm:pl-[16px] sm:pr-[16px]">
              {selectedGraph}
            </h4>
            <div className="chart-otr w-[100%] h-[600px] mt-[52px] lg:h-[400px] sm:h-[350px] sm:mt-[24px]">
              {(selectedGraph==='Earnings Growth')&&
                <QuarterlyDataChart boxData={data?.[insOwnership[0] as keyof typeof data].slice(0, 6)} />
                }
              {(selectedGraph==='Sales Growth')&&
                <QuarterlyDataChart boxData={data?.[insOwnership[1] as keyof typeof data].slice(0, 6)} />
                }
              {(selectedGraph==='Return on Equity')&&
                <QuarterlyDataChart boxData={data?.[insOwnership[2] as keyof typeof data].slice(0, 6)} />
                }
              {(selectedGraph==='Institutionnal Ownership')&&
                <QuarterlyDataChart boxData={data?.[insOwnership[3] as keyof typeof data].slice(0, 6)} />
                }
              {(selectedGraph==='Net Margin')&&
                <QuarterlyDataChart boxData={data?.[insOwnership[5] as keyof typeof data].slice(0, 6)} />
                }
              {(selectedGraph==='EV/sales')&&
                <QuarterlyDataChart boxData={data?.[insOwnership[6] as keyof typeof data].slice(0, 6)} />
                }
              {/* <QuarterlyDataChart 
              
              boxData={
        
    
    (selectedGraph==='EV/sales')&&
      data?.[insOwnership[6] as keyof typeof data].slice(0, 6);
                // lineData?.slice(0, 6)
                } /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
