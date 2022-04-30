import { Card, Button, Row } from "react-bootstrap";
import { ProductContext } from "./ProductProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import './ProductList.css'

function ProductList () {

    let navigate = useNavigate()
    let { deleteProduct } = useContext(ProductContext)

    function getAllProducts(products) {
        if (products === null) return

        return products.map((product) =>
            <>
            <Card className='col-3 productCard' key={product.id}>
                <Card.Img variant="top" src={product.imgUrl}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>{`Sizes: ${product.size}`}<br/>${product.price}</Card.Subtitle>
                    <br/>
                    <div className="cardNavs">
                    <Link to={`/products/${product.id}`} key={product.id} className="btn viewLink">View</Link>
                    <Link to={`/products/${product.id}/edit`} className="btn editLink">Edit</Link>
                    <Button className="dangerButton" onClick={handleDeleteProduct.bind(this,product.id)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
            </>
        )
    }

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    return (
        <>
            <br/>
            <h1 className="storeTitle">🏁 Fan Store 🏁</h1>
            <Row xs={3} className="g-3">
                
                    <ProductContext.Consumer>
                        {({products}) => (
                            getAllProducts(products)
                        )}
                    </ProductContext.Consumer>
              
            </Row>

        </>
    )
}

export default ProductList