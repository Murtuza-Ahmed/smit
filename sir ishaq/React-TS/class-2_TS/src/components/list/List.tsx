import Item from "../item/Item";

function List({ data }: { data: string[] }) {
  const item = data.map((item, index) => <Item data={item} key={index} />);
  return (
    <>
      <div>
        {item}
      </div>
    </>
  );
}

export default List;
