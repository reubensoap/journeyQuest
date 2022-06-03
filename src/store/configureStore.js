import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import questReducer from "../reducers/questReducer";


export default () => {
    const store = createStore(
        combineReducers({
            userDetails: userReducer,
            quests: questReducer 
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};