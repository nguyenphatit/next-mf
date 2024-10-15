export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
};

export type ProductRating = {
    rate: number;
    count: number;
};

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
}

export const getProduct = async (id: number): Promise<Product> => {
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json()
    return data
}