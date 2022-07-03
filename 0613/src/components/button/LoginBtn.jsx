import React from "react";
import loginSvg from "../../assets/icon-login.svg";
export default function LoginBtn() {
  return (
    <li data-key="login">
      <a href="#none" className="button gray" data-key="login">
        <img src={loginSvg} alt="" data-key="login" />
        <span data-key="login">Login</span>
      </a>
    </li>
  );
}
