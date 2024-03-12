import {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Link} from "react-router-dom";
import "../App.css"


function ProductList(){
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    useEffect(() => {
        getAll()
    },[]);

    const getAll = async () => {
        try {
            const result=await productService.getAllProduct();
            setProducts(result);
        }catch (err) {}
    }

    const changeProduct = (event,key) => {
        let value = event.target.value;

        setProduct( prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const addProduct = () => {
        setProduct(prevState => {
            return [
                ...prevState,
                product
            ]
        })
        setProduct({id:"", title:"",price:"",description:""})
    }

    const handleBtnDelete = async (id) => {
        window.confirm('Are you sure you want to delete this product?');

        await productService.deleteProduct(id);

        // load danh sach lai
        setProducts(products.filter(student => student.id !== id))
    }


    return(
        <>
            <Link to="/products/create">
                Add a new product
            </Link>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className={"product-cell"}> <a href={`/products/${product.id}`}> {product.title} </a></td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td> <a href={`/products/update/${product.id}`}> Update </a></td>
                            <td onClick={()=> handleBtnDelete(product.id)}>Delete</td>

                        </tr>
                    ))
                }
                </tbody>
            </table>

        </>
    )
}

export default ProductList;