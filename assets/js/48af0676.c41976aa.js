"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(o,".").concat(c)]||s[c]||p[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(72389),i=n(67392),u=n(7094),o=n(12466),d=n(86010);const m="tabList_uSqn",p="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,k=e.defaultValue,N=e.values,g=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=N?N:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,u.U)(),x=C.tabGroupChoices,w=C.setTabGroupChoices,T=(0,r.useState)(y),O=T[0],E=T[1],S=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=x[g];null!=P&&P!==O&&f.some((function(e){return e.value===P}))&&E(P)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==O&&(j(t),E(a),null!=g&&w(g,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":c},b)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:D,onClick:D},l,{className:(0,d.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},73130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>N,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(9877),u=n(72360),o=(n(67711),["components"]),d={id:"circularslider",title:"CircularSlider"},m=void 0,p={unversionedId:"universe/circularslider",id:"version-4.0.0-rc.2/universe/circularslider",title:"CircularSlider",description:"A slider with circular track and thumb",source:"@site/versioned_docs/version-4.0.0-rc.2/universe/CircularSlider.mdx",sourceDirName:"universe",slug:"/universe/circularslider",permalink:"/docs/universe/circularslider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/universe/CircularSlider.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"circularslider",title:"CircularSlider"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/universe"},next:{title:"Contributing",permalink:"/docs/contributing"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],k={toc:c};function N(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A slider with circular track and thumb"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"component",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"npm",mdxType:"TabItem"},"```bash npm install @rneui/circular-slider ```"),(0,l.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/circular-slider\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { CircularSlider } from "@rneui/circular-slider";\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<CircularSlider value={value} onChange={setValue} />\n\n<CircularSlider value={value} noThumb />\n\n<CircularSlider maxAngle={90} />\n")),(0,l.kt)("p",null,"Either use percentage (0 to 100) in value or specify maximumValue & minimumValue"),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maxAngle")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"359.9")),(0,l.kt)("td",{parentName:"tr",align:null},"Max angle in radians")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum value of the slider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minAngle")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Min angle in radians")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum value of the slider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"noThumb")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Show thumb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onChange")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(x) => x")),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for the value change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showText")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"show text on center of slider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showThumbText")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"show text on thumb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"textColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"color for text on center of slider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"textSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},"text size for text on center of slider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"color of the slider thumb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbRadius")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"12")),(0,l.kt)("td",{parentName:"tr",align:null},"Radius of the slider thumb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbTextColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"white")),(0,l.kt)("td",{parentName:"tr",align:null},"color of thumb text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbTextSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"text size of thumb text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trackColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"color of the slider track")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trackRadius")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"Radius of the slider track")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trackTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"color of the slider background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trackWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of the slider track")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"value of the slider"))))))}N.isMDXComponent=!0}}]);