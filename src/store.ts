import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { loginApi } from "./widgets/LoginWidget/LoginWidgetApi";

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware)
});

setupListeners(store.dispatch);