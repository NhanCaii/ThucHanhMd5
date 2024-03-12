import axios from "axios";
export  const getAllProduct=async () =>{
    try{
        const res=await axios.get("http://localhost:8080/products");
        return res.data;
    } catch (error){
        return [];
    }
}

export  const addNewProduct=async (product)=>{
    try{
        await axios.post(`http://localhost:8080/products`,product)
    } catch (error){
        console.log(error);
    }
}

export const deleteProduct=async (id) =>{
    try{
        await axios.delete(`http://localhost:8080/products/${id}`);
    } catch (error){
        console.log(error);
    }
}

export const getProductById=async (id) => {
    try{
        const res=await axios.get(`http://localhost:8080/products/${id}`);
        return res.data;

    } catch (error){
        console.log(error);
    }
}