import { createStore, Dispatch } from "redux";
import rootReducer from "../reducers/rootReducer";

interface ApplicationState { }

const initialState: ApplicationState = [];

const store = createStore(
    rootReducer,
    initialState
)

export default store;