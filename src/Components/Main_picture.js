import React from "react";
import {Container, Card, Image, Col, Row, Button} from 'react-bootstrap';
import NaviBar from './NaviBar';
import { motion } from "framer-motion"

const variants = {
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    x: -100,
 },
}

const Main_picture = () => {
    return (
      <Card  border="light"  style={{
        backgroundImage: `url("https://ega.ee/wp-content/uploads/2020/08/corona_1.jpg")`,
        height:'680px',

      }}>
      <NaviBar />
      <div align="left" className="my-auto mx-auto">
        <b>
        <motion.div initial="hidden"
          animate="visible" custom={1}
          variants={variants}>
          <h1 className="text-white mp_info"><b>Laboratory of the inverse and incorrect</b></h1>
          <h1 className="text-white mp_info"><b>tasks and machine learning</b></h1>
          <h1 className="text-white mp_info"><b>in biological, socio-economic</b></h1>
          <h1 className="text-white mp_info"><b>and environmental processes</b></h1>
          </motion.div>
          </b>

        <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/modeling" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Go to modeling</b></div></Button>
        </motion.div>
      </div>
      <Container>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="support text-white" align="center"><i><b><h6>The project is supported by the Ministry of Science and Higher Education of the Russian Federation (project FWNF-2024-0002) and the Russian Science Foundation (project № 23-71-10068)</h6></b></i></motion.div>
      </Container>
    </Card>
    )
}

export default Main_picture;
