/* eslint-disable react/prop-types */
const InputType = ({ type, onChange, value, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      className="border w-[70%] h-14 p-4"
      type={type}
      value={value}
    />
  );
};

export default InputType;
