import PropTypes from "prop-types";

AddItem.propTypes = {
  onAdd: PropTypes.any.isRequired,
};

function AddItem({ onAdd }) {
  let itemName = "";
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(itemName);
    console.log("ADD", onAdd);
    onAdd(itemName);
  };

  const onInputChangeHandler = (event) => {
    itemName = event.target.value;
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="my-input">Item Name</label>
            <input type="text" id="my-input" onChange={onInputChangeHandler} />
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
