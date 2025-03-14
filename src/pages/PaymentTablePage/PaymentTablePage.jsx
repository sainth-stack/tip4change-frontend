import React from 'react'
import NavigationHeader from '../../layout/NavigationHeader'
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import CustomTable from '../../components/CustomTable/CustomTable';
import { columns,data } from './data';

const PaymentTablePage = () => {
      const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    
  return (
    <>
      <Box
       
      >
        <NavigationHeader path={pathnames} PageText="Payment Section" />
              <Box mt={2} sx={{
                  
              }}>
          <CustomTable
            columns={columns}
            data={data}
            sx={{
              headerSx: { backgroundColor: "#f5f6fa" },
              columnSx: {
                textAlign: "center",
                padding: "10px",
                color: "#847f3b",
              },
              rowSx: {},
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default PaymentTablePage