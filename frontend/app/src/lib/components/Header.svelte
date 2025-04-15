<script lang="ts">
    import {  NavBrand, NavHamburger } from 'flowbite-svelte';
</script>

<nav id="navigation"
    class="grid w-screen overflow-hidden
    relative
    z-10
    border-b-[1px] border-gray-200">

    <div class="col-span-1
                flex px-4 items-center">
        <NavBrand href="/">
            <span class="whitespace-nowrap text-xl font-semibold text-primary-500"><NavHamburger /> MENU</span>
        </NavBrand>
    </div>

    <div class="col-span-3
                flex px-4 items-center justify-end
                border-x-[1px] border-gray-200">

        <button class="cursor-pointer text-center font-medium focus-within:ring-4 focus-within:outline-hidden inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 focus-within:ring-primary-300  rounded-lg">Фильтры</button>
    </div>

    <div class="col-span-2
                flex px-4 items-center justify-start
                border-r-[1px] border-gray-200">

        <button class="cursor-pointer text-center font-medium focus-within:ring-4 focus-within:outline-hidden inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 focus-within:ring-primary-300  rounded-lg">Поиск</button>
    </div>

</nav>

<style>
    #navigation {
        grid-template-columns: repeat(6, 1fr);
    }
</style>