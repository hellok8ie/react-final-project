import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './53.jpg'
import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


function Home() {

  return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src= {logo}
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Russell Racing
                </Navbar.Brand>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Home