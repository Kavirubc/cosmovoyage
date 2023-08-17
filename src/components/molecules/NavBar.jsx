import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./NavBar.css"



const Header = styled(AppBar)`
    background: #ef6790
`;

const Tabs = styled(NavLink)`
    font-size: 20px ;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to='/email'>EmailVerification</Tabs>
                <Tabs to='/mobile'>MobileVerification</Tabs>
                <Tabs to='/seat'>SeatBooking</Tabs>
                <Tabs to='/verify'>VerificationPage</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;