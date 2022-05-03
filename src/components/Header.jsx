import { MenuItem, TextField } from "@mui/material";
import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment className="header">
      <div className="title">worder !</div>
      <div className="boxes">
        <TextField
          className="box--items"
          id="standard-basic"
          label="search a word"
          variant="standard"
        />
        <TextField
          className="box--items"
          id="standard-select-currency"
          select
          label="Select"
          //   value={currency}
          //   onChange={handleChange}
          helperText="Please select your currency"
          variant="standard"
        >
          <MenuItem>english</MenuItem>
        </TextField>
      </div>
    </Fragment>
  );
};

export default Header;
