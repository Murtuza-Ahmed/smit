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

  return (
    <>
      {/* <div className={bool ? "app" : ""}> */}
      <div
        // className={`my-class ${bool ? "app" : "my-app"}`}
        className={`my-class ${bool && "app"}`}
        style={{ backgroundColor: col ? "#000" : "#61da" }}
      >
        <AddItem />
        My React App
        <Lists />
      </div>

      {/* <div className={cls}>
        <Lists />
      </div> */}
    </>
  );
}

export default App;
