import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, component:Component }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return <Component />;
};


export default Protected;
