"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(72389),i=n(67392),l=n(7094),s=n(12466),u=n(86010);const c="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,o,m=e.lazy,d=e.block,v=e.defaultValue,f=e.values,b=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===v?v:null!=(t=null!=v?v:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,l.U)(),I=O.tabGroupChoices,N=O.setTabGroupChoices,T=(0,a.useState)(k),E=T[0],x=T[1],j=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=I[b];null!=P&&P!==E&&g.some((function(e){return e.value===P}))&&x(P)}var D=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==E&&(_(t),x(r),null!=b&&N(b,r))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:L,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),m?(0,a.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},29625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(9877),n(72360),n(67711),["components"]),l={id:"listitem_input",title:"ListItem.Input"},s=void 0,u={unversionedId:"components/listitem_input",id:"version-4.0.0-rc.2/components/listitem_input",title:"ListItem.Input",description:"This allows adding an Text Input within the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.Input.mdx",sourceDirName:"components",slug:"/components/listitem_input",permalink:"/docs/components/listitem_input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.Input.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem_input",title:"ListItem.Input"},sidebar:"docs",previous:{title:"ListItem.Content",permalink:"/docs/components/listitem_content"},next:{title:"ListItem.Subtitle",permalink:"/docs/components/listitem_subtitle"}},c={},p=[{value:"Props",id:"props",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This allows adding an Text Input within the ListItem.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/input#props"},"Input")," props."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"input#props"},"Input")," props."))))}d.isMDXComponent=!0}}]);