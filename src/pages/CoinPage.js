import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import {  makeStyles, Typography } from '@material-ui/core'
import CoinInfo from '../components/CoinInfo';
// import ReactHtmlParser form 'react-html-parser'

const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();
    const {currency , symbol} = CryptoState;

    const fetchCoin = async ()=>{
        const {data} = await axios.get(SingleCoin(id));

        setCoin(data);
    }
    console.log(coin);
    useEffect(()=>{
        fetchCoin();
    },[])

    const useStyles = makeStyles((theme)=>({
        container:{
            display:"flex",
            [theme.breakpoints.down("md")]:{
                flexDirection:"colum",
                alignItems:"center"
            }
        },
        sidebar:{
            width:"30%",
            [theme.breakpoints.down("md")]:{
                width:"100%",
            },
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginTop:25,
            borderRight:"2px solid grey"
        },
        heading:{
            fontWeight:"bold",
            marginBottom:20,
            fontFamily:"Montserrat",
        }
       
    }))
    const classes = useStyles();




    return (
        <div className={classes.container}>
            <div className={classes.sidebar}>
                <img 
                    src={coin?.image.large}
                    alt={coin?.name}
                    height="200"
                    style={{marginBottom:20}}
                />
                <Typography
                    variant='h3' className={classes.heading}
                >
                    {coin?.name}

                </Typography>
                <Typography
                    variant='subtitle1' className={classes.description}
                >
                  {/* {ReactHtmlParser(coin?.description.en.split(". ")[0])}. */}
                </Typography>


            </div>
            <CoinInfo  coin={coin} />

        </div>
    )
}

export default CoinPage
