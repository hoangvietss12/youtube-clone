import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from '../utils/constant';
import SearchBar from "./SearchBar";

function Navbar() {
    return ( 
        <Stack  
            direction='row'
            alignItems='center' px={3} py={2}
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={45}/>
                <Typography variant='h4' color='#fff' fontWeight='bold' ml='8px'>
                    Vtube
                </Typography>
            </Link>
            <SearchBar />
        </Stack>
     );
}

export default Navbar;