// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import AzeemTourism from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const node = useRef();

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (node.current.contains(e.target)) {
//         // inside click
//         return;
//       }
//       // outside click
//       setIsOpen(false);
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="max-w-screen-xl flex flex-row items-center justify-between  p-2 ">
//       <div className="w-full">
//         <div
//           onClick={() => {
//             navigate("/");
//           }}
//           className="flex items-center space-x-3 rtl:space-x-reverse no-underline cursor-pointer"
//         >
//           <img
//             src={AzeemTourism}
//             className="h-8 lg:h-16"
//             alt="Azeen Toursim logo"
//           />
//           <p className="lg:text-xl font-bold font-inter text-zinc-800 text-center pt-2">
//             Azeem Tourism
//           </p>
//         </div>
//       </div>
//       <div className="sm:block md:hidden lg:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           data-collapse-toggle="navbar-hamburger"
//           type="button"
//           className="inline-flex items-center justify-center p-2 w-10 h-10 text-md text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//       </div>{" "}
//       <div
//         ref={node}
//         className={`w-56 translate-y-[200px] translate-x-[350px] fixed z-50 ${
//           isOpen ? "translate-x-0 " : "-translate-x-full hidden"
//         } absolute lg:translate-y-0 lg:translate-x-[300px]  sm:block md:flex lg:flex`}
//         id="navbar-default"
//       >
//         <ul className="font-medium flex flex-col pt-4 md:p-0   border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 shadow-md md:shadow-none">
//           <li>
//             <p
//               onClick={() => {
//                 navigate("/");
//               }}
//               className="py-2  px-3 text-zinc-800 hover:bg-zinc-400 hover:text-white transition-colors duration-100  text-md font-medium text-left rounded-lg bg-primary-700 w-full cursor-pointer"
//             >
//               Home
//             </p>
//           </li>
//           <li>
//             <p
//               onClick={() => {
//                 navigate("/packages");
//               }}
//               className="py-2  px-3 text-zinc-800 hover:bg-zinc-400 hover:text-white transition-colors duration-100  text-md font-medium text-left rounded-lg bg-primary-700 w-full cursor-pointer"
//             >
//               Packages
//             </p>
//           </li>
//           <li>
//             <p
//               onClick={() => {
//                 navigate("/tours");
//               }}
//               className="py-2  px-3 text-zinc-800 hover:bg-zinc-400 hover:text-white transition-colors duration-100  text-md font-medium text-left rounded-lg bg-primary-700 w-full cursor-pointer"
//             >
//               Tours
//             </p>
//           </li>
//           <li>
//             <p
//               onClick={() => {
//                 navigate("/tickets");
//               }}
//               className="py-2  px-3 text-zinc-800 hover:bg-zinc-400 hover:text-white transition-colors duration-100  text-md font-medium text-left rounded-lg bg-primary-700 w-full cursor-pointer"
//             >
//               Tickets
//             </p>
//           </li>
//           <li>
//             <p
//               onClick={() => {
//                 navigate("/contact");
//               }}
//               className="py-2  px-3 text-zinc-800 hover:bg-zinc-400 hover:text-white transition-colors duration-100  text-md font-medium text-left rounded-lg bg-primary-700 w-full cursor-pointer"
//             >
//               Contact
//             </p>
//           </li>
//           <li>
//             <p
//               onClick={() => {
//                 navigate("/about");
//               }}
//               className="py-2  px-3 text-zinc-800 hover:bg-zinc-400 hover:text-white transition-colors duration-100  text-md font-medium text-left rounded-lg bg-primary-700 w-full cursor-pointer"
//             >
//               About
//             </p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import React from "react";
import { useState, useRef, useEffect } from "react";
import AzeemTourism from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const pages = [
    { name: "Home", link: "/" },
    { name: "Packages", link: "/packages" },
    { name: "Tours", link: "/tours" },
    { name: "Tickets", link: "/tickets" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white" }}
      className="animate-fade-down"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse no-underline cursor-pointer">
              <img
                src={AzeemTourism}
                alt="Azeem Toursim logo"
                width={64}
                height={64}
              />
              <p className="lg:text-xl font-bold font-inter text-zinc-800 text-center pt-3">
                Azeem Tourism
              </p>
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => navigate(page.link)}
                  sx={{
                    backgroundColor:
                      location.pathname === page.link
                        ? "#27272a"
                        : "transparent",
                  }}
                >
                  <Typography
                    textAlign="center"
                    style={{
                      color:
                        location.pathname === page.link ? "white" : "#27272a",
                      fontFamily: "Inter",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse no-underline cursor-pointer">
              <img
                src={AzeemTourism}
                className="h-8 lg:h-16"
                alt="Azeen Toursim logo"
              />
              {/* <p className="lg:text-xl font-bold font-inter text-zinc-800 text-center pt-2">
                Azeem Tourism
              </p> */}
            </div>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
                justifyContent: "space-around",
              },
              px: 10,
            }}
          >
            {pages.map((item) => (
              <Button
                key={item.name}
                onClick={() => navigate(item.link)}
                sx={{
                  color: location.pathname === item.link ? "white" : "#27272a",
                  backgroundColor:
                    location.pathname === item.link ? "#27272a" : "transparent",
                  display: "block",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "lg",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
