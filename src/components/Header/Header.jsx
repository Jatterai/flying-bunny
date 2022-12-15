import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

	const linkClassName = ({ isActive }) => isActive ? style.link + " " + style.active : style.link;
	return (
		<header className={style.header + ' header'}>
			<div className={style.container + ' container'}>
				<nav className={style.nav}>
					<NavLink className={linkClassName} to='/'>Home</NavLink>
					<NavLink className={linkClassName} to={'/about'}>About me</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header