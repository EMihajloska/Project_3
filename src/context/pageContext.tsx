import { createContext, useEffect, useState } from "react";
import { CookType } from "../types/types";
import { useParams } from "react-router-dom";

type ContextData = { cooks: CookType[] };

type Props = {
  children: React.ReactNode;
};

export const Context = createContext({} as ContextData);

export const Provider = ({ children }: Props) => {
  const [cooks, setCooks] = useState<CookType[]>([]);
  const { singleCook } = useParams();
  console.log(singleCook);

  
  // http://localhost:5001/cookData
  useEffect(() => {
    fetch("https://fancy-savory-casquette.glitch.me/cookData")
      .then((res) => res.json())
      .then((data) => setCooks(data));
  }, []);
  console.log(cooks);

  // SEARCH

  // const [renderedCooks, setRenderedCooks] = useState<CookType[]>();

  // const filterBySearch = (value: string) => {
  //   const filteredCooksBySearch = cooks.filter(cook =>
  //     cook.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setRenderedCooks(filteredCooksBySearch);
  // };

  const contextDataObj = {
    cooks,
    // filterBySearch,
  };

  return <Context.Provider value={contextDataObj}>{children}</Context.Provider>;
};
