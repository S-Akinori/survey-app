import{W as j,j as e,a as f}from"./app-a4572963.js";import{B as g}from"./Button-3c6288fb.js";import{A as b}from"./AdminAuthenticatedLayout-4ab4c41f.js";import{I as d}from"./InputError-2a05d24b.js";import{C as v}from"./Container-9b211f08.js";import{T as p}from"./TextField-b7274c19.js";/* empty css            */import"./ApplicationLogo-ce619a94.js";import"./ResponsiveNavLink-23c797fe.js";import"./transition-7b2c1dd7.js";import"./NavLink-c3ecd870.js";import"./TransitionGroupContext-a1f8d4e5.js";import"./FormControl-7541748e.js";import"./createSvgIcon-8975dca7.js";import"./Modal-4a4ef9f9.js";import"./debounce-517eeb3c.js";const z=({auth:u,form:t})=>{var l,o,m,n;const{data:i,setData:r,post:N,put:c,processing:x,errors:a,reset:y}=j({title:t.title,description:t.description}),h=s=>{s.preventDefault(),console.log(i),c(route("admin.form.update",{id:t.id}))};return e.jsxs(b,{user:u.user,header:e.jsxs("h2",{className:"font-semibold leading-tight",children:[(o=(l=t.survey)==null?void 0:l.user)==null?void 0:o.company," | ",(n=(m=t.survey)==null?void 0:m.user)==null?void 0:n.name," 様"]}),children:[e.jsx(f,{title:"管理者ページ"}),e.jsxs(v,{className:"py-12",children:[e.jsx("h2",{className:"mb-4",children:"フォーム編集"}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(p,{id:"title",type:"text",name:"title",defaultValue:i.title,variant:"outlined",label:"タイトル",required:!0,onChange:s=>r("title",s.target.value),fullWidth:!0}),e.jsx(d,{message:a.title,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(p,{id:"description",type:"text",name:"description",defaultValue:i.description,label:"説明文",onChange:s=>r("description",s.target.value),multiline:!0,rows:3,fullWidth:!0}),e.jsx(d,{message:a.description,className:"mt-2"})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(g,{className:"ml-4",disabled:x,children:"保存"})})]})]})]})};export{z as default};