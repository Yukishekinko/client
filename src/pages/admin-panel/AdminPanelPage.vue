<script setup lang='ts'>
import { BackstageDataTable } from '@/entities/backstage';
import { backstage_columns } from '@/entities/backstage/ui/columns';
import { PhotosetDataTable } from '@/entities/photoset';
import { Photoset } from '@/entities/photoset/entity/photoset.entity';
import { columns } from '@/entities/photoset/ui/columns';
import { PortfolioDataTable } from '@/entities/portfolio';
import { portfolio_columns } from '@/entities/portfolio/ui/columns';
import { Button } from '@/shared/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import axios from 'axios';
import { Ref, onMounted, ref } from 'vue';

const data: Ref<Photoset[]> = ref([]);

const portfolio_data = ref([
    {
        id: "test_1",
        name: "name_1",
        date: "2024-05-28",
        published: false,
    },
    {
        id: "test_2",
        name: "name_2",
        date: "2024-06-28",
        published: false,
    }
]
)

const backstage_data = ref([
    {
        id: "test_1",
        name: "name_1",
        date: "2024-05-28",
        published: false,
    },
    {
        id: "test_2",
        name: "name_2",
        date: "2024-06-28",
        published: false,
    }
]
)

onMounted(async () => {
    const response = await axios.get('http://localhost:3000/photoset')
    data.value = response.data;
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
                            <TabsTrigger value="backstage">
                                За кадром
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
                        <PortfolioDataTable :columns="portfolio_columns" :data="portfolio_data" />
                    </TabsContent>
                    <TabsContent value="backstage">
                        <RouterLink to="/portfolio/new">
                            <Button class="mb-2">
                                Создать за кадром
                            </Button>
                        </RouterLink>
                        <BackstageDataTable :columns="backstage_columns" :data="backstage_data"/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
</template>