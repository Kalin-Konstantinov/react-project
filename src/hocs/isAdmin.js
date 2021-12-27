import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";



const isAdmin = (Component) => {
    const { user } = useAuthContext();

    if(user.name === "admin") {
        return (
            <>
            {Component}
            </>
        );
    }
}

export default isAdmin;