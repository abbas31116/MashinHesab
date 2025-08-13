import CustomInput from "~/component/componentInput";
import { CustomButton3 } from "~/component/componentButton";
import { Link, useNavigate } from "react-router";

export default function login() {
  const nav = useNavigate();
  return (
    <div className="shadow-xl shadow-blue-800 w-150 h-150 ml-180 mt-50 rounded-4xl">
      <CustomButton3 title="back" onClick={() => nav(-1)} variant="secondary" />
      <CustomInput
        labels={"block mt-10 ml-25 p-4  text-gray-500"}
        title={"Email"}
      />
      <CustomInput
        labels={"block mt-5 ml-25 p-4 text-gray-500"}
        title={"Password"}
        placeholder="************"
      />
      <Link to="#" className="ml-74 text-blue-500 underline">
        Forget My Password
      </Link>
      <br />
      <CustomButton3 onClick={() => nav("login")} title={"login"} />
    </div>
  );
}
