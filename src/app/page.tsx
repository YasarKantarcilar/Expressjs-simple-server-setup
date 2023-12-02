"use client";

import Card from "@/Components/Card";
import { Product } from "@/Types";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setisLoading] = useState<boolean>(false);
	useEffect(() => {
		setisLoading(true);
		axios.get("https://dummyjson.com/products").then((res) => {
			setProducts(res.data.products);
			setisLoading(false);
		});
	}, []);

	return (
		<AnimatePresence>
			{!isLoading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					key={"loaded"}
					className="grid grid-cols-4 gap-4 items-center justify-between p-24 w-full h-screen"
				>
					{products &&
						products.map((product: Product, index: number) => (
							<Card key={product.id} index={index} product={product} />
						))}
				</motion.div>
			)}
			{isLoading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.1 }}
					key={"loading"}
					className="grid grid-cols-4 gap-4 items-center justify-between p-24 w-full h-screen"
				>
					<div className="w-full h-full flex items-center justify-center">Loading...</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
