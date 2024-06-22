<script setup lang='ts'>
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader, SheetFooter, SheetDescription, SheetClose } from '@/shared/ui/sheet'
import { Button } from '@/shared/ui/button';
import { useUserStore } from '@/entities/user/store/user-store';

const userStore = useUserStore();
</script>
<template>
    <Sheet>
        <SheetTrigger>
            <Button class="rounded-[20px] px-[18px] py-3">
                Меню
            </Button>
        </SheetTrigger>
        <SheetContent side="top">
            <SheetHeader>
                <SheetTitle>
                    Меню
                </SheetTitle>
            </SheetHeader>
            <div class="flex flex-col text-4xl font-semibold gap-3 mt-8">
                <RouterLink to="/">На главную</RouterLink>
                <template v-if="!userStore.isAuthenticated">
                    <RouterLink to="authentication/signup">Регистрация</RouterLink>
                    <RouterLink to="authentication/signin">Авторизация</RouterLink>
                </template>
                <template v-else>
                    <template v-if="userStore.isStaff">
                        <RouterLink to="/management">Управление</RouterLink>
                    </template>
                    <RouterLink to="#" @click="userStore.signOut()">Выйти из аккаунта</RouterLink>
                </template>
            </div>
            <SheetFooter>
                <SheetClose as-child>
                    <Button>
                        Закрыть
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>