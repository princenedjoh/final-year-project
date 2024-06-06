import { createContext, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    handleLogin: () => void;
    handleLogout: () => void;
    token : string | undefined;
    setToken : React.Dispatch<React.SetStateAction<string | undefined>>;
    refreshToken : string | undefined;
    setRefreshToken : React.Dispatch<React.SetStateAction<string | undefined>>
  }
  

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    handleLogin: () => {},
    handleLogout: () => {},
    token : undefined,
    setToken : () => {},
    refreshToken : undefined,
    setRefreshToken : () => {}
  });
  

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string>()
    const [refreshToken, setRefreshToken] = useState<string>()

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    return (
      <AuthContext.Provider value={{ 
        isLoggedIn, 
        handleLogin, 
        setIsLoggedIn, 
        handleLogout,
        token,
        setToken,
        refreshToken,
        setRefreshToken
       }}>
        {children}
      </AuthContext.Provider>
    );
  };
  