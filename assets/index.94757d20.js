import{A as q}from"./AppType.82e96ad0.js";import{d as re,a as M,e as W,w as Q,_ as le,f as R,h as D,C as L,D as p,H as Z,F as ee,ac as ae,K as z,i as x,r as ne,l as pe,n as P,N as Y,G as Te,T as Ue,ag as d,J as G}from"./vue-router.esm-bundler.6886084b.js";import{d as j}from"./index.fa127700.js";import{t as h,c as ie,a as ue}from"./components.a5ab3779.js";import{d as Ve}from"./index.5d153c96.js";import{u as Ie,a as me,_ as Ae,b as Ne,c as Be}from"./en-US.3df2d949.js";import{a as Pe,b as Fe}from"./utils.254ad5e4.js";const F=["12","1","2","3","4","5","6","7","8","9","10","11"],V=["00","13","14","15","16","17","18","19","20","21","22","23"],se=["00","05","10","15","20","25","30","35","40","45","50","55"];function Re(e){return["ampm","24hr"].includes(e)}const De={modelValue:{type:String},shadow:{type:Boolean,default:!1},color:{type:String},headerColor:{type:String},format:{type:String,default:"ampm",validator:Re},allowedTime:{type:Object},min:{type:String},max:{type:String},useSeconds:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},"onUpdate:modelValue":{type:Function},onChange:{type:Function}},de=(e,n)=>e==="24hr"||n==="am",te=(e,n,$)=>{const c=F.findIndex(u=>h(u)===h($)),v=de(e,n)?$:V[c];return{hourStr:v,hourNum:h(v)}},A=e=>{const[n,$,c]=e.split(":");return{hour:h(n),minute:h($),second:h(c)}},ce=e=>{var H,I;const{time:n,format:$,ampm:c,hour:v,max:u,min:o,disableHour:i}=e,{hourStr:E,hourNum:N}=te($,c,v);let C=!1,T=!1;if(i.includes(E))return!0;if(u&&!o){const{hour:B,minute:t}=A(u);C=B===N&&n>t}if(!u&&o){const{hour:B,minute:t}=A(o);C=B===N&&n<t}if(u&&o){const{hour:B,minute:t}=A(u),{hour:a,minute:l}=A(o);C=a===N&&n<l||B===N&&n>t}return(H=e.allowedTime)!=null&&H.minutes&&(T=(I=e.allowedTime)==null?void 0:I.minutes(n)),C||T},fe=e=>{var I,B;const{time:n,format:$,ampm:c,hour:v,minute:u,max:o,min:i,disableHour:E}=e,{hourStr:N,hourNum:C}=te($,c,v);let T=!1,H=!1;if(E.includes(N))return!0;if(o&&!i){const{hour:t,minute:a,second:l}=A(o);T=t===C&&a<u||a===u&&n>l}if(!o&&i){const{hour:t,minute:a,second:l}=A(i);T=t===C&&a>u||a===u&&n>l}if(o&&i){const{hour:t,minute:a,second:l}=A(o),{hour:r,minute:g,second:k}=A(i);T=t===C&&a<u||r===C&&g>u||t===C&&a===u&&n>l||r===C&&g===u&&n<k}return(I=e.allowedTime)!=null&&I.seconds&&(H=(B=e.allowedTime)==null?void 0:B.seconds(n)),T||H},{n:ze,classes:Le}=ie("time-picker"),Ee=re({name:"Clock",props:{isInner:{type:Boolean,required:!0},rad:{type:Number},format:{type:String,default:"ampm"},allowedTime:{type:Object},time:{type:Object,required:!0},useSeconds:{type:Boolean,default:!1},preventNextUpdate:{type:Boolean,default:!1},type:{type:String,default:"hour"},ampm:{type:String,default:"am"},color:{type:String},min:{type:String},max:{type:String}},emits:["update","change-prevent-update"],setup(e,{emit:n}){const $=M(null),c=M([]),v=M([]),u=W(()=>({transform:`rotate(${h(e.rad)}deg)`,height:e.isInner&&e.type==="hour"?"calc(50% - 40px)":"calc(50% - 4px)",backgroundColor:N(),borderColor:N()})),o=W(()=>{if(e.rad===void 0)return;const t=e.rad/30;return t>=0?t:t+12}),i=W(()=>e.type==="hour"?F:se),E=(t,a)=>{t=t!=null?t:e.type==="minute"?e.time.minute:e.time.second;const l=e.type==="minute"?ce:fe,r={time:h(t),format:e.format,ampm:e.ampm,hour:e.time.hour,minute:h(e.time.minute),max:e.max,min:e.min,allowedTime:e.allowedTime,disableHour:c.value};return a&&e.type==="minute"&&Reflect.deleteProperty(r,"minute"),l(r)},N=()=>{if(o.value===void 0)return e.color;const t=e.isInner?V[o.value]:i.value[o.value];return i.value===se?E()?"#bdbdbd":e.color:T(t)?"#bdbdbd":e.color},C=(t,a)=>a?o.value===t&&e.isInner:o.value===t&&(!e.isInner||e.type!=="hour"),T=t=>{if(e.type==="hour"){if(de(e.format,e.ampm))return c.value.includes(t);const a=F.findIndex(l=>l===t);return v.value.includes(a)}return E(t,!0)},H=(t,a,l)=>{const r=2*Math.PI/12*t-Math.PI/2,g=50*(1+Math.cos(r)),k=50*(1+Math.sin(r)),y=()=>C(t,l)?T(a)?{backgroundColor:"#bdbdbd",color:"#fff"}:{backgroundColor:e.color,color:void 0}:{backgroundColor:void 0,color:void 0},{backgroundColor:U,color:_}=y();return{left:`${g}%`,top:`${k}%`,backgroundColor:U,color:_}},I=()=>{const{width:t,height:a}=$.value.getBoundingClientRect();return{width:t,height:a}},B=()=>o.value===void 0?void 0:(e.ampm==="am"?F:V)[o.value].padStart(2,"0");return Q([o,()=>e.isInner],([t,a],[l,r])=>{if(t===l&&a===r||e.type!=="hour"||o.value===void 0)return;const k=a?V[o.value]:B(),y=e.useSeconds?`:${e.time.second}`:"",U=`${k}:${e.time.minute}${y}`;e.preventNextUpdate||n("update",U),n("change-prevent-update")}),Q(()=>e.rad,(t,a)=>{if(e.type==="hour"||t===void 0||a===void 0)return;const l=t/6>=0?t/6:t/6+60,r=a/6>=0?a/6:a/6+60;if(l===r)return;let g;const{hourStr:k}=te(e.format,e.ampm,e.time.hour);if(e.type==="minute"){const y=j().minute(l).format("mm"),U=e.useSeconds?`:${e.time.second}`:"";g=`${k}:${y}${U}`}if(e.type==="second"){const y=j().second(l).format("ss"),U=e.useSeconds?`:${y}`:"";g=`${k}:${e.time.minute}${U}`}n("update",g)}),Q([()=>e.max,()=>e.min,()=>e.allowedTime],([t,a,l])=>{if(c.value=[],t&&!a){const{hour:r}=A(t),g=F.filter(y=>h(y)>r),k=V.filter(y=>h(y)>r);c.value=[...g,...k]}if(!t&&a){const{hour:r}=A(a),g=F.filter(y=>h(y)<r),k=V.filter(y=>h(y)<r);c.value=[...g,...k]}if(t&&a){const{hour:r}=A(t),{hour:g}=A(a),k=F.filter(U=>h(U)<g||h(U)>r),y=V.filter(U=>h(U)<g||h(U)>r);c.value=[...k,...y]}if(l!=null&&l.hours){const{hours:r}=l,g=F.filter(y=>!r(h(y))),k=V.filter(y=>!r(h(y)));c.value=[...new Set([...c.value,...g,...k])]}v.value=c.value.map(r=>V.findIndex(g=>r===g)).filter(r=>r>=0)},{immediate:!0}),{n:ze,classes:Le,hours24:V,timeScales:i,inner:$,handStyle:u,disableHour:c,isActive:C,isDisable:T,getSize:I,getStyle:H,activeItemIndex:o}}});function je(e,n,$,c,v,u){return R(),D("div",{class:p(e.n("clock"))},[L("div",{class:p(e.n("clock-hand")),style:Z(e.handStyle)},null,6),(R(!0),D(ee,null,ae(e.timeScales,(o,i)=>(R(),D("div",{class:p(e.classes(e.n("clock-item"),[e.isActive(i,!1),e.n("clock-item--active")],[e.isDisable(o),e.n("clock-item--disable")])),key:o,style:Z(e.getStyle(i,o,!1))},z(o),7))),128)),e.format==="24hr"&&e.type==="hour"?(R(),D("div",{key:0,class:p(e.n("clock-inner")),ref:"inner"},[(R(!0),D(ee,null,ae(e.hours24,(o,i)=>(R(),D("div",{class:p(e.classes(e.n("clock-item"),[e.isActive(i,!0),e.n("clock-item--active")],[e.isDisable(o),e.n("clock-item--disable")])),key:o,style:Z(e.getStyle(i,o,!0))},z(o),7))),128))],2)):x("v-if",!0)],2)}var Oe=le(Ee,[["render",je]]);const{n:Xe,classes:Ye}=ie("time-picker"),qe=re({name:"VarTimePicker",components:{Clock:Oe},props:De,setup(e){const n=M(null),$=M(null),c=M(null),v=M(!1),u=M(!1),o=M(!1),i=M(!1),E=M(!1),N=M(void 0),C=M(0),T=M(0),H=M("hour"),I=M("am"),B=M(!1),t=M(!1),a=M({hour:"00",minute:"00",second:"00"}),l=ne({x:0,y:0}),r=ne({x:[],y:[]}),g=W(()=>H.value==="hour"?N.value:H.value==="minute"?C.value:T.value),k=s=>{ue(e["onUpdate:modelValue"],s),ue(e.onChange,s)},y=s=>s*57.29577951308232,U=s=>{i.value=!1,t.value=!1,H.value=s},_=s=>{const{disableHour:m}=c.value,f=F.findIndex(S=>h(S)===h(a.value.hour)),b=s==="am"?F:V;return[...b.slice(f),...b.slice(0,f)].find((S,X)=>(u.value=X!==0,!m.includes(S)))},he=s=>{if(e.readonly)return;I.value=s;const m=_(s);if(!m)return;const f=e.useSeconds?`:${a.value.second}`:"",b=`${m.padStart(2,"0")}:${a.value.minute}${f}`;k(b)},oe=(s,m)=>{const f=s>=r.x[0]&&s<=r.x[1],b=m>=r.y[0]&&m<=r.y[1];return f&&b},ye=s=>{const m=e.format==="24hr"?"HH":"hh",{hour:f,minute:b,second:w}=A(s);return{hour:j().hour(f).format(m),minute:j().minute(b).format("mm"),second:j().second(w).format("ss")}},ge=s=>{const m=s/30;return m>=0?m:m+12},be=()=>{const{width:s,height:m}=c.value.getSize(),f=l.x-s/2-8,b=l.x+s/2+8,w=l.y-m/2-8,S=l.y+m/2+8;return{rangeXMin:f,rangeXMax:b,rangeYMin:w,rangeYMax:S}},Se=(s,m,f)=>{const{disableHour:b}=c.value;o.value=oe(s,m);const w=Math.round(f/30)*30+90,S=ge(w),X=v.value?F[S]:V[S];if(b.includes(X)||(v.value=e.format==="24hr"?oe(s,m):!1),v.value!==o.value)return;const K=v.value||I.value==="pm"?V[S]:F[S];B.value=b.includes(K),!B.value&&(N.value=w,i.value=!0)},He=s=>{const{disableHour:m}=c.value,f=Math.round(s/6)*6+90,w={time:f/6>=0?f/6:f/6+60,format:e.format,ampm:I.value,hour:a.value.hour,max:e.max,min:e.min,disableHour:m,allowedTime:e.allowedTime};t.value=ce(w),!t.value&&(C.value=f,E.value=!0)},ke=s=>{const{disableHour:m}=c.value,f=Math.round(s/6)*6+90,w={time:f/6>=0?f/6:f/6+60,format:e.format,ampm:I.value,hour:a.value.hour,minute:h(a.value.minute),max:e.max,min:e.min,disableHour:m,allowedTime:e.allowedTime};fe(w)||(T.value=f)},Me=()=>{const{left:s,top:m,width:f,height:b}=n.value.getBoundingClientRect();if(l.x=s+f/2,l.y=m+b/2,H.value==="hour"&&e.format==="24hr"){const{rangeXMin:w,rangeXMax:S,rangeYMin:X,rangeYMax:K}=be();r.x=[w,S],r.y=[X,K]}},Ce=s=>{if(s.preventDefault(),e.readonly)return;Me();const{clientX:m,clientY:f}=s.touches[0],b=m-l.x,w=f-l.y,S=Math.round(y(Math.atan2(w,b)));H.value==="hour"?Se(m,f,S):H.value==="minute"?He(S):ke(S)},we=()=>{if(!e.readonly){if(H.value==="hour"&&i.value){H.value="minute";return}H.value==="minute"&&e.useSeconds&&E.value&&(H.value="second")}},$e=()=>{u.value=!1};return Q(()=>e.modelValue,s=>{if(s){const{hour:m,minute:f,second:b}=A(s),w=j().hour(m).format("hh"),S=j().hour(m).format("HH"),X=j().minute(f).format("mm"),K=j().second(b).format("ss");N.value=(w==="12"?0:h(w))*30,C.value=h(X)*6,T.value=h(K)*6,a.value=ye(s),e.format!=="24hr"&&(I.value=`${m}`.padStart(2,"0")===S&&V.includes(S)?"pm":"am"),v.value=e.format==="24hr"&&V.includes(S)}},{immediate:!0}),{n:Xe,classes:Ye,getRad:g,time:a,container:n,inner:c,picker:$,isInner:v,type:H,ampm:I,isPreventNextUpdate:u,moveHand:Ce,checkPanel:U,checkAmpm:he,end:we,update:k,changePreventUpdate:$e}}}),Ge=L("span",null,":",-1),Je={key:0};function Ke(e,n,$,c,v,u){const o=pe("clock");return R(),D("div",{class:p(e.classes(e.n(),[e.shadow,"var-elevation--2"])),ref:"picker"},[L("div",{class:p(e.n("title")),style:Z({background:e.headerColor||e.color})},[L("div",{class:p(e.n("title-time"))},[L("div",{class:p(e.classes(e.n("title-btn"),[e.type==="hour",e.n("title-btn--active")])),onClick:n[0]||(n[0]=i=>e.checkPanel("hour"))},z(e.time.hour),3),Ge,L("div",{class:p(e.classes(e.n("title-btn"),[e.type==="minute",e.n("title-btn--active")])),onClick:n[1]||(n[1]=i=>e.checkPanel("minute"))},z(e.time.minute),3),e.useSeconds?(R(),D("span",Je,":")):x("v-if",!0),e.useSeconds?(R(),D("div",{key:1,class:p(e.classes(e.n("title-btn"),[e.type==="second",e.n("title-btn--active")])),onClick:n[2]||(n[2]=i=>e.checkPanel("second"))},z(e.time.second),3)):x("v-if",!0)],2),e.format==="ampm"?(R(),D("div",{key:0,class:p(e.n("title-ampm"))},[L("div",{class:p(e.classes(e.n("title-btn"),[e.ampm==="am",e.n("title-btn--active")])),onClick:n[3]||(n[3]=i=>e.checkAmpm("am"))},"AM",2),L("div",{class:p(e.classes(e.n("title-btn"),[e.ampm==="pm",e.n("title-btn--active")])),onClick:n[4]||(n[4]=i=>e.checkAmpm("pm"))},"PM",2)],2)):x("v-if",!0)],6),L("div",{class:p(e.n("body"))},[L("div",{class:p(e.n("clock-container")),onTouchstart:n[5]||(n[5]=(...i)=>e.moveHand&&e.moveHand(...i)),onTouchmove:n[6]||(n[6]=(...i)=>e.moveHand&&e.moveHand(...i)),onTouchend:n[7]||(n[7]=(...i)=>e.end&&e.end(...i)),ref:"container"},[P(Ue,{name:`${e.n()}-panel-fade`},{default:Y(()=>[(R(),Te(o,{key:e.type,ref:"inner",type:e.type,ampm:e.ampm,color:e.color,"is-inner":e.isInner,format:e.format,"allowed-time":e.allowedTime,rad:e.getRad,time:e.time,"prevent-next-update":e.isPreventNextUpdate,"use-seconds":e.useSeconds,max:e.max,min:e.min,onUpdate:e.update,onChangePreventUpdate:e.changePreventUpdate},null,8,["type","ampm","color","is-inner","format","allowed-time","rad","time","prevent-next-update","use-seconds","max","min","onUpdate","onChangePreventUpdate"]))]),_:1},8,["name"])],34)],2)],2)}var O=le(qe,[["render",Ke]]);O.install=function(e){e.component(O.name,O)};var We={basicUsage:"\u57FA\u672C\u4F7F\u7528",hour24:"24\u5C0F\u65F6\u683C\u5F0F",readonly:"\u53EA\u8BFB",timeLimit:"\u65F6\u95F4\u9650\u5236",custom:"\u81EA\u5B9A\u4E49",showSecond:"\u663E\u793A\u79D2"},Qe={basicUsage:"Basic Usage",hour24:"24hr Format",readonly:"Readonly",timeLimit:"Time Limit",custom:"Custom",showSecond:"show-seconds"};const{add:ve,use:Ze,pack:J,packs:sn,merge:rn}=Ie(),xe=e=>{Be(e),Ze(e)};me("zh-CN",Ae);me("en-US",Ne);ve("zh-CN",We);ve("en-US",Qe);const ln={setup(e){const n=ne({date:"11:20",date1:"15:10",date2:"07:10",date3:"07:10:12",date4:"05:10",date5:"17:36:22"}),$={hours:v=>v%2===0,minutes:v=>v%15!==0,seconds:v=>v%2!==0},c=v=>{console.log(v)};return Pe(xe),Fe(Ve),(v,u)=>(R(),D(ee,null,[P(d(q),null,{default:Y(()=>[G(z(d(J).basicUsage),1)]),_:1}),P(d(O),{modelValue:d(n).date,"onUpdate:modelValue":u[0]||(u[0]=o=>d(n).date=o)},null,8,["modelValue"]),P(d(q),null,{default:Y(()=>[G(z(d(J).hour24),1)]),_:1}),P(d(O),{modelValue:d(n).date1,"onUpdate:modelValue":u[1]||(u[1]=o=>d(n).date1=o),format:"24hr",shadow:""},null,8,["modelValue"]),P(d(q),null,{default:Y(()=>[G(z(d(J).showSecond),1)]),_:1}),P(d(O),{modelValue:d(n).date5,"onUpdate:modelValue":u[2]||(u[2]=o=>d(n).date5=o),format:"24hr","use-seconds":""},null,8,["modelValue"]),P(d(q),null,{default:Y(()=>[G(z(d(J).readonly),1)]),_:1}),P(d(O),{modelValue:d(n).date2,"onUpdate:modelValue":u[3]||(u[3]=o=>d(n).date2=o),readonly:"",shadow:""},null,8,["modelValue"]),P(d(q),null,{default:Y(()=>[G(z(d(J).timeLimit),1)]),_:1}),P(d(O),{modelValue:d(n).date3,"onUpdate:modelValue":u[4]||(u[4]=o=>d(n).date3=o),format:"24hr","use-seconds":"",min:"2:28:38",max:"19:40:22","allowed-time":$},null,8,["modelValue"]),P(d(q),null,{default:Y(()=>[G(z(d(J).custom),1)]),_:1}),P(d(O),{modelValue:d(n).date4,"onUpdate:modelValue":u[5]||(u[5]=o=>d(n).date4=o),shadow:"","header-color":"purple",color:"#7bb872",min:"2:28:38",max:"19:40:22",onChange:c},null,8,["modelValue"])],64))}};export{ln as default};
