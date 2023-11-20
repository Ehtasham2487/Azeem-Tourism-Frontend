import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials mb-[25px]">
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Our trip was nothing short of magical. The itinerary was perfectly
            planned with a mix of relaxation and exploration.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Emiliy Clark</h4>
              <span></span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            The travel agency was responsive and helpful throughout the entire
            planning process.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Sheikh Hamza</h4>
              <span></span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            We had the vacation of our dreams and couldn't be more grateful. We
            can't wait to book our next adventure!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>John Adams</h4>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
