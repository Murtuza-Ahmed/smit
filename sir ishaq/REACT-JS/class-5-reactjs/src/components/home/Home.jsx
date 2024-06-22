import { useSelector, useDispatch } from "react-redux";
import { SOAP_BUY, SOAP_SELL } from "../../store/action";

const Home = () => {
  const soap = useSelector((state) => state.soap);
  const dispatch = useDispatch();

  const sellHandler = () => {
    dispatch({ type: SOAP_SELL });
  };
  const buyHandler = () => {
    dispatch({ type: SOAP_BUY, payload: 10 });
  };

  return (
    <>
      Home
      <div>{soap}</div>
      <div>
        <button onClick={sellHandler}>SELL</button>
        <button onClick={buyHandler}>BUY</button>
      </div>
    </>
  );
};

export default Home;
