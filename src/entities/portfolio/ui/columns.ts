import { h } from "vue";
import type { ColumnDef } from '@tanstack/vue-table';
import DataTableRowActions from "./DataTableRowActions.vue";
import { Portfolio } from "../entity/portfolio.entity";

export const portfolio_columns: ColumnDef<Portfolio>[] = [
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
        accessorKey: 'published',
        header: ({ column }) => h('div', {}, "Опубликовано"),
        cell: ({ row }) => h('div', {}, row.getValue('published'))
    },
    {
        id: 'actions',
        cell: ({ row }) => h(DataTableRowActions, { row }),
    }
]