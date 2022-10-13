import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <Container className={'mt-4'}>
            <Row>
                <Col>
                    <div>
                        Practice your capitals and become a pro at geography!
                    </div>
                </Col>
                <Col>
                    <div>
                        Want to know more about how other people are better than you? click here
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={'/game'} className={'d-grid gap-2'}>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </Link>
                   </Col>
                <Col>
                    <Link to={'/game'} className={'d-grid gap-2'}>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
