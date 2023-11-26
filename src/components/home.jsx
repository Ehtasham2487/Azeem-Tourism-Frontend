import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import PackagesCard from "./PackagesCard";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import Tickets from "./TicketsCards";
import Tours from "./ToursCards";
import SearchBar from "./SearchBar";
import SpinnerGif from "../assets/Spinner.gif";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={SpinnerGif}
          alt="Loading..."
          className="animate-spin w-32 h-32 blur"
        />
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Tours searchTerm={searchTerm} />
      <Tickets searchTerm={searchTerm} />
      <PackagesCard searchTerm={searchTerm} />
      <Services searchTerm={searchTerm} />
      <ScrollToTop />
    </div>
  );
}
