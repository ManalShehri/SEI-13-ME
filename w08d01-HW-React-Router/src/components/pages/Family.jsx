import React from "react";
import { Container, Row} from 'react-bootstrap'
import { useParams } from "react-router-dom";
import gameOfThrones from '../../gameOfThrones'
import Member from "../cards/Member";

export default function Family() {
    
  const { name } = useParams();
  const family = gameOfThrones.find((family) => family.name == name);

  const people = family.people
  const allPoeple = people.map(person => {
      return <Member member={person} familyName = {family.name} />
  })
  
    return (
        <Container>

            <Row className="justify-content-md-center"> 
                <h1 className="mt-5" style={{ textAlign: "center" }}> {family.name} </h1>
            </Row>

            {allPoeple}
          
        </Container>
    )
}
