import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react';

export default function ProtectedRoute({ component }) {
    const MyProtectedComponent = withAuthenticationRequired(component);
    return <MyProtectedComponent />
}