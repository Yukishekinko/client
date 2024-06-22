<script setup lang='ts'>
import { MenuWidget } from '@/widget/menu-widget';
import { PhotoContentLayout } from '../layout/photo-content-layout';

</script>
<template>
    <PhotoContentLayout img="/1.jpg">
        <div class="pt-14 px-12">
            <div class="flex justify-between">
                <p class="text-2xl font-semibold">(Обо мне)</p>
                <MenuWidget />
            </div>
            <div class="mt-9 text-9xl font-semibold">
                <p>Вероника</p>
                <p>Ващенко</p>
            </div>
            <div class="mt-12 text-5xl font-semibold italic">
                <p>Профессиональный фотограф</p>
                <p>Ростов-на-Дону</p>
            </div>
            <div class="mt-9 text-2xl font-semibold flex flex-col gap-9">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="mt-16">
                <p class="font-semibold italic text-6xl">Сертификаты и дипломы</p>
            </div>
            <div class="mt-14 pb-14 flex flex-col gap-12 font-semibold text-2xl">
                <p>Диплом о прохождении мастер-класса
                    «Искусство композиции»</p>
                <p>Сертификат о прохождении треннинга
                    «Студийное освещение»</p>
            </div>
        </div>
    </PhotoContentLayout>
</template>