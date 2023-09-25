import{r as p,j as e,W as A,a as E,d as N}from"./app-43cd903f.js";import{A as U}from"./AuthenticatedLayout-7e3e80fb.js";import{b as v,R as $,F as b,a as f}from"./Box-a7317b67.js";import{B as h}from"./Button-6417ca49.js";import{g as F,s as M,u as O,b as P,_ as w,d as B,e as L,C as W}from"./Container-55d1794a.js";import{F as V,P as X}from"./FormControl-6ac6d0b1.js";import{g as q}from"./TransitionGroupContext-f2fe4458.js";import{T as G,a as H,b as y,c as i,d as I}from"./TableRow-d68c45d2.js";/* empty css            */import"./ApplicationLogo-f3a07fd7.js";import"./ResponsiveNavLink-28b078d5.js";import"./transition-90057ae7.js";import"./NavLink-7ad10272.js";import"./Typography-0a7322f9.js";import"./extendSxProp-9238cd14.js";import"./ButtonBase-679453af.js";import"./createSvgIcon-d1fe9af2.js";function J(t){return F("MuiTableContainer",t)}q("MuiTableContainer",["root"]);const K=["className","component"],z=t=>{const{classes:s}=t;return L({root:["root"]},J,s)},Q=M("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,s)=>s.root})({width:"100%",overflowX:"auto"}),Y=p.forwardRef(function(s,l){const d=O({props:s,name:"MuiTableContainer"}),{className:m,component:a="div"}=d,u=P(d,K),x=w({},d,{component:a}),g=z(x);return e.jsx(Q,w({ref:l,as:a,className:B(g.root,m),ownerState:x},u))}),Z=Y;function be({auth:t,clientData:s,target:l="all",total:d,answerTotal:m}){console.log(s);const{data:a,setData:u,get:x,post:g}=A({target:l}),[C,T]=p.useState([]),[D,R]=p.useState([]);p.useEffect(()=>{const o=s.data.filter(r=>r.responses.length>=2),n=s.data.filter(r=>r.responses.length<2);T(o),R(n)},[]);const _=o=>{o.preventDefault(),console.log(a),x(route("dashboard",{target:a.target}))},S=()=>{var n;console.log("downloading");const o=(n=document==null?void 0:document.querySelector('meta[name="csrf-token"]'))==null?void 0:n.getAttribute("content");console.log(o),fetch(route("download"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":o||""},body:JSON.stringify(a)}).then(r=>r.blob()).then(r=>{const k=window.URL.createObjectURL(r),c=document.createElement("a");c.href=k,c.download=`${t.user.name}.csv`,document.body.appendChild(c),c.click(),document.body.removeChild(c)}).catch(r=>console.error("Error:",r))},j=o=>{const n={target:o.target.value};u(n)};return e.jsxs(U,{user:t.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:t.user.name}),children:[e.jsx(E,{title:"クライアント管理者ダッシュボード"}),e.jsx(W,{className:"py-12",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"pb-12",children:e.jsx("div",{className:"flex justify-center max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答状況"}),e.jsxs(v,{className:"text-center",children:[Math.floor(m*100/d),"%"]})]}),e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答数"}),e.jsxs(v,{className:"text-center",children:[m,"名 / ",d,"名"]})]})]})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("form",{onSubmit:_,children:e.jsxs(V,{children:[e.jsxs($,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",row:!0,children:[e.jsx(b,{value:"all",control:e.jsx(f,{onChange:j}),checked:a.target==="all",label:"全員"}),e.jsx(b,{value:"no-answer",control:e.jsx(f,{onChange:j}),checked:a.target==="no-answer",label:"未回答"}),e.jsx(b,{value:"answer",control:e.jsx(f,{onChange:j}),checked:a.target==="answer",label:"回答済"})]}),e.jsx("div",{className:"text-center",children:e.jsx(h,{children:"抽出"})})]})})}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{style:{maxWidth:"650px"},className:"mx-auto",children:[e.jsx(Z,{component:X,children:e.jsxs(G,{"aria-label":"simple table",children:[e.jsx(H,{children:e.jsxs(y,{children:[e.jsx(i,{children:"NO."}),e.jsx(i,{children:"従業員ID"}),e.jsx(i,{children:"回答状況"})]})}),e.jsx(I,{children:s&&s.data.map((o,n)=>e.jsxs(y,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(i,{scope:"row",children:s.from+n}),e.jsx(i,{children:o.client_id}),e.jsx(i,{className:C.some(r=>r.id===o.id)?"":"bg-main text-main-cont",children:C.some(r=>r.id===o.id)?"回答済":"未回答"})]},o.id))})]})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[(s==null?void 0:s.prev_page_url)&&e.jsx(h,{className:"mr-auto",children:e.jsx(N,{href:`/dashboard?target=${l}&page=${s.current_page-1}`,children:"前へ"})}),(s==null?void 0:s.next_page_url)&&e.jsx(h,{className:"ml-auto",children:e.jsx(N,{href:`/dashboard?target=${l}&page=${s.current_page+1}`,children:"次へ"})})]})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(h,{onClick:S,children:"CSVダウンロード"})})]})})]})}export{be as default};