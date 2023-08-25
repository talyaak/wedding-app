import React, { createContext, useContext, useState } from 'react';
import { LoginRequest } from '../../api/interfaces/LoginRequest';
import { useNavigate } from 'react-router-dom';

interface User {
    id: string;
    name: string;
    // Other user properties
}

interface AuthContextType {
    user: LoginRequest | null;
    login: (userData: LoginRequest) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<LoginRequest | null>(null); // Store user data
    const navigate = useNavigate();
    const login = async (loginData: LoginRequest) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                setUser(loginData);
                navigate('/rsvp/attendance');
            } else {
                // Handle authentication error
                const errorData = await response.json();
                window.alert(errorData.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            window.alert('An error occurred. Please try again later.');
        }
    };

    const logout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include', // Send cookies
            });

            if (response.ok) {
                setUser(null);
            } else {
                // Handle logout error
                const errorData = await response.json();
                window.alert(errorData.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            window.alert('An error occurred. Please try again later.');
        }
    };

    const isAuthenticated = () => {
        return !!user;
    };

    const contextValue: AuthContextType = {
        user,
        login,
        logout,
        isAuthenticated,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
