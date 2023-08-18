import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Main";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Productdetail from "./pages/Productdetail";
import { AuthContextProvider } from "./context/AuthContext";

export default function App(){ 
  const router=createBrowserRouter([ //객체의 배열형태로 함
    {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children:[
            {index:true, element:<Home/>},
            {path:'/speakers', element:<Speakers/>},
            {path:'/speakers/:productId', element:<Productdetail/>},
            {path:'/headphones', element:<Headphones/>}
        ]
    },
    
  ])
 
  return(
   <>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
    </>
    )
  }