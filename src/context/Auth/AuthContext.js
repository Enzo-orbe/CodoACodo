import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState({
    name: "",
    isAuthenticated: false,
  });

  const [localStorageData, setLocalStorageData] = useState({});

  const onChange = (e) => {
    setAuthenticated({
      ...authenticated,
      [e.target.name]: e.target.value,
      isAuthenticated: true,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("authenticated", JSON.stringify(authenticated));
    navigate("/accounts");
  };

  const getIsAuthenticated = () => {
    const data = localStorage.getItem("authenticated");
    setLocalStorageData(JSON.parse(data));
  };

  const logout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        localStorageData,
        onChange,
        onSubmit,
        getIsAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
