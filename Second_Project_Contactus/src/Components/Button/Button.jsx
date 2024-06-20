import style from "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ text, icon, isOutline, Bgcolor, textColor, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? style.secondary_btn : style.top_btn}
      style={{ backgroundColor: Bgcolor, color: textColor }}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
