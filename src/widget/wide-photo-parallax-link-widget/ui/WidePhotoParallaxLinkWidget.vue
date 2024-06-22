<script setup lang='ts'>
import { Ref, onMounted, onUnmounted, ref, watch } from 'vue';

const img: Ref<HTMLElement | null> = ref<HTMLElement | null>(null)
const isIntersecting = ref(false)
const scale = 0.5;

interface WidePhotoParallaxLinkWidgetProps {
    img: string
    to: string
}

const props = defineProps<WidePhotoParallaxLinkWidgetProps>()

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            isIntersecting.value = entry.isIntersecting;
        })
    },
    { threshold: 0 }
)

let frame = -1;
const onScroll = () => {
    if (!isIntersecting.value) return

    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.clientHeight
        const scrollPos = window.scrollY


        const top = img.value!.getBoundingClientRect().top + scrollPos;
        const height = img.value!.getBoundingClientRect().height;

        const center = top + (height - scrollHeight) / 2;
        const translate = Math.floor((scrollPos - center) * scale)

        console.group()
        console.log(`scroll height: ${scrollHeight}`)
        console.log(`scroll post: ${scrollPos}`)
        console.log(`top: ${top}`)
        console.log(`height: ${height}`)
        console.log(`center: ${center}`)
        console.log(`translate: ${translate}`)
        console.groupEnd()

        img.value?.style.setProperty('transform', `translateY(${translate}px)`)
    })




}

watch(isIntersecting, (value) => {
    if (value) {
        document.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
    } else {
        console.log("Not intersecting")
        document.removeEventListener('scroll', onScroll)
    }
})

onMounted(() => {
    if (img.value != null) {
        observer.observe(img.value);
    }
})

onUnmounted(() => {
    if (img.value != null) {
        observer.unobserve(img.value)
    }
})

</script>
<template>
    <RouterLink :to="props.to">
        <div class="w-full h-[800px] overflow-hidden">
            <img ref="img" :src="props.img" alt="">
        </div>
    </RouterLink>
</template>