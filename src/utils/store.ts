import { applyMiddleware, createStore, Dispatch } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface ApplicationState {
    quiz: any,
}

const initialState: ApplicationState = {
    quiz: []
};

const store = createStore(rootReducer, initialState,
    composeWithDevTools(
        applyMiddleware(thunk),
    ))

export default store;