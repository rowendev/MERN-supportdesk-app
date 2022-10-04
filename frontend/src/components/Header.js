import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

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
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/profile">我的資料</Link>
              </li>
              <li>
                <button className="btn" onClick={onLogout}>
                  登出
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">登入</Link>
              </li>
              <li>
                <Link to="/signup">註冊</Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;
