import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import SignupImg from "../assets/signup.svg";

function Signup() {
  const [fromData, serFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = fromData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    serFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="heading">
        <h4>註冊</h4>
        <h5>Please create an account</h5>
      </section>
      <div style={{ display: "flex" }}>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onChange={onChange}
                required
              />
            </div>
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
              <label htmlFor="password2">Confirm password:</label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="form-control"
                value={password2}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block">送出</button>
            </div>
            <Link to="/login" className="more">
              已經有帳號了? 由此登入
            </Link>
          </form>
        </section>
        <section style={{ margin: "auto 0" }}>
          <img
            src={SignupImg}
            alt="image"
            style={{ width: "300px", height: "300px" }}
          />
        </section>
      </div>
    </>
  );
}

export default Signup;
