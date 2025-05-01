<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { Product, Category } from '$lib/api';

    import { getProduct, getCategories } from '$lib/api';

    import SearchModal from "$lib/components/SearchModal.svelte";

    let product: Product | null = null;
    let categories: Category[] = [];
    let openModal = false;
    let errorMessage: string | null = null;

    onMount(async () => {
        // 1) Загружаем категории
        try {
            categories = await getCategories(fetch);
        } catch (error) {
            console.error('Ошибка при загрузке категорий:', error);
        }

        // 2) Получаем ID продукта из URL и загружаем данные
        const productId = $page.params.id;
        if (productId) {
            try {
                product = await getProduct(productId, fetch);
                errorMessage = null;
            } catch (error) {
                console.error('Ошибка при загрузке продукта:', error);
                errorMessage = error instanceof Error ? error.message : 'Произошла ошибка при загрузке продукта';
            }
        }
    });

    // 3) Обработка события из модалки
    async function handleApply(event: CustomEvent<{ params?: URLSearchParams }>) {
        const params = event.detail.params;

        // 2) По желанию сохраняем фильтры в URL (для ссылки/refresh)
        const query = params ? `?${params.toString()}` : '';
        history.replaceState({}, '', query);
    }
</script>

{#if product}
    <nav id="navigation" class="[ border-b-[1px] border-gray-300 ] grid w-screen overflow-hidden">
        <div class="[ hidden ] col-span-1 xl:flex px-4">
            <button class="gap-3 flex items-center">
                <svg width="40" height="18" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H48V3H0V0Z" fill="black"/>
                    <path d="M0 19H48V22H0V19Z" fill="black"/>
                </svg>
                <span class="2xl:text-fluid-2xl text-2xl tracking-widest font-semibold text-black">MENU</span>
            </button>
        </div>

        <div class="[ px-6 py-3 md:py-4 ] xl:col-span-3 md:col-span-4 col-span-full flex  items-center justify-between xl:justify-end border-x-[1px] border-gray-300">
            <button class="gap-4 flex xl:hidden items-center">
                <svg width="40" height="18" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H48V3H0V0Z" fill="black"/>
                    <path d="M0 19H48V22H0V19Z" fill="black"/>
                </svg>
                <span class="[ hidden md:block ] 2xl:text-fluid-2xl text-2xl tracking-widest font-semibold text-black">MENU</span>
            </button>

            <div class="flex items-center justify-between gap-3">
                <button on:click={() => openModal = true} class="inline-flex md:hidden ] [ w-full ] [ gap-1.5 items-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-gray-300 text-black [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5236 8.68L14 12.2063L12.25 14L8.68437 10.521C7.78507 11.0806 6.74671 11.3765 5.6875 11.375C2.54625 11.375 0 8.82263 0 5.6875C0 2.54625 2.55238 0 5.6875 0C8.82875 0 11.375 2.55238 11.375 5.6875C11.3766 6.74498 11.0816 7.78172 10.5236 8.68ZM1.74738 5.6455C1.74738 7.8155 3.50962 9.583 5.68488 9.583C7.85488 9.583 9.62237 7.81988 9.62237 5.6455C9.62237 3.4755 7.85925 1.708 5.68488 1.708C3.51488 1.708 1.74738 3.47025 1.74738 5.6455Z" fill="#3947FF"/>
                    </svg>
                    <span class="[ w-[5rem] md:w-auto ] font-bold tracking-wide uppercase  text-md">Поиск</span>
                </button>
            </div>
        </div>

        <div class="[ hidden md:flex ] col-span-2 p-2 items-center justify-start border-r-[1px] border-gray-300">
            <div class="w-full">
                <button on:click={() => openModal = true} style="width: calc(100% - 1rem);" class="[ w-full ] [ gap-1.5 inline-flex items-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-3 text-fluid-sm hover:bg-gray-300 text-black [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5236 8.68L14 12.2063L12.25 14L8.68437 10.521C7.78507 11.0806 6.74671 11.3765 5.6875 11.375C2.54625 11.375 0 8.82263 0 5.6875C0 2.54625 2.55238 0 5.6875 0C8.82875 0 11.375 2.55238 11.375 5.6875C11.3766 6.74498 11.0816 7.78172 10.5236 8.68ZM1.74738 5.6455C1.74738 7.8155 3.50962 9.583 5.68488 9.583C7.85488 9.583 9.62237 7.81988 9.62237 5.6455C9.62237 3.4755 7.85925 1.708 5.68488 1.708C3.51488 1.708 1.74738 3.47025 1.74738 5.6455Z" fill="#3947FF"/>
                    </svg>
                    <span class="font-bold tracking-wide uppercase text-xs">Поиск</span>
                </button>
            </div>
        </div>
    </nav>

    <section class="custom-grid grid w-screen overflow-hidden">
        <div class="[ border-x-[1px] border-gray-300 gap-4 ] row-span-1 xl:col-span-3 xl:col-start-2 lg:col-span-4 col-span-full">
            <img src={product.info.photo || "https://placehold.in/300x200@2x.png/dark"} class="w-full" alt={product.name}>
        </div>
    </section>

    <section class="custom-grid border-y-[1px] border-gray-300 grid w-screen overflow-hidden">
        <div class="[ border-x-[1px] border-gray-300 gap-4 ] [ p-6 ] row-span-1 xl:col-span-3 xl:col-start-2 lg:col-span-4 col-span-full">
            <h1 class="text-4xl font-bold pb-6">
                {product.name}
            </h1>
            <p class="pb-2 text-gray-500">
                {product.info.description}
            </p>
        </div>
    </section>

    <section class="custom-grid border-b-[1px] border-gray-300 grid w-screen overflow-hidden">
        <div class="[ border-x-[1px] border-gray-300 gap-4 ] [ p-6 ] row-span-1 xl:col-span-3 xl:col-start-2 lg:col-span-4 col-span-full">
            <div class="pb-6">
                <h2 class="text-2xl font-bold">Характеристики</h2>
            </div>
            <ul class="flex flex-wrap gap-y-6">
                <li class="flex flex-col w-1/2">
                    <span class="uppercase tracking-wider text-sm font-bold leading-1">Артикул</span>
                    <span class="text-gray-500 text-base">{product.sku}</span>
                </li>
                {#each product.attributes as attribute}
                    <li class="flex flex-col w-1/2">
                        <span class="uppercase tracking-wider text-sm font-bold leading-1">{attribute.attribute_name}</span>
                        <span class="text-gray-500 text-base">{attribute.value}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </section>
{:else if errorMessage}
    <div class="flex items-center justify-center h-screen">
        <p class="text-xl text-red-500">{errorMessage}</p>
    </div>
{:else}
    <div class="flex items-center justify-center h-screen">
        <p class="text-xl">Продукт не найден</p>
    </div>
{/if}

<SearchModal bind:open={openModal} />

<style>
    .custom-grid {
        grid-template-columns: repeat(6, 1fr);
    }
    #navigation {
        grid-template-columns: repeat(6, 1fr);
    }
</style> 