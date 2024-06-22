import { legacy_createStore } from "redux";
import shopReducer from "./reducers/shopReducers";

// const shopReducer = (state = { soap: 10 }, action) => {
//     if (action.type === "SOAP_SELL") {
//         return {
//             soap: state.soap - 1
//         }
//     } if (action.type === "SOAP_BUY") {
//         return {
//             soap: state.soap + action.payload
//         }
//     }
//     return state
// }

const store = legacy_createStore(shopReducer);

export default store;




// const subcription = () => {
//     const state = store.getState();
//     console.log(state)
// }

// store.subscribe(subcription);
// store.dispatch({ type: "SOAP_SELL" })
// store.dispatch({ type: "SOAP_BUY", payload: 10 })