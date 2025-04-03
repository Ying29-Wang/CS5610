import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const { user } = useAuth0();
    console.log(user);
    return (
        user ? (
        <div>
            <h1>Profile</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
        ) : (
            <div>
                <h1>Please login</h1>
            </div>
        )
    )
}