/** Svelte Kit загружает данные перед рендером страницы. */
export async function load({ fetch }) {
    // прямой адрес, без переменных окружения
    const url = 'http://localhost:8003/products/products/';

    const res = await fetch(url);

    if (!res.ok) {
        // пробрасываем ошибку на страницу
        return {
            status: res.status,
            error: new Error(`API вернул ${res.status}`)
        };
    }

    const products = await res.json();
    return { products };              // эти данные придут в <script> страницы
}
