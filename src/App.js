import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Productdetail from "./pages/Productdetail";
import { AuthContextProvider } from "./context/AuthContext";
import { isMobile } from "react-device-detect";
import MobileMain from "./pages/MobileMain";

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