import React from "react";
import { Box } from "@mui/material";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { columns, data } from "./tabledata";

const Table = () => {
  return (
    <Box
      sx={{
        width: "660px",
        height: "295px",
        display: "flex",
        flexDirection: "column",
        gap: "1px",
        border: "1px solid #F4F4F4",
      }}
    >
      <CustomTable
        columns={columns}
        data={data}
        sx={{
          tableSx: {
            width: "660px",
            height: "295px",
            overflowX: "auto",
            borderWidth: "1px",
            border: "1px solid #F4F4F4",
          },
          headerSx: {
            backgroundColor: "#F5F6FA",
            fontFamily: "Montserrat",
            fontSize: "12px",
            padding: "8px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          },
          columnSx: {
            textAlign: "center",
            color: "#847F3B",
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "11px",
            padding: "4px",
            whiteSpace: "normal",
            wordBreak: "break-word",
            minWidth: "150px",
          },
          rowSx: {
            fontWeight: "900",
            height: "40px",
          },
        }}
      />
    </Box>
  );
};

export default Table;
