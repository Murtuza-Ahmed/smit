import PropTypes from "prop-types";

Items.propTypes = {
  title: PropTypes.string.isRequired,
};

function Items({ title }) {
  //   const data = "My React App Items";
  return (
    <>
      {/* <li>{data}</li> */}
      <li>{title}</li>
    </>
  );
}
export default Items;
