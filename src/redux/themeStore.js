import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	theme: localStorage.getItem("theme") || "light",
}

export const Theme = createSlice({
	name: 'Theme',
	initialState,
	reducers: {
		toggle: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light"
			localStorage.setItem("theme", state.theme)
		},
	},
})

// Action creators are generated for each case reducer function
export const { toggle } = Theme.actions

export default Theme.reducer