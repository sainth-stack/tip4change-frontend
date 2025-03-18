import React from "react";
import { Formik, Form } from "formik";
import { Button, Grid ,Typography,Box, Grid2} from "@mui/material";
import {CheckboxComponent} from '../../../components/inputComponents/checkbox'
import {InputTextComponent} from '../../../components/inputComponents/text'
import {TextareaComponent} from '../../../components/inputComponents/textarea'
import PaymentCard from '../../../components/paymentCardComponent/card'
import img1 from '../../../assets/svg/fc1icon.png'
import img2 from '../../../assets/svg/fc2icon.png'
import img21 from '../../../assets/svg/fc2icon2.png'
import img3 from '../../../assets/svg/fc3icon.png'
import DonationSelection from "../../../components/inputComponents/radio";
import CustomButton from "../../../components/Button/CustomButton";
import { useLocation } from 'react-router-dom';
import {formFields} from './data'

const PaymentForm = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
   <Grid2 sx={{width:'100%',display:"flex",justifyContent:'center',padding:'30px'}}>
     <Grid sx={{maxWidth:'1300px'}}> 
      <div>
        <h3 style={{height:"40px",paddingLeft:"20px",fontFamily:"Montserrat !important",fontWeight:500,fontSize:"24px",lineHeight:"28px",letterSpacing:"opx" , marginTop:"40px",paddingTop:"30px"}}>Payment Section</h3>
      </div>
    <Formik
      initialValues={{
        amount: "",
        title: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        theirEmail: "",
        inHonorOf: "",
        nationality: "",
        country: "",
        city: "",
        address: "",
        message: "",
        agreeDonation: false,
        agreeTerms: false,
      }}
      onSubmit={(values) => {
        console.log("Form values:", values);
      }}
    >
      {({ values, handleChange, handleSubmit ,field}) => (
        <Form onSubmit={handleSubmit} className="">
          <Grid spacing={2} sx={{padding:"20px"}}>
            <Grid item xs={12}>
              <InputTextComponent

                id="amount"
                type="text"
                // label="Enter Your Donation Amount Euros"
                value={values.amount}
                placeholder="Enter your Donation amount Euros"
                onChange={handleChange}
                required
                sx={{
                  borderRadius: "20px",
                  height: "44px",
                  padding: "10px,14px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    height: "44px",
                    "& fieldset": {
                      borderColor: "#847F3B", // Default border color (black)
                    },
                    "&:hover fieldset": {
                      borderColor: "#847F3B", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#847F3B", // Focus border color
                    },
                  }
                }}

              />
            </Grid>
            <Grid sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems:'start',gap:'24px' ,marginBottom:'20px' }}>
               <PaymentCard imageSrc={img1} label="Card" selected={true} onClick={() => {}} defaultWhite={true}  />
                <PaymentCard imageSrc={img2} extraImageSrc={img21} selected={true} onClick={() => {}} />
                <PaymentCard imageSrc={img3} label="Card" selected={true} onClick={() => {}} defaultWhite={true} />
            </Grid>


              {/* Donation Selection */}
              <Grid item xs={12} mb={2}>
              <DonationSelection sx={{paddingTop:"10px",}}  />
            </Grid>


            <Grid item xs={12}>
          <FormFieldGroup fields={formFields.personalDetails} values={values} handleChange={handleChange} />
        </Grid>

        {/* Contact Details */}
        <Grid item xs={12}>
          <FormFieldGroup fields={formFields.contactDetails} values={values} handleChange={handleChange} />
        </Grid>

        {/* Address Details */}
        <Grid item xs={12}>
          <FormFieldGroup fields={formFields.addressDetails} values={values} handleChange={handleChange}/>
        </Grid>

        <Grid item xs={12}>
              <InputTextComponent
                id="Address"
                type="text"
                label="Address"
                // label="Enter Your Donation Amount Euros"
                value={values.amount}
                onChange={handleChange}
                required
                
              />
            </Grid>

        {/* Message */}
        <Grid item xs={12}>
  <TextareaComponent
    rows={3}
    id="message"
    label="Your message"
    value={values.message}
    onChange={handleChange}
    sx={{ height: "153px", width: "100%" }} // Custom height for this usage
  />
</Grid>


        {/* Agreements */}
<Grid item xs={12}>
  <CheckboxComponent
    id="agreeDonation"
    label={
      <Typography sx={{ fontFamily: "Montserrat", color: "#000000" }}>
        I Agree To Donate Amount Specified Recurring One Time.
      </Typography>
    }
    checked={values.agreeDonation}
    onChange={handleChange}
  />
</Grid>
<Grid item xs={12}>
  <CheckboxComponent
    id="agreeTerms"
    label={
      <Typography style={{ fontFamily: "Montserrat", color: "#000000" }}>
        I Agree To All{" "}
        <Typography
          component="span"
          style={{ color: "#847F3B", textDecoration: "underline", cursor: "pointer" }}
        >
          Terms And Conditions.
        </Typography>
      </Typography>
    }
    checked={values.agreeTerms}
    onChange={handleChange}
  />
</Grid>



          </Grid>
          <Grid>
            <CustomButton text="Donate Now" sx={{backgroundColor:"#847F3B", width:"157px" , height:"40px" ,margin:"10px" , borderRadius:"20px",textTransform: "capitalize", }} />
          </Grid>
        </Form>
      )}
    </Formik>
    </Grid>
   </Grid2>
  );
};

export default PaymentForm;
