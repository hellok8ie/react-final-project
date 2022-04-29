import { Card, Button, Row, Col } from "react-bootstrap";
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
            <Card className='col-4' key={product.id}>
                <Card.Img variant="top" src={product.imgUrl}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>${product.price}</Card.Subtitle>
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
            {/* <br/>
            <DropdownButton id="dropdown-item-button" title="Sort By:">
                <Dropdown.Item as="button">Price</Dropdown.Item>
                <Dropdown.Item as="button">Name</Dropdown.Item>
            </DropdownButton> */}
            <br/>
            <h1>🏁 Fan Store 🏁</h1>
            <Row xs={1} md={2} className="g-5 rowToRuleThemAll">
                <Col>
                    <Row>
                    <ProductContext.Consumer>
                        {({products}) => (
                            getAllProducts(products)
                        )}
                    </ProductContext.Consumer>
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default ProductList