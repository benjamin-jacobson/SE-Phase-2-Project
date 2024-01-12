import App from "./App";
import AddGoal from "./pages/AddGoal";
import Overview from "./pages/Overview";
import LogGoal from "./pages/LogGoal";
import Reports from "./pages/Reports";
import AllGoals from "./pages/AllGoals";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path:"/allgoals",
            element: <AllGoals />
        },
            {path:"/addgoal",
            element: <AddGoal />
        },
        {path:"/loggoal",
        element: <LogGoal />
        },
        {
            path: "/overview",
            element:<Overview />
        },
        {
            path: "/reports",
            element:<Reports />
        }
        ]
    }
];

export default routes;