import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={`container ${style.container}`}>
				<p className={style.icons}>
					<a target={'_blank'} href='https://t.me/jatterai'><i className="_icon-tg"></i></a>
					<a target={'_blank'} href='https://github.com/Jatterai'><i className="_icon-gh"></i></a>
					<a target={'_blank'} href='https://twitter.com/jatterai'><i className="_icon-twitter"></i></a>
				</p>
				<p className={style.name}>Jatterai, 2022</p>
			</div>
		</footer >
	)
}

export default Footer