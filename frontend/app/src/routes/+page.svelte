<script lang="ts">
    import type { PageData } from './$types';

    import { Modal } from 'flowbite-svelte'
    let openModal = true;

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
            <button on:click={() => openModal = true} style="width: calc(100% - 1rem);" class="[ w-full ] [ gap-1.5 inline-flex items-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
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
        <h1 class="text-fluid-4xl pb-1 font-bold">Каталог</h1>
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

<Modal bind:open={openModal} outsideclose dismissable={false}>
    <div class="-m-4 h-[90vh] md:h-auto">
        <div class="border-b-[1px] border-gray-300 [ flex gap-2 justify-between items-center ] [ px-4 py-0 ]">
            <div class="flex w-full items-center gap-3">
                <svg width="20px" height="20px" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5236 8.68L14 12.2063L12.25 14L8.68437 10.521C7.78507 11.0806 6.74671 11.3765 5.6875 11.375C2.54625 11.375 0 8.82263 0 5.6875C0 2.54625 2.55238 0 5.6875 0C8.82875 0 11.375 2.55238 11.375 5.6875C11.3766 6.74498 11.0816 7.78172 10.5236 8.68ZM1.74738 5.6455C1.74738 7.8155 3.50962 9.583 5.68488 9.583C7.85488 9.583 9.62237 7.81988 9.62237 5.6455C9.62237 3.4755 7.85925 1.708 5.68488 1.708C3.51488 1.708 1.74738 3.47025 1.74738 5.6455Z" fill="#3947FF"/>
                </svg>
                <input class="[ py-4 ] text-black font-medium text-lg w-full block outline-none" placeholder="Введите название или артикул">
            </div>
            <button on:click={() => openModal = false} class="w-[2rem] flex justify-center items-center aspect-square " aria-label="Search" >
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                </svg>
            </button>
        </div>
        <div aria-label="search body" class="[ min-h-[20rem] ]">
            <div aria-label="body-header" class=" [ px-4 py-4 ] flex items-center border-b-[1px] border-gray-300">
                <!-- history true -->
                <div class="flex flex-wrap items-center gap-3">
                    <svg width="18px" height="16px" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5284 7.42827C3.49934 7.62826 3.49934 7.79968 3.49934 7.99967H1.75541C1.75541 7.79968 1.75541 7.62826 1.78448 7.42827H3.5284Z" fill="#585858"/>
                        <path d="M10.3297 3.99984H9.45775C9.22523 3.99984 9.02177 4.19983 9.02177 4.42839V8.1711C9.02177 8.28538 9.0799 8.39966 9.13803 8.48537L11.5795 10.8853C11.7539 11.0567 12.0155 11.0567 12.1899 10.8853L12.8003 10.2853C12.9747 10.1139 12.9747 9.85674 12.8003 9.68532L10.7657 7.65683V4.42839C10.7657 4.19983 10.5622 3.99984 10.3297 3.99984Z" fill="#585858"/>
                        <path d="M9.89373 0C5.59205 0 2.07513 3.28558 1.78448 7.42827C1.78448 7.51398 1.75541 7.62826 1.75541 7.71397H0.447468C0.0696176 7.71397 -0.133841 8.14253 0.0986828 8.39966L2.27859 10.9996C2.45298 11.1995 2.7727 11.1995 2.9471 10.9996L5.127 8.39966C5.35953 8.11396 5.15607 7.71397 4.77822 7.71397H3.49934C3.49934 7.62826 3.49934 7.51398 3.49934 7.42827C3.78999 4.2284 6.55121 1.71422 9.86467 1.71422C13.6432 1.71422 16.6369 4.94266 16.23 8.71393C15.9393 11.4281 13.3235 13.9994 10.5332 14.2566C8.46953 14.4566 6.52214 13.7137 5.15607 12.2566C4.98168 12.0567 4.74915 11.9424 4.51663 12.2281L3.81906 13.0566C3.67373 13.228 3.78999 13.3423 3.93532 13.4852C5.50485 15.1137 7.65569 16.0279 9.98093 15.9993C14.1664 15.9422 17.6833 12.6852 17.9739 8.57108C18.3518 3.91413 14.5733 0 9.89373 0Z" fill="#585858"/>
                    </svg>
                    <span class="text-gray-600 font-bold">История</span>
                </div>
                <!-- history true -->
            </div>

            <div aria-label="search result">

                <!-- item -->
                <a href=" " aria-label="body-item" class="relative flex items-center justify-between gap-3 [ px-4 py-4 ] border-b-[1px] border-gray-300">
                    <h3 class="[ inset-0 ] text-md tracking-wide uppercase text-black font-bold w-full">
                        Name prod
                    </h3>
                    <span class="flex items-center gap-3">
                        <h5 class="text-gray-600 font-bold">category</h5>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12L6 6.5L1 1" stroke="#585858" stroke-width="2"/>
                        </svg>
                    </span>
                </a>
                <!-- item -->

                <!-- if empty history -->
                <div class="mt-[5rem] text-center flex items-center justify-center">
                    <div class=" flex items-center justify-center gap-3">
                        <svg width="24px" height="22px" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5284 7.42827C3.49934 7.62826 3.49934 7.79968 3.49934 7.99967H1.75541C1.75541 7.79968 1.75541 7.62826 1.78448 7.42827H3.5284Z" fill="#585858"/>
                            <path d="M10.3297 3.99984H9.45775C9.22523 3.99984 9.02177 4.19983 9.02177 4.42839V8.1711C9.02177 8.28538 9.0799 8.39966 9.13803 8.48537L11.5795 10.8853C11.7539 11.0567 12.0155 11.0567 12.1899 10.8853L12.8003 10.2853C12.9747 10.1139 12.9747 9.85674 12.8003 9.68532L10.7657 7.65683V4.42839C10.7657 4.19983 10.5622 3.99984 10.3297 3.99984Z" fill="#585858"/>
                            <path d="M9.89373 0C5.59205 0 2.07513 3.28558 1.78448 7.42827C1.78448 7.51398 1.75541 7.62826 1.75541 7.71397H0.447468C0.0696176 7.71397 -0.133841 8.14253 0.0986828 8.39966L2.27859 10.9996C2.45298 11.1995 2.7727 11.1995 2.9471 10.9996L5.127 8.39966C5.35953 8.11396 5.15607 7.71397 4.77822 7.71397H3.49934C3.49934 7.62826 3.49934 7.51398 3.49934 7.42827C3.78999 4.2284 6.55121 1.71422 9.86467 1.71422C13.6432 1.71422 16.6369 4.94266 16.23 8.71393C15.9393 11.4281 13.3235 13.9994 10.5332 14.2566C8.46953 14.4566 6.52214 13.7137 5.15607 12.2566C4.98168 12.0567 4.74915 11.9424 4.51663 12.2281L3.81906 13.0566C3.67373 13.228 3.78999 13.3423 3.93532 13.4852C5.50485 15.1137 7.65569 16.0279 9.98093 15.9993C14.1664 15.9422 17.6833 12.6852 17.9739 8.57108C18.3518 3.91413 14.5733 0 9.89373 0Z" fill="#585858"/>
                        </svg>
                        <span class="text-gray-600 font-medium text-2xl">Нет истории поиска</span>
                    </div>
                </div>
                <!-- empty history -->

            </div>
        </div>

    </div>
</Modal>

<style>
    .custom-grid {
        grid-template-columns: repeat(6, 1fr);
    }
    #navigation {
        grid-template-columns: repeat(6, 1fr);
    }
</style>