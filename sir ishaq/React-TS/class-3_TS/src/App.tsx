import { useState } from "react";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import AuthHandler from "./components/authHandler/AuthHandler";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const ctxValue = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => {
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
