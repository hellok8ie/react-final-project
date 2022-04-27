import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './53.jpg'
import { Link, Outlet } from 'react-router-dom';
import { Nav, Form, Button, FormControl } from 'react-bootstrap';


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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/products/add">Create</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Home