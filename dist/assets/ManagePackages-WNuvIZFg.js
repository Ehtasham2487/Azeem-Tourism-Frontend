import{r as n,w,q as m,j as e,L as C,t as f,T as p,I as x,x as S,v as b,C as N,y as D,s as y,z as T}from"./index-J3bmnUGf.js";import{d as I,a as z,D as j,M as $,A,b as L}from"./ExitToApp-iIE4Xn7K.js";import{s as P}from"./styled-components.browser.esm-pjiUfHNz.js";import"./Tooltip-PoBpJYkM.js";import{C as R}from"./Card-k256hTuz.js";import{I as g,R as _,d as B}from"./DeleteForever-WdmapXlV.js";import{d as E,T as M,L as F}from"./VisibilityOff-peO7YmUv.js";import{T as h}from"./Tooltip-1CM8mb9v.js";import{C as W}from"./CssBaseline-jMRw95Iy.js";import"./ListItemText-zz0fWdZs.js";function H(){const[t,r]=n.useState([]);n.useState(!0);const[s,d]=n.useState(!1),c=w();n.useEffect(()=>{const a="https://backend.azeemtourism.com/api/packages/get";m.get(a).then(i=>{const l=i.data.filter(k=>k.active===!0);r(l)}).catch(i=>{})},[s]);const o=async a=>{const i=`https://backend.azeemtourism.com/api/packages/update/${a}`;await m.post(i,{active:!1}).then(l=>{d(!s)}).catch(l=>{})},v=async a=>{const i=`https://backend.azeemtourism.com/api/packages/delete/${a}`;await m.delete(i).then(l=>{d(!s)}).catch(l=>{})};return n.useState(1),e.jsx(U,{id:"AdminPackagesCard",children:e.jsx("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2",children:t.map(a=>e.jsx(e.Fragment,{children:e.jsxs(R,{className:"shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto",children:[e.jsx("div",{className:"icon flex justify-center",children:e.jsx("img",{src:a.images[0].image,alt:"",style:{width:"100%",borderRadius:"10px",height:"100%"}})}),e.jsx("p",{className:"text-center text-md font-semibold mb-0",children:a.title}),e.jsx("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:a.description}),e.jsxs("div",{className:" flex justify-between flex-row",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold text-md",children:["Available Ticket:"," "]}),e.jsx("span",{className:"text-md",children:a.totalCount})]}),e.jsx("p",{className:"font-bold text-md",children:"$"+a.price})]}),e.jsxs("div",{className:"flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full",children:[e.jsx(h,{title:"Edit",children:e.jsx(g,{onClick:()=>c("/admin/editPackageDetails",{state:a}),"aria-label":"Edit",className:"h-5 w-5",children:e.jsx(C,{to:{pathname:"/admin/editPackageDetails",state:"destination"},style:{textDecoration:"none",color:"grey"},children:e.jsx(_,{style:{color:"black"}})})})}),e.jsx(h,{title:"Hide",children:e.jsx(g,{onClick:()=>{o(a._id)},"aria-label":"Hide",className:"h-5 w-5",children:e.jsx(E,{style:{color:"black"}})})}),e.jsx(h,{title:"Delete",children:e.jsx(g,{onClick:()=>{v(a._id)},"aria-label":"Delete",className:"h-5 w-5",children:e.jsx(B,{style:{color:"red"}})})})]})]})}))})})}const U=P.section`
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
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
    padding: 0 6rem;
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
`,G=D({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function O(t){return e.jsxs(b,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(F,{color:"inherit",children:"Azeem Tourism"})," ",new Date().getFullYear(),"."]})}const u=240,X=y(T,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...r&&{marginLeft:u,width:`calc(100% - ${u}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Y=y(L,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:u,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!r&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function se(){const[t,r]=n.useState(!0),s=()=>{r(!t)},d=w();var c=JSON.parse(localStorage.getItem("user"));return e.jsx(M,{theme:G,children:e.jsxs(f,{sx:{display:"flex"},children:[e.jsx(W,{}),e.jsx(X,{position:"absolute",open:t,children:e.jsxs(p,{sx:{pr:"24px"},children:[e.jsx(x,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:s,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(S,{})}),e.jsx(b,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",c.firstName,e.jsx(x,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),d("/"),window.location.reload()},children:e.jsx(I,{})})]})}),e.jsxs(Y,{variant:"permanent",open:t,children:[e.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(x,{onClick:s,children:e.jsx(z,{})})}),e.jsx(j,{}),e.jsx($,{})]}),e.jsxs(f,{component:"main",sx:{backgroundColor:o=>o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(p,{}),e.jsx(A,{title:"Manage Packages"}),e.jsx(j,{style:{height:"2px"}}),e.jsx(H,{}),e.jsx(N,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(O,{sx:{pt:4}})})]})]})})}export{se as default};
