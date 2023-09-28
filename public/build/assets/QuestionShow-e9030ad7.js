import{j as e,d}from"./app-4f82b0e4.js";import{A as n}from"./AdminAuthenticatedLayout-84ba29d1.js";import{B as o,R as c,a as l}from"./Box-c7d9df57.js";import{B as x}from"./Button-da35b2ad.js";import{T as p}from"./Title-fba803c6.js";import{C as j}from"./Container-0be971ac.js";import{F as s}from"./FormControl-c96980f6.js";import{F as r}from"./FormGroup-194312ea.js";import{T as m,S as h}from"./TextField-4a65b5bc.js";import{M as b}from"./MenuItem-ede2426c.js";/* empty css            */import"./ApplicationLogo-7ea86ccd.js";import"./ResponsiveNavLink-2e581132.js";import"./transition-e081431a.js";import"./NavLink-f958907b.js";import"./createSvgIcon-13a2b7bc.js";import"./TransitionGroupContext-989dc25a.js";import"./ButtonBase-98b20cb1.js";import"./Typography-84eedc62.js";import"./extendSxProp-ecfa9a45.js";import"./Modal-5bbf1b40.js";import"./debounce-517eeb3c.js";const Q=({question:t,auth:i})=>(console.log(t),e.jsx(n,{user:i.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:i.user.name}),children:e.jsxs(j,{className:"py-12",children:[e.jsx("div",{className:"mb-4",children:e.jsx(p,{title:t.title,Tag:"h3",className:"bg-main text-main-cont p-4"})}),t.description&&e.jsx("div",{children:t.description}),t.type==="scale"&&t.scale&&e.jsxs("div",{children:[e.jsxs("div",{className:"md:flex justify-between",children:[e.jsxs(o,{children:["A: ",t.scale.min_text]}),e.jsxs(o,{children:["B: ",t.scale.max_text]})]}),e.jsx(s,{sx:{width:"100%"},children:e.jsxs(c,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",sx:{justifyContent:"space-between"},children:[e.jsx(r,{value:"1",control:e.jsx(l,{}),label:"Aに近い",labelPlacement:"bottom"}),e.jsx(r,{value:"2",control:e.jsx(l,{}),label:"Aにやや近い",labelPlacement:"bottom"}),e.jsx(r,{value:"3",control:e.jsx(l,{}),label:"Bにやや近い",labelPlacement:"bottom"}),e.jsx(r,{value:"4",control:e.jsx(l,{}),label:"Bに近い",labelPlacement:"bottom"})]})})]}),t.type==="text"&&e.jsx("div",{children:e.jsx(m,{type:"text",variant:"outlined",fullWidth:!0})}),t.type==="textarea"&&e.jsx("div",{children:e.jsx(m,{type:"text",variant:"outlined",fullWidth:!0,multiline:!0,rows:4})}),t.type==="dropdown"&&e.jsx("div",{children:e.jsx(s,{fullWidth:!0,children:e.jsx(h,{labelId:"type",id:"type",name:"type",defaultValue:t.choices&&t.choices[0].value,children:t.choices&&t.choices.map((a,f)=>e.jsx(b,{value:a.value,children:a.title},a.id))})})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(x,{children:e.jsx(d,{href:route("admin.question.edit",{id:t.id}),children:"編集"})})})]})}));export{Q as default};