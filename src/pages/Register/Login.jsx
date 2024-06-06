import React, { useState } from "react";
import Cookies from "cookies-js";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(
        "https://graduation-project-tez6uftvsa-ew.a.run.app/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            username: email,
            password,
          }),
        }
      );
      const content = await data.json();
      if (content.token) {
        Cookies.set("token", content.token);
        navigate("/home");
      }else{
        alert("Something went wrong")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="form ">
        <form className="p-5 d-flex flex-wrap " onSubmit={handleSubmit}>
          <div className="d-flex col-10 align-items-center">
            <label for="email" className="col-4 text-light fw-bolder">
              User Name
            </label>

            <input
              type="text"
              className="col-10 p-2"
              id="email"
              placeholder="Enter Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="d-flex col-10 my-3 align-items-center">
            <label for="email" className="col-4 text-light fw-bolder">
              Password
            </label>

            <input
              type="password"
              className="col-10 p-2"
              id="email"
              placeholder="Enter email"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="col-12 d-flex mt-3 justify-content-center">
            {" "}
            <button type="submit" className="btn btn-primary col-4 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
