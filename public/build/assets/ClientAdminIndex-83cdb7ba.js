import{j as e,a as m,d as i}from"./app-6f6137c6.js";import{A as h}from"./AdminAuthenticatedLayout-c1adadf6.js";import{B as p}from"./Button-c438adee.js";import{T as x}from"./Title-18e6a296.js";import{C as j}from"./Container-b985508a.js";/* empty css            */import"./ApplicationLogo-fe943146.js";import"./ResponsiveNavLink-43ba90b5.js";import"./transition-c815cc43.js";import"./NavLink-ecee6e5b.js";const A=({users:o,auth:s})=>{console.log(o);const d=t=>{var a;const c=(a=document==null?void 0:document.querySelector('meta[name="csrf-token"]'))==null?void 0:a.getAttribute("content");fetch(route("answers.download"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":c||""},body:JSON.stringify({user_id:t})}).then(n=>n.blob()).then(n=>{const l=window.URL.createObjectURL(n),r=document.createElement("a");r.href=l,r.download=`${s.user.name}-answers.csv`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}).catch(n=>console.error("Error:",n))};return e.jsxs(h,{user:s.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:s.user.name}),children:[e.jsx(m,{title:"クライアント一覧"}),e.jsxs(j,{className:"py-14",children:[e.jsx(x,{title:"クライアント一覧",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"}),e.jsx("ul",{className:"mb-4",children:o.map(t=>e.jsxs("li",{className:"py-4 border-b flex justify-between",children:[e.jsxs(i,{href:route("admin.users.show",{id:t.id}),children:[t.company," : ",t.name]}),e.jsxs("div",{children:[e.jsx("a",{target:"_blank",href:route("dashboard",{user_id:t.id}),className:"pr-4",children:"回答状況"}),e.jsx(i,{href:route("admin.clientAdmin.edit",{id:t.id}),className:"pr-4",children:"編集"}),e.jsx("button",{onClick:()=>d(t.id),className:"pr-4",children:"csv"}),e.jsx("a",{target:"_blank",href:route("admin.client.survey.show",{id:t.surveys[0].id}),className:"pr-4",children:"アンケート表示"})]})]},t.id))}),e.jsx("div",{children:e.jsx(p,{children:e.jsx(i,{href:route("admin.client.register"),children:"新規クライアント登録"})})})]})]})};export{A as default};