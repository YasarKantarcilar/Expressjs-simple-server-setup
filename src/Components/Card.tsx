"use client";

import React from "react";
import { ProductProps } from "../Types";
import { motion } from "framer-motion";

const Card = ({ product, index }: ProductProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 100 }}
			transition={{ duration: 0.8, delay: index * 0.1 }}
			className="flex flex-col h-96 justify-between border"
		>
			<img
				src={product.images[0]}
				alt={product.title}
				className="w-full aspect-square object-contain"
			/>
			<div className="w-full h-16 bg-black flex items-center justify-center">HELLO</div>
		</motion.div>
	);
};

export default Card;
