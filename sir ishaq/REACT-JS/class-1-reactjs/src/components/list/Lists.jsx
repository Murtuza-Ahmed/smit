import Items from "../item/Items";

function Lists() {
  const arr = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <Items key={index} title={item} />
        ))}
        {/* <Items title={arr[0]} />
        <Items title={arr[1]} /> */}
      </ul>
    </>
  );
}
export default Lists;
