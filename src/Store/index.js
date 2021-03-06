import { createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducers from "./Reducers";


const Store = createStore(Reducers,composeWithDevTools(applyMiddleware(thunk)));

export default Store;   