import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const SortIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 10V2M5.5 10L7 8.5M5.5 10L4 8.5M5.5 2L7 3.5M5.5 2L4 3.5"
      stroke="#A8A8A8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomTable = ({
  columns,
  data,
  sx = {},
  rowsPerPageOptions = [9, 10, 25],
  pagination =true,
  showEditIcon = false, // Ensure this prop is destructured
}) => {
  const { tableSx, headerSx, columnSx, rowSx } = sx;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  // Handle sorting
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Sort data function
  const sortedData = [...data].sort((a, b) => {
    if (orderBy) {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      if (typeof aValue === "number") {
        return order === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        return order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    }
    return 0;
  });

  // Handle page change
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ ...tableSx }}>
          {/* Table Head with Sorting */}
          <TableHead sx={headerSx}>
            <TableRow sx={rowSx}>
              {columns.map((col) => (
                <TableCell
                  key={col.id}
                  sx={{
                    borderRight: "1px solid #ddd",
                    ...columnSx,
                  }}
                >
                  {col.id !== "action" ? (
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? order : "asc"}
                      onClick={() => handleSort(col.id)}
                      IconComponent={SortIcon}
                      sx={{
                        display: "inline-block",
                        width: "130%",
                        height:"34px",
                        padding:'0.5rem'
                      }}
                    >
                      <span style={{ float: "left" }}>{col.label}</span>
                    </TableSortLabel>
                  ) : (
                    "Action"
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.id}
                      // sx={{ borderRight: "1px solid #ddd" }}
                      sx={{
                        padding: ".5rem",
                        borderRight: "1px solid #ddd",
                         fontSize: "12px",
                         height:"38px",

                        textAlign: "left",
                        color: "#212121",
                        fontWeight: "400",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {col.id === "TransactionName" ? (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box
                            sx={{
                              width: 30,
                              height: 30,
                              // boxShadow: "1px 0px 0px gray",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "#d5d3b3",
                              color: "#000",
                              padding: ".2rem",
                              fontWeight: 400,
                              marginLeft: ".3rem",
                              fontSize: 12,
                              borderRadius: "10px",
                            }}
                          >
                            {row[col?.id]
                              .split(" ")
                              .map((text) => text[0])
                              .join(" ")
                              .toUpperCase()}
                            {/* {row[col.id].split(" ").map(item=>item[0]).join(" ").toUpperCase()} */}
                          </Box>
                          <span>{row[col.id]}</span>
                        </Box>
                      ) : col.id === "action" ? (
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                          <span>{row[col.id]}</span>
                          {showEditIcon && ( // Show the pencil icon only if `showEditIcon` is true
                            <IconButton
                              sx={{
                                fontSize: ".2rem",
                                color: "#847f3b",
                                textAlign: "center",
                              }}
                            >
                              <DriveFileRenameOutlineOutlinedIcon
                                sx={{
                                  fontSize: "1rem",
                                }}
                              />
                            </IconButton>
                          )}
                        </Box>
                      ) : (
                        row[col.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

   { pagination&&  <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          sx={{
            outline: "none",
          }}
          onClick={() => handleChangePage(null, 0)}
          disabled={page === 0}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>

        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage=""
          sx={{
            ".MuiTablePagination-selectLabel, .MuiInputBase-root, .MuiTablePagination-actions":
              {
                display: "none",
              },
          }}
        />

        <IconButton
          onClick={() =>
            handleChangePage(
              null,
              Math.max(0, Math.ceil(data.length / rowsPerPage) - 1)
            )
          }
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </Box>}
    </>
  );
};

export default CustomTable;
