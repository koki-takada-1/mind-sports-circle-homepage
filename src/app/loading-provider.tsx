"use client";

import Loading from "@/app/loading";
import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext<{
  setLoading: (loading: boolean) => void;
}>({
  setLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (loading) {
      setShouldRender(true);
    } else {
      // 最低1秒は表示する
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    // 初期ローディングを1.6秒後に解除
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {shouldRender && <Loading />}
      <div className={shouldRender ? "hidden" : ""}>{children}</div>
    </LoadingContext.Provider>
  );
}
