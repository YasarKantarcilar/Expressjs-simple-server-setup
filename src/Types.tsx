export type Product = {
	brand: string;
	category: string;
	description: string;
	id: number;
	images: string[];
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
};

export type ProductProps = {
	product: {
		brand: string;
		category: string;
		description: string;
		id: number;
		images: string[];
		price: number;
		rating: number;
		stock: number;
		thumbnail: string;
		title: string;
	};
	index: number;
};
