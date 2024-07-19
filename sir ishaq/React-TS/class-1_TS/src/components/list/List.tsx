import Item from "../item/Item";

function List({ data }: { data: string[] }) {
  return (
    <>
      <div>
        <Item data={data[0]} />
      </div>
    </>
  );
}

export default List;
