import React from "react";
import {Container, Card, Row } from 'react-bootstrap';
import MTeamItem from './Components/TeamItem'
//import Main_picture from './Components/Main_picture'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Khrushchev from "./images/team/Khrushchev.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Question from "./images/conf/Question.png"

const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 100,
 },
}

const itemAnimation = {
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

export function MainTeam() {

  const posts = [
    {id: 1, wid: '9rem', name: 'Krivorotko Olga Igorevna', url:'https://icmmg.nsc.ru/ru/content/employees/krivorotko-olga-igorevna', institution: 'Doctor of Physical and Mathematical Sciences, Head of the Research Department of the MMC IM SB RAS',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Zyatkov Nikolai Yurievich', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000390', institution: 'Candidate of Technical Sciences, Head of the Innovation Department of the MMC IM SB RAS',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Kabanikhin Sergey Igorevich', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=0000000635', institution: 'Director of the MMC IM SB RAS',Phone:' 📞 +7(383) 329-7526',mail:'📩 kabanikh@math.nsc.ru', image: Kabanikhin},
    {id: 4, wid: '9rem', name: 'Petrakova Victoria Sergeevna ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000543', institution: 'Candidate of Physical and Mathematical Sciences, Researcher IM SB RAS',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Khrushchev Sergey Evgenievich ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000048', institution: 'Candidate of Physical and Mathematical Sciences, Senior Researcher IM SB RAS',Phone:' 📞 +7(383) 329-7659',mail:'📩 s.e.khrushchev@math.nsc.ru', image: Question},
    {id: 6, wid: '8rem', name: 'Zvonareva Tatyana Alexandrovna ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000514', institution: 'engineer IM SB RAS',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 7, wid: '9rem', name: 'Neverov Andrey Vyacheslavovich ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000504', institution: 'graduate student IM SB RAS',institution2:'Research Engineer IM SB RAS',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Nesterova Angelina Vitalievna ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000529', institution: 'graduate student IM SB RAS',institution2:'Research Engineer IM SB RAS',Phone:'',mail:'📩 angelka.nesterova.99@mail.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Strizhak Sergey Vladimirovich ', url:'https://istina.cemi-ras.ru/workers/291766341/', institution: 'Candidate of Technical Sciences, Senior Researcher of the ISP RAS',institution2:'',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 10, wid: '8rem', name: 'Koshelev Konstantin Borisovich ', url:'https://istina.msu.ru/workers/263119504/', institution: 'Candidate of Physical and Mathematical Sciences, Senior Researcher at ISP RAN',Phone:'',mail:'📩 koshelev@iwep.ru', image: Question},
    {id: 11, wid: '8rem', name: 'Schaefer Evgeny Igorevich ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000389', institution: 'Candidate of Physical and Mathematical Sciences, Researcher IM SB RAS',Phone:' 📞 +7(383) 329-7659',mail:'📩 e.i.shefer@math.nsc.ru', image: Question},
    {id: 12, wid: '8rem', name: 'Glukhov Anton Iosifovich ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000509', institution: 'Intern researcher IM SB RAS',institution2:'',Phone:'',mail:'📩 a.glukhov@g.nsu.ru', image: Question},
    {id: 13, wid: '8rem', name: 'Surnin Pavel Sergeevich ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000516', institution: 'graduate student of NSU',institution2:'Intern researcher IM SB RAS',Phone:'',mail:'📩 p.surnin@g.nsu.ru', image: Question}
  ]
  return(
      //<Main_picture>
      //<Main_picture />
        <Container >
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">The composition of the laboratory</h4> </Card.Title>
          </Card>
          </motion.div>
          <motion.div  initial="hidden"
            animate="visible">
          <Container>
            <Row xs={1} md={2} className="justify-content-md-center" >
              {posts.map((post, index) =>
                  <MTeamItem  initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {post.id} post = {post}/>
              )}
            </Row>
          </Container>
          </motion.div>
      </Container>
    //</>
)
}
