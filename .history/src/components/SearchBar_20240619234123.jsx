import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import {SearchIcon} from "@mui/icons-material";

const SearchBar = () => {
return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
        borderRadius: 20,
        border: '1px #e3e3e3',
        boxShadow:'none',
        pl: 2,
        mr:{ sm: 5}
    }}>
        <input className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}/>

    </Paper>
)
}

export default SearchBar
