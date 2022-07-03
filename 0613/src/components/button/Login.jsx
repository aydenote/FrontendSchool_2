import React from "react";
import WriteSvg from "../../assets/icon-modify-white.svg";
import logoutSvg from "../../assets/icon-logout.svg";
export default function Login() {
  return (
    <>
      <li className="profile-img">
        <a href="/">
          <img src="./assets/profile.jpg" alt="My Page" />
        </a>
      </li>
      <li>
        <a href="/" className="button">
          <img src={WriteSvg} alt="" />
          <span>Write</span>
        </a>
      </li>
      <li id="logOut" data-key="logout">
        <button className="button white" data-key="logout">
          <img src={logoutSvg} alt="" data-key="logout" />
          <span data-key="logout">Logout</span>
        </button>
      </li>
    </>
  );
}
