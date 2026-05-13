import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
    ShoppingCart,
    Package
} from "lucide-react";

function ProductList() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    // FETCH PRODUCTS
    const fetchProducts = async () => {

        try {

            const response = await axios.get(

                "http://localhost:8080/api/products"
            );

            setProducts(response.data);

            setFilteredProducts(response.data);

        }
        catch (error) {

            console.log(error);
        }
    };

    // SEARCH PRODUCTS
    const handleSearch = (value) => {

        setSearch(value);

        const filtered = products.filter((product) =>

            product.name

                .toLowerCase()

                .includes(value.toLowerCase())
        );

        setFilteredProducts(filtered);
    };

    // ADD TO CART
    const addToCart = async (product) => {

        try {

            await axios.post(

                "http://localhost:8080/api/cart",

                {
                    productName: product.name,

                    price: product.price,

                    quantity: 1,

                    imageUrl: product.imageUrl
                }
            );

            alert("Added To Cart 🛒");

        }
        catch (error) {

            console.log(error);
        }
    };

    return (

        <div
            className="min-vh-100 py-5"
            style={{
                background: "#f5f5f5"
            }}
        >

            <div className="container">

                {/* TOP SECTION */}

                <div
                    className="d-flex justify-content-between align-items-center mb-5"
                >

                    <h1
                        className="fw-bold"
                        style={{
                            fontSize: "50px"
                        }}
                    >

                        Trending Products 🔥

                    </h1>

                    <div
                        className="d-flex gap-3"
                    >

                        {/* CART BUTTON */}

                        <button

                            className="btn btn-dark px-4 py-2 rounded-pill"

                            onClick={() => navigate("/cart")}
                        >

                            <ShoppingCart
                                size={20}
                                className="me-2"
                            />

                            Cart

                        </button>

                        {/* ORDERS BUTTON */}

                        <button

                            className="btn btn-success px-4 py-2 rounded-pill"

                            onClick={() => navigate("/orders")}
                        >

                            <Package
                                size={20}
                                className="me-2"
                            />

                            Orders

                        </button>

                    </div>

                </div>

                {/* SEARCH BAR */}

                <div className="row mb-5">

                    <div className="col-md-6 mx-auto">

                        <input

                            type="text"

                            placeholder="Search Products..."

                            className="form-control p-3 shadow-sm"

                            style={{
                                borderRadius: "15px"
                            }}

                            value={search}

                            onChange={(e) =>

                                handleSearch(e.target.value)
                            }
                        />

                    </div>

                </div>

                {/* PRODUCTS */}

                <div className="row">

                    {

                        filteredProducts.length === 0

                            ?

                            (

                                <h2
                                    className="text-center"
                                >

                                    No Products Found 😢

                                </h2>
                            )

                            :

                            (

                                filteredProducts.map((product) => (

                                    <div
                                        className="col-md-4 mb-4"
                                        key={product.id}
                                    >

                                        <div
                                            className="card border-0 shadow-lg h-100"
                                            style={{
                                                borderRadius: "25px"
                                            }}
                                        >

                                            {/* IMAGE */}

                                            <img

                                                src={product.imageUrl}

                                                alt={product.name}

                                                className="card-img-top"

                                                style={{

                                                    height: "300px",

                                                    objectFit: "cover",

                                                    borderTopLeftRadius: "25px",

                                                    borderTopRightRadius: "25px"
                                                }}
                                            />

                                            {/* BODY */}

                                            <div className="card-body p-4">

                                                <h2
                                                    className="fw-bold"
                                                >

                                                    {product.name}

                                                </h2>

                                                <p
                                                    className="text-muted"
                                                >

                                                    {product.description}

                                                </p>

                                                <h3
                                                    className="text-success fw-bold"
                                                >

                                                    ₹ {product.price}

                                                </h3>

                                                <p>

                                                    Stock:
                                                    {" "}
                                                    {product.quantity}

                                                </p>

                                                {/* BUTTONS */}

                                                <div
                                                    className="d-flex gap-2 mt-4"
                                                >

                                                    {/* VIEW DETAILS */}

                                                    <button

                                                        className="btn btn-outline-dark w-50 rounded-pill"

                                                        onClick={() =>

                                                            navigate(

                                                                `/products/${product.id}`
                                                            )
                                                        }
                                                    >

                                                        View

                                                    </button>

                                                    {/* ADD TO CART */}

                                                    <button

                                                        className="btn btn-dark w-50 rounded-pill"

                                                        onClick={() =>

                                                            addToCart(product)
                                                        }
                                                    >

                                                        Add To Cart

                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            )
                    }

                </div>

            </div>

        </div>
    );
}

export default ProductList;