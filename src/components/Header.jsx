import { MenuItem, TextField } from "@mui/material";
import React, { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment className="header">
      <div className="title">{props.word ? props.word : "Worder !"}</div>
      <div className="boxes">
        <TextField
          className="box--items"
          id="standard-basic"
          label="search a word"
          variant="standard"
          onChange={(e) => props.handleChange(e.target.value)}
        />
        <TextField
          className="box--items"
          id="standard-select-currency"
          select
          label="Select"
          value={props.language}
          onChange={(e) => props.handleSelect(e.target.value)}
          helperText="Please select your currency"
          variant="standard"
        >
          <MenuItem value="en">english</MenuItem>
          <MenuItem value="fr">france</MenuItem>
        </TextField>
      </div>
    </Fragment>
  );
};

export default Header;
