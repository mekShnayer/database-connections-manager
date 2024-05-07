import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { DataGrid, GridColDef, GridRowsProp, GridSlots } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import './table.css'
import { CustomNoRowsOverlay } from './components/CustomNoRowsOverlay';

interface CustomTableProps {
    height?: number | string;
    width?: number | string;
    containerStyle?: React.CSSProperties;
    rows: GridRowsProp;
    columns: GridColDef[];
    title?: string;
    editDataDialogContent?: ReactJSXElement;
    isLoading: boolean;
    emptyState?: string;
}
export const Table: React.FC<CustomTableProps> = (props) => {
    const {
        height = "90%",
        width = "100%",
        containerStyle,
        rows,
        columns,
        title,
        editDataDialogContent,
        isLoading,
        emptyState = "No rows to show",
    } = props

    return (
        <div style={{ height, width, ...containerStyle }}>
            <div className='table-header-container'>
                {title && <h2>{title}</h2>}
                {editDataDialogContent && editDataDialogContent}
            </div>
            <DataGrid
                loading={isLoading}
                slots={{
                    noRowsOverlay: () => CustomNoRowsOverlay(emptyState),
                    loadingOverlay: LinearProgress as GridSlots['loadingOverlay']
                }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10, 15]}
            />
        </div >
    )
}

////////

