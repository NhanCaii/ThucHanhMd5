import {useNavigate} from "react-router-dom";
import * as productService from "../service/productService";
import {Field, Form, Formik} from "formik";


function ProductCreate(){
    const navigate = useNavigate();
    const initValue = {
        id:"", title:"", price:"", description:""
    }

    const addNewProduct = async (value) => {
        console.log(value);
        // value.id = +value.id;
        await productService.addNewProduct(value);
        navigate("/products")

    }

    return(
        <>
            <Formik initialValues={initValue} onSubmit={addNewProduct}>
                <Form>
                    ID: <Field name="id" type="text"/>

                    Title: <Field name="title"/>

                    Price: <Field name="price"/>

                    Description: <Field name="description"/>

                    <button type="submit">ADD</button>
                </Form>
            </Formik>
        </>
    )
}

export default ProductCreate;