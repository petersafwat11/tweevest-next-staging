import dynamic from "next/dynamic";

export const Chart1 = dynamic(
  () =>
    import("../app/components/RelativeStrengthChart").then(
      (module) => module.RelativeStrengthChart
    ),
  { ssr: false }
);
export const QuarterlyDataChart = dynamic(
  () =>
    import("./ChartComponent3/QuarterlyDataChart").then(
      (module) => module.QuarterlyDataChart
    ),
  { ssr: false }
);

export { FundamentalBox } from "./FundamentalBox/FundamentalBox";
export { SliderComponent } from "../app/components/SliderComponent/SliderComponent";
export { Header } from "../app/components/Header";
export { Cta } from "../app/components/Cta";
export { Footer } from "../app/components/Footer";

export { SearchInput } from "./SearchInput/SearchInput";
export { BartextChart } from "./BartextChart/BartextChart";
export { BartextChart2 } from "./BartextChart2/BartextChart2";
