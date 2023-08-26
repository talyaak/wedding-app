import React, { createContext, useContext, useState, useEffect } from 'react';
import { LoginRequest } from '../../api/interfaces/LoginRequest';
import { useNavigate } from 'react-router-dom';
import { LoginResponse, UserWithoutSensitiveFields, ValidateResponse } from '../../api/interfaces/AuthInterfaces';


interface AuthContextType {
    user: UserWithoutSensitiveFields | null;
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
    const [user, setUser] = useState<UserWithoutSensitiveFields | null>(null); // Store user data
    const navigate = useNavigate();

    useEffect(() => {
        if (user) return;
        const checkAuthenticationStatus = async (): Promise<void> => {
            try {
                const response = await fetch('/api/auth/validate', { method: 'POST', credentials: 'include' });
                if (response.ok) {
                    const data: ValidateResponse = await response.json();
                    if (data.isAuthenticated && data.user) setUser(data.user);
                    else throw new Error("Authentication failed");
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        checkAuthenticationStatus();
    }, []);

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
                const data: LoginResponse = await response.json();
                if (data.user) setUser(data.user);
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
                credentials: 'include',
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
