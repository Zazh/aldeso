import { getProducts } from '$lib/api';

export const load = async ({ fetch }) => {
    return { products: await getProducts() };
};