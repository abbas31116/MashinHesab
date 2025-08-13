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

  function handleAmal() {
    switch (amal) {
      case "*":
        setResult(adad1 ?? 1 * adad2!);
        setAdad1(null);
        setAdad2(null);
        break;
      case "/":
        setResult(adad1! / adad2!);
        setAdad1(null);
        setAdad2(null);
        break;

      default:
        break;
    }
  }

  return (
    <div className="shadow-xl shadow-blue-800 w-150 h-150 ml-180 mt-50 ">
      <div>
        <p>={result}</p>
        <p>
          {adad1} {amal} {adad2}
        </p>
      </div>
      <div>
        <CustomButton1
          title={"X"}
          onClick={() => {
            setAmal("*");
          }}
        />
        <CustomButton1
          title={"="}
          onClick={() => {
            handleAmal();
          }}
        />
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
          }}
        />
      </div>
    </div>
  );
}
