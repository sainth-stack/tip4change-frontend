// import React,{useState} from "react";
// import { Box } from "@mui/material";
// import CustomInput from '../../components/input/input'


// const PaymentSection = () => {
//   const [message,setMessage]=useState('');
//   const handleSubmit =(e)=>{
//     e.preventDefault()
//     console.log(message)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <Box sx={{ display: "flex", gap: 2 }}>
//         <CustomInput label="UserName" type="number" name="userName" />
//         <CustomInput label="UserName" type="number" name="userName" />
//         <CustomInput label="UserName" type="number" name="userName"  />
//       </Box>
    
//         <CustomInput
//           label="Description"
//           type="textarea"
//           name="description"
//           sx={{ height: "250px", maxWidth: "450px" }} // ✅ Fix: Ensure `sx` is inside {}
//           vlaue={message}
//           onChange={(e)=>setMessage(e.target.value)}
//         />
//         <button>submit</button>
    
//     </form>
//   );
// };

// export default PaymentSection;
