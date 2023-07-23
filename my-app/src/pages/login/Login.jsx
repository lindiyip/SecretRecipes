import { useContext, useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Secret Recipes</h3>
          <span className="loginDesc">
            Share your joy of prepareing meals with the world on Secret Recipes.
          </span>
        </div>
        <div className="loginRight">
          <form
            className="loginBox"
            onSubmit={handleClick}
            disabled={isFetching}
          >
            <input
              placeholder="Email address"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              ref={password}
              minLength="6"
            />
            {/* <Link to={"/"} className="link"> */}
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? "Loading" : "Login"}
            </button>
            {/* </Link> */}
            <span className="loginForget">Forget Password?</span>
            <button className="loginRegisterButton">
              <Link to={"/register"} className="link">
                {isFetching ? "Loading" : "Create a New Account"}
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
