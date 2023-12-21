import{w as F,aj as O,r as i,q as u,j as e}from"./index-J3bmnUGf.js";import{B as x}from"./Tooltip-PoBpJYkM.js";import{C as I}from"./Card-k256hTuz.js";import{F as T}from"./index-Vc4ZOw3q.js";import{c as E,a as n,b as $,d as U,e as A,I as B,F as L,f as M,u as V}from"./index.esm-lOZCirdp.js";import"./index-bt9d5Oet.js";const X=()=>{F();const{slug:p}=O(),[m,j]=i.useState([]),[r,h]=i.useState(),[G,y]=i.useState([]),[d,f]=i.useState(),[g,b]=i.useState(),[N,k]=i.useState(),[w,_]=i.useState();i.useEffect(()=>{const l="https://backend.azeemtourism.com/api/packages/get";u.get(l).then(t=>{const a=t.data.filter(s=>s.active===!0);j(a),h(a.find(s=>s.title===p)),a.find(s=>s.title===p)}).catch(t=>{console.log(t.message)}),u.get("http://api.exchangeratesapi.io/v1/latest?access_key=69d8500368c69cc515c8785040780d20").then(t=>{const a="USD",s="AED";y([a,...Object.keys(t.data.rates)]),f(a),b(s),_(t.data.rates[a]),k(t.data.rates[s])})},[]),i.useEffect(()=>{window.scrollTo(0,0)},[]);const v=()=>{f(g),b(d)},C=E({full_name:n().matches(/^[a-zA-Z0-9_ ]*$/,"Username can only contain letters, numbers, underscores, and spaces").required("Required"),total_persons:$().min(1,"Total persons cannot be less than 1").required("Required"),date_of_tour:U().required("Required"),pickup_time:n().required("Required"),user_email:n().email("Invalid email address").required("Required"),user_phone:n().required("Required"),pickup_location:n().required("Required")}),S={full_name:"",total_persons:1,date_of_tour:"",pickup_time:"",user_email:"",user_phone:"",pickup_location:""},q=async l=>{const{full_name:t,total_persons:a,date_of_tour:s,pickup_time:P,user_email:z,user_phone:R,pickup_location:D}=l;u.post("https://backend.azeemtourism.com/api/payments/intent",{packageCharges:r.price*a}).then(c=>{localStorage.setItem("orderDetails",JSON.stringify({fullname:t,email:z,phone:R,pickuplocation:D,totalpersons:a,dateoftour:s,pickuptime:P,totalprice:r.price*a,packageObject:r,stripeSessionId:c.data.sessionID,orderType:"package"})),c.data&&(window.location.href=c.data.sessionURL)}).catch(c=>console.log(c.message))},o=({label:l,...t})=>{const[a,s]=V(t);return e.jsxs("div",{className:"mb-4 flex-col",children:[e.jsx("label",{className:"block text-zinc-800 text-sm font-semibold mb-2 font-inter",children:l}),e.jsx("input",{...a,...t,className:`appearance-none border ${s.touched&&s.error?"border-red-500":"border-gray-300"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}),s.touched&&s.error?e.jsxs("p",{className:"text-red-500 text-sm font-semibold ",children:["*",s.error]}):null]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col lg:flex-row justify-center px-5 py-5 lg:px-0",children:r&&e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex flex-col lg:flex-row lg:gap-x-10 justify-center ",children:[e.jsxs("div",{className:"w-full justify-center ",children:[e.jsx("h2",{className:"text-2xl  lg:text-2xl text-center font-bold font-inter text-zinc-800 text-left",children:r.title}),e.jsx(A.Carousel,{data:r.images,time:5e3,radius:"8px",width:"100%",slideBackgroundColor:"white",height:"60vh",captionPosition:"bottom",automatic:!0,dots:!0,pauseIconColor:"white",slideImageFit:"cover"}),e.jsxs("div",{className:"pt-5",children:[e.jsx("h5",{className:"font-inter font-semibold text-md text-left",children:"How the tour will look like?"}),e.jsx("p",{className:"font-inter",children:r.description})]}),e.jsxs("div",{className:"flex ",children:[e.jsxs("p",{className:"flex text-xl font-inter font-semibold mt-1 gap-x-2",children:[e.jsx(B,{className:"mt-1"}),"Price: ",d==="USD"?"$":"AED: "]}),e.jsx("span",{className:"font-inter font-bold text-xl mt-1",children:d==="USD"?r.price:Math.round(N/w*r.price,9)}),e.jsxs(x,{className:"ml-5 shadow-sm bg-black text-white hover:bg-white hover:text-black transition-colors duration-100 text-xs md:text-sm font-medium text-center rounded-lg md:p-3",onClick:()=>v(),children:["Change Price to ",g]})]})]}),e.jsxs("div",{className:"w-full lg:w-2/5 ",children:[e.jsx("h5",{className:"font-bold text-center font-inter text-xl lg:text-2xl",children:"Recent Packages"}),e.jsx("div",{className:"overflow-y-auto h-screen px-2",children:m.map((l,t)=>e.jsx(I,{imgSrc:l.images[0].image,className:"mb-5 shadow-sm",children:e.jsxs("div",{className:"",children:[e.jsx("p",{className:"font-semibold text-center text-xl",children:m[t].title}),e.jsx(x,{onClick:()=>{h(m[t])},className:"shadow-sm bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100 text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"View"})]})},l.id))})]})]})})}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-5 lg:pb-5",children:[e.jsx("div",{className:"title",children:e.jsx("h2",{className:"py-5 text-2xl lg:py-10 lg:text-3xl font-bold font-inter text-zinc-800 text-center",children:"Get your slots booked!"})}),e.jsx("div",{className:" flex flex-col justify-center gap-y-10 w-full md:w-2/5",children:e.jsx(L,{initialValues:S,validationSchema:C,validateOnBlur:!0,validateOnChange:!1,onSubmit:(l,{resetForm:t})=>{q(l),t()},children:e.jsxs(M,{className:"border-2 bg-white shadow-lg rounded px-4 md:px-8 pt-6 pb-8 mb-4",children:[e.jsx(o,{label:"Full Name",name:"full_name",type:"text",className:"mb-4"}),e.jsx(o,{label:"Number Of Persons",name:"total_persons",type:"number",className:"mb-4"}),e.jsx(o,{label:"Date of Tour",name:"date_of_tour",type:"datetime-local",className:"mb-4"}),e.jsx(o,{label:"Pickup Time",name:"pickup_time",type:"time",className:"mb-4"}),e.jsx(o,{label:"Email",name:"user_email",type:"email",className:"mb-4"}),e.jsx(o,{label:"Phone",name:"user_phone",type:"tel",className:"mb-4"}),e.jsx(o,{label:"Pickup Location",name:"pickup_location",type:"text",className:"mb-4"}),e.jsx("div",{className:" flex justify-center mt-5",children:e.jsx(x,{type:"submit",className:"shadow-sm  lg:w-48 bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"Proceed"})})]})})}),e.jsx(T,{phoneNumber:"+971522760013",chatMessage:"",messageDelay:"1",accountName:"Azeem Tourism"})]})]})};export{X as default};