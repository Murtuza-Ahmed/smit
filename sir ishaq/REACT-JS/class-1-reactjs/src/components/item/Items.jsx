import { useState } from "react";
import PropTypes from "prop-types";

Items.propTypes = {
  title: PropTypes.string.isRequired,
};

function Items(props) {
  //   const data = "My React App Items";
  const [title, setTitle] = useState(props.title);
  //   [vatToUse,functionToUpdate]

  const changeIt = () => {
    setTitle("update");
    // console.log(title);
  };
  return (
    <>
      {/* <li>{data}</li> */}
      <li>{title}</li>
      <button onClick={changeIt}>Change</button>
    </>
  );
}
export default Items;
