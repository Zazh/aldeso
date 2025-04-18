<script>

</script>

<section id="hero" class="grid w-screen overflow-hidden">
    <div class="room-1 [ flex flex-nowrap md:gap-[10rem] gap-[6rem] justify-between flex-col ] [ p-6 ] [ row-span-2 xl:col-span-3 xl:col-start-2 md:col-span-4 col-span-6 ] border-x-[1px] border-gray-300 gap-4">
        <div>
            <img src="logo.svg" alt="" class="w-[4rem] aspect-square" />
        </div>
        <div>
            <h1 class="md:text-fluid-6xl text-6xl leading-none font-bold poppins-bold">
                Aluminum <br>
                Decorative <br>
                Solutions
            </h1>
        </div>
    </div>

    <div class="room-2 row-span-2 md:col-span-2 hidden md:flex border-r-[1px] border-gray-300 gap-4"></div>
</section>

<section id="hero-text" class="grid w-screen overflow-hidden border-y-[1px] border-gray-300">
    <div class="[ px-6 py-4 md:px-6 md:py-6 ] row-span-1 xl:col-span-3 xl:col-start-2 md:col-span-4 col-span-full flex border-x-[1px] border-gray-300 gap-4">
        <p class="md:text-fluid-sm pb-4 md:p-0 text-sm 2xl:text-fluid-lg poppins-regular leading-6 tracking-wider">
            Производим алюминиевые профили для скрытого <br>
            плинтуса и декоративной отделки высокого качества <br>
            Казахстанского производства
        </p>
    </div>
</section>


<style>
    #hero {
        grid-template-columns: repeat(6, 1fr);
    }
    .room-1 {
        background: url("/room-1.svg") no-repeat right bottom;
        background-size: cover;
    }
    .room-2 {
        background: url("/room-2.svg") no-repeat left bottom;
        background-size: cover;
    }
    #hero-text {
        grid-template-columns: repeat(6, 1fr);
    }

</style>