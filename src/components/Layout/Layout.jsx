import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header.jsx';


const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer>
				footer
			</footer>
		</>
	)
}

export default Layout