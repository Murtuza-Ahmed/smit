function AddItem() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="my-input">Item Name</label>
            <input type="text" id="my-input" />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItem;
