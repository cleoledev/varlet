import{_ as b,a as o,c as r,r as z,af as F,a6 as I,ar as L,l as B,aa as P,f as _,h as D,C as s,K as p,F as H,ac as T,A as q,G as E,N as V,n as G,J,k as K,a9 as M}from"./vue-router.esm-bundler.6886084b.js";const R={name:"AppHome",setup(){var i,f,g,C,x,k,w,y,N,A;const m=o((f=(i=r)==null?void 0:i.title)!=null?f:""),d=o((C=(g=r)==null?void 0:g.logo)!=null?C:""),v=o((w=(k=(x=r)==null?void 0:x.mobile)==null?void 0:k.title)!=null?w:{}),u=o((A=(N=(y=r)==null?void 0:y.pc)==null?void 0:N.menu)!=null?A:[]).value.filter(e=>e.type===2),h=z(u),a=o("zh-CN"),n=o("mobile"),l=F();return I(e=>{a.value=e}),L(e=>{n.value=e}),{components:h,lang:a,toComponent:e=>{l.push({path:`/${e.doc}`,query:{language:a.value,platform:n.value,replace:e.doc}}),!K()&&M()&&window.top.scrollToMenu(e.doc)},logo:d,title:m,description:v}}},S={class:"logo"},j={class:"varlet-home__title"},O=["src"],Q={class:"varlet-home__desc"};function U(m,d,v,t,u,h){const a=B("var-site-icon"),n=B("var-site-cell"),l=P("ripple");return _(),D(H,null,[s("div",S,[s("h1",j,[s("img",{class:"varlet-home__image",src:t.logo},null,8,O),s("span",null,p(t.title),1)]),s("h2",Q,p(t.description[t.lang]),1)]),(_(!0),D(H,null,T(t.components,c=>q((_(),E(n,{key:c.text,onClick:i=>t.toComponent(c)},{extra:V(()=>[G(a,{name:"chevron-right",size:"14"})]),default:V(()=>[J(p(c.text[t.lang]),1)]),_:2},1032,["onClick"])),[[l]])),128))],64)}var X=b(R,[["render",U],["__scopeId","data-v-24a8218c"]]);export{X as default};
