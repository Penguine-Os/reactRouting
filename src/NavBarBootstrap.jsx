
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBarBootstrap = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <LinkContainer to={'/home'}>
                    <Navbar.Brand href="/">Capitals</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to={"/game"}>
                            <Nav.Link>Play the game</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/highscores"}>
                            <Nav.Link>Highscores</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBarBootstrap;
