import { configureStore } from '@reduxjs/toolkit'
import  themeReducer from "./themeStore"

export const store = configureStore({
	reducer: {
		Theme: themeReducer
	},
})