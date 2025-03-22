import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default NotFoundPage;
