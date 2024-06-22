import { Link, useParams } from "react-router-dom";

const Invoice = () => {
  let params = useParams();
  console.log(params)
  return (
    <>
      Invoice: {params.invoiceId}
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Invoice;
