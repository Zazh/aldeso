<script lang="ts">
    import { Modal } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';
    import type {Category} from "$lib/api";

    const dispatch = createEventDispatcher();
    export let open = false;
    export let categories: Category[] = [];

    let selectedCategory = '';
    let selectedView = '';
    let hasLight = false;

    function applyFilters() {
        const params = new URLSearchParams();
        if (selectedCategory) params.set('category__name', selectedCategory);
        if (selectedView)   params.set('attributes__value', selectedView);
        if (hasLight)       params.set('attributes__has_light', 'true');
        dispatch('apply', { params });
        open = false;
    }

    function resetFilters() {
        dispatch('apply', { params: undefined });
        open = false;
    }
</script>

<Modal bind:open outsideclose dismissable={false} >
    <div class="-m-4 md:h-auto">
        <div class="border-b-[1px] border-gray-300 [ flex gap-2 justify-between items-center ] [ px-4 py-4 ]">
            <div class="flex w-full items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.06667C1 1.6933 1 1.50661 1.07266 1.36401C1.13658 1.23857 1.23857 1.13658 1.36401 1.07266C1.50661 1 1.6933 1 2.06667 1H11.9333C12.3067 1 12.4934 1 12.636 1.07266C12.7615 1.13658 12.8634 1.23857 12.9273 1.36401C13 1.50661 13 1.6933 13 2.06667V3.22484C13 3.3879 13 3.46943 12.9816 3.54615C12.9653 3.61418 12.9383 3.67921 12.9017 3.73885C12.8605 3.80613 12.8029 3.86379 12.6876 3.97909L8.64573 8.02093C8.53047 8.1362 8.4728 8.19387 8.4316 8.26113C8.395 8.3208 8.36807 8.3858 8.35173 8.45387C8.33333 8.5306 8.33333 8.61213 8.33333 8.77513V10.3333L5.66667 13V8.77513C5.66667 8.61213 5.66667 8.5306 5.64825 8.45387C5.63191 8.3858 5.60498 8.3208 5.56843 8.26113C5.5272 8.19387 5.46955 8.1362 5.35425 8.02093L1.31242 3.97909C1.19712 3.86379 1.13947 3.80613 1.09824 3.73885C1.06169 3.67921 1.03475 3.61418 1.01842 3.54615C1 3.46943 1 3.3879 1 3.22484V2.06667Z" stroke="#3947FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 class="md:text-xl text-lg font-bold text-black uppercase">Фильтры</h1>
            </div>
            <button on:click={() => open = false} class="w-[2rem] flex justify-center items-center aspect-square " aria-label="Search" >
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                </svg>
            </button>
        </div>
    </div>

    <div class="[ min-h-[20rem] ]">
        <div class="flex flex-wrap justify-between">
            <div class="w-full pt-4">
                <h4 class="md:text-xl text-md font-bold text-black py-2">Категория</h4>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {#each categories as cat}
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id={cat.name} type="radio" bind:group={selectedCategory} value={cat.name} name="category" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2  ">
                            <label for={cat.name} class="w-full py-3 ms-2 text-md font-medium text-gray-900">
                                {cat.name} ({cat.count})
                            </label>
                        </div>
                    </li>
                    {/each}
                </ul>
            </div>
            <div class="w-full pt-4">
                <h4 class="md:text-xl text-md font-bold text-black py-2">Вид</h4>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {#each ['Теневой', 'Скрытый', 'Микро', 'L-Образный'] as view}
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center ps-3">
                                <input id={view} bind:group={selectedView} type="radio" value={view} name="view" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                <label for={view} class="w-full py-3 ms-2 text-md font-medium text-gray-900">{view}</label>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="w-full pt-8 pb-4">
                <div class="flex items-center">
                    <input bind:checked={hasLight} id="hasLight" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 ">
                    <label for="hasLight" class="leading-none -mb-1 ms-2 md:text-md text-sm font-bold text-gray-900 ">С подсветкой</label>
                </div>
            </div>
<!--            <div>-->
<!--                <h4 class="text-lg font-bold text-black">Вид</h4>-->
<!--                <button type="button" on:click={() => dropdownOpen = !dropdownOpen} class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">-->
<!--                    Выбрать-->
<!--                    <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">-->
<!--                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />-->
<!--                    </svg>-->
<!--                </button>-->
<!--                <Dropdown >-->
<!--                    <DropdownItem href="#">Пункт 1</DropdownItem>-->
<!--                    <DropdownItem href="#">Пункт 2</DropdownItem>-->
<!--                </Dropdown>-->
<!--            </div>-->
        </div>
    </div>
    <div class="-m-4 md:h-auto">
        <div class="border-t-[1px] border-gray-300 [ flex gap-2 justify-between items-center ] [ px-4 pt-4 ]">
            <div class="flex justify-end w-full items-center gap-3">
                <button on:click={resetFilters} type="button" class="md:w-auto w-full text-red-400 border border-red-300 bg-white hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg md:text-md text-sm px-5 py-3 focus:outline-none ">Сбросить</button>
                <button on:click={applyFilters} type="button" class="md:w-auto w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg md:text-md text-sm px-5 py-3 focus:outline-none ">Применить</button>
            </div>
        </div>
    </div>
</Modal>