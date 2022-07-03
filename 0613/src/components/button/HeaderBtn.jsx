import React from "react";
import LoginBtn from "./LoginBtn";
import RegistBtn from "./RegistBtn";
import Login from "./Login";

export default function HeaderBtn({ dataKey }) {
  if (dataKey === "logout") {
    return (
      <>
        <LoginBtn />
        <RegistBtn />
      </>
    );
  } else if (dataKey === "login") {
    return <Login />;
  } else {
  }
}
