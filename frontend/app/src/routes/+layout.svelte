<script lang="ts">
    import '../app.css';

    // import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Hero from '$lib/components/Hero.svelte';

    let { data, children } = $props();
</script>
<Hero />

<!--{#if data.isHome}-->
<!--    <Hero />-->
<!--    <Header />-->
<!--{:else}-->
<!--    <Header />-->
<!--{/if}-->

{@render children()}

<Footer />
