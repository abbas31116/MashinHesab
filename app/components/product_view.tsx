import { useEffect, useState } from "react";

interface IProductDetail {
  changeCounter: (num: number) => void;
  newCounter: number;
}

export default function ProductDetail({
  changeCounter,
  newCounter,
}: IProductDetail) {
  useEffect(() => {
    console.log("component render");

    return () => {
      console.log("component removed");
    };
  }, []);

  useEffect(() => {
    console.log("counter updated ,counter:", newCounter);
  }, [newCounter]);

  return (
    <div className="space-y-5">
      Product Detail
      <button
        className="block bg-amber-100"
        onClick={() => changeCounter(newCounter + 1)}
      >
        add counter
      </button>
    </div>
  );
}
