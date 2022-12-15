import React, { useEffect, useRef, useState } from 'react';
import style from './Game.module.scss';
import LittleDude from '../../components/LittleDude/LittleDude';
import bunny from '../../assets/bunny.svg';
import Carrot from '../../components/Carrot/Carrot.jsx';
import carrot from '../../assets/carrot.svg';
import wings from '../../assets/wings.svg';
import useGame from '../../hooks/useGame';



const Game = () => {

	const {
		carrotCounter,
		moving,
		jump,
		left,
		carrotCoords,
		rotate,
		wingsOn,
		sectionRef,
		isGameOn,
		bunnySize
	} = useGame();;
	const CARROT_SIZE = '40';


	return (
		<section
			tabIndex='0'
			className={style.game}
			onKeyDown={moving}
			ref={sectionRef}
		>
			<div className={style.container + ' container'}>
				<h1 className={style.title}>{isGameOn ? 'Help Filya the flying bunny get some carrots!' : 'Oh, i think he overate'}</h1>
				<Carrot size={CARROT_SIZE} btm={carrotCoords.y} left={carrotCoords.x}>
					<img src={carrot} alt="" />
				</Carrot>
				<LittleDude btm={jump} left={left} size={bunnySize} rotate={rotate} wings={wingsOn}>
					<img src={bunny} alt="" />
					<img src={wings} alt="" />
				</LittleDude>
				<p className={style.counter}>Carrots eaten: <span>{carrotCounter}</span></p>
			</div>
		</section>
	)
}



export default Game