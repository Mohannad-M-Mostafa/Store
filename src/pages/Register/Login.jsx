import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login/", {
        username: email,
        password,
      });

      const token = res?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        alert("Something went wrong");
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
