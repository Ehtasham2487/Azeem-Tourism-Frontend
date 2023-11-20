import React from "react";
import styled from "styled-components";
import { Carousel } from "react-carousel-minimal";
import pic1 from "../assets/pics/pic-1.jpg";
import pic2 from "../assets/pics/pic-2.jpg";
import pic3 from "../assets/pics/pic-3.jpg";
import pic4 from "../assets/pics/pic-4.jpg";
import pic5 from "../assets/pics/pic-5.jpg";
import pic6 from "../assets/pics/pic-6.jpg";
import pic7 from "../assets/pics/pic-7.jpg";
import pic8 from "../assets/pics/pic-8.jpg";
import pic9 from "../assets/pics/pic-9.jpg";
import pic10 from "../assets/pics/pic-10.jpg";
import pic11 from "../assets/pics/pic-11.jpg";
import pic12 from "../assets/pics/pic-12.jpg";
import pic13 from "../assets/pics/pic-13.jpg";
import pic14 from "../assets/pics/pic-14.jpg";
import pic15 from "../assets/pics/pic-15.jpg";
export default function Hero() {
  const data = [
    {
      image: pic1,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic2,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic3,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic4,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic5,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic6,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic7,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic8,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic9,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic10,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic10,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic11,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic12,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic13,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic14,
      caption: "Smart Travelling Services For Smart People",
    },
    {
      image: pic15,
      caption: "Smart Travelling Services For Smart People",
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  return (
    <Section id="hero">
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="550px"
        captionStyle={captionStyle}
        radius="10px"
        captionPosition="center"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        // thumbnails={true}
        // thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      height: 370px;
      filter: brightness(60%);
      border-radius: 3%;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: orange;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
