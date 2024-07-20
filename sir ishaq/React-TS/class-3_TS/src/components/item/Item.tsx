import MyButton from "../myButton/MyButton";

function Item({ data }: { data: string }) {
  const onDeleteHandler = () => {
    console.log("DELETE");
  };
  return (
    <>
      <div>{data}</div>{" "}
      <MyButton type="button" theme="cancel" click={onDeleteHandler}>
        Delete
      </MyButton>
    </>
  );
}
export default Item;
