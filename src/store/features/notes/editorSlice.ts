import { createSlice } from "@reduxjs/toolkit";
import { createId } from "@paralleldrive/cuid2";

const editorSlice = createSlice({
    name: "editor",
    initialState: "",
    reducers: {
        addValue
    }
})