import React from "react";
import { Formik, Form } from "formik";
import { Button, Grid ,Typography} from "@mui/material";
import {CheckboxComponent} from '../../components/inputComponents/checkbox'
import {SelectComponent} from '../../components/inputComponents/select'
import {InputTextComponent} from '../../components/inputComponents/text'
import {TextareaComponent} from '../../components/inputComponents/textarea'
import PaymentCard from '../../components/paymentCardComponent/card'
import img1 from '../../assets/svg/fc1icon.png'
import img2 from '../../assets/svg/fc2icon.png'
import img21 from '../../assets/svg/fc2icon2.png'
import img3 from '../../assets/svg/fc3icon.png'
import FormFieldGroup from "../../components/formsField/fromsField";
import DonationSelection from "../../components/inputComponents/radio";
import CustomButton from "../../components/Button/CustomButton";
const formFields = {
  personalDetails: [
    { id: "title", type: "text", label: "Title" },
    { id: "firstName", type: "text", label: "First Name", sm: 4 },
    { id: "lastName", type: "text", label: "Last Name", sm: 4 },
    { id: "phoneNumber", type: "number", label: "Phone Number", sm: 4 },
  ],
  contactDetails: [
    { id: "email", type: "email", label: "E-mail", sm: 4 },
    { id: "theirEmail", type: "email", label: "Their E-mail", sm: 4 },
    { id: "inHonorOf", type: "text", label: "In Honor of", sm: 4 },
  ],
  addressDetails: [
    {
      id: "nationality",
      type: "select",
      label: "Nationality",
      placeholder:"select",
      options: [
        { label: "Select", value: "" },
        { label: "USA", value: "usa" },
        { label: "UK", value: "uk" },
      ],
      sm: 4,
    },
    {
      id: "country",
      type: "select",
      label: "Country",
      placeholder:"select",
      options: [
        { label: "Select", value: "" },
        { label: "India", value: "india" },
        { label: "Germany", value: "germany" },
      ],
      sm: 4,
    },
    { id: "city", type: "text", label: "City", sm: 4 },
  ],
};

const PaymentForm = () => {
  return (
    <Grid>
      <div>
        <h3 style={{height:"40px",paddingLeft:"40px",fontFamily:"Montserrat",fontWeight:800,fontSize:"24px",lineHeight:"28px",letterSpacing:"opx" , marginTop:"80px"}}>payment section</h3>
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
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{padding:"20px"}}>
            <Grid item xs={12}>
              <InputTextComponent
                id="amount"
                type="text"
                label="Enter Your Donation Amount Euros"
                value={values.amount}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid container spacing={2} sx={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "center",   }}>
               <PaymentCard imageSrc={img1} label="Card" selected={true} onClick={() => {}} defaultWhite={true}  />
                <PaymentCard imageSrc={img2} extraImageSrc={img21} selected={true} onClick={() => {}} />
                <PaymentCard imageSrc={img3} label="Card" selected={true} onClick={() => {}} defaultWhite={true} />
            </Grid>


              {/* Donation Selection */}
              <Grid item xs={12}>
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

        {/* Message */}
        <Grid item xs={12}>
          <TextareaComponent
            rows={3}
            id="message"
            type="textarea"
            label="Your message"
            value={values.message}
            onChange={handleChange}
            sx={{ width: "100%" }}
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
            <CustomButton text="submit" sx={{backgroundColor:"#847F3B", width:"154px" , height:"40px" ,margin:"20px" , borderRadius:"20px",textTransform: "capitalize" }} />
          </Grid>
        </Form>
      )}
    </Formik>
    </Grid>
  );
};

export default PaymentForm;
