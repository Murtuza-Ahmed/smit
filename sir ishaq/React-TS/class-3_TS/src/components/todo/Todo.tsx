import AddForm from "../addForm/AddForm";
import List from "../list/List";
import MyButton from "../myButton/MyButton";

type TodoProps = {
  addItemHandler: (a: string) => void;
  onLogoutHandler: (a: boolean) => void;
  items: string[];
};

function Todo({ addItemHandler, items, onLogoutHandler }: TodoProps) {
  return (
    <>
      <div>
        <AddForm add={addItemHandler} />
        <List data={items} />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <MyButton type="button" onClick={() => onLogoutHandler(false)}>
          Logout
        </MyButton>
      </div>
    </>
  );
}

export default Todo;
