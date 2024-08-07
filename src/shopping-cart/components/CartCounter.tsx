'use client'
import { useState } from 'react';

type CartCounterProps = {
	value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {

	const [count, setCount] = useState(value);

	const handleSum = () => {
		setCount(count + 1);
	}

	const handleRest = () => {
		if (count === 0) return;
		setCount(count - 1)
	}
	return (
		<>
			<span className="text-9xl">{count}</span>

			<div className="flex flex-wrap gap-8">
				<button
					onClick={() => handleRest()}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>-1</button>
				<button
					onClick={() => handleSum()}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>+1</button>
			</div>
		</>
	)
}
