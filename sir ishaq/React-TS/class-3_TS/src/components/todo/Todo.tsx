import { useEffect, useState } from "react";
import AddForm from "../addForm/AddForm";
import List from "../list/List";
import Logout from "../logout/Logout";

function Todo() {
  useEffect(() => {
    const isIntervel = setInterval(() => console.log("run"), 1000);
    return () => {
      clearInterval(isIntervel);
    };
  }, []);
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
      <div>
        <AddForm add={addItemHandler} />
        <List data={items} />
      </div>
      <div>
        <Logout />
      </div>
    </>
  );
}

export default Todo;
