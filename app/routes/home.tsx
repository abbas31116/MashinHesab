// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Divide, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import { CustomButton1 } from "~/component/componentButton";
import ListComponent from "~/component/list";
interface IMashinHesab {
  Adad1: number
  number1: number | null
  number2: number | null
  maghadir: string
}


export default function Home({ number1, number2 }: IMashinHesab) {
  const [Adad1, setAdad] = useState(0);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [maghadir, setMaghadir] = useState(" ")

  return (
    <div className="shadow-xl shadow-blue-800 w-150 h-150 ml-180 mt-50 ">
      <div>
        <p>={Adad1}</p>
        <p>{number1} {maghadir} {number2}</p>
      </div>
      <div>
        <CustomButton1 title={"X"} onClick={() => { setMaghadir("x") }} />
        <CustomButton1 title="1" onClick={() => {}} />
        <CustomButton1 title="2" onClick={() => { setCurrentId(2) }} />
      </div>
    </div>

  )

}
