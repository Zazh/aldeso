<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    const { products } = data;
    import Card from '$lib/components/Card.svelte';
</script>
<nav id="navigation" class="[ border-b-[1px] border-gray-300 ] grid w-screen overflow-hidden">
    <div class="[ hidden ] col-span-1 xl:flex p-4">
        <button class="gap-4 flex items-center">
            <svg width="48" height="22" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H48V3H0V0Z" fill="black"/>
                <path d="M0 19H48V22H0V19Z" fill="black"/>
            </svg>
            <span class="2xl:text-fluid-2xl text-fluid-xl tracking-widest font-semibold text-black">MENU</span>
        </button>
    </div>

    <div class="[ px-6 py-3 md:py-4 ] xl:col-span-3 md:col-span-4 col-span-full flex  items-center justify-between xl:justify-end border-x-[1px] border-gray-300">
        <button class="gap-4 flex xl:hidden items-center">
            <svg width="48" height="22" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H48V3H0V0Z" fill="black"/>
                <path d="M0 19H48V22H0V19Z" fill="black"/>
            </svg>
            <span class="[ hidden md:block ] 2xl:text-fluid-2xl text-fluid-xl tracking-widest font-semibold text-black">MENU</span>
        </button>

        <div class="flex items-center justify-between gap-3">
            <button class="[ gap-1.5 inline-flex items-center justify-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.06667C1 1.6933 1 1.50661 1.07266 1.36401C1.13658 1.23857 1.23857 1.13658 1.36401 1.07266C1.50661 1 1.6933 1 2.06667 1H11.9333C12.3067 1 12.4934 1 12.636 1.07266C12.7615 1.13658 12.8634 1.23857 12.9273 1.36401C13 1.50661 13 1.6933 13 2.06667V3.22484C13 3.3879 13 3.46943 12.9816 3.54615C12.9653 3.61418 12.9383 3.67921 12.9017 3.73885C12.8605 3.80613 12.8029 3.86379 12.6876 3.97909L8.64573 8.02093C8.53047 8.1362 8.4728 8.19387 8.4316 8.26113C8.395 8.3208 8.36807 8.3858 8.35173 8.45387C8.33333 8.5306 8.33333 8.61213 8.33333 8.77513V10.3333L5.66667 13V8.77513C5.66667 8.61213 5.66667 8.5306 5.64825 8.45387C5.63191 8.3858 5.60498 8.3208 5.56843 8.26113C5.5272 8.19387 5.46955 8.1362 5.35425 8.02093L1.31242 3.97909C1.19712 3.86379 1.13947 3.80613 1.09824 3.73885C1.06169 3.67921 1.03475 3.61418 1.01842 3.54615C1 3.46943 1 3.3879 1 3.22484V2.06667Z" stroke="#3947FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="[ w-[5rem] md:w-auto ] font-bold tracking-wide uppercase">Фильтры</span>
            </button>

            <button class="inline-flex md:hidden ] [ w-full ] [ gap-1.5 items-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5236 8.68L14 12.2063L12.25 14L8.68437 10.521C7.78507 11.0806 6.74671 11.3765 5.6875 11.375C2.54625 11.375 0 8.82263 0 5.6875C0 2.54625 2.55238 0 5.6875 0C8.82875 0 11.375 2.55238 11.375 5.6875C11.3766 6.74498 11.0816 7.78172 10.5236 8.68ZM1.74738 5.6455C1.74738 7.8155 3.50962 9.583 5.68488 9.583C7.85488 9.583 9.62237 7.81988 9.62237 5.6455C9.62237 3.4755 7.85925 1.708 5.68488 1.708C3.51488 1.708 1.74738 3.47025 1.74738 5.6455Z" fill="#3947FF"/>
                </svg>
                <span class="[ w-[5rem] md:w-auto ] font-bold tracking-wide uppercase">Поиск</span>
            </button>
        </div>
    </div>

    <div class="[ hidden md:flex ] col-span-2 p-4 items-center justify-start border-r-[1px] border-gray-300">
        <div style="width:var(--card-w)">
            <button style="width: calc(100% - 1rem);" class="[ w-full ] [ gap-1.5 inline-flex items-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5236 8.68L14 12.2063L12.25 14L8.68437 10.521C7.78507 11.0806 6.74671 11.3765 5.6875 11.375C2.54625 11.375 0 8.82263 0 5.6875C0 2.54625 2.55238 0 5.6875 0C8.82875 0 11.375 2.55238 11.375 5.6875C11.3766 6.74498 11.0816 7.78172 10.5236 8.68ZM1.74738 5.6455C1.74738 7.8155 3.50962 9.583 5.68488 9.583C7.85488 9.583 9.62237 7.81988 9.62237 5.6455C9.62237 3.4755 7.85925 1.708 5.68488 1.708C3.51488 1.708 1.74738 3.47025 1.74738 5.6455Z" fill="#3947FF"/>
                </svg>
                <span class="font-bold tracking-wide uppercase">Поиск</span>
            </button>
        </div>
    </div>
</nav>
<section class="custom-grid grid w-screen overflow-hidden">
    <div class="[ border-x-[1px] border-gray-300 gap-4 ] [ p-6 ] row-span-1 xl:col-span-3 xl:col-start-2 lg:col-span-4 col-span-full">
        <h1 class="text-fluid-4xl leading-none font-bold">Каталог</h1>
    </div>
</section>

<section class="custom-grid border-t-[1px] border-gray-300 grid w-screen overflow-hidden">

    <!-- Основоной блок -->
    <div class="[ mx-[1.5rem] md:mx-0 ] [ main-card ] [ border-l-[1px] border-gray-300 ] [ flex flex-wrap ] row-span-1 xl:col-span-3 xl:col-start-2 lg:col-span-4 col-span-6">
        {#each products as product, i}
            <Card
                    {product}
                    first={i === 0}
            hideOnLg={(i + 1) % 3 === 0}
            />
        {/each}
    </div>

    <!-- Доп блок -->
    <div class="hidden [ lg:flex flex-col ] [ border-gray-300 ] row-span-1 xl:col-span-2 col-span-2">
        {#each products as product, i}
            {#if (i + 1) % 3 === 0}
                <Card {product} side />
            {/if}
        {/each}
    </div>

</section>

<style>
    .custom-grid {
        grid-template-columns: repeat(6, 1fr);
    }
    #navigation {
        grid-template-columns: repeat(6, 1fr);
    }
</style>