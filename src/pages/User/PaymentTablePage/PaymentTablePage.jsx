import React from 'react'
import NavigationHeader from '../../../layout/NavigationHeader'
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import CustomTable from '../../../components/CustomTable/CustomTable';
import { columns,data } from './data';

const PaymentTablePage = () => {
      const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    
  return (
    <>
      <Box>
        <NavigationHeader path={pathnames} PageText="Payment Section" />
        <Box mt={2} sx={{}}>
          <CustomTable
            columns={columns}
            data={data}
            showEditIcon={true}
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

export default PaymentTablePage