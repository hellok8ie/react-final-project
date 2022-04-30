import { Card, Col, Row } from "react-bootstrap";
import { ProductContext } from "./ProductProvider";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './Search.css'


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
        <h1>Search Results</h1>
        <br/>
        <Row xs={3} className="searchCardHolder">

                    {products.map((product) => (
                        <Card className="col-3 searchCard" key={product.id}>
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
        <br/>
        </>
    )
}

export default Search;