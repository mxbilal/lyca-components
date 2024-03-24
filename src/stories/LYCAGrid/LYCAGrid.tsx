import * as React from "react";
import { DataGrid, GridPagination, GridColDef } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import notFound from "../assets/lyca/not-found.svg";
// @ts-ignore
import theme from "../../theme";

interface ListingGridProps {
  columns: GridColDef[];
  gridData: any;
  pageChange: (model: any) => void;
  columnSort: (model: any) => void;
  loader?: boolean;
}

const MPagination = ({ page, onPageChange, className }: any) => {
  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      className={className}
      count={page}
      onChange={(event, newPage) => onPageChange(event, newPage - 1)}
    />
  );
};

const CustomNoRowsOverlay = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <img src={notFound} alt="Not Found" />
      <p>No Data Found</p>
    </div>
  );
};

const newPagination = (props: any) => {
  return <GridPagination ActionsComponent={MPagination} {...props} />;
};

const ListingGrid: React.FC<ListingGridProps> = ({
  columns,
  gridData,
  pageChange,
  columnSort,
  loader = false,
}) => {
  return (
    <DataGrid
      rows={gridData?.data ?? []}
      getRowId={(row) => row?.id ?? row?.rowIndex}
      columns={columns}
      rowSelection={false}
      loading={loader}
      pagination
      slots={{
        pagination: newPagination,
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20,
          },
        },
      }}
      paginationMode="server"
      sortingMode="server"
      onPaginationModelChange={pageChange}
      onSortModelChange={columnSort}
      pageSizeOptions={[10, 20, 30]}
      rowCount={gridData?.totalRecords || 0}
      localeText={{ noRowsLabel: "No Data Found" }}
      sx={{
        height: 500,
        width: "100%",
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: theme.palette.secondary.main,
          color: "white",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          // whiteSpace: "normal !important",
          // lineHeight: 1.3,
          // textAlign: "center",
        },
        "& .MuiDataGrid-sortIcon": {
          color: "white",
        },
        "& .css-ptiqhd-MuiSvgIcon-root": {
          color: "white",
        },
        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden !important",
        },
        "& .MuiDataGrid-cell": {
          whiteSpace: "normal !important",
          wordBreak: "break-all",
        },
        cursor: "pointer",
      }}
    />
  );
};

export default ListingGrid;
