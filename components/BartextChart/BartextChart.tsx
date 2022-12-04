import React from "react";

type BarChartProps = {
  value: string;
  text: string;
  color: string;
};
export const BartextChart = ({ value, text, color }: BarChartProps) => {
  // console.log("nio: ", color);
  //   value = value + "%";
  // console.log("valye :", value);
  // const customcss = `line-text-otr w-[${value}] linechart-bg-${color} rounded-r-[50px] mb-[32px]`;
  if (value) {
    return (
      <>
        <div
          style={{ height:'24px' ,width: `${value}%` }}
          className={`relative line-text-otr lineChart1 ${color} rounded-r-[50px] mb-[32px]`}
        >
         
         <p className="line-text heading-XS text-right text-white px-[8px] py-[2px]">
               {(Number(value)>22)? text+'x' :
         <span style={{marginLeft:'8px' ,minWidth: '100px' , textAlign: 'center',
    marginTop: '-3px',
    fontSize: '13px'}} className="absolute left-[100%] top-0 heading-XS text-gray-400 rounded-8 bg-gray-200 p-[2px] py-[5px] w-auto">
            { text}x
          </span>  
          }
          </p>  
        
        </div>
      </>
    );
  } else {
    return <div />;
  }
};
