<script setup lang='ts'>
import api from '@/shared/api/axios';
import { Button } from '@/shared/ui/button';
import { MenuWidget } from '@/widget/menu-widget';
import { Ref, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

interface Photo {
    id: string,
    path: string,
    photosetId: string
}

const route = useRoute()
const photos: Ref<Photo[]> = ref([]);
const photoset = ref();
const firstPhoto = ref();

onMounted(async () => {
    try {
        const response = await api.get(`photoset/${route.params.id}`);
        const response_2 = await api.get<Photo[]>(`photoset/${route.params.id}/photos`);
        photos.value = response_2.data;
        photoset.value = response.data;
        firstPhoto.value = photos.value[0].id;
    } catch (error) {
        console.error(error)
    }
})

</script>
<template>
    <div class="px-20" v-if="photoset">
        <div class="flex justify-between mt-10 items-top">
            <p class="text-9xl font-semibold">{{ photoset.name }}</p>
            <MenuWidget />
        </div>


        <div class="flex justify-between mt-10">
            <p class="text-4xl">{{ photoset.date.slice(0, 10) }}</p>
            <a :href="`http://5.35.11.45:3000/photoset/${photoset.id}/download`" download>
                <Button variant="link" class="text-2xl">Скачать</Button>
            </a>
        </div>
    </div>
    <div class="h-[600px] overflow-hidden mt-10">
        <img :src="`http://5.35.11.45:3000/photo/${firstPhoto}`" class="w-screen" alt="">
    </div>
    <div class="px-20 mt-5 gap-5 grid grid-cols-4">
        <template v-for="photo in photos.slice(1)">
            <div class="">
                <img :src="`http://5.35.11.45:3000/photo/${photo.id}`" class="h-[560px] w-[420px] object-cover">
            </div>
        </template>
    </div>
</template>
