import Items from "../item/Items";
import PropTypes from "prop-types";

Lists.propTypes = {
  arr: PropTypes.array.isRequired,
};

function Lists({ arr }) {
  console.log("ARRAY", arr);
  const items = arr.map((item, index) => {
    return <Items key={"no-" + index} title={item} />;
  });
  return (
    <>
      <ul>
        {items}
        {/* {arr.map((item, index) => (
          <Items key={index} title={item} />
        ))} */}
        {/* <Items title={arr[0]} />
        <Items title={arr[1]} /> */}
      </ul>
    </>
  );
}
export default Lists;
