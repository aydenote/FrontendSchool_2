import React from "react";
import registerSvg from "../../assets/icon-register.svg";

export default function LogoutBtn() {
    return (
        <li className="only-pc">
            <a href="#none" className="button gray">
                <img src={registerSvg} alt="" />
                <span>Register</span>
            </a>
        </li>
    );
}
