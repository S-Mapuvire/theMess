<template>
    <header>
        <MyHeader :mainHeader="mainHeader" :subHeader="subHeader" />
    </header>

    
    <article>
        <RouterLink to="/code-examples/CalculatorView">
            <h3>State-based Scientific Calculator</h3>
        </RouterLink>
        <RouterLink to="/code-examples/CalculatorView">
            <h3>Tarot Cards</h3>
        </RouterLink>
        <RouterLink to="/code-examples/CalculatorView">
            <h3>HTML Canvas games</h3>
        </RouterLink>
        <RouterLink to="/code-examples/CalculatorView">
            <h3>FFMPEG using node</h3>
        </RouterLink>
        <RouterLink to="/code-examples/CalculatorView">
            <h3>Easy-going pomo site</h3>
        </RouterLink>
    </article>

    <footer>
        <MyFooter />
    </footer>

</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

const mainHeader = 'This is a collection of live code examples';
const subHeader = 'Source code can be found on the github linked in the footer';

</script>

<style lang="scss" scoped>
.darkTheme{
    color:white;
}
</style>