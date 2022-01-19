import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { Navigate, useNavigate,Link } from "react-router-dom";
import { CoinList } from "../config/api";

import { CryptoState } from "../CryptoContext";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  createTheme,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
  CardContent,
} from "@material-ui/core";
import { numberWithCommas } from "./Carousel";
import { Pagination } from "@material-ui/lab";
import { findByLabelText } from "@testing-library/react";

const CoinsCard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();
  const Navigate = useNavigate();

  const useStyles = makeStyles(() => ({
    card: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "&.MuipaginationItem-root": {
        color: "gold",
      },
    },
    cardstyle: {
      display: "flex",
      flexDirection:"row",
      justifyContent:"center",
      float:"left",
      backgroundColor: "rgba(39, 39, 38, 0.555)",
      width:"30%",
      height:"40%",
      margin:"15px",
      padding:"9px",
    },
    cardArea:{
        fontFamily: "Montserrat",
        fontWeight:"bold",
        fontSize:"22px",
    },
  }));
  const classes = useStyles();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container >
        <Typography
          variant="h4"
          style={{
            margin: 10,
            fontFamily: "Montserrat",
            textAlign: "center" ,
          }}
        >
          {/* Cryptocurrency Prices by Market Cap */}
        </Typography>
        <br/>
        <TextField
          label="Search For a Crypto Currency "
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        
          {handleSearch()
            .slice((page - 1) * 12, (page - 1) * 12 + 12)
            .map((card) => {
              const profit = card.price_change_percentage_24h > 0;

              return (
                <Link to={`/coins/${card.id}`}>
                <Card className={classes.cardstyle}>
                <CardActionArea className={classes.cardArea} >
                  <div style={{
                    width:"200px",
                    height:"200px",
                    marginLeft:"0 auto",

                  }}>
                  <CardMedia
                    image={card?.image}
                    component="img"
                    // alt={card.name}
                    // height="50%"
                    title={card.name}
                    style={{ marginBottom: 10 }}
                  />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontSize: "20px",
                        }}
                      >
                        {card.symbol}
                      </span>{" "}
                      {card.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Price :{symbol}
                      {numberWithCommas(card.current_price.toFixed(2))}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" style={{color: profit > 0 ? "rgb(14,203,129)" : "red",}}>
                      24h Change : {profit && "+"}
                      {card.price_change_percentage_24h.toFixed(2)}%
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Market Cap : {symbol}{" "}
                      {numberWithCommas(
                        card.market_cap.toString().slice(0, -6)
                      )}
                      M
                    </Typography>
                  </CardContent>

                 <Button size="small" color="primary">
                    Track Tread
                  </Button>
                </CardActionArea>
        </Card>
        </Link>
              );
            })}
        <Pagination
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
           
          }}
          className={{ ul: classes.pagination }}
          count={(handleSearch()?.length / 10).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default CoinsCard;
