import { Card, Col, Row } from "react-bootstrap";
import { ProductContext } from "./ProductProvider";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


function Search() {
    let params = useParams();

    let { searchProducts } = useContext(ProductContext);

    const [products, setProduct] = useState([]);

    useEffect(() => {
        async function fetch() {
            await searchProducts(params.search).then(response => {
                setProduct(response)
            })
        }
        fetch();
    }, [params, searchProducts]);

    return (
        <>
        <Row xs={1} md={2} className="g-5 rowToRuleThemAll">
            <Col>
                <Row>
                    {products.map((product) => (
                        <Card className="align-self-start w-25" key={product.id}>
                            <Card.Img variant="top" src={product.imgUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Subtitle>${product.price}</Card.Subtitle>
                                <br />
                                <div className="cardNavs">
                                <Link to={`/products/${product.id}`} key={product.id} className="btn btn-secondary viewLink">View</Link>
                                <Link to={`/products/${product.id}/edit`} className="btn btn-primary editLink">Edit</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Col>
        </Row>
        </>
    )
}

export default Search;