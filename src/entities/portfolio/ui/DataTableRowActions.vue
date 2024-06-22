<script setup lang='ts'>
import { Row } from '@tanstack/vue-table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'vue-router';
import { Portfolio } from '../entity/portfolio.entity';

interface DataTableRowActionsProps {
    row: Row<Portfolio>
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
            <DropdownMenuItem>
                Удалить
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
