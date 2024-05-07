import { NameCell } from "./cells/NameCell";
import { ActionCell } from "./cells/ActionCell";
import { GridColDef } from "@mui/x-data-grid";

export const columnsDef: GridColDef[] = [
    {
        field: 'name', headerName: 'Name', flex: 2, renderCell: NameCell,
        description: 'click on database name to open more details',
    },
    {
        field: 'username',
        headerName: 'Username',
        flex: 2
    },
    {
        field: 'type',
        headerName: 'Database Type',
        flex: 2,

        type: 'singleSelect',
        valueOptions: ["Snowflake", "Trino", "MySQL"]
    },
    {
        field: 'actions',
        headerName: 'Actions',
        renderCell: ActionCell,
        minWidth: 120,
        sortable: false,
        resizable: false,
        filterable: false,
        headerAlign: "center"
    },


]

