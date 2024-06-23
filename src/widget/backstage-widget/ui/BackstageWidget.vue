<script setup lang='ts'>
import { WidePhotoParallaxLinkWidget } from '@/widget/wide-photo-parallax-link-widget';
import { Vue3Marquee } from 'vue3-marquee';
</script>
<template>
    <Vue3Marquee :clone="true" class="overflow-hidden mb-20 mt-40">
        <p class="text-9xl font-semibold px-2">За кадром</p>
    </Vue3Marquee>
    <WidePhotoParallaxLinkWidget img="/8.png" to="#" />
</template>