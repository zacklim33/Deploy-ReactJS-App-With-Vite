import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const decrementCount = () => {
		setCount((count) => count - 1);
	};

	const incrementCount = () => {
		setCount((count) => count + 1);
	};

	return (
		<>
			<div>
				<button onClick={incrementCount}>Increment</button>
				<h1>{count}</h1>
				<button onClick={decrementCount}>Decrement</button>
			</div>
		</>
	);
}

export default App;
