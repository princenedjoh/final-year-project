import { createContext, useEffect, useState } from "react";
import { retrieveIsUserLoggedin, retrieveRefreshToken, retrieveToken } from "./asyncStorage";
import logout from "../utils/logout";
import { protectedAPI } from "../api/api";

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
  const checkTokenValidity = async () => {
    const {response, error} = await protectedAPI.get('/users/get/')
    if(response)
      return setUserInfo()
    await logout()
  }

  const setUserInfo = async () => {
    const isUserLoggedin = await retrieveIsUserLoggedin()
    const token = await retrieveToken()
    const refreshToken = await retrieveRefreshToken()
    setIsLoggedIn(Boolean(isUserLoggedin))
    setToken(token)
    setRefreshToken(refreshToken)
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>()
  const [refreshToken, setRefreshToken] = useState<string>()

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await logout()
    setUserInfo()
  };

  useEffect(()=>{
    checkTokenValidity()
  },[])

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
  