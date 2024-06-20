import { useState } from "react";
import "./App.css";
import AuthHandler from "./components/authhandler1/AuthHandler";
import AuthContext from "./context/AuthContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = () => {
    setIsAuthenticated(true);
  };

  const onLogout = () => {
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
