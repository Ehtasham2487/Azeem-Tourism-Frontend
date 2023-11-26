import React from "react";
// import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Packages from "../components/PackagesCard";
import About from "../components/Services";
import Home from "../components/Home";
import PackagesDetails from "../components/PackageDetail";
import Contact from "../components/Contact";
import Signin from "../components/Login";
import SuccessPayment from "../components/strip/CheckOutSucces";
import Tickets from "../components/TicketsCards";
import Tours from "../components/ToursCards";
import TicketDetail from "../components/TicketDetail";
import TourDetail from "../components/TourDetail";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tours" element={<Tours />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages/:slug" element={<PackagesDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/signin" element={<Signin />} />
      <Route path="/payment/confirm" element={<SuccessPayment />} />
      <Route path="/tickets/:slug" element={<TicketDetail />} />
      <Route path="/tours/:slug" element={<TourDetail />} />
    </Routes>
  );
}
