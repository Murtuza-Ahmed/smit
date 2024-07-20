import { useState } from "react";
import AddForm from "../addForm/AddForm";
import List from "../list/List";

function Todo() {
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
    </>
  );
}

export default Todo;
