import { useEffect, useState } from "react";
import "./App.css";
import AuthHandler from "./components/authhandler1/AuthHandler";
import AuthContext from "./context/AuthContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // console.log("USE EFFECT CALLED");
    const isStorageLoggedIn = localStorage.getItem("isLoggedIn") === "1";
    setIsAuthenticated(isStorageLoggedIn);
  }, []);

  const onLogin = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsAuthenticated(true);
  };

  const onLogout = () => {
    localStorage.setItem("isLoggout", "0");
    setIsAuthenticated(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isAuthenticated,
          onLogin: onLogin,
          onLogout: onLogout,
        }}
      >
        <AuthHandler />
        {/* <AuthHandler onLogin={onLogin} onLogout={onLogout} /> */}
        {/* isAuthenticated ? <AppRouter /> : <AuthRouter onLogin={onLogin} /> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
