import { useState } from "react"
import { Col, Row, Container } from "react-bootstrap"

export default function About() {
   const [imgUrl, setImgUrl] = useState('')
    return(
        <main>
           <Container className="bg-danger">
            <Row>
                <Col>
                    <h2>Jasmine Henry</h2>
                </Col>
            </Row>
           </Container>
        </main>
    )
}