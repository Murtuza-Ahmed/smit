import AddForm from "../addForm/AddForm";
import List from "../list/List";

type TodoProps = {
  addItemHandler: (a: string) => void;
  items: string[];
};

function Todo({ addItemHandler, items }: TodoProps) {
  return (
    <>
      <div>
        <AddForm add={addItemHandler} />
        <List data={items} />
      </div>
    </>
  );
}

export default Todo;
