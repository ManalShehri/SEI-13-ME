import React, { useEffect, useState } from "react";
import { Container,Card, Col, Row  } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import gameOfThrones from '../../gameOfThrones'

export default function Member() {
      const { name } = useParams();
      const { memberName } = useParams();
      const family = gameOfThrones.find((family) => family.name == name );
      const member = family.people.find(member => member.name == memberName)
      console.log(member)
    
    return (
        <Container>
            <Row className="justify-content-md-center"> 
               <h1 className="mt-5" style={{ textAlign: "center" }}> {memberName} </h1>
            </Row>
            <Row>
               <h3>House: {name}</h3>
            </Row>
            <Row>
                <p>{member.description}</p>
            </Row>
         </Container>
    )
}

