import React from "react";
import { ProductContext } from "./ProductProvider";
import { Card, Stack } from "react-bootstrap";

function FeaturedItems () {

    function getFeaturedItems(products) {
        if (products === null) return

        return products.filter((product, index) => index < 3).map((product) =>
            <Card className="align-self-start w-25" key={product.id}>
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
            <Stack direction="horizontal" gap={3}>
                <ProductContext.Consumer>
                    {({products}) => (
                        getFeaturedItems(products)
                    )}
                </ProductContext.Consumer>
            </Stack>
        </>
    )
}

export default FeaturedItems