import React from "react"
import Button from "react-bootstrap/Button"
import { useState, useContext, useEffect } from "react"
import { Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import { Link } from "react-router-dom"

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
            <Card className="align-self-start w-25" style={{textAlign: 'center'}}>
                <Card.Body>
                    <Card.Img variant="top" src={imgUrl}/>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{`Price: $${price}`}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" onClick={handleDeleteProduct.bind(this,id)}>Delete</Button>
                    <Link to={`/products`} className="btn btn-secondary mx-3">Product List</Link>
                </Card.Body>
            </Card>
        )
    }

    if (product === undefined) return
    if (product.id === parseInt(params.productId)) return productCard()
}

export default ProductDetails