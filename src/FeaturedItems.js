import React from "react";
import { ProductContext } from "./ProductProvider";
import { Card, CardGroup, Container } from "react-bootstrap";
import './FeaturedItems.css'

function FeaturedItems () {

    function getFeaturedItems(products) {
        if (products === null) return

        return products.filter((product, index) => index < 3).map((product) =>
            <Card border="dark" style={{borderWidth: '5px'}} className="custom-card" key={product.id}>
                <Card.Img variant="top" src={product.imgUrl}/>
                <Card.Body>
                    <Card.Link href={`products/${product.id}`}>{product.name}</Card.Link>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <h1>Welcome to Russell Racing!</h1>
            <h3>Check out our Featured Products</h3>
            <Container className="card-container">
            <CardGroup>
                <ProductContext.Consumer>
                    {({products}) => (
                        getFeaturedItems(products)
                    )}
                </ProductContext.Consumer>
            </CardGroup>
            </Container>
        </>
    )
}

export default FeaturedItems