import { h } from "vue";
import { PhotosetType } from "../entity/photoset.entity";
import type { ColumnDef } from '@tanstack/vue-table';
import DataTableRowActions from "./DataTableRowActions.vue";

export const columns: ColumnDef<PhotosetType>[] = [
    {
        accessorKey: 'id',
        header: ({ column }) => h('div', { class: "border-r" }, '#'),
        cell: ({ row }) => h('div', {}, row.getValue('id')),
    },
    {
        accessorKey: 'name',
        header: ({ column }) => h('div', {}, 'Название'),
        cell: ({ row }) => h('div', {}, row.getValue('name'))
    },
    {
        accessorKey: 'date',
        header: ({ column }) => h('div', {}, "Дата"),
        cell: ({ row }) => h('div', {}, String(row.getValue('date')).slice(0,10))
    },
    {
        accessorKey: 'type',
        header: ({ column }) => h('div', {}, "Тип"),
        cell: ({ row }) => h('div', {}, row.getValue('type'))
    },
    {
        id: 'actions',
        cell: ({ row }) => h(DataTableRowActions, { row }),
    }
]