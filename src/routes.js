import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Reports from "./pages/Reports";
import GoalTracker from "./pages/GoalTracker";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path:"/goaltracker",
            element: <GoalTracker />
        },
            {path:"/home",
            element: <Home />
        },
        {
            path: "/about",
            element:<About />
        },
        {
            path: "/reports",
            element:<Reports />
        }
        ]
    }
];

export default routes;