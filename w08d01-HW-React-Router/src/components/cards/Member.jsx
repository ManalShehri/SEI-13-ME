import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Member({member, familyName}) {
    return (
        <Row className="justify-content-md-center">
                <Card  className ="card-movie">
                    <Card.Body>
                        <Card.Title><h2>{member.name}</h2></Card.Title>
                        <Card.Text>
                            {/* <h5 className ="mt-2 text-center" > {member.description}</h5> */}
                            <Link to={`/families/${familyName}/members/${member.name}`}>
                                <button className='btn btn-primary'>View member</button>
                            </Link>
                            </Card.Text>
                    </Card.Body>
                </Card>
            <br/>
        </Row>
    )
}


