<script setup lang='ts'>
import { Row } from '@tanstack/vue-table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'vue-router';
import { Portfolio } from '../entity/portfolio.entity';
import api from '@/shared/api/axios';

interface DataTableRowActionsProps {
    row: Row<Portfolio>
}

const props = defineProps<DataTableRowActionsProps>()
const router = useRouter()


</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button>
                Открыть меню
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="router.push(`/photoset/${props.row.original.id}/edit`)">
                Редактировать
            </DropdownMenuItem>
            <DropdownMenuItem @click="api.delete(`/portfolio/${props.row.original.id}`)">
                Удалить
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
