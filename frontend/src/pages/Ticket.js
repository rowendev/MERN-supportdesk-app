import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import Backbtn from "../components/Backbtn";
import Spinner from "../components/Spinner";
import {
  FcAutomatic,
  FcClock,
  FcExport,
  FcSmartphoneTablet,
} from "react-icons/fc";

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const { ticketId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
  }, [isError, message, ticketId]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <Backbtn url="/tickets" />

        <h4>
          <div className="item">
            <FcAutomatic />
            維修單編號: <span style={{ marginLeft: "1rem" }}>{ticket._id}</span>
          </div>
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h4>
        <h4>
          <div className="item">
            <FcClock />
            建立時間:{" "}
            <span style={{ marginLeft: "1rem" }}>
              {new Date(ticket.createdAt).toLocaleString("en-US")}
            </span>
          </div>
        </h4>
        <h4>
          <div className="item">
            <FcSmartphoneTablet />
            產品: <span style={{ marginLeft: "1rem" }}>{ticket.product}</span>
          </div>
        </h4>
        <hr />
        <div className="ticket-desc">
          <h4>
            <div className="item">
              <FcExport />
              詳細損壞狀況:
            </div>
          </h4>
          <h4>
            <div className="item">{ticket.description}</div>
          </h4>
        </div>
      </header>
    </div>
  );
}

export default Ticket;
