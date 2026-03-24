import{j as e}from"./index-ByjWai_W.js";import{f as u,b as s}from"./reactVendor-C2KU3VG1.js";import{m as n}from"./proxy-IDAOFJst.js";import"./motionVendor-CNKApyIC.js";const c=[{id:1,src:"https://res.cloudinary.com/dv18awr10/image/upload/v1772780153/20240604_153801__1_qq1mmm.jpg"},{id:2,src:"https://res.cloudinary.com/dv18awr10/image/upload/v1772780182/20250404_123149_buvhoa.jpg"},{id:3,src:"https://res.cloudinary.com/dv18awr10/image/upload/v1772780203/Bath_af1efv.jpg"},{id:4,src:"https://res.cloudinary.com/dv18awr10/image/upload/v1772780223/Craigieburn_5_eye36g.jpg"},{id:5,src:"https://res.cloudinary.com/dv18awr10/image/upload/v1772780242/IMG_9819_zsrcjx.jpg"},{id:6,src:"https://res.cloudinary.com/dv18awr10/image/upload/v1772787323/WhatsApp_Image_2023-04-02_at_4.59.34_PM_1_nsfpzw.jpg"}],w=()=>{const m=u(),[a,o]=s.useState(1),[p,r]=s.useState(5),[d,h]=s.useState(!1),l=()=>{m("/portfolio")};s.useEffect(()=>{const t=()=>{const i=window.innerWidth;h(i<1024),i>=1024&&i<=1439?r(4):i>=1024&&r(5)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const g=c.slice(0,p);return e.jsxs("div",{className:"bg-white",style:{paddingTop:"4rem",paddingBottom:"4rem"},children:[e.jsx("div",{style:{marginBottom:"3rem",textAlign:"center"},children:e.jsx("h2",{className:"text-black font-bold text-2xl md:text-3xl lg:text-4xl",children:"OUR GALLERY"})}),d&&e.jsxs("div",{style:{width:"100%",paddingLeft:"1rem",paddingRight:"1rem"},children:[e.jsx("style",{children:`
            .photo-gallery-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
              width: 100%;
            }
            .photo-gallery-item {
              position: relative;
              overflow: hidden;
              border-radius: 8px;
              cursor: pointer;
            }
            .photo-gallery-item img {
              width: 100%;
              height: auto;
              display: block;
              object-fit: cover;
              aspect-ratio: 1 / 1;
              transition: transform 0.3s ease;
            }
            .photo-gallery-item:hover img {
              transform: scale(1.05);
            }
          `}),e.jsx("div",{className:"photo-gallery-grid",children:c.map(t=>e.jsxs("div",{className:"photo-gallery-item shadow-md hover:shadow-xl transition-shadow duration-300",onClick:l,children:[e.jsx("img",{src:t.src,alt:"Gallery"}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0)",transition:"background 0.3s ease"},className:"hover:bg-black/20"})]},t.id))})]}),!d&&e.jsx("div",{className:"flex items-center justify-center h-100 md:h-125 overflow-hidden",style:{gap:"1rem",width:"90%",margin:"0 auto"},children:g.map(t=>e.jsxs(n.div,{layout:!0,initial:{borderRadius:20},animate:{width:a===t.id?"1000px":"600px"},transition:{type:"spring",stiffness:300,damping:30},onHoverStart:()=>o(t.id),onHoverEnd:()=>o(1),onClick:l,className:"relative h-full cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300",style:{borderRadius:"20px"},children:[e.jsx("img",{src:t.src,alt:t.title,className:"absolute inset-0 h-full w-full object-cover"}),a===t.id&&e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent text-white",style:{padding:"1.5rem"},children:e.jsx("h3",{className:"text-lg md:text-xl font-bold",children:t.title})})]},t.id))})]})};export{w as default};
