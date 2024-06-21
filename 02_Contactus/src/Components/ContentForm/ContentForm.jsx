import Button from "../Button/Button";
import style from "./Content.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
const ContentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <div className={`${style.container}`}>
      <div className={style.content_form}>
        <div className={style.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA MAIL FORM"
          icon={<MdOutlineMessage fontSize={"24px"} />}
        />

        <form onSubmit={onSubmit}>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <Button
            isOutline={true}
            Bgcolor={"black"}
            textColor={"white"}
            text="SUBMIT"
          />
          <div className={style.display}>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className="content_img">
        <img src="../images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContentForm;
