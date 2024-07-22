import { useRef } from "react";
import { Button, Checkbox, Divider, Input, InputRef, List } from "antd";
import Title from "antd/es/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todo";
import { doneTodo } from "../../store/todo";
import { RootState } from "../../store";

export default function Todo() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state);
  const inputRef = useRef<InputRef>(null);
  const addTodoHandler = () => {
    // setData([...data, inputRef.current!.input!.value]);
    dispatch(addTodo(inputRef.current!.input!.value));
  };
  const todoOnChangeHandler = (index: number) => {
    dispatch(doneTodo(index));
  };
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
        renderItem={(item, index) => (
          <List.Item>
            <Checkbox onChange={() => todoOnChangeHandler(index)}>
              {item.text}
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
}
