import { Col, Row, Container, Carousel } from "react-bootstrap"

export default function PicCaroseul() {
    return(
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <h2>Carosuel</h2>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        
    )
}