/*! For license information please see 856c1763.3b16ce4b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1780],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var r,s,l=i(e),p=1;p<arguments.length;p++){for(var u in r=Object(arguments[p]))n.call(r,u)&&(l[u]=r[u]);if(t){s=t(r);for(var c=0;c<s.length;c++)a.call(r,s[c])&&(l[s[c]]=r[s[c]])}}return l}},41535:(e,t,n)=>{var a=n(62525),i=60103,o=60106;var r=60109,s=60110,l=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),o=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),r=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function f(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=k.prototype;var y=b.prototype=new f;y.constructor=b,a(y,k.prototype),y.isPureReactComponent=!0;var v={current:null},N=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,o={},r=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(r=""+t.key),t)N.call(t,a)&&!w.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];o.children=p}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:i,type:e,key:r,ref:s,props:o,_owner:v.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var A=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,a,r){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return r=r(l=e),e=""===a?"."+I(l,0):a,Array.isArray(r)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),S(r,t,n,"",(function(e){return e}))):null!=r&&(x(r)&&(r=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(A,"$&/")+"/")+e)),t.push(r)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=a+I(s=e[p],p);l+=S(s,t,n,u,r)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(s=e.next()).done;)l+=S(s=s.value,t,n,u=a+I(s,p++),r);else if("object"===s)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var a=[],i=0;return S(e,a,"","",(function(e){return t.call(n,e,i++)})),a}function j(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function O(){var e=T.current;if(null===e)throw Error(m(321));return e}},27378:(e,t,n)=>{n(41535)},58686:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),i=n(63366),o=(n(27378),n(3905)),r=["components"],s={toc:[{value:"Reporting Bugs",id:"reporting-bugs",level:2},{value:"Suggesting a feature",id:"suggesting-a-feature",level:2},{value:"Responding to Issues",id:"responding-to-issues",level:2},{value:"Improving the Documentation",id:"improving-the-documentation",level:2},{value:"Changes for an existing doc on a version not yet released",id:"changes-for-an-existing-doc-on-a-version-not-yet-released",level:3},{value:"Adding documentation for a new component",id:"adding-documentation-for-a-new-component",level:3},{value:"Rewording, adding missed info, or making a typo for a released version",id:"rewording-adding-missed-info-or-making-a-typo-for-a-released-version",level:3},{value:"Editing an existing page that&#39;s not docs or components",id:"editing-an-existing-page-thats-not-docs-or-components",level:3},{value:"Editing a document that appears the same in all versions",id:"editing-a-document-that-appears-the-same-in-all-versions",level:3},{value:"Implementing Bug Fixes and Improvements",id:"implementing-bug-fixes-and-improvements",level:2},{value:"Setup",id:"setup",level:3},{value:"Commonly used scripts for contributions",id:"commonly-used-scripts-for-contributions",level:3},{value:"Updating the component API documentation",id:"updating-the-component-api-documentation",level:3},{value:"Checks and how to fix them",id:"checks-and-how-to-fix-them",level:3},{value:"Committing and Pushing Changes",id:"committing-and-pushing-changes",level:3},{value:"Branching Strategy",id:"branching-strategy",level:3}]};function l(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-react-native-elements"},"Contributing to React Native Elements"),(0,o.kt)("p",null,"Thanks for taking the time to checkout this project and being willing to\ncontribute!"),(0,o.kt)("p",null,"Here are some of some of ways you can help:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reporting-bugs"},"Reporting Bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#suggesting-a-feature"},"Suggesting a feature")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#responding-to-issues"},"Responding to Issues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#improving-the-documentation"},"Improving the Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#implementing-bug-fixes-and-improvements"},"Implementing Bug Fixes and Improvements"))),(0,o.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("p",null,"React Native Elements has over 9000 users actively developing and using this\nlibrary in their projects. With that many use cases, bugs are sure to come up\nfrom time to time. When you think you've found a bug, here's what to do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check your version. A fix may have already been released in new\na newer version. Update your version of react-native-elements to the\nlatest.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search the existing\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/issues"},"issues"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/pulls"},"pull requests"),".\nIf you see one, add a \ud83d\udc4d reaction (please no\n+1 comments). Read through the comments and see if you can provide anymore\nvaluable information to the thread. The more use cases we have, the easier it\nis to solve the issue.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there are no other issues like yours, then create a new one. New issues\ncome with a issue template, so make sure to fill out as much information as\npossible. If possible, please also provide a ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/"},"snack"),"\ndemonstrating the issue."))),(0,o.kt)("p",null,"If this is your first open source contribution, please take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"},"this"),"\nguide."),(0,o.kt)("h2",{id:"suggesting-a-feature"},"Suggesting a feature"),(0,o.kt)("p",null,"Have a cool idea for a component? Think you can implement an existing feature\nbetter? Go ahead and open and issue, describe what you want to accomplish and\nlastly, why you think React Native Elements would benefit from it."),(0,o.kt)("p",null,"A few things to consider/add:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As clearly as possible, attach screenshots, concepts of how this feature\nshould behave"),(0,o.kt)("li",{parentName:"ul"},"Do you have any thoughts on how to implement this feature? Have you done\nsomething similar already?"),(0,o.kt)("li",{parentName:"ul"},"Hold off on submitting feature pull requests until the feature has been\ndiscussed. Once the feature has been established and agreed upon, create the\npull request.")),(0,o.kt)("h2",{id:"responding-to-issues"},"Responding to Issues"),(0,o.kt)("p",null,"When someone posts an issue, a maintainer might not be able to respond right\naway. Or a person may post and issue that has incomplete information. As a\ncontributor you can help by answering the issue yourself if you know the cause\nof it, or help the maintainers by making sure all the information necessary\nto validate the issue is there."),(0,o.kt)("h2",{id:"improving-the-documentation"},"Improving the Documentation"),(0,o.kt)("p",null,"Our documentation is built with an open-source tool called\n",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),". It has a ton of great features, the most\nimportant being versioning - which allows us to have documentation for every\nversion we release."),(0,o.kt)("p",null,"The easiest way to contribute to a particular doc is through the Edit button on\nthe page. It'll take you directly to the exact file for that page on the repo."),(0,o.kt)("p",null,"Since all documents are versioned, it might be bit tricky to find which file\nneeds changing. You can use the rule below to figure out which file you need to\nedit."),(0,o.kt)("h3",{id:"changes-for-an-existing-doc-on-a-version-not-yet-released"},"Changes for an existing doc on a version not yet released"),(0,o.kt)("p",null,"These files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," folder. So if I wanted to add a new prop\non the Avatar component, I'll need to document that in ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/avatar.md"),"."),(0,o.kt)("h3",{id:"adding-documentation-for-a-new-component"},"Adding documentation for a new component"),(0,o.kt)("p",null,"The component API in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/main/")," is auto-generated from the TSDoc in the TypeScript declarations. Be sure to update the documentation in the corresponding, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docs-build-api\n")),(0,o.kt)("p",null,"If you need to create any other doc page, you'll be creating your ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/main")," folder. Be sure to fill out the header at the top of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"---\nslug: /component\nid: my-component\ntitle: My Component\n---\n")),(0,o.kt)("p",null,"Lastly you'll need to add it to sidebar. This sidebar file is\n",(0,o.kt)("inlineCode",{parentName:"p"},"/website/sidebars.json"),". Then add the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the document we just created\ninto one of the sidebars."),(0,o.kt)("h3",{id:"rewording-adding-missed-info-or-making-a-typo-for-a-released-version"},"Rewording, adding missed info, or making a typo for a released version"),(0,o.kt)("p",null,"These files are located in: ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/website/versioned_docs/version-{version_name}/{file-name}"),". ",(0,o.kt)("br",null)," The last\ndirectory will differ depending on what version you are submitting docs for."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Docusaurus only creates new versions of files if the ",(0,o.kt)("inlineCode",{parentName:"p"},"original")," document in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," folder has changed since a release was made.")),(0,o.kt)("p",null,"If I added docs for ",(0,o.kt)("inlineCode",{parentName:"p"},"Avatar.md")," and it was our ever first release say ",(0,o.kt)("inlineCode",{parentName:"p"},"0.19.0"),",\nwhen releasing that version it'll create\n",(0,o.kt)("inlineCode",{parentName:"p"},"/website/versioned_docs/version-0.19.0/avatar.md"),"."),(0,o.kt)("p",null,"Now if I go to release ",(0,o.kt)("inlineCode",{parentName:"p"},"0.20.0")," and didn't change ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/Avatar.md"),", then\nthey'll be ",(0,o.kt)("strong",{parentName:"p"},"no")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/website/versioned_docs/version-0.20.0/avatar.md"),". Docusaurus\nwill simply point to the old version from ",(0,o.kt)("inlineCode",{parentName:"p"},"0.19.0"),"."),(0,o.kt)("h3",{id:"editing-an-existing-page-thats-not-docs-or-components"},"Editing an existing page that's not docs or components"),(0,o.kt)("p",null,"These files are located in: ",(0,o.kt)("inlineCode",{parentName:"p"},"/website/docs/"),"."),(0,o.kt)("h3",{id:"editing-a-document-that-appears-the-same-in-all-versions"},"Editing a document that appears the same in all versions"),(0,o.kt)("p",null,"This one is particularly the most complicated and requires a bit of duplication."),(0,o.kt)("p",null,"Let's say we want edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," doc. We want this document to be\nthe same for all versions. Firstly we'll need to make edits to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/getting_started.md")," so it's available in future versions. Secondly we'll\nneed to duplicate those changes in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/website/versioned_docs/version-{version-number}/getting_started.md"),"."),(0,o.kt)("p",null,"We'll only need to make this change to the ",(0,o.kt)("strong",{parentName:"p"},"first set of versioned docs"),". In\nour case ",(0,o.kt)("inlineCode",{parentName:"p"},"/website/versioned_docs/version-0.19.0/getting_started.md"),"."),(0,o.kt)("p",null,"Be sure to check out the documentation over at\n",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"docusaurus.io")," if you have any other queries."),(0,o.kt)("h2",{id:"implementing-bug-fixes-and-improvements"},"Implementing Bug Fixes and Improvements"),(0,o.kt)("p",null,"If you wish to submit a pull request for a new feature or issue then this is\nguide for you. On GitHub, we extensively use labels to reflect the content and\nstatus of issues."),(0,o.kt)("p",null,"For all issues that are bugs check\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22%3Aboom%3A++Bug%22+-label%3A%22%E2%9C%85+Fixed+-+Next+Release%22+-label%3A%22%F0%9F%93%A5+PR+Submitted%22"},"here"),"."),(0,o.kt)("p",null,"Improvements are separated into two categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%92%A1New+Component%22+-label%3A%22%E2%9C%85+Fixed+-+Next+Release%22+-label%3A%22%F0%9F%93%A5+PR+Submitted%22+"},"New components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22%E2%9C%A8Enhancement%22+-label%3A%22%E2%9C%85+Fixed+-+Next+Release%22+-label%3A%22%F0%9F%93%A5+PR+Submitted%22"},"Enhancements"))),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"labels.md"},"Labels guide")," for a more descriptive info on our usage\nof labels."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To begin you should start by forking this repository first. This should get you\nsetup on your local machine:"),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," and and ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn")," if you have not already. (",(0,o.kt)("em",{parentName:"p"},"We suggest\nyou to use node v14x"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fork the ",(0,o.kt)("strong",{parentName:"p"},"react-native-elements")," repo\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements"},"here"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the forked repo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," git clone <your-forked-repo-url>\n cd react-native-elements\n")),(0,o.kt)("p",{parentName:"li"},"You have a file structure that looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 example # demo expo app\n\u251c\u2500\u2500 scripts\n\u251c\u2500\u2500 packages\n\u2502   \u251c\u2500\u2500 base     # component without theme\n\u2502   \u251c\u2500\u2500 themed   # component using withTheme HOC\n\u2502   \u2514\u2500\u2500 ....     # rest components having universal device support\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 docs     # prop API docs\n    \u2514\u2500\u2500 scripts  # scripts for autoDocGen\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install dependencies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  yarn install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"While developing, you can run the example app with Expo to test your changes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd example\nyarn start\n")),(0,o.kt)("p",{parentName:"li"},"Make sure your code passes TypeScript and ESLint. Run the following to verify:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn typescript\nyarn lint\n")),(0,o.kt)("p",{parentName:"li"},"To fix lint or formatting errors, run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint --fix\nyarn format --write\n")),(0,o.kt)("p",{parentName:"li"},"Remember to add tests for your change if possible. Run the unit tests by:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now create a new branch with a name that loosely describes\nthe issue on which you will be working. Once you think you have addressed\nthe issue in question, submit a pull request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You are done \ud83c\udf89"))),(0,o.kt)("h3",{id:"commonly-used-scripts-for-contributions"},"Commonly used scripts for contributions"),(0,o.kt)("p",null,"Scripts can be executed via ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run [script]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn [script]"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build")," - compiles all packages ready for publishing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lint"),"- check for lint issues"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"format"),"- check for formatting issues"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typescript"),"- check for type build issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs-build"),"- build website"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs-build-api"),"- build component prop APIs")),(0,o.kt)("h3",{id:"updating-the-component-api-documentation"},"Updating the component API documentation"),(0,o.kt)("p",null,"The component API in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/main/")," is auto-generated from the TSDoc in the TypeScript declarations. Be sure to update the documentation in the corresponding, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docs-build-api\n")),(0,o.kt)("h3",{id:"checks-and-how-to-fix-them"},"Checks and how to fix them"),(0,o.kt)("p",null,"When you push some changes few CI checks will run, if your PR fails one of them, you can fix it by running the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CI Checks",src:n(74110).Z,width:"805",height:"189"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Check Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Fix/verify using")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"yarn_install")),(0,o.kt)("td",{parentName:"tr",align:null},"Checks change in lock file"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"yarn install"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check_unit_tests")),(0,o.kt)("td",{parentName:"tr",align:null},"Jest unit tests for packages"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"yarn run test"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check_types")),(0,o.kt)("td",{parentName:"tr",align:null},"Typescript type checks"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"yarn typescript"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check_lint")),(0,o.kt)("td",{parentName:"tr",align:null},"Linting/formatting related"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"yarn lint"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check_docs_api")),(0,o.kt)("td",{parentName:"tr",align:null},"component API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"yarn docs-build-api"))))),(0,o.kt)("h3",{id:"committing-and-pushing-changes"},"Committing and Pushing Changes"),(0,o.kt)("p",null,"We like to provide informative and useful commit messages when pushing changes\nto the repo. This helps tremendously when sifting through the commit history to\nfind a particular changeset. A useful guide for creating meaningful commit\nmessages can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification"},"here.")),(0,o.kt)("h3",{id:"branching-strategy"},"Branching Strategy"),(0,o.kt)("p",null,"There are 3 main branches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"master")," is the branch with the most recent deployed version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"next")," is the main development branch. For new features and enhancements, base the\nchanges off this branch."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patch")," is a branch for working on patch releases. If you have a bug fix\nthat requires a fast release, use this branch.")))}l.isMDXComponent=!0},2840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(58686),s=["components"],l={id:"contributing",sidebar_label:"Contributing",slug:"/contributing",title:"",tags:["Contribution","Open Source"]},p=void 0,u={unversionedId:"repo/contributing",id:"repo/contributing",title:"",description:"",source:"@site/docs/repo/contributing.mdx",sourceDirName:"repo",slug:"/contributing",permalink:"/docs/next/contributing",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/repo/contributing.mdx",tags:[{label:"Contribution",permalink:"/docs/next/tags/contribution"},{label:"Open Source",permalink:"/docs/next/tags/open-source"}],version:"current",frontMatter:{id:"contributing",sidebar_label:"Contributing",slug:"/contributing",title:"",tags:["Contribution","Open Source"]},sidebar:"docs",previous:{title:"Tooltip",permalink:"/docs/next/components/tooltip"},next:{title:"Testing",permalink:"/docs/next/testing"}},c={},d=[],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{mdxType:"ContributionGuide"}))}h.isMDXComponent=!0},74110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ci-checks-bd193ece48bbfc573c3f18a9d3051fcc.png"}}]);