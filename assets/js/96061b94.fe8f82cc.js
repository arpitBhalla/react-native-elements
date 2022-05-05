"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6530],{98242:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=i(87462),a=i(63366),l=(i(67294),i(3905)),r=["components"],o={title:"Version 2.3 Upgrade Guide",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},p=void 0,s={permalink:"/blog/2020/08/10/2.3-upgrade-guide",source:"@site/blog/2020-08-10-2.3-upgrade-guide.md",title:"Version 2.3 Upgrade Guide",description:"There have been a lot of changes and improvements coming through the pipeline recently with react-native-elements. So in preparing for a version 3, there are some planned deprecations that will be added into version 2.3 and then removed in version 3.",date:"2020-08-10T00:00:00.000Z",formattedDate:"August 10, 2020",tags:[],readingTime:3.015,truncated:!1,authors:[{name:"Core Team",url:"https://opencollective.com/react-native-elements#team"}],frontMatter:{title:"Version 2.3 Upgrade Guide",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},prevItem:{title:"Auto-generation of Documentation Website",permalink:"/blog/2021/08/12/auto-generation-of-docs"},nextItem:{title:"React Native Elements 1.0",permalink:"/blog/2019/01/27/1.0-release"}},d={authorsImageUrls:[void 0]},h=[{value:"Avatar",id:"avatar",level:2},{value:"ListItem",id:"listitem",level:2},{value:"leftElement, leftIcon, leftAvatar, rightElement, rightIcon, rightAvatar",id:"leftelement-lefticon-leftavatar-rightelement-righticon-rightavatar",level:3},{value:"title, titleStyle, titleProps, subtitle, subtitleProps, subtitleStyle",id:"title-titlestyle-titleprops-subtitle-subtitleprops-subtitlestyle",level:3},{value:"contentContainerStyle, rightContentContainerStyle",id:"contentcontainerstyle-rightcontentcontainerstyle",level:3},{value:"rightTitle, rightTitleStyle, rightTitleProps, rightSubtitle, rightSubtitleStyle, rightSubtitleProps",id:"righttitle-righttitlestyle-righttitleprops-rightsubtitle-rightsubtitlestyle-rightsubtitleprops",level:3},{value:"input, buttonGroup, switchProps, checkBox, badge, chevron, checkmark",id:"input-buttongroup-switchprops-checkbox-badge-chevron-checkmark",level:3},{value:"Card",id:"card",level:2},{value:"title, titleStyle, titleNumberOfLines",id:"title-titlestyle-titlenumberoflines",level:3},{value:"dividerStyle",id:"dividerstyle",level:3},{value:"image, imageStyle, imageProps, imageWrapperStyle",id:"image-imagestyle-imageprops-imagewrapperstyle",level:3},{value:"featuredTitle, featuredTitleStyle, featuredSubtitle, featuredSubtitleStyle",id:"featuredtitle-featuredtitlestyle-featuredsubtitle-featuredsubtitlestyle",level:3},{value:"BottomSheet",id:"bottomsheet",level:2},{value:"Dark Mode",id:"dark-mode",level:2}],m={toc:h};function u(e){var t=e.components,i=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There have been a lot of changes and improvements coming through the pipeline recently with ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-elements"),". So in preparing for a version 3, there are some planned deprecations that will be added into version 2.3 and then removed in version 3."),(0,l.kt)("p",null,"The reason for these changes is that ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-elements")," regularly gets requests for new features and enhancements quite frequently. The fast and easy method of adding these new features is usually to add another prop into the component that then injects some change into a child component. Unfortunately, this ends up leading to the components having a lot of props, lots of conditional code, and additional code complexity. The solution going forward and into version 3 will be to break down large components into smaller pieces so that it is easier to inject your own code without having to wait for an additional prop to be added."),(0,l.kt)("p",null,"As we continue to build up to version 3, this post will continue to be updated with new step-by-step directions on how to upgrade your code to work around these changes. The RNE team thanks you for your patience, and we hope that you see the value in the upcoming changes."),(0,l.kt)("h2",{id:"avatar"},"Avatar"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"accessory"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"showAccessory"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"accessoryProps")," are all being dprecated. There is now a child component ",(0,l.kt)("inlineCode",{parentName:"p"},"Avatar.Accessory")," that you insert as a child component instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<Avatar>\n  <Avatar.Accessory {...accessoryProps} />\n</Avatar>\n")),(0,l.kt)("h2",{id:"listitem"},"ListItem"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ListItem")," has a large number of deprecated props. ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem")," has been somewhat of a kitchen sink. All the props can be replaced by inserting them as children in the order of left to right as they appear on the screen."),(0,l.kt)("h3",{id:"leftelement-lefticon-leftavatar-rightelement-righticon-rightavatar"},"leftElement, leftIcon, leftAvatar, rightElement, rightIcon, rightAvatar"),(0,l.kt)("p",null,"These can be replaced by using ",(0,l.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Icon"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Avatar")," components respectively."),(0,l.kt)("h3",{id:"title-titlestyle-titleprops-subtitle-subtitleprops-subtitlestyle"},"title, titleStyle, titleProps, subtitle, subtitleProps, subtitleStyle"),(0,l.kt)("p",null,"These props can be replaced by ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Content"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Title")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Subtitle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <ListItem.Content>\n    <ListItem.Title style={titleStyle} {...titleProps}>\n      {title}\n    </ListItem.Title>\n  </ListItem.Content>\n</ListItem>\n")),(0,l.kt)("h3",{id:"contentcontainerstyle-rightcontentcontainerstyle"},"contentContainerStyle, rightContentContainerStyle"),(0,l.kt)("p",null,"These props should be placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," prop of ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Content"),"."),(0,l.kt)("h3",{id:"righttitle-righttitlestyle-righttitleprops-rightsubtitle-rightsubtitlestyle-rightsubtitleprops"},"rightTitle, rightTitleStyle, rightTitleProps, rightSubtitle, rightSubtitleStyle, rightSubtitleProps"),(0,l.kt)("p",null,"These props also use ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Content"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Title"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Subtitle"),". Simply add the prop ",(0,l.kt)("inlineCode",{parentName:"p"},"right")," to each one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <ListItem.Content right>\n    <ListItem.Title right style={titleStyle} {...titleProps}>\n      {title}\n    </ListItem.Title>\n  </ListItem.Content>\n</ListItem>\n")),(0,l.kt)("h3",{id:"input-buttongroup-switchprops-checkbox-badge-chevron-checkmark"},"input, buttonGroup, switchProps, checkBox, badge, chevron, checkmark"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," prop can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Input"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"buttonGroup")," prop can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.ButtonGroup"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"switchProps")," prop can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"Switch"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"checkBox")," prop can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.CheckBox"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"badge")," prop can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"Badge"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"chevron")," prop can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"ListItem.Chevron"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"checkmark")," prop can be replaced with :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Icon name="check" size={20} />\n')),(0,l.kt)("h2",{id:"card"},"Card"),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"Card")," the following props have all been deprecated: ",(0,l.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"titleStyle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"titleNumberOfLines"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dividerStyle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"imageStyle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"imageProps"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"imageWrapperStyle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"featuredTitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"featuredTitleStyle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"featuredSubtitle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"featuredSubtitleStyle")),(0,l.kt)("h3",{id:"title-titlestyle-titlenumberoflines"},"title, titleStyle, titleNumberOfLines"),(0,l.kt)("p",null,"Move these props into ",(0,l.kt)("inlineCode",{parentName:"p"},"Card.Title")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<Card>\n  <Card.Title style={titleStyle} numberOfLines={titleNumberOfLines}>\n    {title}\n  </Card.Title>\n</Card>\n")),(0,l.kt)("h3",{id:"dividerstyle"},"dividerStyle"),(0,l.kt)("p",null,"The divider and the ",(0,l.kt)("inlineCode",{parentName:"p"},"dividerStyle")," itself were moved into ",(0,l.kt)("inlineCode",{parentName:"p"},"Card.Divider")),(0,l.kt)("h3",{id:"image-imagestyle-imageprops-imagewrapperstyle"},"image, imageStyle, imageProps, imageWrapperStyle"),(0,l.kt)("p",null,"These can be replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"Card.Image")," which accepts all ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," props. ",(0,l.kt)("inlineCode",{parentName:"p"},"imageWrapperStyle")," can be attached to a ",(0,l.kt)("inlineCode",{parentName:"p"},"View")," that wraps the ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")),(0,l.kt)("h3",{id:"featuredtitle-featuredtitlestyle-featuredsubtitle-featuredsubtitlestyle"},"featuredTitle, featuredTitleStyle, featuredSubtitle, featuredSubtitleStyle"),(0,l.kt)("p",null,"These were both replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"Card.FeaturedTitle")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Card.FeaturedSubtitle")),(0,l.kt)("h2",{id:"bottomsheet"},"BottomSheet"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BottomSheet")," was added in version 2.2, and it was noted that it had some strict dependencies that weren't so well liked. So ",(0,l.kt)("inlineCode",{parentName:"p"},"BottomSheet")," has changed completely and it is encouraged that you checkout the docs page on it again."),(0,l.kt)("h2",{id:"dark-mode"},"Dark Mode"),(0,l.kt)("p",null,"Make sure to checkout the customization page. We added a dark mode configuration to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," that should help out in bootstrapping your app's dark mode."))}u.isMDXComponent=!0}}]);