<script setup lang='ts'>
import { ContactMeFooterWidget } from '@/widget/contact-me-footer';

interface PhotoContentLayoutProps {
    img: string
}

const props = defineProps<PhotoContentLayoutProps>()
</script>
<template>
    <div class="flex">
        <div class="min-w-[950px] max-w-[950px] h-full sticky top-0">
            <img :src="props.img" alt="image" class="min-h-screen">
        </div>
        <div class="grow">
            <slot />
        </div>
    </div>
    <ContactMeFooterWidget />
</template>