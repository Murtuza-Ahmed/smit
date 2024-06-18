import { useState } from "react";
import Button from "@/components/button/Button";
import Greet from "@/components/greet/Greet";
import Lists from "@/components/list/Lists";


export default function Home() {
  // const arr = ["This is item", "This is another Item", "This is not another item"]
  const [arr, setArr] = useState(["This is item", "This is another Item", "This is not another item"])

  const addHandler = () => {
    // arr.push("Add Item")
    setArr([...arr, "Add Item"])
  }
  const cancelHandler = () => {
    setArr(arr.slice(0, -1))
  }
  return (
    <>
      <Greet />
      <Lists arr={arr} />
      {/* <Button text="save" /> */}
      <Button clickAdd={addHandler}>Add</Button>
      <Button clickCancel={cancelHandler}>Cancel</Button>
      <h1>Sheroz</h1>
    </>
  );
}
