<script lang="ts">
    import { Modal } from 'flowbite-svelte';
    import { writable, derived, get } from 'svelte/store';
    import { onMount } from 'svelte';
    import { searchProducts, type Product } from '$lib/api';

    export let open = true;

    /* ── основные стейты ───────────────────────────────────── */
    const term     = writable('');
    const results  = writable<Product[]>([]);
    const loading  = writable(false);
    const errorMsg = writable<string | null>(null);

    /* ── история (до 5 объектов: query + category) ─────────── */
    interface HistoryItem { query: string; category: string }
    const history = writable<HistoryItem[]>([]);
    const HISTORY_KEY = 'search-history';

    onMount(() => {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (raw) history.set(JSON.parse(raw) as HistoryItem[]);
    });

    function saveHistory(list: HistoryItem[]) {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
    }

    function addToHistory(product: Product) {
        const item: HistoryItem = {
            query: product.name,
            category: product.category_name
        };
        let list = get(history);
        list = [item, ...list.filter(i => i.query !== item.query)].slice(0, 5);
        history.set(list);
        saveHistory(list);
    }

    /* ── debounce‑поиск ────────────────────────────────────── */
    function debounce<T extends (...a: any[]) => void>(fn: T, wait = 300) {
        let t: ReturnType<typeof setTimeout> | null = null;
        return (...args: Parameters<T>) => {
            if (t) clearTimeout(t);
            t = setTimeout(() => fn(...args), wait);
        };
    }

    const runSearch = debounce(async (value: string) => {
        value = value.trim();
        if (value.length < 3) {
            results.set([]); loading.set(false); errorMsg.set(null); return;
        }
        loading.set(true);
        try     { results.set(await searchProducts(value)); errorMsg.set(null); }
        catch(e){ results.set([]); errorMsg.set('Ошибка запроса'); console.error(e); }
        finally { loading.set(false); }
    }, 300);

    $: runSearch($term);   // реактивный вызов

    /* ── вычисления для шапки ──────────────────────────────── */
    const showHeader = derived(
        [term, history],
        ([$t, $h]) => {
            const len = $t.trim().length;
            return len >= 3 || (len === 0 && $h.length > 0);
        }
    );

    const headerText = derived(
        [term, history, loading, errorMsg, results],
        ([$t, $h, $l, $e, $r]) => {
            const len = $t.trim().length;
            if (len === 0) return $h.length ? 'История' : '';
            if ($l) return 'Загружаем…';
            if ($e) return $e;
            if ($r.length === 0) return 'Ничего не найдено';
            return 'Результаты';
        }
    );
</script>

<Modal bind:open outsideclose dismissable={false}>
    <div class="-m-4 h-[90vh] md:h-auto">
        <div class="border-b-[1px] border-gray-300 [ flex gap-2 justify-between items-center ] [ px-4 py-0 ]">
            <div class="flex w-full items-center gap-3">
                <svg width="20px" height="20px" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5236 8.68L14 12.2063L12.25 14L8.68437 10.521C7.78507 11.0806 6.74671 11.3765 5.6875 11.375C2.54625 11.375 0 8.82263 0 5.6875C0 2.54625 2.55238 0 5.6875 0C8.82875 0 11.375 2.55238 11.375 5.6875C11.3766 6.74498 11.0816 7.78172 10.5236 8.68ZM1.74738 5.6455C1.74738 7.8155 3.50962 9.583 5.68488 9.583C7.85488 9.583 9.62237 7.81988 9.62237 5.6455C9.62237 3.4755 7.85925 1.708 5.68488 1.708C3.51488 1.708 1.74738 3.47025 1.74738 5.6455Z" fill="#3947FF"/>
                </svg>
                <input bind:value={$term} class="[ py-4 ] text-black font-medium text-lg w-full block outline-none" placeholder="Введите название или артикул">
            </div>
            <button on:click={() => open = false} class="w-[2rem] flex justify-center items-center aspect-square " aria-label="Search" >
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                </svg>
            </button>
        </div>

        <!-- content -->
        <div class="[ min-h-[20rem] ]">
            {#if $showHeader}
            <div aria-label="body-header" class=" [ px-4 py-4 ] flex items-center border-b-[1px] border-gray-300">
                <div class="flex flex-wrap items-center gap-3">
                    {#if $headerText === 'История'}
                    <svg width="18px" height="16px" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5284 7.42827C3.49934 7.62826 3.49934 7.79968 3.49934 7.99967H1.75541C1.75541 7.79968 1.75541 7.62826 1.78448 7.42827H3.5284Z" fill="#585858"/>
                        <path d="M10.3297 3.99984H9.45775C9.22523 3.99984 9.02177 4.19983 9.02177 4.42839V8.1711C9.02177 8.28538 9.0799 8.39966 9.13803 8.48537L11.5795 10.8853C11.7539 11.0567 12.0155 11.0567 12.1899 10.8853L12.8003 10.2853C12.9747 10.1139 12.9747 9.85674 12.8003 9.68532L10.7657 7.65683V4.42839C10.7657 4.19983 10.5622 3.99984 10.3297 3.99984Z" fill="#585858"/>
                        <path d="M9.89373 0C5.59205 0 2.07513 3.28558 1.78448 7.42827C1.78448 7.51398 1.75541 7.62826 1.75541 7.71397H0.447468C0.0696176 7.71397 -0.133841 8.14253 0.0986828 8.39966L2.27859 10.9996C2.45298 11.1995 2.7727 11.1995 2.9471 10.9996L5.127 8.39966C5.35953 8.11396 5.15607 7.71397 4.77822 7.71397H3.49934C3.49934 7.62826 3.49934 7.51398 3.49934 7.42827C3.78999 4.2284 6.55121 1.71422 9.86467 1.71422C13.6432 1.71422 16.6369 4.94266 16.23 8.71393C15.9393 11.4281 13.3235 13.9994 10.5332 14.2566C8.46953 14.4566 6.52214 13.7137 5.15607 12.2566C4.98168 12.0567 4.74915 11.9424 4.51663 12.2281L3.81906 13.0566C3.67373 13.228 3.78999 13.3423 3.93532 13.4852C5.50485 15.1137 7.65569 16.0279 9.98093 15.9993C14.1664 15.9422 17.6833 12.6852 17.9739 8.57108C18.3518 3.91413 14.5733 0 9.89373 0Z" fill="#585858"/>
                    </svg>
                    {/if}
                    <span class="{ $errorMsg ? 'text-red-600' : 'text-gray-600' } font-bold">
                      { $headerText }
                    </span>
                </div>
            </div>
            {/if}

            <div aria-label="search result">

                <!-- item -->
                {#if $results.length}
                    {#each $results as p}
                        <a href={`/products/${p.id}`}
                            class="relative flex items-center justify-between gap-3 px-4 py-4
                            border-b border-gray-300 hover:bg-gray-100"
                           on:click={() => {
                            addToHistory(p);
                            open = false;
                          }} >
                        <h3 class="text-md tracking-wide uppercase font-bold w-full truncate">
                            {p.name}
                        </h3>
                            <span class="flex items-center gap-3 text-gray-600">
                                {p.category_name}
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12L6 6.5L1 1" stroke="#585858" stroke-width="2"/>
                                </svg>
                            </span>
                        </a>
                    {/each}
                {/if}
                <!-- item -->

                <!-- if empty history -->
                {#if $term.trim().length === 0}
                    {#if $history.length}
                        {#each $history as h}
                            <button class="[ flex justify-between ] w-full text-left px-4 py-4 border-b border-gray-300 hover:bg-gray-100 items-center gap-2"
                                    on:click={() => term.set(h.query)} >

                                <span class="text-md text-black tracking-wide uppercase font-bold w-full truncate">{h.query}</span>

                                <span class="flex items-center gap-3 text-gray-600">
                                    <span class="leading-none">{h.category}</span>
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12L6 6.5L1 1" stroke="#585858" stroke-width="2"/>
                                </svg>
                                </span>
                            </button>
                        {/each}
                    {:else}

                    <div class="pt-[5rem] text-center flex items-center justify-center">
                        <div class=" flex items-center justify-center gap-3">
                            <svg width="24px" height="22px" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5284 7.42827C3.49934 7.62826 3.49934 7.79968 3.49934 7.99967H1.75541C1.75541 7.79968 1.75541 7.62826 1.78448 7.42827H3.5284Z" fill="#585858"/>
                                <path d="M10.3297 3.99984H9.45775C9.22523 3.99984 9.02177 4.19983 9.02177 4.42839V8.1711C9.02177 8.28538 9.0799 8.39966 9.13803 8.48537L11.5795 10.8853C11.7539 11.0567 12.0155 11.0567 12.1899 10.8853L12.8003 10.2853C12.9747 10.1139 12.9747 9.85674 12.8003 9.68532L10.7657 7.65683V4.42839C10.7657 4.19983 10.5622 3.99984 10.3297 3.99984Z" fill="#585858"/>
                                <path d="M9.89373 0C5.59205 0 2.07513 3.28558 1.78448 7.42827C1.78448 7.51398 1.75541 7.62826 1.75541 7.71397H0.447468C0.0696176 7.71397 -0.133841 8.14253 0.0986828 8.39966L2.27859 10.9996C2.45298 11.1995 2.7727 11.1995 2.9471 10.9996L5.127 8.39966C5.35953 8.11396 5.15607 7.71397 4.77822 7.71397H3.49934C3.49934 7.62826 3.49934 7.51398 3.49934 7.42827C3.78999 4.2284 6.55121 1.71422 9.86467 1.71422C13.6432 1.71422 16.6369 4.94266 16.23 8.71393C15.9393 11.4281 13.3235 13.9994 10.5332 14.2566C8.46953 14.4566 6.52214 13.7137 5.15607 12.2566C4.98168 12.0567 4.74915 11.9424 4.51663 12.2281L3.81906 13.0566C3.67373 13.228 3.78999 13.3423 3.93532 13.4852C5.50485 15.1137 7.65569 16.0279 9.98093 15.9993C14.1664 15.9422 17.6833 12.6852 17.9739 8.57108C18.3518 3.91413 14.5733 0 9.89373 0Z" fill="#585858"/>
                            </svg>
                            <span class="text-gray-600 font-medium text-2xl">Нет истории поиска</span>
                        </div>
                    </div>
                    {/if}
                {/if}
                <!-- empty history -->

            </div>
        </div>
        <!-- content -->

    </div>
</Modal>

