import { Stack, Card, Button } from "react-bootstrap";
import { ProductContext } from "./ProductProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function ProductList () {

    let navigate = useNavigate()
    let { deleteProduct } = useContext(ProductContext)

    function getAllProducts(products) {
        if (products === null) return

        return products.map((product) =>
            <Card className="align-self-start w-25" key={product.id}>
                <Card.Img variant="top" src={product.imgUrl}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>${product.price}</Card.Subtitle>
                    <br/>
                    <Link to={`/products/${product.id}`} key={product.id} className="btn btn-secondary mx-3">View</Link>
                    <Link to={`/products/${product.id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" onClick={handleDeleteProduct.bind(this,product.id)}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <ProductContext.Consumer>
                    {({products}) => (
                        getAllProducts(products)
                    )}
                </ProductContext.Consumer>
            </Stack>
        </>
    )
}

export default ProductList