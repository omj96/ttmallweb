import { useRoutes, Navigate } from "react-router";
import Home from "../component/Home";
import Error from "../component/Error";
import About from "../component/About";
function Router(){
    const router = useRoutes([
        { path: "/", element:<Home /> },
        { path: "/error", element:<Error />},
        { path: "/about", element:<About />},
        // 找不到路径
        { path: "*", element:<Navigate to='/error' />}
    ])
    return router;
}
export default Router;