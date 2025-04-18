// src/lib/api.ts
import { PUBLIC_API_BASE } from '$env/static/public';

export async function getProducts(fetchFn = fetch) {
    const res = await fetchFn(`${PUBLIC_API_BASE}/products/products/`);
    if (!res.ok) throw new Error(`API ${res.status}`);
    return res.json();
}
