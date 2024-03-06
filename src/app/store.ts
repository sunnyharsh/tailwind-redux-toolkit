import  todoreducer  from './../features/todo/todoSlice';
import { configureStore } from "@reduxjs/toolkit"
import logger from 'redux-logger'

export const store = configureStore({
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
    reducer: {
        todoreducer
    }
})

export type AppDispatch = typeof store.dispatch