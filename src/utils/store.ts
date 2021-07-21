import { configureStore, Store } from '@reduxjs/toolkit'
import gameReducer from "../reducers/gameSlice";
import quizReduer from '../reducers/quizSlice';
import timeCounterMiddleware from '../middlewares/timeCounter.middleware';


const store: Store | any = configureStore({
    reducer: {
        game: gameReducer,
        quiz: quizReduer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(timeCounterMiddleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;