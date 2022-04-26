import React from "react";
import { ProductContext } from "./ProductProvider";
import { Card, Stack } from "react-bootstrap";

function FeaturedItems (product) {

    function getFeaturedItems(products) {
        if (products === null) return

        return products.filter((product, index) => index < 3).map((product) =>
            <Card className="align-self-start w-25" key={product.id}>
                <Card.Img variant="top" src={product.img}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
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