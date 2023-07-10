import "./login.css";

export default function Login() {
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
            <input placeholder="Email address" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForget">Forget Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
