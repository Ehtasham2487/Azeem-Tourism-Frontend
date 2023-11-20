import React, { useEffect } from "react";
// import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Packages from "../components/PackagesCard";
import About from "../components/Services";
import Reviews from "../components/Testimonials";
import scrollreveal from "scrollreveal";
import Home from "../components/home";
import PackagesDetails from "../components/packageDetail";
import Contact from "../components/Contact";
import Signin from "../components/Login";
import SuccessPayment from "../components/strip/CheckOutSucces";
import Tickets from "../components/ticketsCards";
import Toures from "../components/TouresCards";
import TicketDetail from "../components/TicketDetail";
import TourDetail from "../components/TourDetail";
// import Login from "../components/login";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      },
    );
  }, []);
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/toures" element={<Toures />} />
      <Route path="/packages/:slug" element={<PackagesDetails />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/signin" element={<Signin />} />
      <Route path="/payment/confirm" element={<SuccessPayment />} />
      <Route path="/tickets/:slug" element={<TicketDetail />} />
      <Route path="/tours/:slug" element={<TourDetail />} />
    </Routes>
    // </BrowserRouter>
  );
}
