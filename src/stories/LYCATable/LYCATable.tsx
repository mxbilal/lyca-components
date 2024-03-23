import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import deleteIcon from "../assets/lyca/delete.svg";
import editIcon from "../assets/lyca/edit.svg";

interface Column {
  key: string;
  label: string;
  nested?: boolean;
  clickable?: boolean;
  renderCell?: (value: any, row: any) => React.ReactNode;
}

interface Row {
  [key: string]: any;
}

interface UseTableProps {
  columns: Column[];
  rows: Row[];
  action?: boolean;
  onDelete?: (row: Row) => void;
  onEdit?: (row: Row) => void;
  rowClick?: (row: Row) => void;
}

const UseTable: FC<UseTableProps> = ({
  columns,
  rows,
  action = false,
  onDelete,
  onEdit,
  rowClick,
}) => {
  function getNestedValue(obj: any, path: string) {
    const keys = path.split(".");
    let result = obj;
    for (let key of keys) {
      result = result?.[key];
    }
    return result;
  }

  return (
    <TableContainer>
      <Table style={{ width: "100%" }}>
        <TableHead style={{ backgroundColor: "#562583" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                {column.label}
              </TableCell>
            ))}
            {action && (
              <TableCell style={{ textAlign: "center", color: "white" }}>
                Action
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {columns.map((column) => (
                <TableCell key={column.key} style={{ textAlign: "center" }}>
                  {column.nested && column.clickable && column.renderCell ? (
                    <p
                      style={{
                        color: "#562583",
                        fontWeight: "500",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => rowClick?.(row)}
                    >
                      {column.renderCell(getNestedValue(row, column.key), row)}
                    </p>
                  ) : column.nested && column.renderCell ? (
                    column.renderCell(getNestedValue(row, column.key), row)
                  ) : column.clickable ? (
                    <p
                      style={{
                        color: "#562583",
                        fontWeight: "500",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => rowClick?.(row)}
                    >
                      {column.renderCell
                        ? column.renderCell(row[column.key], row)
                        : row[column.key]}
                    </p>
                  ) : column.renderCell ? (
                    column.renderCell(row[column.key], row)
                  ) : (
                    getNestedValue(row, column.key)
                  )}
                </TableCell>
              ))}
              {action && (
                <TableCell
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    cursor: "pointer",
                    borderBottom: "1px solid #959db2",
                    borderRight: "1px solid #959db2",
                  }}
                >
                  {onDelete && (
                    <img
                      width={20}
                      onClick={() => onDelete(row)}
                      src={deleteIcon}
                      alt="Delete"
                    />
                  )}
                  {onEdit && (
                    <img
                      width={20}
                      onClick={() => onEdit(row)}
                      src={editIcon}
                      alt="Edit"
                    />
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UseTable;
