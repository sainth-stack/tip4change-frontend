import React from "react";
import { columns,data } from './section3Data';
import { Box } from '@mui/material';
import CustomTable from "../../../../components/CustomTable/CustomTable";


const Section3 = () => {
//     const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);
  
return (
  <>
    <Box height='490px'>
      {/* <NavigationHeader path={pathnames} PageText="Payment Section" /> */}
      <Box pb={5}>
        <CustomTable
          columns={columns}
          data={data}
          pagination={false}
          sx={{
            // tableSx: { height: "35rem" },
            headerSx: { backgroundColor: "#F5F6FA",fontFamily:'Montserrat',fontSize:'12px' },
            columnSx: {
              textAlign: "center",
              padding: "10px",
              color: "#847F3B",
              fontFamily: "Montserrat",
              fontWeight:"500",
              fontSize:'12px'
            },
            rowSx: {
              fontWeight: "900"
            },
          }}
        />
      </Box>
    </Box>
  </>
);
}

export default Section3


