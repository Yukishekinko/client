<script setup lang='ts'>
import { MenuWidget } from '@/widget/menu-widget';
import { PhotoContentLayout } from '../layout/photo-content-layout';
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormItem } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';

const { handleSubmit } = useForm({

})

const onSubmit = handleSubmit(() => {

})
</script>
<template>
    <PhotoContentLayout img="/1.jpg">
        <div class="pt-14 px-12">
            <div class="flex justify-between">
                <p class="text-2xl font-semibold">(Связаться со мной)</p>
                <MenuWidget />
            </div>
            <div class="mt-9 text-9xl font-semibold">
                <p>Давайте</p>
                <p>Свяжемся</p>
            </div>
            <form action="mailto:test@mail.ru" @submit="onSubmit" class="flex flex-col h-full">
                <FormField v-slot="{ componentField }" name="firstname">
                    <FormItem>
                        <FormControl>
                            <Input v-bind="componentField" placeholder="Ваше имя"
                                class="border-none bg-[#F0F0EF] rounded-sm py-6" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem class="mt-4">
                        <FormControl>
                            <Input v-bind="componentField" placeholder="Ваш Email"
                                class="border-none bg-[#F0F0EF] rounded-sm py-6" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="text">
                    <FormItem class="mt-4 grow">
                        <FormControl>
                            <Textarea v-bind="componentField" placeholder="Текст"
                                class="border-none bg-[#F0F0EF] rounded-sm" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <Button class="mt-14" type="submit">Отправить сообщение</Button>
            </form>
        </div>
    </PhotoContentLayout>
</template>