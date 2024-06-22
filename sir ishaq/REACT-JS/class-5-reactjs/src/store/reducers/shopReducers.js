import { SOAP_BUY, SOAP_SELL } from "../action"


const shopReducer = (state = { soap: 10 }, action) => {
    if (action.type === SOAP_SELL) {
        return {
            soap: state.soap - 1
        }
    } if (action.type === SOAP_BUY) {
        return {
            soap: state.soap + action.payload
        }
    }
    return state
}

export default shopReducer