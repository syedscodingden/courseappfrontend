import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "10%" }}>
      <h3>Hello from Landing</h3>
      <div>
        <Button
          variant="outlined"
          sx={{ marginBottom: "3%" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Landing;
