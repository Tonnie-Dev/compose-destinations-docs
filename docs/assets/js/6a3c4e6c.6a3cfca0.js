"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[723],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1233:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=t(3117),o=t(102),i=(t(7294),t(3905)),r=["components"],l={sidebar_position:2},s="Providing ViewModels to your Screens",d={unversionedId:"common-use-cases/providing-viewmodels",id:"common-use-cases/providing-viewmodels",title:"Providing ViewModels to your Screens",description:"Getting a ViewModel specific to one Screen",source:"@site/docs/common-use-cases/providing-viewmodels.md",sourceDirName:"common-use-cases",slug:"/common-use-cases/providing-viewmodels",permalink:"/common-use-cases/providing-viewmodels",draft:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/common-use-cases/providing-viewmodels.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bottom bar navigation",permalink:"/common-use-cases/bottom-bar-navigation"}},c={},p=[{value:"Getting a ViewModel specific to one Screen",id:"getting-a-viewmodel-specific-to-one-screen",level:2},{value:"Using default parameters feature",id:"using-default-parameters-feature",level:3},{value:"Using a setup Composable",id:"using-a-setup-composable",level:3},{value:"Using <code>dependenciesContainerBuilder</code>",id:"using-dependenciescontainerbuilder",level:3},{value:"Manually calling your screen Composable",id:"manually-calling-your-screen-composable",level:3},{value:"Share ViewModels between multiple destinations",id:"share-viewmodels-between-multiple-destinations",level:2},{value:"Make your one liner ViewModel getter",id:"make-your-one-liner-viewmodel-getter",level:2},{value:"Manual or no dependency injection",id:"manual-or-no-dependency-injection",level:3},{value:"Other DI frameworks",id:"other-di-frameworks",level:3}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"providing-viewmodels-to-your-screens"},"Providing ViewModels to your Screens"),(0,i.kt)("h2",{id:"getting-a-viewmodel-specific-to-one-screen"},"Getting a ViewModel specific to one Screen"),(0,i.kt)("p",null,"Android Architecture Components ViewModel is a useful class that can easily be tied to a ",(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry"),". This means that the state of your screen is live while that screen is in the back stack. If the user goes back to that screen, you don't need to do anything extra: the previous state will still be there."),(0,i.kt)("p",null,"Even though Compose Destinations will call your annotated Composables with a limited set of components it can provide out the box (read about them ",(0,i.kt)("a",{parentName:"p",href:"../destination-arguments/navhost-level-parameters"},"here"),"), there are a few ways you can get the ViewModel."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In these next examples, I'll be using ",(0,i.kt)("inlineCode",{parentName:"p"},"hiltViewModel()")," function to get the ViewModel.\nIf you're not using Hilt, then check the ",(0,i.kt)("a",{parentName:"p",href:"#make-your-one-liner-viewmodel-getter"},"last section of this page")," for a way to make your own one-liner function to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"hiltViewModel()")," with."))),(0,i.kt)("h3",{id:"using-default-parameters-feature"},"Using default parameters feature"),(0,i.kt)("p",null,"This is probably the most simple approach if you have a simple function you can call in a Composable scope to get a ViewModel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun MyScreen(\n    viewModel: MyScreenViewModel = hiltViewModel()\n) { /*...*/ }\n")),(0,i.kt)("h3",{id:"using-a-setup-composable"},"Using a setup Composable"),(0,i.kt)("p",null,'A setup Composable is a place to get all state and "event handlers" and then call the Composable that will compose the actual screen content which can then just receive state and lambdas.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun MyScreen() {\n    val viewModel: MyScreenViewModel = hiltViewModel()\n    \n    MyScreenContent(\n        isButtonEnabled = viewModel.isButtonEnabled, // example of state\n        onButtonClick = viewModel::onButtonClicked // example of events\n    )\n}\n\n\n@Composable\nfun MyScreenContent(\n    isButtonEnabled: Boolean,\n    onButtonClick: () -> Unit\n) { /*...*/ }\n")),(0,i.kt)("p",null,"If you're used to Jetpack Compose navigation, think of this method as you would think about the setup code you would do inside ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphBuilder"),'. With Compose Destinations, whatever you\'d do there, you can do in this "setup" Composable.'),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Notice how your "Content" is a "pure" Composable. It only takes stuff that doesn\'t depend on the platform, it could even be part of a module shared in Kotlin Multiplatform.',(0,i.kt)("br",{parentName:"p"}),"\n","Of course, you can accomplish the same thing with any of the other approaches."))),(0,i.kt)("h3",{id:"using-dependenciescontainerbuilder"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"dependenciesContainerBuilder")),(0,i.kt)("p",null,"Even though this method is usually more appropriate to prepare dependencies which will be used by multiple/all screens, you can still use it for this case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n    dependenciesContainerBuilder = { //this: DependenciesContainerBuilder<*>\n        dependency(MyScreenDestination) { hiltViewModel<MyScreenViewModel>() }\n    }\n)\n")),(0,i.kt)("p",null,"And then: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun MyScreen(\n    viewModel: MyScreenViewModel // <-- this will be provided by the lib through the `dependenciesContainerBuilder`\n)\n")),(0,i.kt)("h3",{id:"manually-calling-your-screen-composable"},"Manually calling your screen Composable"),(0,i.kt)("p",null,"This is the closest way to how you'd do it with Jetpack Compose Navigation. But with Compose Destinations the only thing you're doing is calling the Composable. No navigation arguments or navigation graphs declaration done in the same place:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n    //...\n) {\n    composable(MyScreenDestination) { //this: DestinationScope<MyScreenDestination.NavArgs>\n        MyScreen(\n            viewModel = hiltViewModel()\n        )\n    }\n}\n")),(0,i.kt)("p",null,"Contrary to if you were using Jetpack Compose Navigation, you are not building the navigation graph here (that information comes through the ",(0,i.kt)("inlineCode",{parentName:"p"},"navGraph")," parameter). So you don't need to do this for all your screens, just the ones that need some parameters that the library cannot provide."),(0,i.kt)("h2",{id:"share-viewmodels-between-multiple-destinations"},"Share ViewModels between multiple destinations"),(0,i.kt)("p",null,"If you want to share a ViewModel with multiple destinations, you need to choose a scope that lives longer than a specific screen. Usually that will be either a nested navigation graph if you want to share a ViewModel with all destinations that belong to that nested nav graph, or an Activity if you want to share a ViewModel with all your destinations."),(0,i.kt)("p",null,"Either way, in this case, the simplest option (even though the above ones can also work) is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"dependenciesContainerBuilder")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost")," function.\nHere is what that looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun AppNavigation(\n    activity: Activity\n) {\n    DestinationsNavHost(\n        //...\n        dependenciesContainerBuilder = { //this: DependenciesContainerBuilder<*>\n\n            // \ud83d\udc47 To tie SettingsViewModel to "settings" nested navigation graph, \n            // making it available to all screens that belong to it\n            dependency(NavGraphs.settings) {\n                val parentEntry = remember(navBackStackEntry) {\n                    navController.getBackStackEntry(NavGraphs.settings.route)\n                }\n                viewModel<SettingsViewModel>(parentEntry)\n            }\n\n            // \ud83d\udc47 To tie ActivityViewModel to the activity, making it available to all destinations\n            dependency(hiltViewModel<ActivityViewModel>(activity))\n        }\n    )\n}\n')),(0,i.kt)("p",null,"Then a screen that belongs to ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsNavGraph")," navigation graph could just do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@SettingsNavGraph\n@Destination\n@Composable\nfun MainSettingsScreen(\n    settingsViewModel: SettingsViewModel\n)\n")),(0,i.kt)("p",null,"As well as all Destinations can also declare a ",(0,i.kt)("inlineCode",{parentName:"p"},"activityViewModel: ActivityViewModel"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The example uses ",(0,i.kt)("inlineCode",{parentName:"p"},"hiltViewModel"),", but check the next sections if you don't use Hilt."))),(0,i.kt)("h2",{id:"make-your-one-liner-viewmodel-getter"},"Make your one liner ViewModel getter"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is not directly related to Compose Destinations. This would be true and valid even if you were not using Compose Destinations library.",(0,i.kt)("br",{parentName:"p"}),"\n","I just felt like this could be helpful as I have seen some confusion around getting a ViewModel tied to the navigation destination."))),(0,i.kt)("p",null,"In previous examples, I used the most simple way of getting a view model instance, and that is with ",(0,i.kt)("inlineCode",{parentName:"p"},"hiltViewModel()")," which belongs to Hilt Dependency Injection framework."),(0,i.kt)("p",null,"I've seen some confusion in the community where some people believe that you need Hilt to get a ViewModel that is tied to a ",(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry"),". That is not true at all. The only thing Hilt facilitates is injecting dependencies to that ViewModel at the same time. But with some manual setup, you can make your function."),(0,i.kt)("h3",{id:"manual-or-no-dependency-injection"},"Manual or no dependency injection"),(0,i.kt)("p",null,"If you're manually setting up dependency injection in your code or you simply are not using dependency injection, you can do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\ninline fun <reified VM : ViewModel> viewModel(\n    viewModelStoreOwner: ViewModelStoreOwner = checkNotNull(LocalViewModelStoreOwner.current) {\n        "No ViewModelStoreOwner was provided via LocalViewModelStoreOwner"\n    },\n    savedStateRegistryOwner: SavedStateRegistryOwner = LocalSavedStateRegistryOwner.current\n): VM {\n    return androidx.lifecycle.viewmodel.compose.viewModel(\n        viewModelStoreOwner = viewModelStoreOwner,\n        factory = ViewModelFactory(\n            owner = savedStateRegistryOwner,\n            defaultArgs = (savedStateRegistryOwner as? NavBackStackEntry)?.arguments,\n             //remove this line if you\'re not using Dependency injection\n            dependencyContainer = [ACCESS YOUR DEPENDENCIES GRAPH HERE SOMEHOW],\n        )\n    )\n}\n\nclass ViewModelFactory(\n    owner: SavedStateRegistryOwner,\n    defaultArgs: Bundle?,\n    //remove this line if you\'re not using Dependency injection\n    private val dependencyContainer: DependencyContainer\n) : AbstractSavedStateViewModelFactory(\n    owner,\n    defaultArgs\n) {\n\n    @Suppress("UNCHECKED_CAST")\n    override fun <T : ViewModel?> create(\n        key: String,\n        modelClass: Class<T>,\n        handle: SavedStateHandle\n    ): T {\n        return when (modelClass) {\n            ProfileViewModel::class.java -> ProfileViewModel(\n                dependencyContainer.getProfileLikeCountUseCase,\n                ProfileScreenDestination.argsFrom(handle)\n            )\n\n            GreetingViewModel::class.java -> GreetingViewModel()\n\n            else -> throw RuntimeException("Unknown view model $modelClass")\n        } as T\n    }\n}\n')),(0,i.kt)("p",null,"As seen above, if you want a single function for all viewModel types, then you need a single ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModelFactory")," that can create all your types of ViewModels. Alternatively, you could have one function for each ViewModel (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"profileViewModel()")," to get ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfileViewModel")," by using a ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfileViewModelFactory"),")."),(0,i.kt)("p",null,"This does mean that every time you add a new ViewModel to your code base, you'll have to come here and add that entry to the ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," statement above. Nothing is perfect, and this is definitely one reason to make you want to use a Dependency Injection framework like Hilt, so that this is handled for you."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"',"[ACCESS YOUR DEPENDENCIES GRAPH HERE SOMEHOW]",'"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using manual Dependency injection, you must treat this function as you do with accessing your dependencies graph in an Android entry point (Activity, Fragment, etc), i.e, you need to directly access it somehow.",(0,i.kt)("br",{parentName:"p"}),"\n","There are plenty of ways to do this depending on where you're saving the dependencies container instance: you could use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/compositionlocal"},"CompositionLocals")," feature to provide the container, you could access your singleton ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," instance if you're dependencies are available there, or you could do ",(0,i.kt)("a",{parentName:"p",href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:hilt/hilt-navigation/src/main/java/androidx/hilt/navigation/HiltNavBackStackEntry.kt"},"what Hilt does internally")," which is take the ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalContext.current")," and try to get an Activity from that, then you can get the dependency container declared in that Activity."))),(0,i.kt)("h3",{id:"other-di-frameworks"},"Other DI frameworks"),(0,i.kt)("p",null,"If you're using a DI framework other than Hilt (Koin, f.e) then you need to check that framework's documentation in how you can get an instance of a ViewModel."),(0,i.kt)("p",null,"Remember that if in your framework you have to explicitly pass something like ",(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModelStoreOwner")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SavedStateRegistryOwner")," then check the above example to see how to get that. You can use them to make your own wrapper calling the framework method."))}m.isMDXComponent=!0}}]);