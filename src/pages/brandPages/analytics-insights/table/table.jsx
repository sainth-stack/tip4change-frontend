import React from "react";
import { Box, TableCell } from "@mui/material";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { columns, data } from "./tableData";
import CustomTypography from "../../../../components/TypoGraphy/CustomTypography";

const Table1 = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomTypography
        sx={{
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        {"Product Performance Analytics"}
      </CustomTypography>
      <CustomTable
        columns={columns}
        data={data}
        pagination={false}
        showEditIcon={false}
        sx={{
          tableSx: {
            marginTop: "10px",
            height: "100%",
            tableLayout: "fixed", // ✅ Prevents column expansion
            overflow: "hidden",
          },
          headerSx: {
            backgroundColor: "#F5F6FA",
            fontFamily: "Montserrat",
            fontSize: "12px",
            padding: "4px",
          },
          columnSx: {
            textAlign: "center",
            color: "#847F3B",
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "11px",
            padding: "4px",
            overflow: "hidden",
            whiteSpace: "nowrap",
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

export default Table1;
