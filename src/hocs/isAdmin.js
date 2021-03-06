import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";



export const isAdmin = (Component) => {

    const WrapperComponent = (props) => {

        const { user } = useAuthContext();

        if (user.name === "admin") {
            console.log(user.name);
            return <Component {...props} />
        } else {
            return <Navigate to='/' />
        }
    }

    return WrapperComponent;
}
