import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography,createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer"
    }
}))


const Header = () => {
    const classes = useStyles();
    const history = useNavigate();
    const{currency , setCurrency} = CryptoState();
    console.log(currency);



    const darkTheme = createTheme({
        palette: {
            primary:{
                    main:"#fff"
            },
          type: 'dark',
        },
      });


    return (
        <ThemeProvider theme={darkTheme}>
       <AppBar color='transparent' position='static'>
           <Container maxWidth="lg">
               <Toolbar>
                   <Typography
                    onClick={()=>history("/", { replace: true })}
                     className={classes.title}
                     variant='h6'>
                       CryptoScan
                   </Typography>
                   <Select variant='outlined' style={{
                       width:100,
                       height:40,
                       marginRight:15,
                   }}
                   value={currency}
                   onChange={(e) => setCurrency(e.target.value)}
                   >
                       <MenuItem value={"INR"}>INR</MenuItem>
                       <MenuItem value={"USD"}>USD</MenuItem>
                       <MenuItem value={"EUR"}>EUR</MenuItem>
                       <MenuItem value={"GBP"}>GBP</MenuItem>
                       <MenuItem value={"JPY"}>JPY</MenuItem>
                   </Select>
               </Toolbar>
           </Container>

       </AppBar>
       </ThemeProvider>
    )
}

export default Header
