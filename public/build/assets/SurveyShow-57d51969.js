import{j as e}from"./app-5f589031.js";import{T as l}from"./Title-7e87e2e5.js";import{B as o,R as x,F as a,a as r}from"./Box-a357065b.js";import{C as c}from"./ClientAuthenticatedLayout-af3b41e7.js";import{C as p}from"./Container-2f4ee760.js";import{F as b}from"./FormControl-71e71947.js";import{T as d}from"./TextField-405cba1b.js";/* empty css            */import"./generateUtilityClasses-bac150be.js";import"./useFormControl-949a0024.js";import"./extendSxProp-d77c54f9.js";import"./ButtonBase-c2d6580b.js";import"./ApplicationLogo-264b62e8.js";import"./ResponsiveNavLink-b079cff9.js";import"./transition-ae5979ad.js";import"./InputLabel-75b86061.js";import"./Modal-58511cf6.js";const S=({auth:i,survey:m})=>(console.log(m),e.jsx(c,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:i.user.name}),children:e.jsx(p,{className:"py-12",children:e.jsx("div",{children:m.forms.map(s=>e.jsxs("div",{children:[e.jsx(l,{title:s.title,Tag:"h3",className:"p-4 mb-4 bg-main text-main-cont"}),e.jsx("div",{children:s.questions.map((t,n)=>e.jsxs("div",{className:"mb-16",children:[t.type==="scale"&&t.scale&&e.jsxs("div",{children:[n===0&&e.jsx(l,{title:t.title,Tag:"h4",className:"py-4 mb-4 border-b-2 border-main"}),e.jsxs("div",{className:"mb-20",children:[e.jsxs("div",{className:"md:flex justify-between",children:[e.jsxs(o,{children:["A: ",t.scale.min_text]}),e.jsxs(o,{children:["B: ",t.scale.max_text]})]}),e.jsx(b,{sx:{width:"100%"},children:e.jsxs(x,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",sx:{justifyContent:"space-between"},children:[e.jsx(a,{value:"1",control:e.jsx(r,{}),label:"Aに近い",labelPlacement:"bottom"}),e.jsx(a,{value:"2",control:e.jsx(r,{}),label:"Aにやや近い",labelPlacement:"bottom"}),e.jsx(a,{value:"3",control:e.jsx(r,{}),label:"Bにやや近い",labelPlacement:"bottom"}),e.jsx(a,{value:"4",control:e.jsx(r,{}),label:"Bに近い",labelPlacement:"bottom"})]})})]})]}),t.type==="text"&&e.jsxs("div",{children:[e.jsx(l,{title:t.title,Tag:"h4",className:"py-4 mb-4 border-b-2 border-main"}),e.jsx(d,{id:t.name,type:"text",name:t.name,variant:"outlined",fullWidth:!0})]}),t.type==="textarea"&&e.jsxs("div",{children:[e.jsx(l,{title:t.title,Tag:"h4",className:"py-4 mb-4 border-b-2 border-main"}),e.jsx(d,{id:t.name,type:"text",name:t.name,variant:"outlined",fullWidth:!0,multiline:!0,rows:4})]})]},t.id))})]},s.id))})})}));export{S as default};
