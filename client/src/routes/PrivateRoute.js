import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

function PrivateRoute({/*isLogged*/}) {
    const [cookies, setCookie] = useCookies();
    return cookies.user != null ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
