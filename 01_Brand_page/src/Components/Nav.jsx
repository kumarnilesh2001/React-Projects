const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="Logo" />
        </div>
        <div>
          <ul className="lists">
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="login">
          <button>LOGIN</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
