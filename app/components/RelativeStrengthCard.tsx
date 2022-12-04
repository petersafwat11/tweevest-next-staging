import React from "react";
import Image from "next/image";
import { RelativeStrengthChart } from "./RelativeStrengthChart";
import { RelativeStrengthVsSector } from "@tweevest/types";
import { ApiService } from "../../utils";

interface Props {
  symbol: string;
}

export default async function ServerRelativeStrengthCard({ symbol }: Props) {
  const data = await ApiService.relativeStrengthVsSector(symbol);
  return <RelativeStrengthCard symbol={symbol} data={data} />;
}

interface RelativeStrengthCardProps {
  symbol: string;
  data?: RelativeStrengthVsSector;
  fallback?: boolean;
}

export const RelativeStrengthCard = ({
  data,
  fallback,
  symbol,
}: RelativeStrengthCardProps) => {
  const stock = data?.values.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );
  const sector = data?.sectorAvg.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );
  const topRsInSector = data?.topRsInSector;
  return (
    <>
      <div className="LineChart-box-otr">
        <div className="LineChart-box-inr px-[32px] pt-[32px] pb-[40px]">
          <div className="chart-text-otr mb-[32px]">
            <div className="chart-heading-inr flex items-center justify-between gap-[12px]">
              <p className="heading-SB text-primary-dark flex items-center">
                Relative Strengh
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
              <div className="stock-sector-otr flex items-center gap-[12px]">
                <p className="heading-XXSB text-primary-dark flex items-center">
                  <span className="w-[24px] h-[8px] border-[1px] border-[#FFC221] bg-[#FFC221] rounded-[50px] mr-[6px]" />
                  {symbol}
                </p>
                <p className="heading-XXSB text-primary-dark flex items-center">
                  <span className="w-[24px] h-[8px] border-[1px] border-[#00C2FF] bg-[#00C2FF] rounded-[50px] mr-[6px]" />
                  Sector
                </p>
              </div>
            </div>
            <div className="chart-otr mt-[32px] mb-[8px]">
              <RelativeStrengthChart
                stock={stock}
                sector={sector}
                symbol={symbol}
              />
            </div>
            <p className="heading-XS text-primary-dark2 text-center">
              Showing graph for last 7 days.
            </p>
          </div>
          <p className="heading-SB text-primary-dark">Top 5 RS in Group</p>
          <table className="table-main w-[100%] mb-[32px] mt-[24px]">
            <thead>
              <tr>
                <th scope="col" className="w-[90px]">
                  <div className="head-text-otr pr-[8px] py-[5px]">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="Symbol"
                    >
                      Symbol
                    </p>
                  </div>
                </th>
                <th scope="col">
                  <div className="head-text-otr pr-[8px] py-[5px]">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="Company"
                    >
                      Company
                    </p>
                  </div>
                </th>
                <th scope="col" className="w-[50px]">
                  <div className="head-text-otr pr-[8px] py-[5px]">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="RS"
                    >
                      RS
                    </p>
                  </div>
                </th>
                <th scope="col" className="w-[90px]">
                  <div className="head-text-otr pr-[8px] py-[5px]">
                    <p
                      className="heading-XSB head-text text-primary-dark text-center"
                      title="5-Day Perf."
                    >
                      5-Day Perf.
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {fallback &&
                [1, 2, 3, 4, 5].map((x) => (
                  <RsRow
                    fallback={true}
                    element={{
                      companyName: "Xxxxxx Yyyyyy",
                      symbol: "XYZ",
                      value: 0,
                      "5D": 10,
                    }}
                    key={x}
                  />
                ))}
              {topRsInSector?.map((element) => {
                return <RsRow element={element} key={element.symbol} />;
              })}
            </tbody>
          </table>
          <p className="heading-MB text-primary-dark">
            What is RS and how to use it?
          </p>
        </div>
      </div>
    </>
  );
};

type TopRsEntry = RelativeStrengthVsSector["topRsInSector"][0];

interface RsRowProps {
  element: TopRsEntry;
  fallback?: boolean;
}

function RsRow({ element, fallback }: RsRowProps) {
  return (
    <tr className={fallback ? "blur-sm" : ""}>
      <td scope="col">
        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
          <p
            className="heading-XS text-primary-dark2 body-text text-left"
            title={`${element.symbol}`}
          >
            {element.symbol}
          </p>
        </div>
      </td>
      <td scope="col">
        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
          <p
            className="heading-XS text-primary-dark2 body-text text-left"
            title={element.companyName}
          >
            {element.companyName}
          </p>
        </div>
      </td>
      <td scope="col">
        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
          <p
            className="heading-XS text-primary-dark2 body-text text-left"
            title={element.value.toString()}
          >
            {element.value}
          </p>
        </div>
      </td>
      <td scope="col">
        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
          <p
            className="heading-XS text-primary-dark2 body-text text-center"
            title={element["5D"]?.toString()}
          >
            {element["5D"]}%
          </p>
        </div>
      </td>
    </tr>
  );
}
