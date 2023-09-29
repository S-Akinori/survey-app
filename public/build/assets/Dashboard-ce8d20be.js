import{r as h,j as e,W as A,a as M,d as C}from"./app-9e917366.js";import{A as P}from"./AuthenticatedLayout-9331813d.js";import{b as N,R as U,a as b}from"./Box-d2111b3b.js";import{B as x}from"./Button-b59f34ca.js";import{g as $,s as B,u as F,b as k,_ as v,d as E,e as L,C as W}from"./Container-e4ce7998.js";import{F as V,P as G}from"./FormControl-216cb880.js";import{F as f}from"./FormGroup-cabb07a2.js";import{g as H}from"./TransitionGroupContext-3e979719.js";import{T as I,a as O,b as w,c as i,d as X}from"./TableRow-131c4002.js";/* empty css            */import"./ApplicationLogo-ddcb6c43.js";import"./ResponsiveNavLink-ed57d4d8.js";import"./transition-be0c4330.js";import"./NavLink-6b6e3aff.js";import"./createSvgIcon-d6344585.js";import"./createChainedFunction-0bab83cf.js";import"./useId-48ec746f.js";import"./useFormControl-6cbd0d8c.js";import"./ButtonBase-a0ce1ce5.js";import"./Typography-e5409ff6.js";import"./extendSxProp-d0adccf7.js";function q(r){return $("MuiTableContainer",r)}H("MuiTableContainer",["root"]);const z=["className","component"],J=r=>{const{classes:s}=r;return L({root:["root"]},q,s)},K=B("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(r,s)=>s.root})({width:"100%",overflowX:"auto"}),Q=h.forwardRef(function(s,o){const n=F({props:s,name:"MuiTableContainer"}),{className:d,component:p="div"}=n,m=k(n,z),t=v({},n,{component:p}),u=J(t);return e.jsx(K,v({ref:o,as:p,className:E(u.root,d),ownerState:t},m))}),Y=Q,_=(r,s)=>r===0?-1:Math.floor(s*1e3/r)/10;function Ne({auth:r,clientData:s,target:o="all",total:n,answerTotal:d}){const m=new URLSearchParams(window.location.search).get("user_id"),{data:t,setData:u,get:T,post:Z}=A({target:o,user_id:m??""}),[g,y]=h.useState([]),[D,R]=h.useState([]);h.useEffect(()=>{const a=s.data.filter(l=>l.responses.length>=2),c=s.data.filter(l=>l.responses.length<2);y(a),R(c)},[]);const S=a=>{a.preventDefault(),console.log(t),T(route("dashboard",{target:t.target,user_id:t.user_id}))},j=a=>{const c={...t,target:a.target.value};u(c)};return e.jsxs(P,{user:r.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:r.user.name}),children:[e.jsx(M,{title:"クライアント管理者ダッシュボード"}),e.jsx(W,{className:"py-12",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"pb-12",children:e.jsx("div",{className:"flex justify-center max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答状況"}),e.jsxs(N,{className:"text-center",children:[_(n,d)!==-1?_(n,d):"-","%"]})]}),e.jsxs("div",{className:"md:flex items-center px-4 mb-4",children:[e.jsx("div",{className:"md:pr-2 font-bold text-center",children:"回答数"}),e.jsxs(N,{className:"text-center",children:[d,"名 / ",n,"名"]})]})]})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("form",{onSubmit:S,children:e.jsxs(V,{children:[e.jsxs(U,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",row:!0,children:[e.jsx(f,{value:"all",control:e.jsx(b,{onChange:j}),checked:t.target==="all",label:"全員"}),e.jsx(f,{value:"no-answer",control:e.jsx(b,{onChange:j}),checked:t.target==="no-answer",label:"未回答"}),e.jsx(f,{value:"answer",control:e.jsx(b,{onChange:j}),checked:t.target==="answer",label:"回答済"})]}),e.jsx("div",{className:"text-center",children:e.jsx(x,{children:"抽出"})})]})})}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{style:{maxWidth:"650px"},className:"mx-auto",children:[e.jsx(Y,{component:G,children:e.jsxs(I,{"aria-label":"simple table",children:[e.jsx(O,{children:e.jsxs(w,{children:[e.jsx(i,{children:"NO."}),e.jsx(i,{children:"従業員ID"}),e.jsx(i,{children:"回答状況"})]})}),e.jsx(X,{children:s&&s.data.map((a,c)=>e.jsxs(w,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(i,{scope:"row",children:s.from+c}),e.jsx(i,{children:a.client_id}),e.jsx(i,{className:g.some(l=>l.id===a.id)?"":"bg-main text-main-cont",children:g.some(l=>l.id===a.id)?"回答済":"未回答"})]},a.id))})]})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[(s==null?void 0:s.prev_page_url)&&e.jsx(x,{className:"mr-auto",children:e.jsx(C,{href:`/dashboard?target=${o}&page=${s.current_page-1}`,children:"前へ"})}),(s==null?void 0:s.next_page_url)&&e.jsx(x,{className:"ml-auto",children:e.jsx(C,{href:`/dashboard?target=${o}&page=${s.current_page+1}`,children:"次へ"})})]})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(x,{children:e.jsx("a",{href:route("download",{target:o,client_user_id:m??r.user.id}),children:"CSVダウンロード"})})})]})})]})}export{Ne as default};