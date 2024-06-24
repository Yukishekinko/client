<script setup lang='ts'>
import { PhotosetDataTable } from '@/entities/photoset';
import { Photoset } from '@/entities/photoset/entity/photoset.entity';
import { columns } from '@/entities/photoset/ui/columns';
import { PortfolioDataTable } from '@/entities/portfolio';
import { portfolio_columns } from '@/entities/portfolio/ui/columns';
import api from '@/shared/api/axios';
import { Button } from '@/shared/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Ref, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const data: Ref<Photoset[]> = ref([]);
const data_2 = ref([]);

onMounted(async () => {
    const response = await api.get('photoset')
    const response_2 = await api.get('portfolio');

    data.value = response.data;
    data_2.value = response_2.data;

})

</script>
<template>
    <div class="h-screen">
        <header class="py-4 px-4">
            <div class="container flex items-center justify-between ">
                <p>Управление контентом</p>
                <RouterLink to="/">
                    <Button variant="link"> На главную </Button>
                </RouterLink>
            </div>
        </header>
        <div class="border-t h-full">
            <div class="container mt-4">
                <Tabs default-value="photoset">
                    <div class="flex justify-between">
                        <TabsList>
                            <TabsTrigger value="photoset">
                                Фотосессии
                            </TabsTrigger>
                            <TabsTrigger value="portfolio">
                                Портфолио
                            </TabsTrigger>
                            <TabsTrigger value="preset">
                                Пресеты
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="photoset">
                        <RouterLink to="/photoset/new">
                            <Button class="mb-2">
                                Создать фотосессию
                            </Button>
                        </RouterLink>
                        <PhotosetDataTable :columns="columns" :data="data" />
                    </TabsContent>
                    <TabsContent value="portfolio">
                        <RouterLink to="/portfolio/new">
                            <Button class="mb-2">
                                Создать портфолио
                            </Button>
                        </RouterLink>
                        <PortfolioDataTable :columns="portfolio_columns" :data="data_2" />
                    </TabsContent>
                    <TabsContent value="preset">
                        <RouterLink to="/preset/new">
                            <Button>
                                Создать пресет
                            </Button>
                        </RouterLink>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
</template>