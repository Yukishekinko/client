<script setup lang='ts'>
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared/ui/resizable';
import { BackstageWidget } from '@/widget/backstage-widget';
import { ContactMeFooterWidget } from '@/widget/contact-me-footer';
import { MenuWidget } from '@/widget/menu-widget';
import { MyPhotosetsWidget } from '@/widget/my-photosets-widget';
import { WidePhotoParallaxLinkWidget } from '@/widget/wide-photo-parallax-link-widget';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { RouterLink } from 'vue-router';
import { Vue3Marquee } from 'vue3-marquee';

const reviews = [
    {
        title: "Очень комфортно",
        text: "Съёмка прошла очень комфортно, благодарю за полученные эмоции, воспоминания и красивые фотографии",
        author: "Александра Фомченко",
    },
    {
        title: "Было прикольно",
        text: "Съёмка прошла очень комфортно, благодарю за полученные эмоции, воспоминания и красивые фотографии",
        author: "Анастасия Цветкова",
    },
    {
        title: "Фотограф умничка",
        text: "Съёмка прошла очень комфортно, благодарю за полученные эмоции, воспоминания и красивые фотографии",
        author: "Анастасия Цветкова",
    }
]
</script>
<template>
    <div class="container xl:max-w-[1920px]">
        <header class="z-50">
            <div class="pt-12 pb-20 flex flex-col z-50 bg-white">
                <div class="flex justify-between">
                    <div class="flex flex-col leading-[174px] text-[144px]">
                        <span class="font-semibold font-sans">Dmitrieeva</span>
                        <span class="font-medium italic">Проф. Фотограф</span>
                    </div>
                    <div>
                        <MenuWidget />
                    </div>
                </div>
                <div class="flex justify-between pt-12">
                    <div class="flex gap-2 text-xl font-medium">
                        <a target="_blank" href="https://vk.com/dmitrieevaph">VK</a>
                        <a target="_blank" href="https://t.me/vsehdostanu">TELEGRAM</a>
                    </div>
                    <div class="flex gap-2 items-center">
                        <Icon icon="mdi:arrow-bottom-right" class="size-5" />
                        <p class="text-xl font-medium">Листайте вниз</p>
                    </div>
                </div>
            </div>
        </header>
        <WidePhotoParallaxLinkWidget img="/1.png" to="portfolio" />
        <MyPhotosetsWidget />
        <BackstageWidget />
        <div class="mt-[164px] px-20">
            <div class="flex gap-[240px]">
                <div class="min-w-[835px]">
                    <div>
                        <p class="font-medium text-[128px]">Обо мне</p>
                        <p class="text-[32px]">Меня зовут Николь,мне 20 лет,я из Таганрога.С 12 лет я увлеклась
                            фотографией, любила снимать природные пейзажи и котов.Пошла на работу что бы накопить на
                            свой первый фотоаппарат, мечтала поступить туда,где профессия тесно будет связанна с
                            хобби.Поступила в колледж,и начала свой путь, проходила множество обучении,изучала настройки
                            фотоаппарата ,общалась с многими коллегами и обменивалась опытом.
                        </p>
                    </div>
                    <div class="mt-72">
                        <p class="font-medium text-[128px]">Моё видение</p>
                        <p class="text-[32px]">
                            Я люблю переносить свои неординарные идеи в реальность.Мне нравится процесс от начала
                            задумки ,до её конечного результата.Мне нравится винтаж и ретро съемки,атмосфера.Люблю когда
                            в кадрах рассказывается история,когда есть смысл.Я создаю своим моделям образы котоые они
                            никогда бы не повторили в реальной жизни.Со мной вы почувствуете себя по новому.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/9.png" class="min-w-[640px] h-[720px] bg-slate-400 sticky top-[164px]" />
                    < </div>
                </div>
            </div>
            <div class="mt-[172px] bg-[#1f1f1f] pt-[156px] pb-[156px]">
                <div class="px-20">
                    <p class="text-white text-[128px] font-medium">Услуги</p>
                </div>
                <div class="px-20 flex justify-between text-white">
                    <div class="border p-12">
                        <p class="text-4xl font-medium">Пакет М</p>
                        <p class="text-6xl font-semibold pt-4">1 499₽<span class="text-4xl">/час</span></p>
                        <div class="font-medium flex flex-col gap-4 pt-9">
                            <p class="text-4xl">Фотографии</p>
                            <p class="text-2xl">20 фото в цветокоррекции</p>
                            <p class="text-2xl">5 фото в ретуши</p>
                        </div>
                        <div class="font-medium flex flex-col gap-4 pt-20">
                            <p class="text-4xl">Прочее</p>
                            <p class="text-2xl">Готовность до 14 дней</p>
                            <p class="text-2xl">Помощь в позировании</p>
                        </div>
                    </div>

                    <div class="border p-12">
                        <p class="text-4xl font-medium">Пакет М</p>
                        <p class="text-6xl font-semibold pt-4">1 999₽<span class="text-4xl">/час</span></p>
                        <div class="font-medium flex flex-col gap-4 pt-9">
                            <p class="text-4xl">Фотографии</p>
                            <p class="text-2xl">25 фото в цветокоррекции</p>
                            <p class="text-2xl">10 фото в ретуши</p>
                        </div>
                        <div class="font-medium flex flex-col gap-4 pt-20">
                            <p class="text-4xl">Прочее</p>
                            <p class="text-2xl">Готовность до 7 дней</p>
                            <p class="text-2xl">Помощь в позировании</p>
                            <p class="text-2xl">Видео-reels и его исходники</p>
                        </div>
                    </div>

                    <div class="border p-12">
                        <p class="text-4xl font-medium">Пакет XL</p>
                        <p class="text-6xl font-semibold pt-4">3 499₽<span class="text-4xl">/час</span></p>
                        <div class="font-medium flex flex-col gap-4 pt-9">
                            <p class="text-4xl">Фотографии</p>
                            <p class="text-2xl">40 фото в цветокоррекции</p>
                            <p class="text-2xl">15 фото в ретуши</p>
                            <p class="text-2xl">2 фото коллажа</p>
                        </div>
                        <div class="font-medium flex flex-col gap-4 pt-20">
                            <p class="text-4xl">Прочее</p>
                            <p class="text-2xl">Готовность до 7 дней</p>
                            <p class="text-2xl">Помощь в позировании</p>
                            <p class="text-2xl">Видео-reels и его исходники</p>
                            <p class="text-2xl">Исходные фотографии</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-[228px]">
                <div class="flex justify-end px-20">
                    <p class="text-[128px] font-medium">Отзывы</p>
                </div>
                <div class="flex flex-col gap-20">
                    <Vue3Marquee :clone="true">
                        <div v-for="review in reviews" class="flex flex-col gap-3 ml-16">
                            <p class="font-semibold text-[40px]">
                                {{ review.title }}
                            </p>
                            <p class="font-semibold text-base max-w-[320px]">
                                {{ review.text }}
                            </p>
                            <p class="font-semibold text-sm">
                                {{ review.author }}
                            </p>
                        </div>
                    </Vue3Marquee>
                    <Vue3Marquee :clone="true" direction="reverse">
                        <div v-for="review in reviews" class="flex flex-col gap-3 ml-16">
                            <p class="font-semibold text-[40px]">
                                {{ review.title }}
                            </p>
                            <p class="font-semibold text-base max-w-[320px]">
                                {{ review.text }}
                            </p>
                            <p class="font-semibold text-sm">
                                {{ review.author }}
                            </p>
                        </div>
                    </Vue3Marquee>
                </div>
            </div>
            <div class="pt-[164px] px-20">
                <div class="flex justify-between items-baseline">
                    <p class=" text-9xl font-medium">Мои пресеты</p>
                    <RouterLink to="/preset">
                        <p class="text-[32px] italic underline">Все пресеты</p>
                    </RouterLink>

                </div>
            </div>
            <ResizablePanelGroup direction="horizontal" class="mt-20">
                <ResizablePanel>
                    <div class="w-full relative left-0 overflow-hidden h-[600px]">
                        <img class="!min-w-[100vw] object-cover" src="/12.png" />
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div class="w-full relative left-0  overflow-hidden h-[600px]">
                        <img class="!min-w-[100vw] pl-[84px] absolute right-0 -z-10 object-cover" src="/13.png" />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
        <ContactMeFooterWidget class="mt-48" />
</template>
