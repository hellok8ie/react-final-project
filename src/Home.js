import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './53.jpg'
import { Outlet, useNavigate } from 'react-router-dom';
import { Nav, Form, FormControl } from 'react-bootstrap';
import './Home.css';


function Home() {

    let navigate = useNavigate()

    function handleChange (event) {
        event.preventDefault();

        if (event.target.value === "") return (
           navigate(`/products`));

       navigate(`/${event.target.value}`)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
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
                <Nav className="justify-content-left">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/products/add">Create</Nav.Link>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleChange}
                        />
                    </Form>
                </Nav>
                </Container>
            </Navbar>
            <Outlet/>
            <div className='footer-link'>2022 © <a className="helloKT" href='https://github.com/hellok8ie'>hellok8ie</a> </div>
        </>
    )
}

export default Home