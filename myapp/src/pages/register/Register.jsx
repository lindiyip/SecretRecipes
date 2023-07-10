import "./register.css";

export default function Register() {
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
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email address" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">Log into Account </button>
          </div>
        </div>
      </div>
    </div>
  );
}
