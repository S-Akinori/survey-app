import{W as p,r as d,j as s,a as l}from"./app-9ca37bac.js";import{G as c}from"./GuestLayout-4057aa56.js";import{I as u}from"./InputError-3e6ac471.js";import{I as f}from"./InputLabel-0dc7ae0d.js";import{P as x}from"./PrimaryButton-379bd9ac.js";import{T as w}from"./TextInput-5fc2d190.js";/* empty css            */import"./ApplicationLogo-90f10ee8.js";function I(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=p({password:""});d.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{title:"パスワード確認",children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(u,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ml-4",disabled:o,children:"Confirm"})})]})]})}export{I as default};