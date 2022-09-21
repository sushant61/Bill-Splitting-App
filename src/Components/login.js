import React from "react";
import { useGlobalContext } from "../Context";
const Login = () => {
  const { loginName, setLoginName, password, setPassword } = useGlobalContext();
  const loginHandler = (e) => {
    e.preventDefault();
    setLoginName("");
    setPassword("");
    console.log("Logged in");
  };
  return (
    <section id="entry-page">
      <form action="">
        <label htmlFor="">
          <h4>Name :</h4>
          <input
            type="text"
            placeholder="name"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <h4> Password:</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={loginHandler}>Login</button>
      </form>
    </section>
  );
};

export default Login;
