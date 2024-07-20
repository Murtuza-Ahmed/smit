import { FormEvent, useRef } from "react";

function AddForm({ add }: { add: (a: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    add(inputRef.current!.value);
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="my-input">Itme Name</label>
            <input type="text" id="my-input" ref={inputRef} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddForm;
