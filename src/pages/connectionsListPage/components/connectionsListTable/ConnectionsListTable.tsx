import { Table } from "../../../../components/BaseComponents/Table/Table";
import { columnsDef } from "./ColumnDef";
import { useConnectionsData } from "../../../../Hooks/useConnectionsData";
import { AddConnectionDialog } from "../../../../components/addConnectionDialog/AddConnectionDialog";
import { useAppSelector, useAppDispatch } from "../../../../Hooks/reduxHooks";
import { useEffect } from "react";
import { setLoading } from "../../../../redux/loadingSlice";

export const ConnectionsListTable = () => {
    const { data } = useConnectionsData()
    const isLoading = useAppSelector((state) => state.loading.isLoading);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setLoading(true))
    }, [])
    return (
        <Table
            rows={data}
            columns={columnsDef}
            isLoading={isLoading}
            title="Database connections"
            editDataDialogContent={<AddConnectionDialog />}
            emptyState="No rows to show, please add database connection."
        />
    )
}