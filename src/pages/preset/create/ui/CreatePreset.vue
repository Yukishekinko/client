<script setup lang='ts'>
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import api from '@/shared/api/axios';

const { handleSubmit, setFieldValue } = useForm()

const setPresetOriginal = (event: any) => {
    setFieldValue('original', event.target.files)
}

const setPresetAction = (event: any) => {
    setFieldValue('result', event.target.files)
}

const setPresetFile = (event: any) => {
    setFieldValue('preset', event.target.files)
}

const onSubmit = handleSubmit(async (values: any) => {
    try {
        const data = new FormData();
        data.append('original', values.original[0]);
        data.append('result', values.result[0]);
        data.append('preset', values.preset[0]);

        data.append('name', values.name);
        data.append('description', values.description);
        data.append('price', values.price);

        await api.postForm('preset', data);
    } catch (error) {
        console.error(error)
    }
})
</script>
<template>
    <header class="container flex justify-between items-center">
        <div class="py-4">
            Новый пресет
        </div>
        <RouterLink to="/management">
            <Button variant="link"> Назад </Button>
        </RouterLink>
    </header>
    <div class="border-t">
        <div class="container mt-5">
            <form @submit="onSubmit">
                <div class="grid grid-cols-3 gap-5">
                    <FormField name="name" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Название
                            </FormLabel>
                            <FormControl>
                                <Input type="text" v-bind="componentField" :name="componentField.name" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="description" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Описание
                            </FormLabel>
                            <FormControl>
                                <Input type="text" v-bind="componentField" :name="componentField.name" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="price" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Цена
                            </FormLabel>
                            <FormControl>
                                <Input type="number" v-bind="componentField" :name="componentField.name" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                </div>
                <div class="grid grid-cols-3 gap-5">
                    <FormField name="original">
                        <FormItem>
                            <FormLabel>
                                Исходное изображение
                            </FormLabel>
                            <FormControl>
                                <Input type="file" @change="setPresetOriginal" name="original" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="result">
                        <FormItem>
                            <FormLabel>
                                Результат
                            </FormLabel>
                            <FormControl>
                                <Input type="file" @change="setPresetAction" name="result" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="preset">
                        <FormItem>
                            <FormLabel>
                                Файл пресета
                            </FormLabel>
                            <FormControl>
                                <Input type="file" @change="setPresetFile" name="preset" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                </div>
                <Button class="mt-5">Создать</Button>
            </form>
        </div>
    </div>
</template>