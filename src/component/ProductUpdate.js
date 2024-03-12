import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Link, useParams} from "react-router-dom";
import axios from "axios";

function ProductUpdate() {
    const navigate = useNavigate();

    const { productId } = useParams();
    const [product, setUser] = useState({});

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

    function handleSubmit() {
        axios
            .put(`http://localhost:8080/products/${productId}`, product)
            .then(res => {
                alert(
                     `successfully!!!`
                );
            })
            .catch(err => {
                throw err;
            })
            .finally(navigate("/products")
            );

    }
    function handleChange(event) {
        setUser({
            ...product,
            [event.target.name]: event.target.value
        });
    }
    return(
            <div>

                    <div>
                        <label>Id</label>
                        <input name="id" value={product.id || ""}  />
                    </div>
                    <div>
                        <label>Title</label>
                        <input name="title" value={product.title || ""} onChange={handleChange}  />
                    </div>
                    <div>
                        <label>Price</label>
                        <input name="price" value={product.price || ""} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input name="description" value={product.description || ""} onChange={handleChange} />
                    </div>

                    <button type="button" onClick={handleSubmit}>UPDATE</button>
            </div>
    );
}

export default ProductUpdate;