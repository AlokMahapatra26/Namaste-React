import React from 'react';
import ReactDOM from 'react-dom/client'


import { Header } from "./components/Header"
import { Body } from "./components/Body";
import {About} from "./pages/About";
import {Search} from "./pages/Search.jsx"
import {Error} from "./pages/Error.jsx"
import {RestaurantMenu} from "./pages/RestaurantMenu.jsx"

import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"

export const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/search",
                element:<Search/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
