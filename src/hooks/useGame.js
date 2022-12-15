import React, { useState, useEffect, useRef } from "react";

export default function useGame() {
	const [jump, setJump] = useState(0);
	const [left, setLeft] = useState(50);
	const [rotate, setRotate] = useState(false);
	const [carrotCoords, setCarrotCoords] = useState({ x: 50, y: 50 });
	const [isWin, setIsWin] = useState(false);
	const [wingsOn, setWingsOn] = useState(false);
	const [carrotCounter, setCarrotCounter] = useState(0);
	const [isGameOn, setIsGameOn] = useState(true);
	const [bunnySize, setBunnySize] = useState(50);

	const sectionRef = useRef();

	useEffect(() => {
		if (isWin) {
			setCarrotCounter(prev => prev + 1);
			const random = () => Math.floor(Math.random() * 95);
			setCarrotCoords({
				x: random(),
				y: random()
			})
			setIsWin(false);
		}
	}, [isWin])

	useEffect(() => {
		if (carrotCounter >= 13) {
			setIsGameOn(false);
			setRotate('x 60deg');
			setBunnySize('80')
		}
	}, [carrotCounter])


	useEffect(() => {
		const axisX = left - carrotCoords.x;
		const axisY = jump - carrotCoords.y;
		const carrotIsMine = (axisY < 5 && axisY > -5) && (axisX < 3 && axisX > -3);
		console.log(axisX, axisY);
		setIsWin(carrotIsMine);
	})

	useEffect(() => {
		let timerId;
		timerId = setInterval(() => {
			const newJump = jump - 40;
			if (newJump > 0) {
				setJump(l => l - 5)
				setWingsOn(true);
			}
			else {
				setJump(0)
				setWingsOn(false);
			};
		}, 90)

		return () => clearInterval(timerId)
	}, [jump > 0])

	const goUp = () => {
		const newJupm = jump + 50;
		if (newJupm < 93) {
			setJump(newJupm)
		} else {
			setJump(93);
		}
	}

	const goRight = () => {
		setRotate('y 180deg');
		const newLeft = left + 5;
		newLeft < 97 ? setLeft(newLeft) : setLeft(97);
	}

	const goLeft = () => {
		setRotate('y 0deg');
		const newLeft = left - 5;
		newLeft > 0 ? setLeft(newLeft) : setLeft(0);
	}

	const moving = (event) => {
		event.preventDefault();

		if (!isGameOn) return;

		const key = event.code;
		const moves = {
			up: ['Space', 'KeyW', 'ArrowUp'],
			left: ['KeyA', 'ArrowLeft'],
			right: ['KeyD', 'ArrowRight'],
		}
		let timerId;

		if (moves.up.includes(key)) {
			goUp()
		} else if (moves.right.includes(key)) {
			goRight()
		} else if (moves.left.includes(key)) {
			goLeft()
		}
	}

	useEffect(() => sectionRef.current.focus(), [])

	return { moving, jump, left, carrotCoords, rotate, wingsOn, sectionRef, carrotCounter, isGameOn, bunnySize }
}