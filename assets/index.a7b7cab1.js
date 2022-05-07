import{c as E}from"./components.a5ab3779.js";import{d as N,a as g,o as z,ae as w,_ as P,f as u,h as m,C as D,E as h,D as p,H as F,i as k,J as s,K as i,n as a,ag as t,N as o,F as T,ac as U,A as V,G as M}from"./vue-router.esm-bundler.6886084b.js";import{I as B}from"./index.82b3e35e.js";import{R as G}from"./index.9f2ba667.js";import{A as c}from"./AppType.82e96ad0.js";import{S as L}from"./index.6be3c4d4.js";import{M as I}from"./index.e5f8fc54.js";import{B as y}from"./index.5bcd4e7f.js";import{C as x}from"./index.f38e73a7.js";import{d as H}from"./index.5d153c96.js";import{u as J,a as b,_ as K,b as O,c as Y}from"./en-US.3df2d949.js";import{a as j,b as q}from"./utils.254ad5e4.js";import"./elements.080427a4.js";import"./index.20e238cd.js";/* empty css               */import"./index.8c9e0d69.js";import"./zIndex.dba622ef.js";import"./lock.1297297d.js";function Q(e){return["left","center","right"].includes(e)}const W={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:Q},elevation:{type:Boolean,default:!0}};const{n:X,classes:Z}=E("app-bar"),tt=N({name:"VarAppBar",props:W,setup(e,{slots:n}){const d=g(),f=g(),v=()=>{d.value=n.left?0:void 0,f.value=n.right?0:void 0};return z(v),w(v),{n:X,classes:Z,paddingLeft:d,paddingRight:f}}});function et(e,n,d,f,v,_){return u(),m("div",{class:p(e.classes(e.n(),[e.elevation,"var-elevation--3"])),style:F({background:e.color,color:e.textColor})},[D("div",{class:p(e.n("left"))},[h(e.$slots,"left"),e.titlePosition==="left"?(u(),m("div",{key:0,class:p(e.n("title")),style:F({paddingLeft:e.paddingLeft})},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],6)):k("v-if",!0)],2),e.titlePosition==="center"?(u(),m("div",{key:0,class:p(e.n("title"))},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],2)):k("v-if",!0),D("div",{class:p(e.n("right"))},[e.titlePosition==="right"?(u(),m("div",{key:0,class:p(e.n("title")),style:F({paddingRight:e.paddingRight})},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],6)):k("v-if",!0),h(e.$slots,"right")],2)],6)}var r=P(tt,[["render",et]]);r.install=function(e){e.component(r.name,r)};var at={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},ot={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:R,use:lt,pack:l,packs:kt,merge:Ct}=J(),st=e=>{Y(e),lt(e)};b("zh-CN",K);b("en-US",O);R("zh-CN",at);R("en-US",ot);const it=D("div",{class:"var-app-var--example-space"},null,-1),Tt={setup(e){const n=g(!1),d=g([]),f=g("#fff"),v=()=>{L({content:l.value.search,position:"top"})},_=()=>{L({content:l.value.goBack,position:"top"})},$=()=>{d.value=[{label:l.value.options1,value:"menu1"},{label:l.value.options2,value:"menu2"}],n.value=!0};return j(S=>{st(S),n.value=!1}),q(H,S=>{f.value=S==="darkThemes"?"#272727":"#fff"}),(S,C)=>(u(),m(T,null,[a(t(c),null,{default:o(()=>[s(i(t(l).basicAppBar),1)]),_:1}),a(t(r),{title:t(l).title},null,8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).customStyle),1)]),_:1}),a(t(r),{title:t(l).title,"title-position":"center",color:"#00c48f"},null,8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addSlotsAtTitle),1)]),_:1}),a(t(r),null,{default:o(()=>[s(i(t(l).addTheTitleFromTheSlot),1)]),_:1}),a(t(c),null,{default:o(()=>[s(i(t(l).addLeftSlot),1)]),_:1}),a(t(r),{title:t(l).title,"title-position":"center"},{left:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:_},{default:o(()=>[a(t(B),{name:"chevron-left",size:24})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addRightSlot),1)]),_:1}),a(t(r),{title:t(l).title},{right:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:v},{default:o(()=>[a(t(B),{name:"magnify",size:24})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addLeftAndRightSlot),1)]),_:1}),a(t(r),{title:t(l).title},{left:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:_},{default:o(()=>[a(t(B),{name:"chevron-left",size:24})]),_:1})]),right:o(()=>[a(t(I),{"offset-y":42,"offset-x":-20,show:n.value,"onUpdate:show":C[0]||(C[0]=A=>n.value=A)},{menu:o(()=>[D("div",{class:"var-app-var--example-menu-list",style:F({background:f.value})},[(u(!0),m(T,null,U(d.value,A=>V((u(),M(t(x),{class:"var-app-var--example-menu-cell",key:A.value},{default:o(()=>[s(i(A.label),1)]),_:2},1024)),[[t(G)]])),128))],4)]),default:o(()=>[a(t(y),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:$},{default:o(()=>[a(t(B),{name:"menu",size:24})]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),it],64))}};export{Tt as default};
