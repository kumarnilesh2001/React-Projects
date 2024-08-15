import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const StartGame = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/play");
  }
  return (
    <div>
      {" "}
      <Form label={"Enter a Word"} onSubmit={handleSubmit} />
    </div>
  );
};

export default StartGame;
