import React from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

document.addEventListener("mousemove", (e) => {
  let bubles = document.createElement("bubles");
  let x = e.pageX;
  let y = e.pageY;
  bubles.style.left = x + "px";
  bubles.style.top = y + "px";
  let size = Math.random() * 10;
  bubles.style.width = 1 + size + "px";
  bubles.style.height = 1 + size + "px";

  document.body.appendChild(bubles);
  setTimeout(function () {
    bubles.remove();
  }, 500);
});

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routers from "./routers/routers";
import ManageOrders from "./components/Order";
import AddPackages from "./components/AddPackages";
import ManageInactivePackages from "./components/ManageInactivePackages";
import EditPackageDetails from "./components/EditPackageDetails";
import ManagePackages from "./components/ManagePackages";
import ManageInactiveTickets from "./components/ManageInactiveTickets";
import AddTickets from "./components/AddTickets";
import ManageTickets from "./components/ManageTickets";
import EditTicketDetails from "./components/EditTicketDetails";
import AddTours from "./components/AddTours";
import ManageTours from "./components/ManageTours";
import EditTourDetails from "./components/EditTourDetails";
import ManageInactiveTours from "./components/ManageInactiveTours";

function App() {
  if (!localStorage.getItem("accessToken")) {
    return (
      <Fragment>
        <Navbar />
        <Routers />
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<ManagePackages />} />
          <Route path="/admin/managepackages" element={<ManagePackages />} />
          <Route path="/admin/manageOrders" element={<ManageOrders />} />
          <Route path="/admin/addpackages" element={<AddPackages />} />
          <Route
            path="/admin/manageinactivepackages"
            element={<ManageInactivePackages />}
          />
          <Route
            path="/admin/editPackageDetails"
            element={<EditPackageDetails />}
          />
          <Route path="/admin/addtickets" element={<AddTickets />} />
          <Route path="/admin/managetickets" element={<ManageTickets />} />
          <Route
            path="/admin/editTicketDetails"
            element={<EditTicketDetails />}
          />
          <Route
            path="/admin/manageinactivetickets"
            element={<ManageInactiveTickets />}
          />


          <Route path="/admin/addtours" element={<AddTours />} />
          <Route path="/admin/managetours" element={<ManageTours />} />
          <Route
            path="/admin/editTourDetails"
            element={<EditTourDetails />}
          />
          <Route
            path="/admin/manageinactivetours"
            element={<ManageInactiveTours />}
          />
        </Routes>
      </Fragment>
    );
  }
}

export default App;
