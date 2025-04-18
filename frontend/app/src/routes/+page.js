import { PUBLIC_API_BASE } from '$env/static/public';

export async function load({ fetch }) {
    const res = await fetch(`${PUBLIC_API_BASE}/products/products/`);

    if (!res.ok) return { status: res.status, error: new Error('API error') };

    return { products: await res.json() };
}
