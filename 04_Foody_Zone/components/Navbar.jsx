const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-950">
      <div className=" ">
        <img src="./images/Foody Zone.svg" alt="Logo" />
      </div>
      <div className="">
        <input className="" type="text" placeholder="Search Food.." />
      </div>
    </div>
  );
};

export default Navbar;
