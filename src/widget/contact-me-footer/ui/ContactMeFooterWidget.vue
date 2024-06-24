<script setup lang='ts'>
import { Button } from '@/shared/ui/button';


</script>
<template>
    <footer class="bg-[#1f1f1f] text-white">
        <div class="flex flex-col gap-16 items-center pt-32 pb-48">
            <p class="font-semibold text-4xl">(Связь со мной)</p>
            <p class="font-semibold text-[128px]">Давайте общаться</p>
            <a target="_blank" href="https://t.me/vsehdostanu">
                <Button variant="outline" class="bg-white px-8 py-4 text-black rounded-[30px] text-4xl h-auto"> Связаться </Button>
            </a>
            
        </div>
        <div class="border-t-2 border-t-white grid place-items-center">
            <p class="text-4xl py-11">©️dmitrieeva</p>
        </div>
    </footer>
</template>