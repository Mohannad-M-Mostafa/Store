import React from "react";
import { Link } from 'react-router-dom'; 

const Error = () => {
  return (
    <div className="not-found-page">
      <h1> 404 Not Found </h1>
      <p>Sorry, Your visited page not found. You may go home page.</p>
      <Link to="Home"><button className="back-to-home-button">Back to Home Page</button></Link>
    </div>
  );
};
export default Error;
