import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    toast.success("登出成功!");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">Support Desk</Link>
        </div>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user ? (
            <>
              <li style={{ marginLeft: "20px" }}>
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  to="/profile"
                >
                  我的資料
                </Link>
              </li>
              <li style={{ marginLeft: "20px" }}>
                <button className="btn" onClick={onLogout}>
                  登出
                </button>
              </li>
            </>
          ) : (
            <>
              <li style={{ marginLeft: "20px" }}>
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  to="/login"
                >
                  登入
                </Link>
              </li>
              <li style={{ marginLeft: "20px" }}>
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  to="/signup"
                >
                  註冊
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="social">
          <ul className="socialList">
            <li className="socialItem" style={{ backgroundColor: "#0095ff" }}>
              <a href="">
                Linkedin <FaLinkedin size={20} />
              </a>
            </li>
            <li className="socialItem" style={{ backgroundColor: "#333333" }}>
              <a href="">
                Github <FaGithub size={20} />
              </a>
            </li>
            <li className="socialItem" style={{ backgroundColor: "#6fc2b0" }}>
              <a href="">
                Email <FaEnvelope size={20} />
              </a>
            </li>
            <li
              className="socialItem"
              style={{
                background: "#ff885d",
              }}
            >
              <a href="">
                Instagram <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="assistant">
          <FcAssistant size={50} />
        </div> */}
      </header>
    </>
  );
}

export default Header;
