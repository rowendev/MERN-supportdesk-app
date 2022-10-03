import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FcSupport } from "react-icons/fc";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">Support Desk</Link>
        </div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
