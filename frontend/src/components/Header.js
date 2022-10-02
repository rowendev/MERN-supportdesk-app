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
        <div style={{ display: "flex", gap: ".5rem" }}>
          <MenuItem>
            <Link to="/login">
              <AiOutlineUser size={25} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signup">
              <FcSupport size={25} />
            </Link>
          </MenuItem>
        </div>
      </header>
    </>
  );
}

export default Header;
