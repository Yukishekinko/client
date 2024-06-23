<script setup lang='ts'>
import api from '@/shared/api/axios';
import { onMounted, ref } from 'vue';
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/shared/ui/resizable';
import { useUserStore } from '@/entities/user/store/user-store';
import { MenuWidget } from '@/widget/menu-widget';
import { Button } from '@/shared/ui/button';
const data = ref([]);

onMounted(async () => {
    const response = await api.get('preset')
    data.value = response.data;
})

const userStore = useUserStore();
</script>
<template>
    <header class="px-20 py-12 flex justify-end">
        <MenuWidget />
    </header>
    <p class="px-20 font-semibold text-9xl">Мои пресеты</p>
    <div class="mt-10">
        <template v-for="preset in data">
            <p class="px-20 text-5xl font-semibold">{{ preset.name }}</p>
            <ResizablePanelGroup direction="horizontal" class="mt-5">
                <ResizablePanel>
                    <div class="w-full relative left-0 overflow-hidden h-[600px]">
                        <img class="!min-w-[100vw] object-cover"
                            :src="`http://localhost:3000/preset/${preset.original}`" />
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div class="w-full relative left-0  overflow-hidden h-[600px]">
                        <img class="!min-w-[100vw] pl-[84px] absolute right-0 -z-10 object-cover"
                            :src="`http://localhost:3000/preset/${preset.result}`" />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
            <div class="flex justify-between px-20 pt-5">
                <p class="text-5xl font-medium">{{ preset.description }}</p>
                <template v-if="userStore.isAuthenticated">
                    <Button>
                        <a :href="`http://localhost:3000/preset/${preset.file}`" download>Купить</a>
                    </Button>
                </template>
                <template v-else>
                    <p>Для покупки авторизуйтесь</p>
                </template>
            </div>
        </template>
    </div>
</template>