import React from "react";
import { columns, data } from "../tabledata";
import { Box, Grid2 } from "@mui/material";
import CustomTable from "../../../../../components/CustomTable/CustomTable";

export const Table33 = () => {
  //     const location = useLocation();
  //   const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <>
    <Grid2 sx={{background:'white'}}>
    <CustomTable
            columns={columns}
            data={data}
            pagination={false}
        sx={{
              headerSx: {
                backgroundColor: "#F5F6FA",
                fontFamily: "Montserrat",
                fontSize: "12px",
              },
              columnSx: {
                textAlign: "center",
                padding: "10px",
                color: "#847F3B",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "12px",
              },
              rowSx: {
                fontWeight: "900",
              },
            }}
          />
    </Grid2>
    </>
  );
};

