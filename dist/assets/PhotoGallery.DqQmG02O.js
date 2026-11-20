import{j as t}from"./App.Bh9BBF3v.js";import{r as i}from"./icons.CG1IOl38.js";import{m as n}from"./proxy.nR20GIlQ.js";const c=[{id:1,src:"https://media.b-spoke.com.au/PhotoGallery/20240604_153801_(1).webp?v=2"},{id:2,src:"https://media.b-spoke.com.au/PhotoGallery/20250404_123149.webp?v=2"},{id:3,src:"https://media.b-spoke.com.au/PhotoGallery/Bath.webp?v=2"},{id:4,src:"https://media.b-spoke.com.au/PhotoGallery/Craigieburn%2B5.webp?v=2"},{id:5,src:"https://media.b-spoke.com.au/PhotoGallery/IMG_9819.webp?v=2"},{id:6,src:"https://media.b-spoke.com.au/PhotoGallery/WhatsApp%2BImage%2B2023-03-29%2Bat%2B1.22.25%2BPM%2B(1).webp?v=2"}],b=()=>{const[s,a]=i.useState(1),[p,r]=i.useState(5),[l,h]=i.useState(!1),d=()=>{window.location.href="/portfolio"};i.useEffect(()=>{const e=()=>{const o=window.innerWidth;h(o<1024),o>=1024&&o<=1439?r(4):o>=1024&&r(5)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const m=c.slice(0,p);return t.jsxs("div",{className:"bg-paper",style:{paddingTop:"4rem",paddingBottom:"4rem"},children:[t.jsx("div",{style:{marginBottom:"3rem",textAlign:"center"},children:t.jsx("h2",{className:"text-black font-bold text-2xl md:text-3xl lg:text-4xl",children:"OUR GALLERY"})}),l&&t.jsxs("div",{style:{width:"100%",paddingLeft:"1rem",paddingRight:"1rem"},children:[t.jsx("style",{children:`
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
          `}),t.jsx("div",{className:"photo-gallery-grid",children:c.map(e=>t.jsxs("div",{className:"photo-gallery-item shadow-md hover:shadow-xl transition-shadow duration-300",onClick:d,children:[t.jsx("img",{src:e.src,alt:"Gallery",loading:"lazy",decoding:"async"}),t.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0)",transition:"background 0.3s ease"},className:"hover:bg-black/20"})]},e.id))})]}),!l&&t.jsx("div",{className:"flex items-center justify-center h-100 md:h-125 overflow-hidden",style:{gap:"1rem",width:"90%",margin:"0 auto"},children:m.map(e=>t.jsxs(n.div,{layout:!0,initial:{borderRadius:20},animate:{width:s===e.id?"1000px":"600px"},transition:{type:"spring",stiffness:300,damping:30},onHoverStart:()=>a(e.id),onHoverEnd:()=>a(1),onClick:d,className:"relative h-full cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300",style:{borderRadius:"20px"},children:[t.jsx("img",{src:e.src,alt:e.title,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy",decoding:"async"}),s===e.id&&t.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent text-white",style:{padding:"1.5rem"},children:t.jsx("h3",{className:"text-lg md:text-xl font-bold",children:e.title})})]},e.id))})]})};export{b as default};
