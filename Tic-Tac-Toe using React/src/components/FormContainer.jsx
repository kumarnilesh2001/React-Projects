/* eslint-disable react/prop-types */
// import Button from "./Button/Button";

const FormContainer = ({ label, className, value, onChange }) => {
  return (
    <form className="flex flex-col gap-6">
      <label className="text-xl font-bold ">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={className}
      />
    </form>
  );
};

export default FormContainer;
