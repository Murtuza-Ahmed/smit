
import { useEffect, useState } from "react";
// import db from '../utils/db.json';
import Lists from "@/components/listdata/Lists.jsx";

const Home = () => {

  // console.log(db);
  // const [arr, setArr] = useState(db.authors);

  const [data, setData] = useState(1);

  const [data2, setData2] = useState(1);

  useEffect(() => {
    console.log("called");
  }, [data])

  const update = () => {
    setData((oldData) => {
      const d = oldData + 1
      console.log(d)
      return d
    });
    console.log(data)
  }

  const update2 = () => {
    setData2((prevState) => {
      const d = prevState + 1
      console.log(d)
      return d
    })
  }

  return (
    <div>
      DATA: {data} 
      <button onClick={update}>Add</button>
      DATA:2 {data2}
      <button onClick={update2}>Add Data 2</button>
      {/* <Lists arr={arr} /> */}
    </div>
  )
}


export default Home