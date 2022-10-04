import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import LoginImg from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [fromData, serFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fromData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // redirect when logged in
    if (isSuccess || user) {
      navigate("/");
      toast.success("歡迎使用!");
    }
    dispatch(reset);
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    serFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <>
      <section className="heading">
        <h4>登入</h4>
        <h5>Enter your email and password</h5>
      </section>
      <div style={{ display: "flex" }}>
        <section>
          <img
            src={LoginImg}
            alt="image"
            style={{ width: "300px", height: "300px" }}
          />
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={password}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <button className="btn btn-block">送出</button>
            </div>
            <Link to="/signup" className="more">
              還沒有帳號嗎? 現在就來註冊吧!
            </Link>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
