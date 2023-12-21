import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/signUp',
          element: <SignUp/>
        },
        {
          path: '/login',
          element: <LogIn/>
        },
      ]
      
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: '/dashboard/addtask',
          element: <AddTask/>
        }
      ]
    }
  ]);
  