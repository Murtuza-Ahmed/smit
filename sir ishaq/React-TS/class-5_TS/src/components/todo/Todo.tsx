import { useRef, useState } from "react";
import { Button, Checkbox, Divider, Input, InputRef, List } from "antd";
import Title from "antd/es/typography/Title";

export default function Todo() {
  const inputRef = useRef<InputRef>(null);
  const [data, setData] = useState<string[]>([]);
  const addTodoHandler = () => {
    setData([...data, inputRef.current!.input!.value]);
  };
  const todoOnChangeHandler = () => {};
  return (
    <div>
      <Title>My Todo App</Title>
      <Divider />
      <Input.Group compact>
        <Input style={{ width: "calc(100% - 95px)" }} ref={inputRef} />
        <Button type="primary" onClick={addTodoHandler}>
          Add Todo
        </Button>
      </Input.Group>
      <Divider />
      <List
        size="small"
        header={<div>Todo CheckList</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Checkbox onChange={() => todoOnChangeHandler}>{item}</Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
}
