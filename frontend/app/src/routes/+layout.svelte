<script lang="ts">
    import '../app.css';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Hero from '$lib/components/Hero.svelte';

    let { data, children } = $props();
</script>

{#if data.isHome}
    <Hero />
<!--{:else}-->
<!--    <Header />-->
{/if}

{@render children()}

<Footer />
