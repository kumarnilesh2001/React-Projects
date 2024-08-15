/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import InputType from "./InputType";

const Form = ({ label, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("password");
  const [toggle, setToggle] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(`Form Submitted ${inputValue}`);
    onSubmit?.(inputValue);
  }

  function handleTextInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form action="" onSubmit={handleOnSubmit} className="w-[80%] m-auto ">
      <label
        htmlFor=""
        className="font-bold text-lg flex items-center justify-between bg"
      >
        {label}
        <InputType
          placeholder={label}
          type={inputType}
          onChange={handleTextInputChange}
          value={inputValue}
        />
        <Button
          text={inputType === "password" ? "Show" : "Hide"}
          onClick={() => {
            setInputType(inputType === "password" ? "text" : "password");
            setToggle(!toggle);
          }}
          styleType={toggle ? "error" : "warning"}
        />
        <Button text={"Click me"} styleType={"primary"} type={"submit"} />
      </label>
    </form>
  );
};

export default Form;
