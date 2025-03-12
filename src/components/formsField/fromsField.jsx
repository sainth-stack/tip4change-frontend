import React from "react";
import { Grid } from "@mui/material";
import { SelectComponent } from "../inputComponents/select";
import { InputTextComponent } from "../inputComponents/text";

const FormFieldGroup = ({ fields, values, handleChange,placeholder }) => (
  <Grid container spacing={2}>
    {fields.map(({ id, type, label, options, sm = 12 }) => (
      <Grid item xs={12} sm={sm} key={id}>
        {type === "select" ? (
          <SelectComponent  id={id} label={label} value={values[id]} onChange={handleChange} options={options} placeholder={placeholder}/>
        ) : (
          <InputTextComponent id={id} type={type} label={label} value={values[id]} onChange={handleChange} placeholder={placeholder}/>
        )}
      </Grid>
    ))}
  </Grid>
);

export default FormFieldGroup;
