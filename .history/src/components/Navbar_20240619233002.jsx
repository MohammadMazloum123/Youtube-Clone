import { Stack } from "@mui/material";
import {logo} from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () =>(
      <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{position:"sticky", top: 0, background:'#000', justifyContent:'space-between'}}>

        <Link to="/" style={}>
        </Link>

      </Stack>

);


export default Navbar
