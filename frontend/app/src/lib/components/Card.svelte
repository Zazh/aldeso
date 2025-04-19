<script lang="ts">
    export let product: any;
    export let side = false;          // карточка в боковой колонке
    export let hideOnLg = false;      // скрыта ли она в основной колонке
    export let first = false;         // ← будет true только для первой карточки

    const sizeStyle =
        side ? 'width:var(--card-w);' : undefined;

    let root: HTMLElement;

    import { onMount } from 'svelte';

    // Найдём атрибут “Вид” в списке attributes
    const viewAttr = product.attributes.find(
        (a) => a.attribute_name === 'Тип'
    );

    /** Только у первой карточки запускаем ResizeObserver */
    onMount(() => {
        if (!first) return;

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            document.documentElement.style.setProperty('--card-w', `${width}px`);
        });

        ro.observe(root);
        return () => ro.disconnect();
    });
</script>

<div bind:this={root} class={`[ card ] w-full ${side ? '' : 'md:w-1/2'}
          ${hideOnLg ? 'lg:hidden' : ''}`}
     style={sizeStyle}>
            <div class="img-block [ w-full aspect-square ] [ flex items-center justify-center ] border-b-[1px] border-gray-300" >
                <img src="{product.info.photo}" alt="{product.name}" title="{product.name}">
            </div>
            <div class="info p-fluid-sm">
                <div class="pt-4 pb-4">
                    <h2 class="text-xl font-bold uppercase tracking-wider"><a href=" ">{product.name}</a></h2>
                </div>
                <ul class="flex flex-wrap gap-3">
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Артикул</span>
                        <span class="text-gray-500 text-base">{product.sku}</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Категория</span>
                        <span class="text-gray-500 text-base">{product.category_name}</span>
                    </li>
                    <li class="flex flex-col w-full">
                        <span class="uppercase tracking-wider text-fluid-sm font-bold leading-fluid-1">Вид</span>
                        <span class="text-gray-500 text-base">{viewAttr?.value ?? '—'}</span>
                    </li>
                </ul>
            </div>
</div>

<style>
    .card > .img-block,
    .card > .info,
    .card > .cta {
        border-right: 1px solid #c4c4c4;
    }
    .card > .cta {
        border-bottom: 1px solid #c4c4c4;
    }
</style>
