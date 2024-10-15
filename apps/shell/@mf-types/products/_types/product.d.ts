export declare type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
};

export declare type ProductRating = {
    rate: number;
    count: number;
};