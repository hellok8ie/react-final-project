import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { useState, useEffect } from "react";

function NewProduct () {
    let params = useParams()
    let navigate = useNavigate()

    let [ product, setProduct ] = useState({
        id: params.productId,
        name: "",
        description: "",
        size: "",
        price: "",
        imgUrl: "",
    })

    let { getProduct, addProduct } = useContext(ProductContext)
    let { id, name, description, size, price, imgUrl } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
          await getProduct(id)
            .then((product) => setProduct(product))
        }
        fetch()
      }, [getProduct, id])

    function newProduct () {
        if (id === undefined) {
            return addProduct(product)
        }
    }

    function handleChange (event) {
        setProduct((preValue) => {
            return {...preValue, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit (event) {
        event.preventDefault()
        newProduct().then((product) => navigate(`/products/${product.id}`))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Sizes:</Form.Label>
                <Form.Control type="string" name="size" value={size} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Price:</Form.Label>
                <Form.Control type="number" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Image URL:</Form.Label>
                <Form.Control type="url" name="imgUrl" value={imgUrl} onChange={handleChange} />
            </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      )
}

export default NewProduct