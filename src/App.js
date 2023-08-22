import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { isMobile } from "react-device-detect";
import Main from "./pages/Main";
import MobileMain from "./pages/MobileMain";
import Headphones from "./pages/Headphones";
import MobileHeadphones from "./pages/MobileHeadphones";
import Speakers from "./pages/Speakers";
import MobileSpeakers from "./pages/MobileSpeakers";
import Root from "./pages/Root";
import MobileRoot from "./pages/MobileRoot";
import Productdetail from "./pages/Productdetail";
import MobileProductdetail from "./pages/MobileProductdetail";
import NotFound from "./pages/NotFound";


function App(){ 
  let router=null;
  
  if(isMobile){
    router=createBrowserRouter([ //객체의 배열형태로 함
    {
        path:'/',
        element:<MobileRoot/>,
        errorElement:<NotFound/>,
        children:[
            {index:true, element:<MobileMain/>},
            {path:'/speakers', element:<MobileSpeakers/>},
            {path:'/speakers/:productId', element:<MobileProductdetail/>},
            {path:'/headphones', element:<MobileHeadphones/>}
        ]
    },
    
  ])

}else{
  router=createBrowserRouter([ //객체의 배열형태로 함
  {
      path:'/',
      element:<Root/>,
      errorElement:<NotFound/>,
      children:[
          {index:true, element:<Main/>},
          {path:'/speakers', element:<Speakers/>},
          {path:'/speakers/:productId', element:<Productdetail/>},
          {path:'/headphones', element:<Headphones/>}
      ]
  },
  
])
}
 
  return(
   <>
      <AuthContextProvider>
      <RouterProvider router={router}/>
      </AuthContextProvider>
    </>
    )
  }
  export default App;