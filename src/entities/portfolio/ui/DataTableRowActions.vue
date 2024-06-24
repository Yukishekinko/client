<script setup lang='ts'>
import api from '@/shared/api/axios';
import { Button } from '@/shared/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { Row } from '@tanstack/vue-table';
import { Portfolio } from '../entity/portfolio.entity';

interface DataTableRowActionsProps {
    row: Row<Portfolio>
}

const props = defineProps<DataTableRowActionsProps>()
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button>
                Открыть меню
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="api.delete(`/portfolio/${props.row.original.id}`)">
                Удалить
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
