<script setup lang='ts'>
import { useUserStore } from '@/entities/user/store/user-store';
import { Button } from '@/shared/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Separator } from '@/shared/ui/separator';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const userStore = useUserStore();


const validationSchema = toTypedSchema(z.object({
    login: z.string().min(4),
    password: z.string().min(4),
}

))

const { handleSubmit } = useForm({
    validationSchema: validationSchema
});

const onSubmit = handleSubmit((values: any) => {
    userStore.signIn(values.login, values.password)
})
</script>
<template>
    <div class="grid grid-cols-2 items-center justify-center h-screen">
        <div>
            <img src="/10.png" alt="">
        </div>
        <div class="p-8">
            <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
                <div class="absolute top-4 right-12">
                    <RouterLink to="/">
                        <Button variant="link">
                            На главную
                        </Button>
                    </RouterLink>
                </div>
                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="text-3xl font-semibold">Вход в аккаунт</h1>
                    <p class="text-lg text-muted-foreground">Введите ваш логин и пароль для входа в аккаунт</p>
                </div>
                <form @submit="onSubmit">
                    <div class="grid gap-3">
                        <div class="grid gap-1">
                            <FormField name="login" v-slot="{ componentField }">
                                <FormItem>
                                    <FormLabel>
                                        Логин
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ваш логин"
                                            class="border-none bg-[#F0F0EF] rounded-sm py-6" v-bind="componentField" />
                                    </FormControl>
                                </FormItem>
                            </FormField>
                        </div>
                        <div class="grid gap-1">
                            <FormField name="password" v-slot="{ componentField }">
                                <FormItem>
                                    <FormLabel>
                                        Пароль
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Ваш пароль"
                                            class="border-none bg-[#F0F0EF] rounded-sm py-6" v-bind="componentField" />
                                    </FormControl>
                                </FormItem>
                            </FormField>
                        </div>
                        <Button class="rounded-2xl py-5 mt-2">Войти</Button>
                    </div>
                </form>
                <Separator />
                <p class="text-sm text-muted-foreground text-center">
                    Ещё нет аккаунта? <RouterLink class="text-foreground font-medium" to="/authentication/signup">
                        Создать </RouterLink>
                </p>
            </div>
        </div>
    </div>

</template>
