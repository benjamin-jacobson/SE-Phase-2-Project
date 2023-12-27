import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path:"/",
            elemnent: <Home />
        },
        {
            path: "/about",
            element:<About />
        }
        ]
    }
];

export default routes;