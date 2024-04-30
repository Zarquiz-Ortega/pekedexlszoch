import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice";

const store = configureStore({
    //slices
    reducer: {
        trainer,
    }
})

export default store