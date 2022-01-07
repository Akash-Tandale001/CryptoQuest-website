import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import {  makeStyles } from "@material-ui/core";

function App() {


  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor:"black",
      color :"White",
      minHeight:"100vh"
    },
  }));
  const classes = useStyles();


  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>       
  );
}

export default App;
