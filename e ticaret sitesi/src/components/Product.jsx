import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

function Products() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const { products, loading, error } = useSelector(
        (state) => state.product
    );

    if (loading) {
        return <h1>Ürünler yükleniyor...</h1>;
    }

    if (error) {
        return <h1>Hata: {error}</h1>;
    }

    return (
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col rounded-lg border bg-white p-4 shadow-sm"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-48 w-full object-contain"
                    />

                    <h2 className="mt-3 line-clamp-2 font-semibold">
                        {product.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {product.category}
                    </p>

                    <p className="mt-2 text-lg font-bold">
                        {product.price} $
                    </p>

                    <button onClick={() => navigate(`/products/${product.id}`)} className="mt-auto rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Detayları Gör
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;