import { useState } from 'react'
import './App.scss';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Game from './pages/Game/Game.jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Game />}></Route>
				<Route path='About' element={<>Im sad</>} />
				<Route path='*' element={<>404</>}></Route>
			</Route>
		</Routes>
	)
}

export default App
