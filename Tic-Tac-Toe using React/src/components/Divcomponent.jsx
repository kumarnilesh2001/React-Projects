/* eslint-disable react/prop-types */
const Divcomponent = ({ text = "", className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {text}
    </div>
  );
};

export default Divcomponent;
