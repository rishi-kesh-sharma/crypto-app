import React from "react"
//css file
import "./App.css"

//css from antd
import "antd/dist/antd.css";

import { Route } from "react-router";
import { Routes } from "react-router";
import { Link } from "react-router-dom";
import { Typography,Layout,Space } from "antd";
import {NavBar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails} from "./components";
function App() {
  return (
    <div className="app">
      <div className="navbar">
         <NavBar/>
      </div>
      <div className="main">
         <Layout>
           <div className="routes">
             <Routes>
               <Route exact path="/" element={<Homepage/>}/>
               <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
               <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
               <Route exact path="/news" element={<News/>}/>
               <Route exact path="/exchanges" element={<Exchanges/>}/>
             </Routes>
           </div>
         </Layout>
         <div className="footer">
            <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
              Cryptoverse<br/>
              all Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/Exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
      </div>
     
    </div>
  );
}

export default App;
