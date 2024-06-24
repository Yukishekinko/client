<script setup lang='ts'>
import { Button } from '@/shared/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { Row } from '@tanstack/vue-table';
import { Backstage } from '../entity/backstage.entity';

interface DataTableRowActionsProps {
    row: Row<Backstage>
}

const props = defineProps<DataTableRowActionsProps>()

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
            <DropdownMenuItem>
                Удалить
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
