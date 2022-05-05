"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7728],{65803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>h});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Overview",sidebar_position:0,slug:"/customizing"},l=void 0,m={unversionedId:"customization/index",id:"customization/index",title:"Overview",description:"Congrats! You've installed React Native Elements and your immediate question",source:"@site/docs/customization/0.index.mdx",sourceDirName:"customization",slug:"/customizing",permalink:"/docs/next/customizing",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/customization/0.index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/customizing"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"},next:{title:"Theme Provider",permalink:"/docs/next/customization/themprovider"}},p={},h=[{value:"Component Styles",id:"component-styles",level:2},{value:"Theming",id:"theming",level:2},{value:"Using Composition",id:"using-composition",level:3},{value:"Order of Styles",id:"order-of-styles",level:3},{value:"Internal",id:"internal",level:4},{value:"Theme",id:"theme",level:4},{value:"External",id:"external",level:4},{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",level:3}],u={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Congrats! You've installed React Native Elements and your immediate question\ngoes something like this:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"So umm, how do I change how it looks?")),(0,i.kt)("p",null,"Great question! A UI Kit wouldn't be that useful if the apps everyone built\nlooked the same right? For this case React Native Elements provide a number of\nprops on each component to enable you to style them how you want."),(0,i.kt)("h2",{id:"component-styles"},"Component Styles"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Every")," component from React Native Elements has a container around it. The\ncontainer is just a traditional ",(0,i.kt)("inlineCode",{parentName:"p"},"<View />")," from react native that has some\nstyling on it. This default styling prevents components from colliding with each\nother. If you want to change how two components react to each on the screen your\nfirst stop should be the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerStyle")," prop."),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"containerStyle"),", components may provide their custom style props\nlike ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonStyle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"titleStyle")," etc. Always refer to the documentation for the\ncomponent to find out which style props it provides."),(0,i.kt)("h2",{id:"theming"},"Theming"),(0,i.kt)("p",null,"While component styles are great for single use, you may want to have the same\nstyling for every instance of a component. For example, you may want all your\nbuttons to be blue or have the same font. Here are some ways to reuse styles\nwith React Native Elements."),(0,i.kt)("h3",{id:"using-composition"},"Using Composition"),(0,i.kt)("p",null,"With this approach, we create one component with the styles we want and use that\ninstead of the built-in component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Button } from '@rneui/themed';\n\nconst RaisedButton = (props) => <Button raised {...props} />;\n\n// Your App\nconst App = () => {\n  return <RaisedButton title=\"Yea\" />;\n};\n")),(0,i.kt)("p",null,"If we want to use a button that's raised in our app, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"RaisedButton"),"\ninstead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),". This component still accepts all the props from the\nnormal ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," just that it has the ",(0,i.kt)("inlineCode",{parentName:"p"},"raised")," prop set by default."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"order-of-styles"},"Order of Styles"),(0,i.kt)("p",null,"What happens now if we want a ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," that isn't raised? To do that we have to understand the order in which styles are applied."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Internal > Theme > External")),(0,i.kt)("h4",{id:"internal"},"Internal"),(0,i.kt)("p",null,"Internal components styles are the styles which are defined in the component\nfile. These are applied first."),(0,i.kt)("h4",{id:"theme"},"Theme"),(0,i.kt)("p",null,"Theme styles are the values that are set by the ThemeProvider If present, these\nare applied second."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,i.kt)("p",null,"This will override the white color for the title set in the component's style."),(0,i.kt)("h4",{id:"external"},"External"),(0,i.kt)("p",null,"External styles are the styles which are set through the component props. These\nare applied last and have the highest precedence."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" titleStyle={{ color: 'pink' }} />\n    </ThemeProvider>\n  );\n};\n")),(0,i.kt)("p",null,"This will override both the white color for the title set in the component's\nstyle as well as the red color set in the theme."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Remember if you want to override the values set in the theme you can always\nuse component props.")),(0,i.kt)("p",null,"Note: To theme subcomponents such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ListItem.Title"),', in your theme remove the dot and list them as "ListItemTitle"'),(0,i.kt)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='App.tsx'",title:"'App.tsx'"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  lightColors: {\n    primary: '#a4e2f5',\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      {/* ... */}\n      {/* ... */}\n    </ThemeProvider>\n  );\n};\n")),(0,i.kt)("p",null,"The updateTheme function merges the theme passed in with the current theme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"updateTheme({\n  lightColors: {\n    primary: 'purple',\n  },\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceTheme")," function merges the theme passed in with the default theme."),(0,i.kt)("p",null,"Don't want to wrap your components with ",(0,i.kt)("inlineCode",{parentName:"p"},"withTheme"),"? You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThemeConsumer")," component\nwhich uses render props!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { ThemeConsumer } from '@rneui/themed';\n\nconst MyComponent = () => (\n  <ThemeConsumer>\n    {({ theme }) => (\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n    )}\n  </ThemeConsumer>\n)\n")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme()")," if you use hooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { useTheme } from '@rneui/themed';\n\nconst MyComponent = () => {\n  const { theme } = useTheme();\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>\n    </View>\n  );\n};\n")),(0,i.kt)("p",null,"If you want to keep your styles outside the component use ",(0,i.kt)("inlineCode",{parentName:"p"},"makeStyles()")," (hook generator) to reference the ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," and component props (optional param)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { makeStyles } from '@rneui/themed';\n\ntype Params = {\n  fullWidth?: boolean;\n};\n\nconst MyComponent = (props: Props) => {\n  const styles = useStyles(props);\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>\n    </View>\n  );\n};\n\nconst useStyles = makeStyles((theme, props: Props) => ({\n  container: {\n    background: theme.colors.white,\n    width: props.fullWidth ? '100%' : 'auto',\n  },\n  text: {\n    color: theme.colors.primary,\n  },\n}));\n")))}c.isMDXComponent=!0}}]);