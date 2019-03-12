import { combineReducers} from "redux";
import { homeReducer } from "./reducers";

const configureStore = combineReducers({
  home:homeReducer
});
export default configureStore;
