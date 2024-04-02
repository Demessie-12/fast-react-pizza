import { useState } from "react";
import Buttons from "../../ui/Buttons";
import { useDispatch } from "react-redux";
import { updateUsername } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "") return null;
    dispatch(updateUsername(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-4 w-72"
      />

      {username !== "" && (
        <div>
          <Buttons type="primary">Start ordering</Buttons>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
