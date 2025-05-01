import { PUBLIC_API_BASE } from '$env/static/public';

/** ----------------------------------------------------------------
 *  Карта эндпоинтов: добавлять одной строки
 *  ----------------------------------------------------------------*/
const EP = {
    products: 'products/',
    categories: 'categories/',
    attributes: 'products/attributes/'
} as const;

/** ----------------------------------------------------------------
 *  Универсальный запрос с типизацией и обработкой ошибок
 *  ----------------------------------------------------------------*/
async function request<T>(
    path: string,
    fetchFn: typeof fetch = fetch,
    init?: RequestInit
): Promise<T> {
    try {
        const res = await fetchFn(PUBLIC_API_BASE + path, init);

        if (!res.ok) {
            let errorMessage = res.statusText;
            let errorCode = res.status;
            
            try {
                const errorData = await res.json();
                if (errorData.error) {
                    errorMessage = errorData.error;
                }
                if (errorData.code) {
                    errorCode = errorData.code;
                }
            } catch (e) {
                // Если не удалось распарсить JSON, используем стандартное сообщение
                console.error('Ошибка при парсинге JSON ответа:', e);
            }

            // Создаем более информативное сообщение об ошибке
            const error = new Error(`[API ${errorCode}] ${errorMessage}`);
            error.name = 'APIError';
            
            // Добавляем дополнительную информацию в объект ошибки
            Object.defineProperty(error, 'status', { value: errorCode });
            Object.defineProperty(error, 'path', { value: path });
            
            throw error;
        }

        return res.json() as Promise<T>;
    } catch (error) {
        if (error instanceof Error) {
            // Если это не наша ошибка API, добавляем контекст
            if (error.name !== 'APIError') {
                error.message = `[API] Ошибка при выполнении запроса: ${error.message}`;
            }
        }
        throw error;
    }
}

/** ----------------------------------------------------------------
 *  Функции‑сервисы, которые удобно импортировать в load() / actions
 *  ----------------------------------------------------------------*/
export const getProducts = (fetchFn: typeof fetch, params?: URLSearchParams) => request<Product[]>(`${EP.products}?${params ?? ''}`, fetchFn);
export const getCategories = (fetchFn: typeof fetch) => request<Category[]>(EP.categories, fetchFn);
export const searchProducts = (q: string, fetchFn: typeof fetch = fetch) => request<Product[]>(`${EP.products}?search=${encodeURIComponent(q)}`, fetchFn);
export const getAttributes = (fetchFn: typeof fetch) => request<AttributeType[]>(EP.attributes, fetchFn);
export const getProduct = (id: string | number, fetchFn: typeof fetch = fetch) => request<Product>(`${EP.products}${id}/`, fetchFn);
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
    slug: string;
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