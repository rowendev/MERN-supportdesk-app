import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Backbtn from "../components/Backbtn";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import TicketItem from "../components/TicketItem";
import Spinner from "../components/Spinner";

import {
  FcClock,
  FcAcceptDatabase,
  FcSmartphoneTablet,
  FcAdvance,
} from "react-icons/fc";

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Backbtn url="/" />
        維修中的產品: {tickets.length}
      </div>
      <div className="item" style={{ marginBottom: "1.5rem" }}>
        <FcAcceptDatabase size={20} />
        維修單
      </div>
      <div>
        <div className="ticket-headings">
          <div className="item">
            <FcClock size={20} />
            日期
          </div>
          <div className="item">
            <FcSmartphoneTablet size={20} />
            產品
          </div>
          <div className="item">
            <FcAdvance size={20} />
            維修進度
          </div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default Tickets;
