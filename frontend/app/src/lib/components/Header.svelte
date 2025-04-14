<script lang="ts">
    import {  NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';

</script>
<nav class="my-custom-navbar bg-blend-lighten px-4 py-2 flex justify-between items-center relative z-10 w-full">
    <NavBrand href="/">
        <span class="whitespace-nowrap text-xl font-semibold text-primary-500"><NavHamburger /> MENU</span>
    </NavBrand>
    <NavUl class="hidden md:flex gap-4">
        <!--        <NavLi href="/">Главная</NavLi>-->
    </NavUl>
    <div class="flex gap-2 items-center">
        <div class="flex flex-row gap-2 items-center">
            <button class="cursor-pointer text-center font-medium focus-within:ring-4 focus-within:outline-hidden inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 focus-within:ring-primary-300  rounded-lg">Фильтры</button>
            <button class="cursor-pointer text-center font-medium focus-within:ring-4 focus-within:outline-hidden inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 focus-within:ring-primary-300  rounded-lg">Поиск</button>
        </div>
    </div>
</nav>