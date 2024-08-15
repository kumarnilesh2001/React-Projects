/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <div>
      <button className="px-3 py-2 border rounded">{text}</button>
    </div>
  );
};

export default Button;
