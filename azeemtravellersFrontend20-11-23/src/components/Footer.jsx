import React, { useState } from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <p style={{ cursor: "pointer", color: "black", textDecoration: "none" }}>
        <span>Copyright &copy; 2023 AQ Innovations. All rights reserved</span>
      </p>
      <ul className="links">
        <li>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
        </li>
        <li>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </p>
        </li>
        <li>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/packages");
            }}
          >
            Packages
          </p>
        </li>
        <li>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/reviews");
            }}
          >
            Reviews
          </p>
        </li>
        <li>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </p>
        </li>
        <li>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/admin/signin");
            }}
          >
            Admin Login
          </p>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61552420340278"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/azeemtourism?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/azeem-tourism-60b4b5295/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #00a3e0;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      p {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: orange;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: orange;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
