import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';

import { NavLink } from "react-router-dom";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Tooltip from '@mui/material/Tooltip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
return (
    <React.Fragment>
    <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
                <Box sx={{ flexGrow: 0 }} />
                <NavLink to='/login'>
                    <IconButton>
                        <HomeTwoToneIcon />
                    </IconButton>
                </NavLink>
                <Box sx={{ flexGrow: 0.25 }} />
                <NavLink to='/search'>
                    <SearchTwoToneIcon />
                </NavLink>
            <NavLink to='/seat'>
                <StyledFab color="" aria-label="add">
                        <Tooltip title="Seat Booking">
                            <AirlineSeatReclineNormalIcon />
                        </Tooltip>
                </StyledFab>
            </NavLink>
        <Box sx={{ flexGrow: 1 }} />
                <NavLink to='/email'>
                    <IconButton>
                        <MailOutlineIcon/>
                </IconButton>
                </NavLink>
                    <Box sx={{ flexGrow: 0.25 }} />
                <NavLink to='/mobile'>
                <MobileFriendlyIcon/>
                </NavLink>
        </Toolbar>
    </AppBar>
    </React.Fragment>
);
}