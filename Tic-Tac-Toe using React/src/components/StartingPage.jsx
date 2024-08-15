import { useNavigate } from "react-router-dom";
import FrontImg from "../assets/images/Front-img.png";

import Button from "./Button/Button";
import ImageContainer from "./ImageContainer";

const StartingPage = () => {
  const navigate = useNavigate();

  function handleNextbtn() {
    navigate("/name");
  }

  return (
    <div className="flex items-center justify-center gap-10">
      <div className="image-container">
        <ImageContainer image={FrontImg} className={"w-[85vh] gap-10"} />
      </div>
      <div className="btn-section flex flex-col items-center">
        <p className="text-6xl font-bold uppercase">
          <span className="text-7xl text-[#F64C4C]">Are</span> you ready to
          <span className="text-7xl text-[#F64C4C]"> play?</span>
        </p>
        <Button
          text={"Let's Begin"}
          className={"mt-14 rounded-xl "}
          px="50px"
          size="1.5rem"
          bgcolor="#F64C4C"
          hovercolor="#bb2828"
          onClick={handleNextbtn}
        />
      </div>
    </div>
  );
};

export default StartingPage;
