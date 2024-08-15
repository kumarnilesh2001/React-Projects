import logo2Img from "../assets/images/logo2.png";
// import Button from "./Button/Button";

const NavBar = () => {
  return (
    <nav className="flex items-center  justify-center p-2  px-12  bg-[#201E43] ">
      <img src={logo2Img} alt="" className="w-20 ml-5 text-white" />
    </nav>
  );
};

export default NavBar;
