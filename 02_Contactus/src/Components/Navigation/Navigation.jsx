import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style}>
      <div className="logo">
        <img src="./images/Frame 2 1.png" alt="Logo" />
      </div>
      <div className="lists">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Gallary</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
