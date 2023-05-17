import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Error from "../components/Error/Error";
import Home from "../components/Pages/Home/Home";
import AllJobs from "../components/Pages/AllJobs/AllJobs";
import PostedJobs from "../components/Pages/PostedJobs/PostedJobs";
import AppliedJobs from "../components/Pages/AppliedJobs/AppliedJobs";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";




const router = createBrowserRouter([
  {
    path: "/",   
    element: <MainLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element:<Home />
      }, 
      {
        path:"/alljobs",
        element:<AllJobs />,        
      },
      {
        path:"/postedjobs",
        element:<PostedJobs />
      },
      {
        path:"/appliedjobs",
        element:<AppliedJobs />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:"/signup",
        element:<Register />
      }
    ]
  },
]);

export default router;
