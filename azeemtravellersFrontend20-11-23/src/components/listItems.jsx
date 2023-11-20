/* eslint-disable react/no-unknown-property */
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export default function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/managepackages");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Packages" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/manageorders");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/addpackages");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <AddIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Add Packages" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/manageinactivepackages");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Inactive Packages" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/managetickets");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Tickets" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/addtickets");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Add Tickets" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/admin/manageinactivetickets");
        }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Inactive Tickets" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }} onClick={() => { navigate("/admin/managetours") }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Tours" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }} onClick={() => { navigate("/admin/addtours") }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Add Tours" />
        </ListItemButton>
      </p>
      <p
        style={{ cursor: "pointer" }} onClick={() => { navigate("/admin/manageinactivetours") }}
        underline="none"
        color="#00C0D9"
      >
        <ListItemButton>
          <ListItemIcon>
            <VisibilityOffIcon sx={{ color: "#00C0D9" }} />
          </ListItemIcon>
          <ListItemText primary="Inactive Tours" />
        </ListItemButton>
      </p>
      

 
    </React.Fragment>
  );
}