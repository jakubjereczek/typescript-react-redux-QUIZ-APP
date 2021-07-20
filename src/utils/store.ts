import { configureStore } from '@reduxjs/toolkit'
import gameReducer from "../reducers/gameSlice";
import quizReduer from '../reducers/quizSlice';


const store = configureStore({
    reducer: {
        game: gameReducer,
        quiz: quizReduer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;