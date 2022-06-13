import { MenuItem, TextField } from "@mui/material";
import React from "react";
import languages from "../data/languageList";

const Header = (props) => {
  return (
    <div className="header">
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
          {languages.map((lang)=>(
            <MenuItem key={lang.label} value={lang.label}>{lang.value}</MenuItem>
          ))}
        </TextField>
      </div>
     
    </div>
  );
};

export default Header;
