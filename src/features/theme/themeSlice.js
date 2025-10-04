"use client";
const { createSlice } = require("@reduxjs/toolkit");

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("theme") || "light"
    }
    return "light"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: getInitialTheme() },
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload)
            }
        },
        toggleTheme: (state) => {
            state.value = state.value === "light" ? "dark" : "light";
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', state.value)
            }
        }
    }
});

export const { setTheme, toggleTheme } = themeSlice.actions
export default themeSlice.reducer
