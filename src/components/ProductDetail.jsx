import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";


function ProductDetail() {

    const { id } = useParams();
    const products = useSelector((state) => state.product.products);
    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return <h1>Ürün bulunamadı...</h1>;
    }
     
    const dispatch = useDispatch();


    return (
        <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-md">
            <div className="grid gap-8 md:grid-cols-2">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-full object-contain"
                />

                <div>
                    <p className="text-sm text-gray-500">
                        {product.category}
                    </p>

                    <h1 className="mt-2 text-2xl font-bold">
                        {product.title}
                    </h1>

                    <p className="mt-4 text-gray-600">
                        {product.description}
                    </p>

                    <p className="mt-5 text-2xl font-bold">
                        {product.price} $
                    </p>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-5 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
                    >
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;