import router from "@/app/providers/router";
import api from "@/shared/api/axios";
import { toast } from "@/shared/ui/toast";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUserStore = defineStore('userStore', () => {

    const isAuthenticated = ref(false);
    const isStaff = ref(false);
    const token = ref('');

    const setIsAuthenticated = (bool: boolean) => {
        isAuthenticated.value = bool;
    }

    const setIsStaff = (bool: boolean) => {
        isStaff.value = bool;
    }

    const signUp = async (login: string, password: string) => {
        try {
            const data = await api.post('http://localhost:3000/auth/signup', { "login": login, "password": password })

            localStorage.setItem('access', data.data.access_token);
            isAuthenticated.value = true;

            token.value = data.data.access_token;
            isStaff.value = data.data.user.isStaff;

            toast({ title: 'Аккаунт создан' });
            router.push('/');
        } catch (error: any) {
            toast({ title: "Произошла ошибка:", description: error.response.data.message, variant: 'destructive' })
        }

    }

    const signIn = async (login: string, password: string) => {
        try {
            const data = await api.post('http://localhost:3000/auth/signIn', { "login": login, "password": password })

            localStorage.setItem('access', data.data.access_token);

            isAuthenticated.value = true;
            isStaff.value = data.data.user.isStaff;

            token.value = data.data.access_token;
            router.push('/');
        } catch (error: any) {
            toast({ title: "Произошла ошибка.", description: error.response.data.message, variant: 'destructive' })
        }
    }

    const signOut = async () => {
        await api.post('http://localhost:3000/auth/signout');

        localStorage.removeItem('access');
        isAuthenticated.value = false;
    }

    watch(isAuthenticated, (newValue: boolean) => {
        if (!newValue) {
            isStaff.value = false;
        }
    })

    return { isAuthenticated, isStaff, setIsAuthenticated, setIsStaff, signIn, signUp, signOut };
})