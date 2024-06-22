
import { useState } from "react";
import db from '../utils/db.json';
import Lists from "@/components/listdata/Lists";

export default function Home() {

  console.log(db);
  const [arr, setArr] = useState(db.authors);

  return (
    <div>
      <Lists arr={arr} />
    </div>
  )
}
