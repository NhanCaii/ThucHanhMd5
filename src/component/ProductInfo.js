import {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function ProductInfo() {
    const { id } = useParams();

    const { productId } = useParams();
    const [product, setUser] = useState({});

    const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     getProductById()
    // },[id]);
    // const getProductById = async (id) => {
    //     try {
    //         const result=await productService.getProductById(id);
    //         setProduct(result);
    //     }catch (err) {}
    // }


    useEffect(() => {
        if (productId) {
            axios
                .get(`http://localhost:8080/products/${productId}`)
                .then(res => {
                    setUser(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [productId]);

    return(
        <>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>

                        </tr>

                }
                </tbody>
            </table>

            <Link to="/products">
                Quay lại
            </Link>

        </>
    )
}

export default ProductInfo;