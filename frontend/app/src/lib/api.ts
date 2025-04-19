import { PUBLIC_API_BASE } from '$env/static/public';

/** ----------------------------------------------------------------
 *  Карта эндпоинтов: добавлять одной строки
 *  ----------------------------------------------------------------*/
const EP = {
    products: 'api/products/',
    categories: 'api/categories/',
    attributes: 'api/products/attributes/'
} as const;

/** ----------------------------------------------------------------
 *  Универсальный запрос с типизацией и обработкой ошибок
 *  ----------------------------------------------------------------*/
async function request<T>(
    path: string,
    fetchFn: typeof fetch = fetch,
    init?: RequestInit
): Promise<T> {
    const res = await fetchFn(PUBLIC_API_BASE + path, init);

    if (!res.ok) {
        // Можно расширить: логирование, toast‑уведомление и т. д.
        throw new Error(`[API ${res.status}] ${res.statusText}`);
    }

    return res.json() as Promise<T>;
}

/** ----------------------------------------------------------------
 *  Функции‑сервисы, которые удобно импортировать в load() / actions
 *  ----------------------------------------------------------------*/
export const getProducts = (fetchFn: typeof fetch, params?: URLSearchParams) => request<Product[]>(`${EP.products}?${params ?? ''}`, fetchFn);
export const getCategories = (fetchFn: typeof fetch) => request<Category[]>(EP.categories, fetchFn);
export const searchProducts = (q: string, fetchFn: typeof fetch = fetch) => request<Product[]>(`${EP.products}?search=${encodeURIComponent(q)}`, fetchFn);
export const getAttributes = (fetchFn: typeof fetch) => request<AttributeType[]>(EP.attributes, fetchFn);
// Пример будущего метода:
// export const getProductById = (id: number | string) =>
//   request<Product>(EP.productById(id));

/** ----------------------------------------------------------------
 *  (опционально) описываем интерфейсы, чтобы не ловить any
 *  ----------------------------------------------------------------*/
export interface Product {
    id: number;
    name: string;
    sku: string;
    category_id: number;
    category_name: string;
    info: {
        description: string;
        photo: string | null;
        advantages: string[];
    };
    attributes: { attribute_name: string; value: string }[];
}

export interface Category {
    id: number;
    name: string;
    photo?: string | null;
    description?: string | null;
    count: number;
}

export interface AttributeType {
    type: string;
    values: { value: string; count: number }[];
}