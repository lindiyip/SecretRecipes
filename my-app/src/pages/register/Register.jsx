import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email address"
              ref={email}
              className="loginInput"
              required
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign up
            </button>
            <button className="loginRegisterButton">
              <Link to={"/login"} className="link">
                Log into Account
              </Link>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
