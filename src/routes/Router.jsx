import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryWiseNews from "../Components/MainContent/CategoryWiseNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/01"></Navigate>
            },
            {
                path: "/category/:id",
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <CategoryWiseNews></CategoryWiseNews>
            }
        ]
    },
    {
        path: "/news/:id",
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },
])

export default Router;