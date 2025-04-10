import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
    const { logout } = useAuth0();
    function logoutHandler() {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    }
    return <button onClick={logoutHandler} className="auth-button">Logout</button>
}