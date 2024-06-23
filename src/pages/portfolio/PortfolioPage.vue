<script setup lang='ts'>
import { MenuWidget } from '@/widget/menu-widget';
import { PortfolioList } from '@/widget/portfolio-list';

</script>
<template>
    <header class="px-20 py-12 flex justify-end">
        <MenuWidget />
    </header>
    <p class="px-20 font-semibold text-9xl">Портфолио</p>
    <div class="mt-20">
        <PortfolioList />
    </div>
</template>