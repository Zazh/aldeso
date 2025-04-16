<script lang="ts">

    import {onMount} from "svelte";

    let sample;         // ссылка на 1‑ю карточку
    onMount(() => {
        const ro = new ResizeObserver(([entry]) => {
            document.documentElement
                .style
                .setProperty('--card-w', `${entry.contentRect.width}px`);
        });
        ro.observe(sample);
        return () => ro.disconnect();
    });
</script>

<section class="custom-grid [ border-gray-300 ] grid w-screen overflow-hidden">
    <div class="[ border-x-[1px] border-gray-300 gap-4 ] [ p-6 ] row-span-1 xl:col-span-3 xl:col-start-2 col-span-4">
        <h1 class="text-fluid-4xl leading-none font-bold">Каталог</h1>
    </div>
</section>

<section class="custom-grid border-t-[1px] border-gray-300 grid w-screen overflow-hidden">

    <div class="[ flex flex-wrap ] [ border-x-[1px] border-gray-300 ] row-span-1 xl:col-span-3 xl:col-start-2 col-span-4">
        <!-- BEGIN card  -->
        <div bind:this={sample} class="[ card ] w-1/2">
            <div class="[ w-full aspect-square ] [ flex items-center justify-center ] border-b-[1px] border-gray-300" >
                <img src="https://placehold.in/300x200" alt="" title="">
            </div>
            <div class="p-fluid-sm">
                <div class="pt-4 pb-4">
                    <h2 class="text-xl font-bold uppercase tracking-wider"><a href=" ">Первая карточка</a></h2>
                </div>
                <ul class="flex flex-wrap gap-3">
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                </ul>
            </div>
            <div class="pt-2 pb-[3rem] px-4">
                <a href=" " class=" w-full [ gap-1.5 inline-flex items-center justify-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                    <span class="font-bold tracking-wide uppercase">Подробнее</span>
                </a>
            </div>
        </div>
        <!-- END card  -->

        <!-- BEGIN card  -->
        <div class="[ card ] w-1/2">
            <div class="[ w-full aspect-square ] [ flex items-center justify-center ] border-b-[1px] border-gray-300" >
                <img src="https://placehold.in/300x200" alt="" title="">
            </div>
            <div class="p-fluid-sm">
                <div class="pt-4 pb-4">
                    <h2 class="text-xl font-bold uppercase tracking-wider"><a href=" ">Вторая карточка</a></h2>
                </div>
                <ul class="flex flex-wrap gap-3">
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                </ul>
            </div>
            <div class="pt-2 pb-[3rem] px-4">
                <a href=" " class=" w-full [ gap-1.5 inline-flex items-center justify-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                    <span class="font-bold tracking-wide uppercase">Подробнее</span>
                </a>
            </div>
        </div>
        <!-- END card  -->

        <!-- BEGIN card  -->
        <div class="[ card ] w-1/2">
            <div class="[ w-full aspect-square ] [ flex items-center justify-center ] border-b-[1px] border-gray-300" >
                <img src="https://placehold.in/300x200" alt="" title="">
            </div>
            <div class="p-fluid-sm">
                <div class="pt-4 pb-4">
                    <h2 class="text-xl font-bold uppercase tracking-wider"><a href=" ">Четвертая карточка</a></h2>
                </div>
                <ul class="flex flex-wrap gap-3">
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                        <span class="text-gray-500 text-base">Анодированное</span>
                    </li>
                </ul>
            </div>
            <div class="pt-2 pb-[3rem] px-4">
                <a href=" " class=" w-full [ gap-1.5 inline-flex items-center justify-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                    <span class="font-bold tracking-wide uppercase">Подробнее</span>
                </a>
            </div>
        </div>
        <!-- END card  -->
    </div>

    <!-- Вот эта опциональная колонка -->
    <div class="test [ flex flex-wrap ] [ border-gray-300 ] row-span-1 xl:col-span-2 col-span-2">
        <div class="w-full border-r-[1px] border-gray-300">
            <!-- BEGIN card  -->
            <div class="[ card ] w-1/2" style="width:var(--card-w)">
                <div class="[ w-full aspect-square ] [ flex items-center justify-center ] border-b-[1px] border-gray-300" >
                    <img src="https://placehold.in/300x200" alt="" title="">
                </div>
                <div class="p-fluid-sm">
                    <div class="pt-4 pb-4">
                        <h2 class="text-xl font-bold uppercase tracking-wider"><a href=" ">Четвертая карточка</a></h2>
                    </div>
                    <ul class="flex flex-wrap gap-3">
                        <li class="flex flex-col w-full">
                            <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                            <span class="text-gray-500 text-base">Анодированное</span>
                        </li>
                        <li class="flex flex-col w-full">
                            <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                            <span class="text-gray-500 text-base">Анодированное</span>
                        </li>
                        <li class="flex flex-col w-full">
                            <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Покрытие</span>
                            <span class="text-gray-500 text-base">Анодированное</span>
                        </li>
                    </ul>
                </div>
                <div class="pt-2 pb-[3rem] px-4">
                    <a href=" " class=" w-full [ gap-1.5 inline-flex items-center justify-center ] cursor-pointer  focus-within:ring-4 focus-within:outline-hidden px-3.5 py-2.5 text-fluid-sm hover:bg-black text-black hover:text-white [ border-[1px] border-gray-300 ] focus-within:ring-gray-200 rounded-sm">
                        <span class="font-bold tracking-wide uppercase">Подробнее</span>
                    </a>
                </div>
            </div>
            <!-- END card  -->

        </div>
    </div>

</section>

<style>
    .custom-grid {
        grid-template-columns: repeat(6, 1fr);
    }
    .card {
        border-bottom: 1px solid rgb(196 196 196 / var(--tw-border-opacity, 1));
    }
    .card:nth-child(odd) {
        border-right: 1px solid rgb(196 196 196 / var(--tw-border-opacity, 1));
    }
    .test .card {
        border-right: 1px solid rgb(196 196 196 / var(--tw-border-opacity, 1));
    }
</style>