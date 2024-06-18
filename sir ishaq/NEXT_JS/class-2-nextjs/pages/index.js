import Button from "@/components/button/Button";
import Greet from "@/components/greet/Greet";

export default function Home() {
  return (
    <>
      <Greet />
      {/* <Button text="save" /> */}
      <Button>Cancel</Button>
      <h1>Sheroz</h1>
    </>
  );
}
