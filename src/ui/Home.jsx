import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Buttons from "./Buttons";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-3 text-center sm:my-16">
      <h1 className=" mb-8 text-xl font-bold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-teal-800">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Buttons to="/menu" type="primary">
          {" "}
          Continue ordering {username}
        </Buttons>
      )}
    </div>
  );
}

export default Home;
