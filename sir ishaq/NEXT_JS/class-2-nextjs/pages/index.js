import Button from "@/components/button/Button";
import Greet from "@/components/greet/Greet";
import Lists from "@/components/list/Lists";


export default function Home() {
  const arr = ["This is item", "This is another Item", "This is not another item"]

  return (
    <>
      <Greet />
      <Lists arr={arr} />
      {/* <Button text="save" /> */}
      <Button>Cancel</Button>
      <h1>Sheroz</h1>
    </>
  );
}
