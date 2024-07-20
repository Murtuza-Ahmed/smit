import { useState } from "react";
import AddForm from "./components/addForm/AddForm";
import List from "./components/list/List";
import "./App.css";

function App() {
  const [items, setItems] = useState<string[]>([
    "Hello",
    "Welcome",
    "Good Bye",
  ]);

  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
  };
  return (
    <>
      <AddForm add={addItemHandler} />
      <List data={items} />
    </>
  );
}

export default App;
