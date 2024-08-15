/* eslint-disable react/prop-types */
import buttonStyle from "./ButtonStyle";

const Button = ({ text, styleType, onClick, type = "button" }) => {
  return (
    <button
      className={`px-8 py-3 text-white rounded ${buttonStyle(
        styleType
      )} transition-all`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
