
import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: 'Shopping Cart',
	description: 'Un contador conmún y corriente xD',
};

export default function CounterPage() {

	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Productos en el carrito</span>
			<CartCounter />
		</div>
	);
}