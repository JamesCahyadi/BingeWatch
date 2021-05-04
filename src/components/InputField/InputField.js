import React, { forwardRef } from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "components/InputField/InputFieldStyles";

const InputField = forwardRef(
  ({ icon, placeholder, hasBackground, type = "text", onChangeFunc = () => {} }, ref) => {
    const classes = useStyles();

    return (
      <TextField
        className={`${classes.formField} ${!hasBackground ? classes.noBackground : ""}`}
        required
        inputRef={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChangeFunc}
        InputProps={
          icon && {
            startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
          }
        }
      />
    );
  },
);

export default InputField;
