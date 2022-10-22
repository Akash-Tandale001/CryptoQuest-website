import { makeStyles } from '@material-ui/core'
import React from 'react'

const SelectButton = ({children,selcted,onClick}) => {
    const useStyles = makeStyles({
        selectbutton:{
            border:"1pr solid gold",
            borderRadius:5,
            padding:10,
            paddingLeft:20,
            paddingRight:20,
            fontFamily:"Montserrat",
            cursor:"pointer",
            backgroundColor:selcted ? "gold" :"",
            color: selcted ? "black" :"",
            fontWeight:selcted ? 700:500,
            "&:hover":{
                backgroundColor:"gold",
                color:"black",
            },
            width:"22%",
        }
    });

    const classes = useStyles();


  return (
    <span className={classes.selectbutton}
    onClick={onClick}
    >
      {children}
    </span>
  )
}

export default SelectButton
