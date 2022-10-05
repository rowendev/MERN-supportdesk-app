import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Backbtn from "../components/Backbtn";
import { FcOpenedFolder } from "react-icons/fc";
function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { tickets, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  return (
    <>
      <Backbtn url="/" />
      <h4>
        <div className="item">
          <FcOpenedFolder />
          顧客姓名: <span style={{ marginLeft: "1rem" }}>{user.name}</span>
        </div>
      </h4>
      <h4>
        <div className="item">
          Email: <span style={{ marginLeft: "1rem" }}>{user.email}</span>
        </div>
      </h4>
    </>
  );
}

export default Profile;
