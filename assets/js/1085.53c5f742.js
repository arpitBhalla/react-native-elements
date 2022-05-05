"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1085],{4118:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(63366),n=a(67294),l=a(86010),i=a(5343),s=a(39960),c=a(95999);const o="sidebar_TMXw",m="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",p="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:g},e.title))})))))}var v=a(13102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return n.createElement(v.Zo,{component:E,props:e})}var b=a(87524);function Z(e){var t=e.sidebar,a=(0,b.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(h,{sidebar:t}):null}var _=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,r.Z)(e,_),o=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(Z,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},26244:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(67294),n=a(86010),l=a(95999),i=a(39960),s=a(44996),c=a(88824),o=a(18780),m=a(16810),u=a(86753);const d="blogPostTitle_rzP5",p="blogPostData_Zg1s",g="blogPostDetailsFull_h6_j";var h=a(20062);function v(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,s=t.email,c=l||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(v,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(v,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const f="authorCol_FlmR",b="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?b:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?Z:f),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function N(e){var t,a,v=(a=(0,c.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,s.C)().withBaseUrl,f=e.children,b=e.frontMatter,Z=e.assets,N=e.metadata,k=e.truncated,y=e.isBlogPostPage,T=void 0!==y&&y,P=N.date,w=N.formattedDate,C=N.permalink,x=N.tags,F=N.readingTime,I=N.title,L=N.editUrl,R=N.authors,S=null!=(t=Z.image)?t:b.image,D=!T&&k,M=x.length>0,A=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(A,{className:d,itemProp:"headline"},T?I:r.createElement(i.Z,{itemProp:"url",to:C},I)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:P,itemProp:"datePublished"},w),void 0!==F&&r.createElement(r.Fragment,null," \xb7 ",v(F))),r.createElement(_,{authors:R,assets:Z})),S&&r.createElement("meta",{itemProp:"image",content:E(S,{absolute:!0})}),r.createElement("div",{id:T?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(m.Z,null,f)),(M||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",T&&g)},M&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(h.Z,{tags:x})),T&&L&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:L})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":M})},r.createElement(i.Z,{to:N.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(67294),n=a(95999),l=a(87462),i=a(63366),s=a(86010);const c="iconEdit_dcUD";var o=["className"];function m(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(35281);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(63366),l=a(67294),i=a(86010),s=a(95999),c=a(86668);const o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ";var u=["as","id"];function d(e){var t=e.as,a=e.id,d=(0,n.Z)(e,u),p=(0,c.L)().navbar.hideOnScroll;return"h1"!==t&&a?l.createElement(t,(0,r.Z)({},d,{className:(0,i.Z)("anchor",p?m:o),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,r.Z)({},d,{id:void 0}))}},16810:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(67294),n=a(3905),l=a(87462),i=a(63366),s=a(35742),c=["mdxType","originalType"];var o=a(89279);var m=a(39960);var u=a(86010),d=a(72389),p=a(86043);const g="details_lb9f",h="isBrowser_bmU9",v="collapsibleContent_i85q";var E=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function Z(e){var t=e.summary,a=e.children,n=(0,i.Z)(e,E),l=(0,d.Z)(),s=(0,r.useRef)(null),c=(0,p.u)({initialState:!n.open}),o=c.collapsed,m=c.setCollapsed,Z=(0,r.useState)(n.open),_=Z[0],N=Z[1];return r.createElement("details",Object.assign({},n,{ref:s,open:_,"data-collapsed":o,className:(0,u.Z)(g,l&&h,n.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&b(t,s.current)&&(e.preventDefault(),o?(m(!1),N(!0)):m(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),N(!e)}},r.createElement("div",{className:v},a)))}const _="details_BAp3";function N(e){var t=Object.assign({},e);return r.createElement(Z,(0,l.Z)({},t,{className:(0,u.Z)("alert alert--info",_,t.className)}))}var k=a(39649);function y(e){return r.createElement(k.Z,e)}const T="img_E7b_";const P={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,l=(n.mdxType,n.originalType,(0,i.Z)(n,c));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(s.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(o.Z,e)},a:function(e){return r.createElement(m.Z,e)},pre:function(e){var t;return r.createElement(o.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(N,(0,l.Z)({},e,{summary:a}),n)},ul:function(e){return r.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,T))}));var t},h1:function(e){return r.createElement(y,(0,l.Z)({as:"h1"},e))},h2:function(e){return r.createElement(y,(0,l.Z)({as:"h2"},e))},h3:function(e){return r.createElement(y,(0,l.Z)({as:"h3"},e))},h4:function(e){return r.createElement(y,(0,l.Z)({as:"h4"},e))},h5:function(e){return r.createElement(y,(0,l.Z)({as:"h5"},e))},h6:function(e){return r.createElement(y,(0,l.Z)({as:"h6"},e))}};function w(e){var t=e.children;return r.createElement(n.Zo,{components:P},t)}},71750:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010),l=a(39960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010),l=a(39960);const i="tag_hD8n",s="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){var t=e.permalink,a=e.label,o=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,o?c:s)},a,o&&r.createElement("span",null,o))}},20062:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010),l=a(95999),i=a(7774);const s="tags_XVD_",c="tag_JSN8";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:c},r.createElement(i.Z,{label:t,permalink:a}))}))))}},88824:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(67294),n=a(52263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),s}var t,a}),[e])}function o(){var e=c();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}}}]);