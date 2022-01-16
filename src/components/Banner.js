import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(()=>({
    banner :{
        backgroundImage : "url(./banner2.jpg)"
    },
    bannercontent :{
        height :450,
        display:"flex",
        flexDirection : "column",
        padding :25,
        justifyContent :"space-around"
    },
    tagline :{
        display:"flex",
        height:"40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
        marginBottom:"15px",
    },
    carousel: {
        height: "30%",
        display: "flex",
        alignItems: "center",
      },
}))

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannercontent}>
                <div className={classes.tagline}>
                    <Typography
                    variant='h2'
                    style={{
                        fontWeight:"bold",
                        marginBottom:15,
                        fontFamily:"Montserrat"
                    }} >
                        Crypto Quest
                    </Typography>
                    <Typography
                    variant='subtitle2'
                    style={{
                        color:"darkgray",
                        textTransform:"capitalize",
                        fontFamily:"Montserrat"
                    }}
                    >
                    Get all the Info regarding your favorite crypto currency.
                    </Typography>

                </div>
                
                
                <Carousel />

            </Container>
            
        </div>
    )
}

export default Banner
