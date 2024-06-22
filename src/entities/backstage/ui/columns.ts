import { h } from "vue";
import type { ColumnDef } from '@tanstack/vue-table';
import DataTableRowActions from "./DataTableRowActions.vue";
import { Backstage } from "../entity/backstage.entity";

export const backstage_columns: ColumnDef<Backstage>[] = [
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
        accessorKey: 'published',
        header: ({ column }) => h('div', {}, "Опубликовано"),
        cell: ({ row }) => h('div', {}, row.getValue('published'))
    },
    {
        id: 'actions',
        cell: ({ row }) => h(DataTableRowActions, { row }),
    }
]