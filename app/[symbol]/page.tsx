import { Header } from "../components/Header";
import { Cta } from "../components/Cta";
import { TabsComponent } from "../components/TabsComponent";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { QuarterlyDataSection } from "../components/QuarterlyDataSection/QuarterlyDataSection";
import LastNews from "../components/LastNews";

const DynamicQuarterlyCard = dynamic(
  // @ts-ignore
  () => import("../components/QuarterlyDataSection"),
  {
    suspense: true,
  }
);

const Home = ({
  params,
  searchParams,
}: {
  params: { symbol: string };
  searchParams: { exchangeName: string; name: string; image: string };
}) => {
  const symbol = params.symbol;
  const { exchangeName: exchange, name, image } = searchParams;

  return (
    <div>
      <Header />
      <TabsComponent
        symbol={symbol}
        exchange={exchange}
        name={name}
        image={image}
      />
      <Suspense fallback={<QuarterlyDataSection fallback={true} />}>
        <DynamicQuarterlyCard symbol={symbol} />
      </Suspense>
      <LastNews/>
      <div className="cta-footer-main relative">
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
