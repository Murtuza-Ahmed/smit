import List from "./components/list/List";

function App() {
  const texts = ["Hello", "Welcome", "Good Bye"];
  return (
    <>
      <List data={texts} />
    </>
  );
}

export default App;
