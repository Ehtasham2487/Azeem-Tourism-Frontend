/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import SpinnerGif from "../assets/Spinner.gif";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Lottie from "react-lottie-player";
import { Helmet } from "react-helmet";
const Tickets = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const region = localStorage.getItem("country")
    const URL = "https://backend.azeemtourism.com/api/tickets/get";
    axios
      .get(URL)
      .then((response) => {
        let filtered = response.data.filter(
					(packages) => {
						return packages.active === true && (region !== 'Both' ? packages.region === region : true);
					}
				);
        if (searchTerm) {
          filtered = filtered.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }
        setData(filtered);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error.message);
      });
  }, [reload, searchTerm,localStorage]);

  
	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
    
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={SpinnerGif}
          alt="Loading..."
          className="animate-spin-slow w-35 h-35"
        />
      </div>
    );
  }

  return (
    <>
    <Helmet>
    <meta name="description" content="Book tickets for top attractions and experiences in Pakistan and Dubai with Azeem Tourism. Visit famous places like Badshahi Mosque and Dubai Museum." />
    <meta property="og:title" content="Tickets - Azeem Tourism" />
    <meta property="og:description" content="Book tickets for top attractions and experiences in Pakistan and Dubai with Azeem Tourism. Visit famous places like Badshahi Mosque and Dubai Museum." />
    <meta name="keywords" content="Attraction tickets, museum tickets, Badshahi Mosque, Dubai Museum, tourist attractions, experience tickets" />
  </Helmet>

    <div className="animate-fade-down bg-lavender" style={{ marginTop:'2%', border:1,borderRadius: 20}} >
      <div className="title text-center">
      <h2 className="py-2 text-3xl lg:py-4 lg:pt-8 lg:text-4xl font-roboto font-bold uppercase  text-zinc-800 text-center">
        Tickets
      </h2>

      </div>
      <div>
      {
				data.length > 0 ? 
				<div  className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 pl-3 p-2 pr-4 overflow-hidden">
        {data.map((destination, _id) => (
          
            <div
            key={_id}
              className="bg-white transform hover:scale-90 overflow-hidden shadow-lg rounded-lg lg:w-96  h-auto mx-auto my-3 lg:my-5 relative"
              
            >
              <img
				        src={destination.images[0].image}

				        alt={destination.title}
				    className="w-full h-60 object-cover rounded-t-lg"
				/>
        {
								destination?.isDiscounted && (
									<div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-tl-lg">
									
										{destination.Discount}% OFF
									</div>
								)
								}
        <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{destination.title}</h5>
              <p className="text-gray-700 text-sm mb-4 h-16 overflow-auto">
                {destination.description}
              </p>

              <div className="flex justify-between items-center mb-2">
               
              <div className="flex items-center">
                  {destination.isDiscounted && (
                    <p className="text-gray-500 line-through mr-2">
                      {"$" + destination.price}
                    </p>
                  )}
                  <p className="font-bold text-2xl mt-1 mr-auto">
                    {"$" +
                      (
                        destination?.isDiscounted
                          ? (destination.price * (100 - destination?.Discount)) / 100
                          : destination.price
                      ).toFixed(2)}
                  </p>
                </div>
                <Rating />
              </div>
              <span className="font-semibold">
                Available Tickets:{" "}
                <span className="text-red-500 font-bold">
                  {destination.totalCount}
                </span>
              </span>

              <Button
                color="dark"
                onClick={() => navigate(`/tickets/${destination._id}`)}
                className="border-2 border-black shadow-sm  bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full"
              >
                Book Now
              </Button>
              </div>
            </div>

          
        ))}
        </div>
        :
        <div style={{
					display:'flex' , 
					flexDirection:'row' , 
					justifyContent:'center'
					}}
				>
					<Lottie
						loop
						path='https://lottie.host/96d5fb93-33b5-4381-bbf4-1a40936f91b7/Ohohi7RP4O.json'

						play
            style={{width:'30%' , height:'20%' , justifyContent:'center'}}
					/>
			  </div>
        }
      </div>
    </div>
    </>
  );
};

export const Rating = () => {
  return (
    <div className="mb-0 mt-0 flex items-center cursor-pointer">
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
  );
};
export default Tickets;
