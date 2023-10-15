import React from 'react'
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar"
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
function Layout() {
	const theme = useSelector((state) => state.Theme.theme)
	return (
		<div className={`${theme} `}>
			<Navbar />
			<div className="flex">
				<LeftBar />
				<Outlet />
				<RightBar />
			</div>
		</div>
	)
}

export default Layout