/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
// // import { Carousel } from "react-carousel-minimal";
// import { Carousel } from "@material-tailwind/react";
// import pic1 from "../assets/pics/pic-1.png";
// import pic2 from "../assets/pics/pic-2.png";
// import pic3 from "../assets/pics/pic-3.png";
// import pic4 from "../assets/pics/pic-4.png";
// import pic5 from "../assets/pics/pic-5.png";
// import pic6 from "../assets/pics/pic-6.png";
// import pic7 from "../assets/pics/pic-7.png";
// import pic8 from "../assets/pics/pic-8.png";
// import pic9 from "../assets/pics/pic-9.png";
// import pic10 from "../assets/pics/pic-10.png";
// import pic11 from "../assets/pics/pic-11.png";
// import pic12 from "../assets/pics/pic-12.png";
// import pic13 from "../assets/pics/pic-13.png";
// import pic14 from "../assets/pics/pic-14.png";
// import pic15 from "../assets/pics/pic-15.png";
// const Hero = () => {
//   const images = [
//     { image: pic1 },
//     { image: pic2},
//     { image: pic3},
//     { image: pic4},
//     { image: pic5},
//     { image: pic6},
//     { image: pic7},
//     { image: pic8},
//     { image: pic9},
//     { image: pic10},
//     { image: pic11},
//     { image: pic12},
//     { image: pic13},
//     { image: pic14},
//     { image: pic15},
//   ];
//   return (
//     <>
//       <div className="title">
//         <h2 className="  py-5 text-2xl lg:text-3xl font-bold font-inter text-zinc-800 text-center">
//           Your Journey Begins here!
//         </h2>
//       </div>
//       <div className="h-screen px-2">
//         {/* <Carousel
//           data={images}
//           time={12000}
//           radius="8px"
//           automatic={true}
//           navBtnColor="black"
//           dots={true}
//           pauseIconColor="black"
//           slideImageFit="cover"
//           thumbnails={true}
//           thumbnailWidth="100px"
//           width="100vw"
//           height="80vh"
//           pauseIconSize="40px"
//           slideBackgroundColor="white"
//           showNavBtn={true}
//         /> */}
//             <Carousel autoplay={true} className="rounded-xl">
//               <img
//                   src={pic1}
//                   alt="image 1"
//                   className="h-full w-full object-cover"
//                 />
//                 <img
//                 src={pic2}
//                 alt="image 1"
//                 className="h-full w-full object-cover"
//               />
//             </Carousel>
//       </div>
//     </>
//   );
// };

// export default Hero;

import { Carousel } from "flowbite-react";
import pic1 from "../assets/pics/pic-1.png";
import pic2 from "../assets/pics/pic-2.png";
import pic3 from "../assets/pics/pic-3.png";
import pic4 from "../assets/pics/pic-4.png";
import pic5 from "../assets/pics/pic-5.png";
import pic6 from "../assets/pics/pic-6.png";
import pic7 from "../assets/pics/pic-7.png";
import pic8 from "../assets/pics/pic-8.png";
import pic9 from "../assets/pics/pic-9.png";
import pic10 from "../assets/pics/pic-10.png";
import pic11 from "../assets/pics/pic-11.png";
import pic12 from "../assets/pics/pic-12.png";
import pic13 from "../assets/pics/pic-13.png";
import pic14 from "../assets/pics/pic-14.png";
import pic15 from "../assets/pics/pic-15.png";

export default function Component() {
  return (
    <div className="animate-fade-down">
      <h2 className="py-5 text-2xl lg:text-3xl font-bold font-inter text-zinc-800 text-center">
        Your Journey Begins here!
      </h2>
      <div className="h-[40vh] sm:h-[40vh] xl:h-[90vh] 2xl:h-[90vh] mx-3">
        <Carousel width="100vw" height="full">
          <img src={pic1} alt="..." />
          <img src={pic2} alt="..." />
          <img src={pic3} alt="..." />
          <img src={pic4} alt="..." />
          <img src={pic5} alt="..." />
          <img src={pic6} alt="..." />
          <img src={pic7} alt="..." />
          <img src={pic8} alt="..." />
          <img src={pic9} alt="..." />
          <img src={pic10} alt="..." />
          <img src={pic11} alt="..." />
          <img src={pic12} alt="..." />
          <img src={pic13} alt="..." />
          <img src={pic14} alt="..." />
          <img src={pic15} alt="..." />
        </Carousel>
      </div>
    </div>
  );
}
