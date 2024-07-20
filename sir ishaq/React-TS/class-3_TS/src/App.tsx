import { useEffect, useState } from "react";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import AuthHandler from "./components/authHandler/AuthHandler";

function App() {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isloggedin") === "1";
    setIsAuth(isLoggedIn);
  }, []);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const ctxValue = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => {
      localStorage.setItem("isloggedin", val ? "1" : "0");
      setIsAuth(val);
    },
  };

  return (
    <>
      <div>
        <AuthContext.Provider value={ctxValue}>
          <AuthHandler />
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;
