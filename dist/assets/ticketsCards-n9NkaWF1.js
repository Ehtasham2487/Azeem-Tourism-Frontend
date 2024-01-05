import{r as s,x as u,q as g,j as e,ae as p,af as w,ag as f}from"./index-HM1agdtz.js";import{B as j}from"./Tooltip-qZwuO75H.js";const k=({searchTerm:a})=>{const[i,x]=s.useState([]),[d,b]=s.useState(!1),[m,n]=s.useState(!0),h=u();return s.useEffect(()=>{const t=localStorage.getItem("country"),r="https://backend.azeemtourism.com/api/tickets/get";g.get(r).then(c=>{let o=c.data.filter(l=>l.active===!0&&(t!=="Both"?l.region===t:!0));a&&(o=o.filter(l=>l.title.toLowerCase().includes(a.toLowerCase()))),x(o),n(!1)}).catch(c=>{n(!0),console.log(c.message)})},[d,a,localStorage]),s.useEffect(()=>{window.scrollTo(0,0)},[]),m?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx("img",{src:p,alt:"Loading...",className:"animate-spin-slow w-35 h-35"})}):e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx("meta",{name:"description",content:"Book tickets for top attractions and experiences in Pakistan and Dubai with Azeem Tourism. Visit famous places like Badshahi Mosque and Dubai Museum."}),e.jsx("meta",{property:"og:title",content:"Tickets - Azeem Tourism"}),e.jsx("meta",{property:"og:description",content:"Book tickets for top attractions and experiences in Pakistan and Dubai with Azeem Tourism. Visit famous places like Badshahi Mosque and Dubai Museum."}),e.jsx("meta",{name:"keywords",content:"Attraction tickets, museum tickets, Badshahi Mosque, Dubai Museum, tourist attractions, experience tickets"})]}),e.jsxs("div",{className:"animate-fade-down bg-lavender",style:{marginTop:"2%",border:1,borderRadius:20},children:[e.jsx("div",{className:"title text-center",children:e.jsx("h2",{className:"py-2 text-3xl lg:py-4 lg:pt-8 lg:text-4xl font-roboto font-bold uppercase  text-zinc-800 text-center",children:"Tickets"})}),e.jsx("div",{children:i.length>0?e.jsx("div",{className:" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 pl-3 p-2 pr-4 overflow-hidden",children:i.map((t,r)=>e.jsxs("div",{className:"bg-white transform hover:scale-90 overflow-hidden shadow-lg rounded-lg lg:w-96  h-auto mx-auto my-3 lg:my-5 relative",children:[e.jsx("img",{src:t.images[0].image,alt:t.title,className:"w-full h-60 object-cover rounded-t-lg"}),(t==null?void 0:t.isDiscounted)&&e.jsxs("div",{className:"absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-tl-lg",children:[t.Discount,"% OFF"]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h5",{className:"text-lg font-semibold mb-2",children:t.title}),e.jsx("p",{className:"text-gray-700 text-sm mb-4 h-16 overflow-auto",children:t.description}),e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("div",{className:"flex items-center",children:[t.isDiscounted&&e.jsx("p",{className:"text-gray-500 line-through mr-2",children:"$"+t.price}),e.jsx("p",{className:"font-bold text-2xl mt-1 mr-auto",children:"$"+(t!=null&&t.isDiscounted?t.price*(100-(t==null?void 0:t.Discount))/100:t.price).toFixed(2)})]}),e.jsx(v,{})]}),e.jsxs("span",{className:"font-semibold",children:["Available Tickets:"," ",e.jsx("span",{className:"text-red-500 font-bold",children:t.totalCount})]}),e.jsx(j,{color:"dark",onClick:()=>h(`/tickets/${t._id}`),className:"border-2 border-black shadow-sm  bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"Book Now"})]})]},r))}):e.jsx("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:e.jsx(f,{loop:!0,path:"https://lottie.host/96d5fb93-33b5-4381-bbf4-1a40936f91b7/Ohohi7RP4O.json",play:!0,style:{width:"30%",height:"20%",justifyContent:"center"}})})})]})]})},v=()=>e.jsxs("div",{className:"mb-0 mt-0 flex items-center cursor-pointer",children:[e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("span",{className:"ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800",children:"5.0"})]});export{v as Rating,k as default};
