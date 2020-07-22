import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, useScrollTrigger } from '@material-ui/core';


const styles = makeStyles({
  root: {
    backgroundImage: 'linear-gradient(90deg, #b71c1c 0%, #d50000 75%)',
    '&.MuiPaper-elevation4': {
      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
    },
  },
  brandTitle: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textAlign: 'center',
  },
});



export const Navbar = ({ toggleTheme, toggleThemeIcon }) => {
  const classes = styles();

  return (
    <>     
        <AppBar className={classes.root}>
            <div className={classes.brandTitle}>
              COVID-19
            </div>
                          
        </AppBar> 
    </>
  );
}

export default Navbar;