import React from "react"
import Button from "react-bootstrap/Button"
import { useState, useContext, useEffect } from "react"
import { Card, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import { Link } from "react-router-dom"
import "./ProductDetails.css"

function ProductDetails() {

    let params = useParams()
    let navigate = useNavigate()

    let [ product, setProduct ] = useState()
    let { getProduct, deleteProduct } = useContext(ProductContext)

    useEffect(() => {
        async function fetch() {
            await getProduct(params.productId)
            .then((product) => setProduct(product))
        }
        fetch()
    }, [params.productId, getProduct])

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function productCard () {

        let { id, name, description, size, price, imgUrl } = product

        return (
            <>
            <h1>Product Details</h1>
            <br/>
            <Row xs={3} className="detailsCardHolder">
                <Card style={{textAlign: 'center'}}>
                    <Card.Body>
                        <Card.Img variant="top" src={imgUrl}/>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>{`Size: ${size}`}<br/>{`Price: $${price}`}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                        <Link to={`/products/${id}/edit`} className="btn editLink">Edit</Link>
                        <Button className="dangerButton" onClick={handleDeleteProduct.bind(this,id)}>Delete</Button>
                        <Link to={`/products`} className="btn viewLink">Product List</Link>
                    </Card.Body>
                </Card>
            </Row>
            </>
        )
    }

    if (product === undefined) return
    if (product.id === parseInt(params.productId)) return productCard()
}

export default ProductDetails