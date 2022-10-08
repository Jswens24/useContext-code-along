import React, { useState, useContext } from "react";
import { UserContext } from '../App';

function Login() {
  const [input, setInput] = useState("");
  const { user, setUser } = useContext(UserContext)

  const changeHandler = (event) => {
    setInput(event.target.value);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    setUser(input);
    setInput('');
  }

  return (
    <div className="sub-page">
      <h1>Login</h1>
      <form>
        <input onChange={changeHandler} type="text" value={input} placeholder="Create a Username" />
        <button onClick={clickHandler}>Submit!</button>
      </form>
    </div>
  );
}

export default Login;
