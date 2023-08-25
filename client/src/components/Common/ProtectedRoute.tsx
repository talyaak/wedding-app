import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated()) {
        return element;
    }

    // If not authenticated, redirect to login or any other route
    return <Navigate to="/rsvp" />;
};

export default ProtectedRoute;
