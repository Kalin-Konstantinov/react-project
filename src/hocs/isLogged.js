import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";



export const isLogged = (Component) => {

    const WrapperComponent = (props) => {
        const { user } = useAuthContext();

        return user.accessToken
            ? <Component {...props} />
            : <Navigate />
    }

    return WrapperComponent;

}