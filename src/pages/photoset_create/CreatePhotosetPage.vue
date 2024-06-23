<script setup lang='ts'>
import { Button } from '@/shared/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/shared/ui/select';
import SelectValue from '@/shared/ui/select/SelectValue.vue';
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
            data.append('files', element, `PHOTOSET_PHOTO_${index++}.jpg`);
        });

        data.append('name', values.name);
        data.append('date', values.date);
        data.append('type', values.type);
        
        await axios.postForm('http://5.35.11.45:3000/photoset', data)
    } catch (error) {
        console.error(error)
    }

})
</script>
<template>
    <header class="container flex justify-between items-center">
        <div class="py-4">
            Новая фотосессия
        </div>
        <RouterLink to="/management">
            <Button variant="link"> Назад </Button>
        </RouterLink>
    </header>
    <div class="border-t">
        <div class="container">
            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="grid grid-cols-3 gap-5">
                    <FormField name="name" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Название фотосессии
                            </FormLabel>
                            <FormControl>
                                <Input type="name" v-bind="componentField" :name="componentField.name" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="date" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Дата фотосессии
                            </FormLabel>
                            <FormControl>
                                <Input type="date" v-bind="componentField" :name="componentField.name" />
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField name="type" v-slot="{ componentField }">
                        <FormItem>
                            <FormLabel>
                                Тип фотосессии
                            </FormLabel>
                            <FormControl>
                                <Select v-bind="componentField">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Тип фотосессии" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="M">
                                                M
                                            </SelectItem>
                                            <SelectItem value="L">
                                                L
                                            </SelectItem>
                                            <SelectItem value="XL">
                                                XL
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