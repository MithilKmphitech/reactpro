import { Outlet, Navigate } from 'react-router-dom';
const PrivateRouter = () => {
    let auth = localStorage.getItem("token");
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRouter;