"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[561],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,v=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(v,r(r({ref:n},d),{},{components:t})):a.createElement(v,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9813:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],s={sidebar_position:2},l="Non-navigation parameters",p={unversionedId:"destination-arguments/navhost-level-parameters",id:"destination-arguments/navhost-level-parameters",title:"Non-navigation parameters",description:"Besides things that the previous screen can pass to the next one, Composable destinations can also make use of certain components usually passed in from the NavHost call level (even when using vanilla Compose Navigation).",source:"@site/docs/destination-arguments/navhost-level-parameters.md",sourceDirName:"destination-arguments",slug:"/destination-arguments/navhost-level-parameters",permalink:"/destination-arguments/navhost-level-parameters",editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/destination-arguments/navhost-level-parameters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Navigation arguments",permalink:"/destination-arguments/navigation-arguments"},next:{title:"Basics",permalink:"/navigation/basics"}},d=[{value:"Manually call your screen Composable",id:"manually-call-your-screen-composable",children:[],level:3},{value:"Use <code>dependenciesContainerBuilder</code> to prepare dependencies",id:"use-dependenciescontainerbuilder-to-prepare-dependencies",children:[],level:3}],c={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"non-navigation-parameters"},"Non-navigation parameters"),(0,i.kt)("p",null,"Besides things that the previous screen can pass to the next one, Composable destinations can also make use of certain components usually passed in from the NavHost call level (even when using vanilla Compose Navigation).\nCompose Destinations supports some of these out of the box:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NavController")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"NavHostController"),") - If part of the Composable function parameters, Compose Destinations will pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavController")," used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavigator")," - This is an interface wrapper around ",(0,i.kt)("inlineCode",{parentName:"p"},"NavController")," useful for inverting the dependency in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavController"),". This enables your Composable to be testable and previewable since you can just pass an empty implementation (one is available out of the box ",(0,i.kt)("inlineCode",{parentName:"p"},"EmptyDestinationsNavigator"),"). Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../navigation/basics"},"navigation section"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry")," - the back stack entry correspondent to the destination composable. You should avoid depending on this directly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ResultBackNavigator")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"ResultRecipient")," - needed for sending results back from a destination to the previous one. Read more ",(0,i.kt)("a",{parentName:"p",href:"../navigation/backresult"},"here")))),(0,i.kt)("p",null,"Even though most screen Composables will only need their navigation arguments and some of the components mentioned above, if you have a scenario where you need to pass something else, you can:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#manually-call-your-screen-composable"},"1. Manually call your screen Composable, which is made super easy by the library"),(0,i.kt)("br",{parentName:"p"}),"\n","This is the preferred way if you want to send something that is tied to Compose runtime (f.ex a ",(0,i.kt)("inlineCode",{parentName:"p"},"State<Something>"),"). The other approach uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map<Class<[Component]>, [Component]>")," so if ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," changes your screen won't be recomposed. Also, it is a bit type safer since you are the one calling the Composable function."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#use-dependenciescontainerbuilder-to-prepare-dependencies"},"2. Use ",(0,i.kt)("inlineCode",{parentName:"a"},"dependenciesContainerBuilder")," to prepare certain components to certain/all screens"),(0,i.kt)("br",{parentName:"p"}),"\n","This is simpler if you want to make some component available to multiple screens. It should only be used for passing dependencies which are static for the lifetime of your screens (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModels"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaffoldState"),", etc)."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your annotated Composable has parameters that Compose Destinations cannot provide, are not navigation arguments and you did not provide them via one of the above approaches, the app will crash at runtime when you navigate to that screen."))),(0,i.kt)("h3",{id:"manually-call-your-screen-composable"},"Manually call your screen Composable"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost")," call has a ",(0,i.kt)("inlineCode",{parentName:"p"},"manualComposableCallsBuilder")," which can be used to manually call some ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," Composables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Just as an example of something you might want to send to some destinations\nval scaffoldState = rememberScaffoldState()\n\nDestinationsNavHost(\n    navGraph = NavGraphs.root\n) {\n    composable(SomeScreenDestination) { //this: DestinationScope<SomeScreenDestination.NavArgs>\n        SomeScreen(\n            arg1 = navArgs.arg1, // navArgs is a lazily evaluated `SomeScreenDestination.NavArgs` instance, field of `DestinationScope`\n            navigator = destinationsNavigator, // destinationsNavigator is a `DestinationsNavigator` (also lazily evaluated)\n            backStackEntry = navBackStackEntry, // navBackStackEntry is a `DestinationScope` field\n            scaffoldState = scaffoldState,\n            resultBackNavigator = resultBackNavigator(), // needed if "SomeScreen" needs to send argument back to previous screen\n            resultRecipient = resultRecipient(), // needed if "SomeScreen" needs to receive results from a forward screen\n        )\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice you don't need to manually call all destinations. The ",(0,i.kt)("inlineCode",{parentName:"p"},"NavHost")," will be filled with all destinations and nested navigation graphs of ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphs.root"),"."))),(0,i.kt)("p",null,"This feature makes sure you have all control you need in some less common cases.\nWhen some destination gets navigated to, if you are manually calling it here in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost")," then the library will call your composable function with the navigation arguments (if the destination has navigation arguments). If you are not, the library will call your annotated Composable instead."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"animations")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using animations, you might want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"animatedComposable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bottomSheetComposable")," if you need the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedVisibilityScope")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"ColumnScope")," receivers respectively. These scopes are given by the respective Accompanist library. If you don't need them, you can still use ",(0,i.kt)("inlineCode",{parentName:"p"},"composable")," function like in the example above."))),(0,i.kt)("h3",{id:"use-dependenciescontainerbuilder-to-prepare-dependencies"},"Use ",(0,i.kt)("inlineCode",{parentName:"h3"},"dependenciesContainerBuilder")," to prepare dependencies"),(0,i.kt)("p",null,"If you have some dependencies which you want to make available to all or multiple destinations, you can leverage this ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost")," parameter to prepare them."),(0,i.kt)("p",null,"For example, if you wanted to make ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaffoldState")," available to all annotated Composables, you could just do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val scaffoldState = rememberScaffoldState()\n\nDestinationsNavHost(\n    dependenciesContainerBuilder = { //this: DependenciesContainerBuilder<*>\n        dependency(scaffoldState)\n    }\n)\n")),(0,i.kt)("p",null,'This lambda will be called everytime a new screen is navigated to to let you prepare components safely scoped to that screen only, since this "container" will not live behond the screen that is navigated to.'),(0,i.kt)("p",null,"After this, you can just add a ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaffoldState")," typed parameter in any annotated Composable, and the library will provide it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun MyScreen(\n    scaffoldState: ScaffoldState\n) { /*...*/ }\n")),(0,i.kt)("p",null,"If you want to provide dependencies to a specific Destination or a specific navigation graph (i.e all destinations that are direct children), you can do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val scaffoldState = rememberScaffoldState()\n\nDestinationsNavHost(\n    dependenciesContainerBuilder = { //this: DependenciesContainerBuilder<*>\n        // \ud83d\udc47 Provides scaffoldState to "YourSpecificDestination"\n        dependency(YourSpecificDestination) { scaffoldState }\n\n        // \ud83d\udc47 Provides SettingsViewModel scoped to the "settings" nav graph to all\n        // destinations who request it and are direct children of "settings" nav graph\n        dependency(NavGraphs.settings) {\n            val parentEntry = remember(navBackStackEntry) {\n                navController.getBackStackEntry(NavGraphs.settings.route)\n            }\n            viewModel<SettingsViewModel>(parentEntry)\n        }\n    }\n)\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"dependenciesContainerBuilder")," lambda is scoped in a ",(0,i.kt)("inlineCode",{parentName:"p"},"DependenciesContainerBuilder")," which is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationScope"),". So, everything we have available ",(0,i.kt)("a",{parentName:"p",href:"#manually-call-your-screen-composable"},"when manually calling a Composable screen"),", you also have here, including a ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationSpec")," that is being navigated to.",(0,i.kt)("br",{parentName:"p"}),"\n","This enables you to make decisions here and have dependencies only available to specific destinations or specific navigation graphs or any other case you might have."))))}m.isMDXComponent=!0}}]);