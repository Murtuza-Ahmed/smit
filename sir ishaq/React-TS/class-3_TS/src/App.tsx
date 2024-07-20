import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";
import Login from "./components/login/Login";

function App() {
  const [items, setItems] = useState<string[]>([
    "Hello",
    "Welcome",
    "Good Bye",
  ]);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const setLoginHandler = (val: boolean) => {
    setIsAuth(val);
  };

  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
  };
  return (
    <>
      <div>
        {isAuth ? (
          <Todo addItemHandler={addItemHandler} items={items} />
        ) : (
          <Login onLogin={setLoginHandler} />
        )}
      </div>
    </>
  );
}

export default App;
