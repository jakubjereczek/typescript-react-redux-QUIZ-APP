import { applyMiddleware, createStore, Dispatch } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from "../reducers/gameReducer";

export interface ApplicationState {
    quiz: any,
    game: any
}

const initialRootState: ApplicationState = {
    quiz: [],
    game: initialState
};

const store = createStore(rootReducer, initialRootState,
    composeWithDevTools(
        applyMiddleware(thunk),
    ))

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;