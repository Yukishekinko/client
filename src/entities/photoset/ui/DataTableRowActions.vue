<script setup lang='ts'>
import { Row } from '@tanstack/vue-table';
import { Photoset } from '../entity/photoset.entity';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'vue-router';
import { deletePhotoset } from '../api/delete';

interface DataTableRowActionsProps {
    row: Row<Photoset>
}

const props = defineProps<DataTableRowActionsProps>()
const router = useRouter()

console.log(props.row.original)
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
            <DropdownMenuItem @click="router.push(`/photoset/${props.row.original.id}`)">
                Просмотреть
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Button variant="ghost" @click="deletePhotoset(props.row.original.id)">
                    Удалить
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
