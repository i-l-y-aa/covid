import React, {useEffect, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import './App.css';
import {MainTeam} from './MainTeam'
import {Main_publications_more_detailed} from './Components/Main_publications_more_detailed'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {Covid} from './Covid';
import {Main} from './Main';
import {Modeling} from './Modeling';
import {Data} from './Data';
import axios from "axios"


import {Helmet} from "react-helmet";

import "./styles.css";


function App() {

return (<>
    <>
    <div className="bg-light" >
      <Helmet>
         <meta charSet="utf-8" />
         <title></title>
         <link rel="canonical" href="http://covid19-modeling.ru" />
       </Helmet>
          <Routes>
            <Route exact path="/statistics" element={<Covid />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/modeling" element={<Modeling />} />
            <Route exact path="/data" element={<Data />} />
            <Route exact path="/mainTeam" element={<MainTeam />} />
            <Route exact path="/main_publications_more_detailed" element={<Main_publications_more_detailed />} />
          </Routes>
      <Footer />
      </div>
    </>
  </>)
}

export default App;
