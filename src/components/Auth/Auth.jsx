import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAuthUser } from "../../redux/auth/authOperations";
import { selectIsUserAuthorized } from "../../redux/auth/authSelectors";
import { googleAuth } from "../../redux/auth/authSlice";

const Auth = ({ children }) => {
    const dispatch = useDispatch();
    const [search] = useSearchParams();
    const isUserAuthorized = useSelector(selectIsUserAuthorized);
    const sid = search.get("sid");
    
    useEffect(() => {
        dispatch(getAuthUser())
    }, [dispatch, isUserAuthorized])

    useEffect(() => {
        if (!sid) return
        const payload = {};
        for (const [key, value] of search.entries()) {
            payload[key] = value;
        }
        if (Object.keys(payload).length) {
            dispatch(googleAuth(payload));
        }
    }, [sid, dispatch, search])
    
    return (
        children
    );
};

export default Auth;