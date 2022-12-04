import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/AAPL?exchangeName=NASDAQ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default Home;
