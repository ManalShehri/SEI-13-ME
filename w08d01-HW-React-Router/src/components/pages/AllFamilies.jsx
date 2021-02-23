import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Family from '../cards/Family'
import gameOfThrones from '../../gameOfThrones'

export default function AllFamilies() {

    const AllFamilies = gameOfThrones.map(family => {
        return <Family family={family}/>
    })

    return (
        <Container >
            <Row className="justify-content-md-center"> 
            <h1 className="mt-5" style={{ textAlign: "center" }}>All familes ({gameOfThrones.length})</h1>
            </Row>
            <Row className="justify-content-md-center">
                {AllFamilies}
            </Row>
        </Container>
    )
}

