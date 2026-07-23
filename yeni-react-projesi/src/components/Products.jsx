import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Link } from "react-router-dom";

function Products() {

    const navigate = useNavigate();

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>

                    <h2>{product.name}</h2>
                    <p>{product.price} TL</p>

                    <Link to={`/urun/${product.id}`}>
                        Detaya Git
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default Products;