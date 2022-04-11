"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[883],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4784:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="Navigation arguments",m={unversionedId:"destination-arguments/navigation-arguments",id:"destination-arguments/navigation-arguments",title:"Navigation arguments",description:"Basics",source:"@site/docs/destination-arguments/navigation-arguments.md",sourceDirName:"destination-arguments",slug:"/destination-arguments/navigation-arguments",permalink:"/destination-arguments/navigation-arguments",editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/destination-arguments/navigation-arguments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Defining Destinations",permalink:"/defining-destinations"},next:{title:"Non-navigation parameters",permalink:"/destination-arguments/navhost-level-parameters"}},p=[{value:"Basics",id:"basics",children:[],level:2},{value:"Navigation arguments class delegate",id:"navigation-arguments-class-delegate",children:[],level:2},{value:"Custom navigation argument types",id:"custom-navigation-argument-types",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"navigation-arguments"},"Navigation arguments"),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"To declare navigation arguments you can just add them to the Composable function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun ProfileScreen(\n    id: Int // <- this will be a mandatory navigation argument!\n)\n")),(0,o.kt)("p",null,"Only arguments of type ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Float"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Long"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Parcelable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enums"),",  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"Kotlinx Serialization")," and ",(0,o.kt)("a",{parentName:"p",href:"#custom-navigation-argument-types"},"custom navigation types")," will be considered navigation arguments.",(0,o.kt)("br",{parentName:"p"}),"\n","If some of the arguments are not mandatory, i.e they may not be sent when navigating to this screen, you can mark them as nullable or define default values for them."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Parcelable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enums")," and ",(0,o.kt)("a",{parentName:"p",href:"#custom-navigation-argument-types"},"custom navigation types")," navigation arguments can be nullable when using Compose Navigation."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun ProfileScreen(\n    id: Int = -1, // <- optional navigation argument. If it is not sent by previous screen, -1 will be received here\n    name: String? // <- optional navigation argument. It will be null if not sent by previous screen\n)\n")),(0,o.kt)("p",null,"Navigation arguments' default values must be resolvable from the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," class, so you cannot use private values as default for navigation arguments. "),(0,o.kt)("h2",{id:"navigation-arguments-class-delegate"},"Navigation arguments class delegate"),(0,o.kt)("p",null,"The above approach is simple and works great if you intend to use the navigation arguments inside the screen Composable. However, if you do not, for example, if you use a ViewModel for that screen and it is the one that will actually use the navigation arguments, it would be awkward to have to declare them in the Composable function."),(0,o.kt)("p",null,"So in these cases, you can declare a specific data class with the navigation arguments and set it in the annotation. This class needs to have a public constructor where the navigation arguments are defined."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All the information above, regarding defining navigation arguments in the Composable itself, is also valid when defining the arguments this way. The difference is just that now we will get the arguments info from the constructor parameters and before we would get them from the Composable function parameters.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class ProfileScreenNavArgs(\n    val id: Long,\n    val groupName: String?\n)\n")),(0,o.kt)("p",null,"Then in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(\n    navArgsDelegate = ProfileScreenNavArgs::class\n)\nfun ProfileScreen() { /*...*/ }\n")),(0,o.kt)("p",null,"Note that we can also still receive the arguments in the Composable too if we declare a parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"navArgsDelegate")," class, but you cannot define any other argument of navigation type (you should not need to anyway). A compile-time check is in place to make sure this is respected."),(0,o.kt)("p",null,"When using this feature, you'll notice that the generated Destination's ",(0,o.kt)("inlineCode",{parentName:"p"},"argsFrom")," methods will will return the delegate navigation arguments class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun argsFrom(navBackStackEntry: NavBackStackEntry): ProfileScreenNavArgs {\n    //...\n}\n\noverride fun argsFrom(savedStateHandle: SavedStateHandle): ProfileScreenNavArgs {\n    //...\n}\n")),(0,o.kt)("p",null,"You can use the second one to get the arguments in the ViewModel from the ",(0,o.kt)("inlineCode",{parentName:"p"},"SavedStateHandle"),"."),(0,o.kt)("h2",{id:"custom-navigation-argument-types"},"Custom navigation argument types"),(0,o.kt)("p",null,"Besides types that are navigation arguments out of the box, you can make any type be considered a navigation argument type with a one-time easy setup. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature can also be used determine how ",(0,o.kt)("inlineCode",{parentName:"p"},"Parcelable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable")," types will be represented in the route. This is useful if you want to deep link into a Screen that has one of these navigation arguments. Read more ",(0,o.kt)("a",{parentName:"p",href:"../deeplinks#screens-with-mandatory-parcelableserializable-navigation-arguments"},"here"),"."))),(0,o.kt)("p",null,"You may know that internally, Official Compose Navigation uses string routes to navigate. Well, to make an argument be able to be passed from screen to screen, we need to be able to convert its type to string and back. Hence, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationsNavTypeSerializer")," interface that you can implement and annotate with ",(0,o.kt)("inlineCode",{parentName:"p"},"@NavTypeSerializer")," to make code generation consider that type argument a type that can be passed when navigating."),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"import androidx.compose.ui.graphics.Color\n//...\n\n@NavTypeSerializer\nclass ColorTypeSerializer : DestinationsNavTypeSerializer<Color> {\n    override fun toRouteString(value: Color): String =\n        value.toArgb().toString()\n\n    override fun fromRouteString(routeStr: String): Color =\n        Color(routeStr.toInt())\n}\n")),(0,o.kt)("p",null,"After this, you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"androidx.compose.ui.graphics.Color")," as you would any other navigation argument."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While this feature can be super helpful, remember that you should not be sending big classes in navigation.\nThe above example is perfect because ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," is simple structure.",(0,o.kt)("br",{parentName:"p"}),"\n","Anyway, Compose Destinations gives you the tools to easily do this so you can test it with less upfront work. This is possible to do with Official Compose Navigation, but the setup has more boilerplate."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the type is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Parcelable")," nor ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable"),", the library saves it in the Android ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle")," as a String. So keep that in mind if you ever try to access the navigation argument directly without using ",(0,o.kt)("inlineCode",{parentName:"p"},"argsFrom")," function of your corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination"),"."))))}c.isMDXComponent=!0}}]);