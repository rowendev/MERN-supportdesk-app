import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Backbtn from "../components/Backbtn";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("iPhone");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ product, description }));
  };
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <Backbtn url="/" />
      <section className="heading">
        <h4>create new ticket</h4>
        <p>請填寫表單</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">顧客姓名</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">顧客email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            disabled
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">要維修的產品</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
              <option value="Macbook">Macbook</option>
              <option value="iMac">iMac</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">告訴我們發生什麼事:</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="詳細說明"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="form-group">
              <button className="btn btn-block">送出</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
