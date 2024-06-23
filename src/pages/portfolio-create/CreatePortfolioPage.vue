<script setup lang='ts'>
import { Button } from '@/shared/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import axios from 'axios';
import { useForm } from 'vee-validate';

function selectFile(event: any) {
    setFieldValue('files', event.target.files)
}

const { handleSubmit, setFieldValue } = useForm()

const onSubmit = handleSubmit(async (values: any) => {
    try {
        const data = new FormData();

        let index = 0;
        [...values.files].forEach((element: any) => {
            data.append('files', element, `PORTFOLIO_PHOTO_${index++}.jpg`);
        });

        data.append('name', values.name);
        data.append('published', values.published);

        await axios.postForm('http://localhost:3000/portfolio', data)
    } catch (error) {
        console.error(error)
    }

})
</script>
<template>
    <header class="container flex justify-between items-center">
        <div class="py-4">
            Новое портфолио
        </div>
        <RouterLink to="/management">
            <Button variant="link"> Назад </Button>
        </RouterLink>
    </header>
    <div class="border-t">
        <div class="container">
            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="grid grid-cols-2 gap-5">
                    <FormField name="name" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Название портфолио
                            </FormLabel>
                            <FormControl>
                                <Input type="name" v-bind="componentField" :name="componentField.name" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="published" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Опубликовано
                            </FormLabel>
                            <FormControl>
                                <Select v-bind="componentField">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Опубликовано" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="true">
                                                Да
                                            </SelectItem>
                                            <SelectItem value="false">
                                                Нет
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    </FormField>
                </div>
                <FormField name="files">
                    <FormItem>
                        <FormLabel>
                            Фотографии
                        </FormLabel>
                        <FormControl>
                            <Input type="file" multiple @change="selectFile" name="lols" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <Button>Создать</Button>
            </form>
        </div>
    </div>
</template>