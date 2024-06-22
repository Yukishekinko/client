<script setup lang='ts'>
import { Table, TableHeader, TableRow, TableHead, TableCell } from '@/shared/ui/table';
import { ColumnDef, FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table';
import { Photoset } from '../entity/photoset.entity';
import TableBody from '@/shared/ui/table/TableBody.vue';

interface DataTableProps {
    columns: ColumnDef<Photoset, any>[]
    data: Photoset[]
}

const props = defineProps<DataTableProps>();

const table = useVueTable(
    {
        get data() { return props.data },
        get columns() { return props.columns },
        getCoreRowModel: getCoreRowModel(),
    }
)
</script>
<template>
    <div class="rounded-md border">
        <Table>
            <TableHeader>
                <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                    <TableHead v-for="header in headerGroup.headers" :key="header.id">
                        <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                            :props="header.getContext()" />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
                    :data-state="row.getIsSelected() && 'selected'">
                    <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>