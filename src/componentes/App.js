import React from "react";
import './App.css';
import Header from "./Header";
import MainContent from './components/MainContent';
import Footer from "./Footer";

function App(){
    return(
        <div className="App">
            <Header></Header>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    )
}

export default App;