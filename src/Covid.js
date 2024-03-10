import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import NaviBarv2 from './Components/NaviBarv2';
import Footer from './Components/Footer'
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import { motion } from "framer-motion"
import StaticCovidData from './Components/StaticCovidData'

const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 30,
 },
}

export function Covid(){

  const regions = [
    {id: 1, hr: "https://server.covid19-modeling.ru/api/csvCovid/nd", eventKey: "novosibirsk" },
    {id: 2, hr: "https://server.covid19-modeling.ru/api/csvCovid/altay", eventKey: "altay"},
    {id: 3, hr: "https://server.covid19-modeling.ru/api/csvCovid/omsk", eventKey: "omsk"},
  ]

  return (
  <>
  <NaviBarv2 />
  <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    <motion.h3 initial="hidden"
       custom={1}
      variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}} className=" my-3 text-secondary">
      <div ><h4 className="mx-5 text-secondary">Coronavirus</h4></div>
      <hr/>
    </motion.h3>
  </Container>
  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="novosibirsk" >

      <Nav variant="pills" defaultActiveKey="/home" >
        <Nav.Item key={1}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               A subject of the Russian Federation. It is part of the Siberian Federal District. The administrative center is the city of Novosibirsk.</div>
               <div>Population: 2 779 375 people</div>
                <div>Area: 177 756 km²</div>
                  <div>Density: 15.64 people/km²</div>
               </Popover.Body>
             </Popover>
           }>
           <motion.div  initial="hidden"
              custom={1}
             variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}}>
        <Button  className="shadow3" size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
      <Nav.Link  eventKey="novosibirsk">Novosibirsk region</Nav.Link>
        </Button>
        </motion.div>
        </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={2}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               A subject of the Russian Federation in southwestern Siberia, part of the Siberian Federal District</div>
               <div>Population: 1 879 548 people</div>
                <div>Area: 141 140 km²</div>
                  <div>Density: 13,32 people/km²</div>
               </Popover.Body>
             </Popover>
           }>
           <motion.div  initial="hidden"
              custom={2}
             variants={variants} whileInView="visible" viewport={{amount: 0.2, once: true}}>
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="omsk">Omsk region</Nav.Link>
          </Button>
            </motion.div>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={3}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               A subject of the Russian Federation. It is part of the Siberian Federal District and is part of the West Siberian Economic Region.</div>
               <div>Population: 2 268 179 people</div>
                <div>Area: 167 996 km²</div>
                  <div>Density: 13,5 people/km²</div>
               </Popover.Body>
             </Popover>
           }>
           <motion.div  initial="hidden"
              custom={3}
             variants={variants} whileInView="visible" viewport={{amount: 0.3, once: true}}>
        <Button  size="sm" variant="outline-info" className="mx-1 shadow3">
          <Nav.Link eventKey="altay">Altai Territory</Nav.Link>
          </Button>
          </motion.div>
          </OverlayTrigger>
        </Nav.Item>
      </Nav>

    <Tab.Content>
      {regions.map((region) =>
          <StaticCovidData key={region.id} region = {region}/>
      )}
      </Tab.Content>
  </Tab.Container>
</Container>


     </>
   )
}
