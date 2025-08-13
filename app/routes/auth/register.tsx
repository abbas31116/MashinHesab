import { Link } from "react-router";
import { CustomButton3 } from "~/components/componentButton";
import CustomInput from "~/components/componentInput";

export default function login() {
  return (
    <div className="shadow-xl shadow-blue-800 w-150 h-180 ml-180 mt-40 rounded-4xl">
      <CustomButton3 title="back" />
      <CustomInput
        labels={"block mt-5 ml-25 p-4  text-gray-500"}
        title={"Email"}
      />
      <CustomInput
        labels={"block mt-2 ml-25 p-4 text-gray-500"}
        title={"Name"}
      />
      <CustomInput
        labels={"block mt-2 ml-25 p-4 text-gray-500"}
        title={"Last name"}
      />
      <CustomInput
        labels={"block mt-2 ml-25 p-4 text-gray-500"}
        title={"Password"}
      />
      <CustomButton3 title={"Register"} />
    </div>
  );
}
