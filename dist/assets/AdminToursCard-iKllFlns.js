import{r as a,x as h,q as l,j as e,L as f}from"./index-HM1agdtz.js";import"./Tooltip-qZwuO75H.js";import{C as b}from"./Card-nGT6FI4O.js";import{s as j}from"./styled-components.browser.esm-iF7xjdEj.js";import{I as o,R as y,d as w}from"./DeleteForever-RZtrGyX3.js";import{d as v}from"./VisibilityOff-y18L3EaN.js";import{T as d}from"./Tooltip-j9gwa1DZ.js";function F(){const[n,m]=a.useState([]),[i,c]=a.useState(!1),x=h();a.useEffect(()=>{const t="https://backend.azeemtourism.com/api/tours/get";l.get(t).then(r=>{const s=r.data.filter(g=>g.active===!0);m(s)}).catch(r=>{})},[i]);const p=async t=>{const r=`https://backend.azeemtourism.com/api/tours/update/${t}`;await l.post(r,{active:!1}).then(s=>{c(!i)}).catch(s=>{})},u=async t=>{const r=`https://backend.azeemtourism.com/api/tours/delete/${t}`;await l.delete(r).then(s=>{c(!i)}).catch(s=>{})};return a.useState(1),e.jsx(k,{id:"AdminPackagesCard",children:e.jsx("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2",children:n.map(t=>e.jsx(e.Fragment,{children:e.jsxs(b,{className:"shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto relative",children:[e.jsxs("div",{className:"icon flex justify-center",children:[e.jsx("img",{src:t.images[0].image,alt:"",style:{width:"100%",borderRadius:"10px",height:"100%"}}),(t==null?void 0:t.isDiscounted)&&e.jsxs("div",{className:"absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-tl-lg",children:[t.Discount,"% OFF"]})]}),e.jsx("p",{className:"text-center text-md font-semibold mb-0",children:t.title}),e.jsx("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:t.description}),e.jsx("div",{className:" flex justify-between flex-row",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold text-md",children:["Available Ticket:"," "]}),e.jsx("span",{className:"text-md",children:t.totalCount})]})}),e.jsxs("div",{className:"flex items-center",children:[t.isDiscounted&&e.jsx("p",{className:"text-gray-500 line-through mr-2",children:"$"+t.price}),e.jsx("p",{className:"font-bold text-lg mt-1 mr-auto",children:"$"+(t.isDiscounted?t.price-t.price*t.Discount/100:t.price)})]}),e.jsx("div",{children:e.jsxs("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:["For Region: ","",t.region?t.region:null]})}),e.jsxs("div",{className:"flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full",children:[e.jsx(d,{title:"Edit",children:e.jsx(o,{onClick:()=>x("/admin/editTourDetails",{state:t}),"aria-label":"Edit",children:e.jsx(f,{to:{pathname:"/admin/editTourDetails",state:"destination"},style:{textDecoration:"none",color:"grey"},children:e.jsx(y,{style:{color:"black"}})})})}),e.jsx(d,{title:"Hide",children:e.jsx(o,{onClick:()=>{p(t._id)},"aria-label":"Hide",children:e.jsx(v,{style:{color:"black"}})})}),e.jsx(d,{title:"Delete",children:e.jsx(o,{onClick:()=>{u(t._id)},"aria-label":"Delete",children:e.jsx(w,{style:{color:"red"}})})})]})]})}))})})}const k=j.section`
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
`;export{F as A};
