import React from "react";
import axios from "axios";
import { react, useState, useEffect } from "react";
import { input, ul } from "react-bootstrap";
import API from "../api";

const feax = async () => {
  const m = await API.get("/users/company");
  console.log(m);
};

const Coatings = () => {
  const [posts, setposts] = useState([]);
  const [id, setid] = useState(1);
  useEffect(() => {
    API.get("/users/company")
      .then((response) => {
        setposts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(m) => setid(m.target.value)}
      ></input>
      <ul>
        {posts.map((posts) => (
          <li>{posts.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Coatings;
