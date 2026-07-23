import { useParams } from "react-router-dom";
import { products } from "../data/products";


function ProductDetail() {

    const { id } = useParams();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price} TL</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetail;