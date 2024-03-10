import React, {forwardRef} from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';
import { motion } from "framer-motion"


const TeamItem = forwardRef((props, ref) => {
    return (
        <Col xs= {12} md={6} lg={6} className="my-1" ref={ref}>
               <Card border="light" style={{height: '11rem'}} className="mx-auto shadow1">
                   <Row>
                       <Col md={3}>
                            <Container style={{ width: '10rem' }, {height: '9rem'}} className="my-4 text-center">
                <Image variant="bottom"
               src={props.post.image}
               
               fluid
               style={{ maxWidth: props.post.wid } }

               />
             </Container>                 
                       </Col>
                       <Col md={9}>
                           <Card.Body>
                               <Card.Title>{props.post.name}</Card.Title>
                               <Card.Text>
                          <div>
                            {props.post.institution}
                          </div>
                          <div>
                            {props.post.institution2}
                          </div>
                          <div>
                          {props.post.Phone}
                          </div>
                          <div>
                          {props.post.mail}
                          </div>
                          <div>
                            <a href={props.post.url} className="nav-link d-inline text-blue" target="_blank">
                                Резюме
                            </a>
                          </div>
                        </Card.Text>
                           </Card.Body>
                       </Col>
                   </Row>
                   
                          
               </Card>
                     </Col>)}
  )
const MTeamItem = motion(TeamItem);
export default MTeamItem;
export {TeamItem};
//fluid
//style={{ maxWidth: props.post.wid } }