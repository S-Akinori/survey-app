import{W as m,j as e,a as d}from"./app-43cd903f.js";import{G as c}from"./GuestLayout-e5922df6.js";import{I as u}from"./InputError-6bfc7141.js";import{I as p}from"./InputLabel-d93a75b3.js";import{T as x}from"./TextInput-73c31518.js";import{B as f}from"./Button-6417ca49.js";/* empty css            */import"./ApplicationLogo-f3a07fd7.js";function B({status:r,canResetPassword:j}){const{data:i,setData:s,post:a,processing:o,errors:l,reset:v}=m({client_id:"",password:"",remember:!1}),n=t=>{t.preventDefault(),s("password",i.client_id),a(route("client.login.store"))};return e.jsxs(c,{title:"Cultivate Survey",children:[e.jsx(d,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:n,children:[e.jsxs("div",{children:[e.jsx(p,{htmlFor:"client_id",value:"ID"}),e.jsx(x,{id:"id",name:"client_id",value:i.client_id,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:t=>s("client_id",t.target.value),onBlur:t=>s("password",t.target.value)}),e.jsx(u,{message:l.password,className:"mt-2"})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(f,{className:"ml-4",disabled:o,children:"ログイン"})})]})]})}export{B as default};