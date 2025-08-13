// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Divide, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import { CustomButton1 } from "~/component/componentButton";
import ListComponent from "~/component/list";

export default function Home() {
  const [data, setdata] = useState<(string | number)[]>([]);
  const [result, setResult] = useState(0);
  const [adad1, setAdad1] = useState<number | null>(null);
  const [adad2, setAdad2] = useState<number | null>(null);
  const [amal, setAmal] = useState<string | null>(null);

  function handleClick(num: number) {
    if (adad1 == null) {
      setAdad1(num);
    } else {
      setAdad2(num);
    }
  }
  function deletAdad() {
    if (adad2 == null) {
      setAdad1(null);
    } else {
      setAdad2(null);
    }
  }

  function handleAmal() {
    switch (amal) {
      case "*":
        setResult((adad1 ?? 1) * adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("");
        break;
      case "/":
        setResult(adad1! / adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("");
        break;
      case "+":
        setResult(adad1! + adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("");
        break;
      case "-":
        setResult(adad1! - adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("");
        break;
      case "|":
        setResult(adad1! % adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("");
        break;
    }
  }

  return (
    <div className=" place-content-center place-items-center">
      <div className="h-35">
        <p>={result}</p>
        <p>
          {adad1} {amal} {adad2}
        </p>
        <div className="flex items-center gap-2">
          {data.map((item, index) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4">
          <CustomButton1
            title={"Ac"}
            variant="secondary"
            onClick={() => {
              setAmal("Ac");
              setResult(0);
              setAdad1(null);
              setAdad2(null);
              setAmal("");
            }}
          />
          <CustomButton1
            title={"D"}
            variant="secondary"
            onClick={() => {
              deletAdad();
            }}
          />
          <CustomButton1
            title={"|"}
            variant="secondary"
            onClick={() => {
              setAmal("|");
              setdata([...data, "|"]);
            }}
          />
          <CustomButton1
            title={"/"}
            variant="secondary"
            onClick={() => {
              setAmal("/");
              setdata([...data, "/"]);
            }}
          />
        </div>
        <div className="float-right grid grid-rows-4">
          <CustomButton1
            title={"X"}
            variant="secondary"
            onClick={() => {
              setAmal("*");
              setdata([...data, "*"]);
            }}
          />
          <CustomButton1
            title={"+"}
            variant="secondary"
            onClick={() => {
              setdata([...data, "+"]);
              setAmal("/");
            }}
          />
          <CustomButton1
            title={"-"}
            variant="secondary"
            onClick={() => {
              setdata([...data, "-"]);
              setAmal("-");
            }}
          />

          <CustomButton1
            title={"="}
            variant="secondary"
            onClick={() => {
              setdata([...data, "="]);
              handleAmal();
            }}
          />
        </div>
        <div className="grid grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
            <CustomButton1
              key={item}
              title={item.toString()}
              className={item == 0 ? "col-span-3" : ""}
              onClick={() => {
                setdata([...data, item]);
                handleClick(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
