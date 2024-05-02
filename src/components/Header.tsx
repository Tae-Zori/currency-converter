import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';



function Header() {

  return (  
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <CurrencyExchangeIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "primary.contrastText"}} />   
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              fontSize:"1.8rem",
              letterSpacing: '.3rem',
              color: 'primary.contrastText',
              textDecoration: 'none',
            }}
          >
            Конвертер валют 
          </Typography>

          <CurrencyExchangeIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: "primary.contrastText"}} />
          <Typography
            variant="h5"
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.contrastText',
              textDecoration: 'none',
            }}
          >
            Конвертер валют
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;