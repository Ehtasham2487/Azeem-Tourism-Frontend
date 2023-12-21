import{w as p,j as t,A as l,q as s}from"./index-J3bmnUGf.js";import{s as m}from"./styled-components.browser.esm-pjiUfHNz.js";import"./Tooltip-PoBpJYkM.js";import{C as d}from"./Card-k256hTuz.js";const x=()=>{const i=p(),e=JSON.parse(localStorage.getItem("orderDetails")),c=()=>{const a={orderType:e.orderType,objectService:e.packageObject._id,fullName:e.fullname,tourName:e.packageObject.title,tourDate:e.dateoftour,email:e.email,phone:e.phone,totalPersons:e.totalpersons,pickupTime:e.pickuptime,pickupLocation:e.pickuplocation,stripeSessionId:e.stripeSessionId,payment:e.totalpersons*e.packageObject.price},o="https://backend.azeemtourism.com/api/orders/create";s.post(o,a).then(r=>{n()}).catch(r=>{})},n=()=>{const a={totalCount:e.packageObject.totalCount-e.totalpersons};let o="";e.orderType==="package"?o=`https://backend.azeemtourism.com/api/packages/update/${e.packageObject._id}`:e.orderType==="ticket"?o=`https://backend.azeemtourism.com/api/tickets/update/${e.packageObject._id}`:e.orderType==="tour"&&(o=`https://backend.azeemtourism.com/api/tours/update/${e.packageObject._id}`),s.post(o,a).then(r=>{}).catch(r=>{})};return t.jsx(u,{children:t.jsxs(d,{className:"transform hover:scale-110 shadow-lg rounded-lg lg:w-96 border-2 font-inter h-auto justify-center",children:[t.jsx("h5",{className:"text-center font-semibold",children:"Checkout Successful"}),t.jsxs("p",{className:"text-lg text-justify ",children:["Thank you for choosing Azeem Tourism! 🌟 Your order might take some time to process. In case of any inquiries, contact the support at"," ",t.jsx("a",{href:"mailto:azeemtourism@gmail.com",className:"text-primary-600 font-normal",children:t.jsx("strong",{children:"support"})})," ","Or you can 📞 WhatsApp us on"," ",t.jsx("a",{href:"https://api.whatsapp.com/send?phone=971522760013",className:"text-primary-600 font-normal",children:t.jsx("strong",{children:"+97152760013"})}),"."]}),t.jsx(l,{onClick:()=>{c(),i("/")},sx:{fontFamily:"Inter",backgroundColor:"#4CAF50",color:"white",borderRadius:"lg",fontSize:"lg",p:1.2,transition:"all 0.3s ease-in-out","&:hover":{backgroundColor:"#388E3C",color:"white"}},children:"Confirm Order"})]})})},u=m.div`
  min-height: 80vh;
  max-width: 850px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;export{x as default};
