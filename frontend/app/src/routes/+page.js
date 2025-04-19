import { getProducts, getCategories } from '$lib/api';

export const load = async ({ fetch, url }) => {
    const params = new URLSearchParams(url.search);

    const [products, categories] = await Promise.all([
        getProducts(fetch, params),
        getCategories(fetch)
    ]);

    return {
        products,
        categories,
        params: Object.fromEntries(params)
    };
};
