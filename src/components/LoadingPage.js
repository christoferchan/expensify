import React from "react";
import loading from "../styles/images/loader.gif";

const LoadingPage = () => {
  return (
    <div className="loader">
      <img className="loader__image" src={loading} alt="loading..." />
    </div>
  );
};

export default LoadingPage;
