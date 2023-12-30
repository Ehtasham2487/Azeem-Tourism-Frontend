import{r as l,w,q as x,j as e,L as C,t as f,T as p,I as m,x as D,v as b,C as T,y as N,s as y,A as S}from"./index-Qm37-hOS.js";import{d as I,a as $,D as j,M as A,A as R,b as L}from"./ExitToApp-lAv1ZvSx.js";import{I as g,R as z,d as F}from"./DeleteForever-IBOv72uH.js";import"./Tooltip-RdJNKoi-.js";import{C as _}from"./Card-rp43y1kq.js";import{s as B}from"./styled-components.browser.esm-27Qsjwnj.js";import{d as E,T as M,L as P}from"./VisibilityOff-HjpOYbqA.js";import{T as h}from"./Tooltip-kFKRgWfz.js";import{C as W}from"./CssBaseline-bzgSFrbW.js";import"./ListItemText-7Ghp6EMP.js";import"./capitalize-5rU_-DoW.js";function H(){const[t,a]=l.useState([]),[s,d]=l.useState(!1),c=w();l.useEffect(()=>{const r="http://localhost:8080/api/tickets/get";x.get(r).then(i=>{const n=i.data.filter(k=>k.active===!0);a(n)}).catch(i=>{})},[s]);const o=async r=>{const i=`http://localhost:8080/api/tickets/update/${r}`;await x.post(i,{active:!1}).then(n=>{d(!s)}).catch(n=>{})},v=async r=>{const i=`http://localhost:8080/api/tickets/delete/${r}`;await x.delete(i).then(n=>{d(!s)}).catch(n=>{})};return l.useState(1),e.jsx(O,{id:"AdminPackagesCard",children:e.jsx("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2",children:t.map(r=>e.jsx(e.Fragment,{children:e.jsxs(_,{className:"shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto relative",children:[e.jsx("div",{className:"icon flex justify-center",children:e.jsx("img",{src:r.images[0].image,alt:"",style:{width:"100%",borderRadius:"10px",height:"100%"}})}),(r==null?void 0:r.isDiscounted)&&e.jsxs("div",{className:"absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-tl-lg",children:[r.Discount,"% OFF"]}),e.jsx("p",{className:"text-center text-md font-semibold mb-0",children:r.title}),e.jsx("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:r.description}),e.jsx("div",{className:" flex justify-between flex-row",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold text-md",children:["Available Ticket:"," "]}),e.jsx("span",{className:"text-md",children:r.totalCount})]})}),e.jsxs("div",{className:"flex items-center",children:[r.isDiscounted&&e.jsx("p",{className:"text-gray-500 line-through mr-2",children:"$"+r.price}),e.jsx("p",{className:"font-bold text-lg mt-1 mr-auto",children:"$"+(r.isDiscounted?r.price-r.price*r.Discount/100:r.price)})]}),e.jsx("div",{children:e.jsxs("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:["For Region: ","",r.region?r.region:null]})}),e.jsxs("div",{className:"flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full",children:[e.jsx(h,{title:"Edit",children:e.jsx(g,{onClick:()=>c("/admin/editTicketDetails",{state:r}),"aria-label":"Edit",children:e.jsx(C,{to:{pathname:"/admin/editTicketDetails",state:"destination"},style:{textDecoration:"none",color:"grey"},children:e.jsx(z,{style:{color:"black"}})})})}),e.jsx(h,{title:"Hide",children:e.jsx(g,{onClick:()=>{o(r._id)},"aria-label":"Hide",children:e.jsx(E,{style:{color:"black"}})})}),e.jsx(h,{title:"Delete",children:e.jsx(g,{onClick:()=>{v(r._id)},"aria-label":"Delete",children:e.jsx(F,{style:{color:"red"}})})})]})]})}))})})}const O=B.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`,U=N({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function G(t){return e.jsxs(b,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(P,{color:"inherit",children:"Azeem Tourism"})," ",new Date().getFullYear(),"."]})}const u=240,X=y(S,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...a&&{marginLeft:u,width:`calc(100% - ${u}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Y=y(L,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:u,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!a&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function ie(){const[t,a]=l.useState(!0),s=()=>{a(!t)},d=w();var c=JSON.parse(localStorage.getItem("user"));return e.jsx(M,{theme:U,children:e.jsxs(f,{sx:{display:"flex"},children:[e.jsx(W,{}),e.jsx(X,{position:"absolute",open:t,children:e.jsxs(p,{sx:{pr:"24px"},children:[e.jsx(m,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:s,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(D,{})}),e.jsx(b,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",c.firstName,e.jsx(m,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),d("/"),window.location.reload()},children:e.jsx(I,{})})]})}),e.jsxs(Y,{variant:"permanent",open:t,children:[e.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(m,{onClick:s,children:e.jsx($,{})})}),e.jsx(j,{}),e.jsx(A,{})]}),e.jsxs(f,{component:"main",sx:{backgroundColor:o=>o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(p,{}),e.jsx(R,{title:"Manage Tickets"}),e.jsx(j,{style:{height:"2px"}}),e.jsx(H,{}),e.jsx(T,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(G,{sx:{pt:4}})})]})]})})}export{ie as default};
