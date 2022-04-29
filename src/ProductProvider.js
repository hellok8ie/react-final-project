import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            await refreshProducts()
        }
        getProducts()
    }, []);

    // const [order, setOrder] = useState({
    //     type: "",
    //     arg1: 0,
    //     arg2: 0
    // })

    function refreshProducts () {
        return axios.get("http://localhost:3001/products").then(response => {setProducts(response.data)})
    }

    function getProduct(id) {
        return axios.get(`http://localhost:3001/products/${id}`).then(response => new Promise ((resolve) => resolve(response.data))
        )
    }

    function addProduct(product) {
        return axios.post("http://localhost:3001/products", product).then(response => {refreshProducts()
            return new Promise((resolve) => resolve(response.data))})
    }

    function updateProduct(product) {
        return axios.put(`http://localhost:3001/products/${product.id}`, product).then(response => {refreshProducts()
            return new Promise((resolve) => resolve(response.data))})
    }

    function deleteProduct(id) {
        return axios.delete(`http://localhost:3001/products/${id}`).then(refreshProducts)
    }

    function searchProducts(searchQuery) {
        return axios.get(`http://localhost:3001/products?q=${searchQuery}`).then(response => new Promise ((resolve) => resolve(response.data))
        )
    }

    function sortProducts(order) {
        return axios.get(`http://localhost:3001/products?_sort=${order.arg1}&_order=${order.arg2}`).then(refreshProducts)
    }

    return (
        <ProductContext.Provider value={{products, getProduct, addProduct, updateProduct, deleteProduct, searchProducts, sortProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}