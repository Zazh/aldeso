import { getProducts } from '$lib/api';

export const load = async ({ fetch }) => {
    const products = await getProducts(fetch);  // <- вот здесь!
    return { products };
};
