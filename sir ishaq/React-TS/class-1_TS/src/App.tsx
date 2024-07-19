import List from "./components/list/List";

function App() {
  // const text = "WelCome to My React App.";
  const texts = ["Hello", "Welcome", "Good Bye"];
  return (
    <>
      <List data={texts} />
      {/* <List data={text} /> */}
    </>
  );
}

export default App;
