import { Stack, Card, Button } from "react-bootstrap";
import { ProductContext } from "./ProductProvider";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    }, [params]);

    return (
        <>
            {products.map((product) => (
                <Card className="align-self-start w-25" key={product.id}>
                    <Card.Img variant="top" src={product.imgUrl} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle>${product.price}</Card.Subtitle>
                        <br />
                        <Link to={`/products/${product.id}`} key={product.id} className="btn btn-secondary mx-3">View</Link>
                        <Link to={`/products/${product.id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default Search;