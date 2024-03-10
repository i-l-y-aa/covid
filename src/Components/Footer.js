import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image, Stack} from 'react-bootstrap';
import MMA from "./../images/MMA.png"
import RNF6 from "./../images/RNF6.png"
import MCA2 from "./../images/MCA2.png"
import RFFI from "./../images/RFFI.png"
import RF2 from "./../images/RF2.png"
import mmf6 from "./../images/mmf6.png"
import ".././styles.css";

function Footer() {
  return (

    <footer
  className="py-4 my-6 bg-dark navbar-fixed-bottom row-fluid">
  <Container>
      <Row style={{
              width: "100%" }}>
      <Col xs={12} md={12} lg={6}>
      <div className="mx-5">
      <h3 className="text-white text-white mx-auto">IM SB RAS</h3>
      <div className="text-white text-white mx-auto">630090, Novosibirsk, Akademika Koptyuga Avenue, 4 </div>
        <div className="text-white text-white mx-auto">contacts: info@covid19-modeling.ru, +7 (383) 329-7610</div>

      <hr className="text-white mx-auto"/>
      <small align="left" className="text-center text-white mx-auto">© 2024 COVID-19 in the Novosibirsk region</small></div></Col>
      <Col  align="right" xs={12} md={12} lg={6}>
      <Stack direction="horizontal" gap={3} style={{"marginLeft": "33%" }}>

        <div align="center">
        <Image variant="bottom" className = ""
        src={RF2}
        fluid
        style={{ width: '2.7rem' }, {height: '2.7rem'}}
        />
        </div>

        <div align="center">
        <Image variant="bottom" className = "my-1"
        src={RNF6}
        fluid
        style={{ width: '2.5rem' }, {height: '2.5rem'}}
        />
        </div>        
        </Stack>
           </Col>
    </Row>
    </Container>
    </footer>

  )
}
export default Footer;
