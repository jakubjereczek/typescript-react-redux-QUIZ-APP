import { Middleware } from "redux";
import { setTimeCounterValue } from "../actions/gameActions";
import { RootState } from "../utils/store";
import { GAME_ANSWER_QUESTION, GAME_RESET_STATE, GAME_START } from "../utils/types";


const timeCounterMiddleware: Middleware<
    {},
    RootState
> = store => next => action => {
    const state = store.getState();
    const { dispatch } = store;

    switch (action.type) {
        case GAME_START:
        case GAME_ANSWER_QUESTION:
        case GAME_RESET_STATE:
            dispatch(setTimeCounterValue(true))
            break;
    }

    return next(action);
};

export default timeCounterMiddleware;