import{j as e}from"./index-DZD-iMEF.js";import{f as u,b as s}from"./reactVendor-C2KU3VG1.js";import{m as d}from"./proxy-DBsT_Vf-.js";import"./motionVendor-CNKApyIC.js";const c=[{id:1,src:"https://b-spoke-media.s3.eu-north-1.amazonaws.com/PhotoGallery/20240604_153801_(1).jpg"},{id:2,src:"https://b-spoke-media.s3.eu-north-1.amazonaws.com/PhotoGallery/20250404_123149.jpg"},{id:3,src:"https://b-spoke-media.s3.eu-north-1.amazonaws.com/PhotoGallery/Bath.jpg"},{id:4,src:"https://b-spoke-media.s3.eu-north-1.amazonaws.com/PhotoGallery/Craigieburn+5.jpg"},{id:5,src:"https://b-spoke-media.s3.eu-north-1.amazonaws.com/PhotoGallery/IMG_9819.JPG"},{id:6,src:"https://b-spoke-media.s3.eu-north-1.amazonaws.com/PhotoGallery/WhatsApp+Image+2023-03-29+at+1.22.25+PM+(1).jpeg"}],w=()=>{const m=u(),[a,i]=s.useState(1),[h,r]=s.useState(5),[l,p]=s.useState(!1),n=()=>{m("/portfolio")};s.useEffect(()=>{const t=()=>{const o=window.innerWidth;p(o<1024),o>=1024&&o<=1439?r(4):o>=1024&&r(5)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const g=c.slice(0,h);return e.jsxs("div",{className:"bg-white",style:{paddingTop:"4rem",paddingBottom:"4rem"},children:[e.jsx("div",{style:{marginBottom:"3rem",textAlign:"center"},children:e.jsx("h2",{className:"text-black font-bold text-2xl md:text-3xl lg:text-4xl",children:"OUR GALLERY"})}),l&&e.jsxs("div",{style:{width:"100%",paddingLeft:"1rem",paddingRight:"1rem"},children:[e.jsx("style",{children:`
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
          `}),e.jsx("div",{className:"photo-gallery-grid",children:c.map(t=>e.jsxs("div",{className:"photo-gallery-item shadow-md hover:shadow-xl transition-shadow duration-300",onClick:n,children:[e.jsx("img",{src:t.src,alt:"Gallery"}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0)",transition:"background 0.3s ease"},className:"hover:bg-black/20"})]},t.id))})]}),!l&&e.jsx("div",{className:"flex items-center justify-center h-100 md:h-125 overflow-hidden",style:{gap:"1rem",width:"90%",margin:"0 auto"},children:g.map(t=>e.jsxs(d.div,{layout:!0,initial:{borderRadius:20},animate:{width:a===t.id?"1000px":"600px"},transition:{type:"spring",stiffness:300,damping:30},onHoverStart:()=>i(t.id),onHoverEnd:()=>i(1),onClick:n,className:"relative h-full cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300",style:{borderRadius:"20px"},children:[e.jsx("img",{src:t.src,alt:t.title,className:"absolute inset-0 h-full w-full object-cover"}),a===t.id&&e.jsx(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent text-white",style:{padding:"1.5rem"},children:e.jsx("h3",{className:"text-lg md:text-xl font-bold",children:t.title})})]},t.id))})]})};export{w as default};
