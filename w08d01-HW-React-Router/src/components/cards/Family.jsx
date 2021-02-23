import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SingleFamily({family}) {
    return (
        <Col md="4" sm="4" className="mt-3 ml-3 mr-3">
            <Card  className ="card-movie">
                <Card.Body>
                    <Card.Title><h2>{family.name}</h2></Card.Title>
                    <Card.Text>
                        <h5 className ="mt-2 text-center" > wikiSuffix : {family.wikiSuffix}</h5>
                        <Link to={`/families/${family.name}`}>
                            <button className="btn btn-dark">View More</button>
                        </Link>
                     </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
