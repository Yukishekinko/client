<script setup lang='ts'>
import api from '@/shared/api/axios';
import { MenuWidget } from '@/widget/menu-widget';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const portfolio = ref();
const photos = ref();

onMounted(async () => {
    try {
        const response = await api.get(`http://localhost:3000/portfolio/${route.params.id}`);
        portfolio.value = response.data;

        const response_2 = await api.get(`http://localhost:3000/portfolio/${route.params.id}/photos`);
        photos.value = response_2.data;
    } catch (error) {
        console.error(error)
    }

})

</script>
<template>
    <div class="px-20" v-if="portfolio">
        <div class="flex justify-between mt-10 items-top">
            <p class="text-9xl font-semibold">{{ portfolio.name }}</p>
            <MenuWidget />
        </div>
    </div>
    <div class="grid grid-cols-4 gap-5 mt-5 px-20" v-if="photos">
        <template v-for="(image) in photos">
            <div class="">
                <img :src="`http://localhost:3000/portfolio-photo/${image.id}`" :alt="`${image.path}`" class="h-[560px] w-[420px] object-cover">
            </div>
        </template>
    </div>
</template>
