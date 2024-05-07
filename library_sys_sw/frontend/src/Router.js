import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path:'/', 
        element:<App />, 
        children: [ 
            {
                path:'/', 
                element:<LoginPage /> 
            }, 
            {
                path:'/dashboard', 
                element:<Dashboard />
            }
        ]
    }, 
    {
        path:"*", 
        element:<h1>not found</h1>
    }
]); 