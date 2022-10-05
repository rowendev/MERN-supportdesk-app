import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NewTicket from "./pages/NewTicket";
import Tickets from "./pages/Tickets";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
