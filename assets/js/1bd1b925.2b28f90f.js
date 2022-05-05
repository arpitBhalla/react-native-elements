"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9394,5370],{58456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},d=void 0,p={unversionedId:"component_usage/Header",id:"component_usage/Header",title:"Header",description:"\x3c!-- To show the guide to configure Header Component to a project.",source:"@site/docs/component_usage/Header.mdx",sourceDirName:"component_usage",slug:"/component_usage/Header",permalink:"/docs/next/component_usage/Header",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/component_usage/Header.mdx",tags:[],version:"current",frontMatter:{}},m={},s=[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,i.kt)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,i.kt)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,i.kt)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,i.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,i.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from '@rneui/themed';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0AStyleSheet%2C%0AView%2C%0AText%2C%0ALinking%2C%0AStyleProp%2C%0ATextStyle%2C%0AViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0Atitle%3A%20string%3B%0Aview%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0ADetail%3A%20%7B%0A%20%20openDrawer%3A%20void%3B%0A%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0Aconst%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Aconst%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2F%40rneui%2Fthemed.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AheaderContainer%3A%20%7B%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20marginBottom%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20paddingVertical%3A%2015%2C%0A%7D%2C%0Aheading%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2022%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0AheaderRight%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0AsubheaderText%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0},79362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=(n(9877),n(72360),n(67711),n(58456)),o=["components"],d={id:"header",title:"Header"},p=void 0,m={unversionedId:"components/header",id:"components/header",title:"Header",description:"Headers are navigation components that display information and actions relating to the current screen.",source:"@site/docs/components/Header.mdx",sourceDirName:"components",slug:"/components/header",permalink:"/docs/next/components/header",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Header.mdx",tags:[],version:"current",frontMatter:{id:"header",title:"Header"},sidebar:"docs",previous:{title:"FAB",permalink:"/docs/next/components/fab"},next:{title:"Icon",permalink:"/docs/next/components/icon"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],u={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Headers are navigation components that display information and actions relating to the current screen.\n",(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,i.kt)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.default,{mdxType:"Usage"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Includes all ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,i.kt)("div",{class:"table-responsive"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ViewComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"React Component"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"View")),(0,i.kt)("td",{parentName:"tr",align:null},"Component for container.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backgroundColor")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Sets backgroundColor of the parent component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backgroundImage")),(0,i.kt)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Sets backgroundImage for parent component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backgroundImageStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"ImageStyle"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Styling for backgroundImage in the main container.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"barStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"StatusBarStyle"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the color of the status bar text.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"centerComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Define your center component here.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"centerContainerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Styling for container around the centerComponent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"children")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(Element")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"Element[]) & ReactNode")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Add children component to the header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Styling around the main container.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"elevated")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Elevation for header")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"leftComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Define your left component here.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"leftContainerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Styling for container around the leftComponent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"linearGradientProps")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Displays a linear gradient. See ",(0,i.kt)("a",{parentName:"td",href:"#lineargradient-usage"},"usage"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"placement")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"center")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"left")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"right")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"center")),(0,i.kt)("td",{parentName:"tr",align:null},"Alignment for title.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rightComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Define your right component here.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rightContainerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Styling for container around the rightComponent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"statusBarProps")),(0,i.kt)("td",{parentName:"tr",align:null},"StatusBarProps"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Accepts all props for StatusBar."))))))}g.isMDXComponent=!0}}]);