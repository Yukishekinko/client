<script setup lang='ts'>
import api from '@/shared/api/axios';
import { MenuWidget } from '@/widget/menu-widget';
import { WidePhotoParallaxLinkWidget } from '@/widget/wide-photo-parallax-link-widget';
import { onMounted, ref } from 'vue';

const data = ref()

const fetchPortfolio = async () => {
    const response = await api.get('/portfolio');
    return response.data
}

const fetchPhoto = async (portfolioId: string) => {
    const photos = await api.get(`portfolio/${portfolioId}/photos`);
    const firstPhoto = photos.data[0].id;
    return firstPhoto;
}

onMounted(async () => {
    const portfolios = await fetchPortfolio();
    data.value = await Promise.all(portfolios.map(async (portfolio : any) => {
      const photo = await fetchPhoto(portfolio.id);
      return { ...portfolio, photo };
    }));
    console.log(data.value);
})
</script>
<template>
    <header class="px-20 py-12 flex justify-end">
        <MenuWidget />
    </header>
    <p class="px-20 font-semibold text-9xl">За кадром</p>
    <div class="mt-10">
        <template v-for="portfolio in data">
        <div class="mb-20">
            <p class="text-3xl font-semibold ml-10 pb-8">Фотографии за кадром для: {{ portfolio.name }}</p>
            <WidePhotoParallaxLinkWidget :img="`http://localhost:3000/portfolio-photo/${portfolio.photo}`" :to="`/portfolio/${portfolio.id}`" />
        </div>
    </template>
    </div>
</template>