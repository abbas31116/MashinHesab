// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Divide, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import { CustomButton1 } from "~/component/componentButton";
import ListComponent from "~/component/list";

export default function Home() {
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
        setResult(adad1! * adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("")
        break;
      case "/":
        setResult(adad1! / adad2!);
        setAdad1(null);
        setAdad2(null);
        setAmal("")
        break;
      case "+":
        setResult(adad1! + adad2!)
        setAdad1(null);
        setAdad2(null);
        setAmal("")
        break;
      case "-":
        setResult(adad1! - adad2!)
        setAdad1(null);
        setAdad2(null);
        setAmal("")
        break;
      case "|":
        setResult(adad1! % adad2!)
        setAdad1(null);
        setAdad2(null);
        setAmal("")
        break;

    }
  }

  return (
    <div className="shadow-xl shadow-blue-800 w-150 h-150 ml-180 mt-50 ">
      <div className="h-35">
        <p>={result}</p>
        <p>
          {adad1} {amal} {adad2}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-4">
          <CustomButton1
            title={"Ac"}
            variant="secondary"
            onClick={() => {
              setAmal("Ac");
              setResult(0)
              setAdad1(null);
              setAdad2(null);
              setAmal("")
            }}
          />
          <CustomButton1
            title={"D"}
            variant="secondary"
            onClick={() => {
              deletAdad()
            }}
          />
          <CustomButton1
            title={"|"}
            variant="secondary"
            onClick={() => {
              setAmal("|");
            }}
          />
          <CustomButton1
            title={"/"}
            variant="secondary"
            onClick={() => {
              setAmal("/");
            }}
          />
        </div>
        <div className="flex float-right grid grid-rows-4">
          <CustomButton1
            title={"X"}
            variant="secondary"
            onClick={() => {
              setAmal("*");
            }}
          />
          <CustomButton1
            title={"+"}
            variant="secondary"
            onClick={() => {
              setAmal("/");
            }}
          />
          <CustomButton1
            title={"-"}
            variant="secondary"
            onClick={() => {
              setAmal("-");
            }}
          />

          <CustomButton1
            title={"="}
            variant="secondary"
            onClick={() => {
              handleAmal();
            }}
          />
        </div>
        <div className="grid grid-cols-3">
          <CustomButton1
            title="1"
            onClick={() => {
              handleClick(1);
            }}
          />
          <CustomButton1
            title="2"
            onClick={() => {
              handleClick(2);
            }} />
          <CustomButton1
            title="3"
            onClick={() => {
              handleClick(3);
            }} />

          <CustomButton1
            title="4"
            onClick={() => {
              handleClick(4);
            }} />
          <CustomButton1
            title="5"
            onClick={() => {
              handleClick(5);
            }} />
          <CustomButton1
            title="6"
            onClick={() => {
              handleClick(6);
            }}
          />
          <CustomButton1
            title="7"
            onClick={() => {
              handleClick(7);
            }}
          />
          <CustomButton1
            title="8"
            onClick={() => {
              handleClick(8);
            }}
          />
          <CustomButton1
            title="9"
            onClick={() => {
              handleClick(9);
            }} />

          <CustomButton1
            title="0"
            className="col-span-3"
            onClick={() => {
              handleClick(0);
            }}
          />
        </div>
      </div>
    </div>
  );
}
