import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
    ShoppingCart,
    Package,
    User,
    Search
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
        catch(error) {

            console.log(error);
        }
    };

    // SEARCH
    const handleSearch = (value) => {

        setSearch(value);

        const filtered = products.filter((product) =>

            product.name

                .toLowerCase()

                .includes(

                    value.toLowerCase()
                )
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
        catch(error) {

            console.log(error);

            alert("Failed To Add Cart");
        }
    };

    return (

        <div
            style={{
                background: "#f6f7fb",
                minHeight: "100vh"
            }}
        >

            {/* NAVBAR */}

            <nav
                className="navbar navbar-expand-lg bg-white shadow-sm sticky-top px-4 py-3"
            >

                <div
                    className="container-fluid"
                >

                    <h2
                        className="fw-bold m-0"
                        style={{
                            color: "#111"
                        }}
                    >

                        ShopEase 🛍️

                    </h2>

                    <div
                        className="d-flex gap-3"
                    >

                        <button

                            className="btn btn-light rounded-pill px-4"

                            onClick={() =>

                                navigate("/profile")
                            }
                        >

                            <User
                                size={18}
                                className="me-2"
                            />

                            Profile

                        </button>

                        <button

                            className="btn btn-light rounded-pill px-4"

                            onClick={() =>

                                navigate("/orders")
                            }
                        >

                            <Package
                                size={18}
                                className="me-2"
                            />

                            Orders

                        </button>

                        <button

                            className="btn btn-dark rounded-pill px-4"

                            onClick={() =>

                                navigate("/cart")
                            }
                        >

                            <ShoppingCart
                                size={18}
                                className="me-2"
                            />

                            Cart

                        </button>

                    </div>

                </div>

            </nav>

            {/* HERO */}

            <div
                className="container mt-4"
            >

                <div
                    className="p-5 shadow-lg"
                    style={{
                        borderRadius: "30px",
                        background:

                            "linear-gradient(135deg,#111,#333)",

                        color: "white"
                    }}
                >

                    <h1
                        className="fw-bold"
                        style={{
                            fontSize: "55px"
                        }}
                    >

                        Discover Amazing Products ✨

                    </h1>

                    <p
                        className="mt-3"
                        style={{
                            fontSize: "18px"
                        }}
                    >

                        Shop latest collections with premium quality.

                    </p>

                </div>

            </div>

            {/* SEARCH */}

            <div
                className="container mt-5"
            >

                <div
                    className="position-relative mb-5"
                >

                    <Search
                        size={20}
                        style={{

                            position: "absolute",

                            top: "18px",

                            left: "18px",

                            color: "gray"
                        }}
                    />

                    <input

                        type="text"

                        placeholder="Search products..."

                        className="form-control shadow-sm"

                        style={{

                            borderRadius: "20px",

                            padding:

                                "15px 20px 15px 50px"
                        }}

                        value={search}

                        onChange={(e) =>

                            handleSearch(
                                e.target.value
                            )
                        }
                    />

                </div>

                {/* PRODUCTS */}

                <div className="row">

                    {

                        filteredProducts.map((product) => (

                            <div
                                className="col-md-4 mb-4"
                                key={product.id}
                            >

                                <div
                                    className="card border-0 shadow-lg h-100"
                                    style={{

                                        borderRadius: "25px",

                                        transition:

                                            "0.3s"
                                    }}
                                >

                                    <img

                                        src={product.imageUrl}

                                        alt={product.name}

                                        className="card-img-top"

                                        style={{

                                            height: "280px",

                                            objectFit:

                                                "cover",

                                            borderTopLeftRadius:

                                                "25px",

                                            borderTopRightRadius:

                                                "25px"
                                        }}
                                    />

                                    <div
                                        className="card-body p-4"
                                    >

                                        <h3
                                            className="fw-bold"
                                        >

                                            {product.name}

                                        </h3>

                                        <p
                                            className="text-muted"
                                        >

                                            {
                                                product.description
                                            }

                                        </p>

                                        <h4
                                            className="fw-bold text-success"
                                        >

                                            ₹ {product.price}

                                        </h4>

                                        <small
                                            className="text-muted"
                                        >

                                            Stock:
                                            {" "}
                                            {
                                                product.quantity
                                            }

                                        </small>

                                        <div
                                            className="d-flex gap-2 mt-4"
                                        >

                                            <button

                                                className="btn btn-outline-dark rounded-pill w-50"

                                                onClick={() =>

                                                    navigate(

                                                        `/products/${product.id}`
                                                    )
                                                }
                                            >

                                                View

                                            </button>

                                            <button

                                                className="btn btn-dark rounded-pill w-50"

                                                onClick={() =>

                                                    addToCart(
                                                        product
                                                    )
                                                }
                                            >

                                                Add Cart

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default ProductList;