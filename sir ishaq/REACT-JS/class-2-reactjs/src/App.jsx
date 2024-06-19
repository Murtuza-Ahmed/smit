import { useState } from "react";
import "./App.css";
import AddItem from "./components/additem/AddItem";
import Lists from "./components/list/Lists";

function App() {
  const bool = true;
  const col = true;

  // let cls = "my-class";
  // if (bool) {
  //   cls += " ";
  // }

  // const arr = ["item 1", "item 2", "item 3", "item 4", "item 5"];

  const [items, setItems] = useState(["item 1"]);

  const onAddHandler = (data) => {
    setItems((prevState) => {
      return [...prevState, data];
    });
    console.log(items);
  };
  return (
    <>
      {/* <div className={bool ? "app" : ""}> */}
      <div
        // className={`my-class ${bool ? "app" : "my-app"}`}
        className={`my-class ${bool && "app"}`}
        style={{ backgroundColor: col ? "#000" : "#61da" }}
      >
        <AddItem onAdd={onAddHandler} />
        My React App
        <Lists arr={items} />
      </div>

      {/* <div className={cls}>
        <Lists />
      </div> */}
    </>
  );
}

export default App;
