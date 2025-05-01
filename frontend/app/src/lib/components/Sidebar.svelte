<script lang="ts">
    import { sidebarOpen } from "../stores/sidebarStore";
    import { onDestroy } from "svelte";

    let isOpen: boolean = false;

    const unsubscribe = sidebarOpen.subscribe((value: boolean) => {
        isOpen = value;
    });

    onDestroy(unsubscribe);

    function closeSidebar() {
        sidebarOpen.set(false);
    }
</script>

{#if isOpen}
    <aside class="fixed top-0 left-0 h-screen w-5/6 md:w-1/2 lg:w-1/3 bg-white text-white transition-transform duration-300 translate-x-0 z-50">

        <div class="navbar-burger active [ border-b-1 border-b-gray-300 px-5 h-16 ] [ flex items-center gap-5 ]">
            <button on:click={closeSidebar} class="burger-icon-w [ flex items-center justify-center ]" >
                <svg class="burger-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24">
                    <!-- Верхняя полоска (с 0 по 4 px) -->
                    <path fill="#000" d="M0,0 L48,0 L48,4 L0,4 Z"/>
                    <!-- Нижняя полоска (с 20 по 24 px) -->
                    <path fill="#000" d="M0,20 L48,20 L48,24 L0,24 Z"/>
                </svg>
            </button>
            <button on:click={closeSidebar} class="text-black uppercase text-3xl font-display">Menu</button>
        </div>

        <div class="px-6 pt-8 flex flex-col gap-4">
            <a href="/" rel="external" class="block pt-2 font-[500] text-black uppercase">Главная</a>
            <a href="/category" rel="external" class="block pt-2 font-[500] text-black uppercase">Продукция</a>
            <a href="/pos" rel="external" class="block pt-2 font-[500] text-black uppercase">Точки продаж</a>
        </div>
    </aside>

    <button aria-label="close" class="fixed inset-0 bg-black opacity-50 z-40" on:click={closeSidebar}></button>
{/if}