import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Icon } from "@mui/material";
import {Search} from "@mui/icons-material";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            navigate()
        }
    }
return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px #e3e3e3',
        boxShadow:'none',
        pl: 2,
        mr:{ sm: 5}
    }}>
        <input className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
            <IconButton type="submit" sx={{p:"10px", color:'red'}}>
                <Search/>
            </IconButton>
    </Paper>
)
}

export default SearchBar
