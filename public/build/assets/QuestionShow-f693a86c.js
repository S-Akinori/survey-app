import{j as e,d}from"./app-a4572963.js";import{A as n}from"./AdminAuthenticatedLayout-4ab4c41f.js";import{B as o,R as c,F as l,a as r}from"./Box-854a3c54.js";import{B as x}from"./Button-3c6288fb.js";import{T as p}from"./Title-75dc6764.js";import{C as j}from"./Container-9b211f08.js";import{F as s}from"./FormControl-7541748e.js";import{T as m,S as h}from"./TextField-b7274c19.js";import{M as b}from"./MenuItem-4bda5acd.js";/* empty css            */import"./ApplicationLogo-ce619a94.js";import"./ResponsiveNavLink-23c797fe.js";import"./transition-7b2c1dd7.js";import"./NavLink-c3ecd870.js";import"./TransitionGroupContext-a1f8d4e5.js";import"./Typography-b56bd7bc.js";import"./extendSxProp-29de57aa.js";import"./ButtonBase-0f112f02.js";import"./createSvgIcon-8975dca7.js";import"./Modal-4a4ef9f9.js";import"./debounce-517eeb3c.js";const G=({question:t,auth:i})=>(console.log(t),e.jsx(n,{user:i.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:i.user.name}),children:e.jsxs(j,{className:"py-12",children:[e.jsx("div",{className:"mb-4",children:e.jsx(p,{title:t.title,Tag:"h3",className:"bg-main text-main-cont p-4"})}),t.description&&e.jsx("div",{children:t.description}),t.type==="scale"&&t.scale&&e.jsxs("div",{children:[e.jsxs("div",{className:"md:flex justify-between",children:[e.jsxs(o,{children:["A: ",t.scale.min_text]}),e.jsxs(o,{children:["B: ",t.scale.max_text]})]}),e.jsx(s,{sx:{width:"100%"},children:e.jsxs(c,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",sx:{justifyContent:"space-between"},children:[e.jsx(l,{value:"1",control:e.jsx(r,{}),label:"Aに近い",labelPlacement:"bottom"}),e.jsx(l,{value:"2",control:e.jsx(r,{}),label:"Aにやや近い",labelPlacement:"bottom"}),e.jsx(l,{value:"3",control:e.jsx(r,{}),label:"Bにやや近い",labelPlacement:"bottom"}),e.jsx(l,{value:"4",control:e.jsx(r,{}),label:"Bに近い",labelPlacement:"bottom"})]})})]}),t.type==="text"&&e.jsx("div",{children:e.jsx(m,{type:"text",variant:"outlined",fullWidth:!0})}),t.type==="textarea"&&e.jsx("div",{children:e.jsx(m,{type:"text",variant:"outlined",fullWidth:!0,multiline:!0,rows:4})}),t.type==="dropdown"&&e.jsx("div",{children:e.jsx(s,{fullWidth:!0,children:e.jsx(h,{labelId:"type",id:"type",name:"type",defaultValue:t.choices&&t.choices[0].value,children:t.choices&&t.choices.map((a,u)=>e.jsx(b,{value:a.value,children:a.title},a.id))})})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(x,{children:e.jsx(d,{href:route("admin.question.edit",{id:t.id}),children:"編集"})})})]})}));export{G as default};