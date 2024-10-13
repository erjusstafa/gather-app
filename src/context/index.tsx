import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean; 
    login: (token: string) => void; 
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!sessionStorage.getItem('authToken'));

    const login = (token: string) => {
       if(token){
        setIsAuthenticated(true);
       }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useContactContext must be used within a ContactProvider');
    }
    return context;
};