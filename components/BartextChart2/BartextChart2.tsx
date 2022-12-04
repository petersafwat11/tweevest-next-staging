import React from "react";

type BarChart2Props = {
  type: number;
  value: string;
  text: string;
};

export const BartextChart2 = ({ type, value, text }: BarChart2Props) => {
  if (value) {
    return (
      <>
        <div
          style={{ width: `${value}%` }}
          className={`line-text-otr mb-[20px] flex items-center gap-[8px]`}
        >
          <div
            className={`line-otr rounded-r-[50px] ${
              type === 1
                ? "linechart-bg-secondary-blue"
                : "linechart-bg-primary-blue"
            } w-[100%] h-[24px]`}
          ></div>
          <p className="line-text heading-XS text-right text-primary-dark2">
            {text}
          </p>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
};
