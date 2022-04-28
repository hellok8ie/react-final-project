import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './53.jpg'
import { Outlet, useNavigate } from 'react-router-dom';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useContext, useState } from "react"
import { ProductContext } from "./ProductProvider"


function Home() {

    let navigate = useNavigate()

    function handleChange (event) {
       if (event.target.value === "") return (
           navigate(`/products`)
       )
       navigate(`/${event.target.value}/searchfilter`)
    }

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
                    onChange={handleChange}
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