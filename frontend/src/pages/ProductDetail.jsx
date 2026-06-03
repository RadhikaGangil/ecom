import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
    ShoppingCart,
    User,
    Package,
    Heart,
    Star
} from "lucide-react";

function ProductDetail() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] =
        useState(null);

    const fetchProduct = useCallback(async () => {

        try {

            const response =
                await axios.get(

                    `http://localhost:8080/api/products/${id}`
                );

            setProduct(response.data);

        }

        catch (error) {

            console.log(error);
        }

    }, [id]);

    useEffect(() => {

        fetchProduct();

    }, [fetchProduct]);

    const addToCart = async () => {

        try {

            await axios.post(

                "http://localhost:8080/api/cart",

                {

                    productName:
                        product.name,

                    price:
                        product.price,

                    quantity:1,

                    imageUrl:
                        product.imageUrl
                }
            );

            alert(
                "Added To Cart 🛒"
            );

        }

        catch(error) {

            console.log(error);

            alert(
                "Unable To Add Product To Cart"
            );
        }
    };

    if(!product) {

        return(

            <div

                className="d-flex justify-content-center align-items-center"

                style={{

                    height:"100vh",

                    background:"#fffafc"
                }}
            >

                <h3
                    style={{
                        color:"#ec4899"
                    }}
                >

                    Loading MiniNest Magic ✨

                </h3>

            </div>
        );
    }

    return(

        <div

            style={{

                background:"#fffafc",

                minHeight:"100vh"
            }}
        >

            {/* NAVBAR */}

            <nav

                className="navbar navbar-expand-lg sticky-top px-4 py-3"

                style={{

                    background:

                        "rgba(255,255,255,0.95)",

                    backdropFilter:

                        "blur(14px)",

                    boxShadow:

                        "0 10px 30px rgba(0,0,0,0.05)"
                }}
            >

                <div className="container-fluid">

                    {/* LOGO */}

                    <div

                        className="d-flex align-items-center"

                        style={{
                            cursor:"pointer"
                        }}

                        onClick={()=>
                            navigate("/home")
                        }
                    >

                        <div

                            className="d-flex justify-content-center align-items-center me-3"

                            style={{

                                width:"55px",

                                height:"55px",

                                borderRadius:"20px",

                                background:

                                    "linear-gradient(135deg,#ff8fab,#f9a8d4)",

                                color:"white"
                            }}
                        >

                            <Heart size={22}/>
                        </div>

                        <div>

                            <h3

                                className="fw-bold mb-0"

                                style={{
                                    color:"#ec4899"
                                }}
                            >

                                MiniNest 🧸

                            </h3>

                            <small
                                style={{
                                    color:"#94a3b8"
                                }}
                            >

                                Little Smiles ✨

                            </small>

                        </div>

                    </div>

                    <div className="d-flex gap-2">

                        <button

                            className="btn"

                            style={{

                                borderRadius:"16px",

                                background:"#fff",

                                border:

                                    "2px solid #ddd6fe"
                            }}

                            onClick={()=>
                                navigate("/profile")
                            }
                        >

                            <User size={18}/>
                        </button>

                        <button

                            className="btn"

                            style={{

                                borderRadius:"16px",

                                background:"#fff",

                                border:

                                    "2px solid #fde68a"
                            }}

                            onClick={()=>
                                navigate("/orders")
                            }
                        >

                            <Package size={18}/>
                        </button>

                        <button

                            className="btn text-white"

                            style={{

                                borderRadius:"16px",

                                background:

                                    "linear-gradient(135deg,#ec4899,#f472b6)"
                            }}

                            onClick={()=>
                                navigate("/cart")
                            }
                        >

                            <ShoppingCart size={18}/>
                        </button>

                    </div>

                </div>

            </nav>

            <div className="container py-5">
                <div className="row g-5">

                    {/* IMAGE */}

                    <div className="col-lg-5">

                        <div

                            style={{

                                background:"#fff",

                                borderRadius:"35px",

                                padding:"25px",

                                boxShadow:

                                    "0 18px 40px rgba(0,0,0,0.06)"
                            }}
                        >

                            <div
                                style={{
                                    position:"relative"
                                }}
                            >

                                <img

                                    src={

                                        product.imageUrl ||

                                        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
                                    }

                                    alt={product.name}

                                    style={{

                                        width:"100%",

                                        height:"500px",

                                        objectFit:"cover",

                                        borderRadius:"28px"
                                    }}
                                />

                                {/* DISCOUNT */}

                                <span

                                    style={{

                                        position:"absolute",

                                        top:"18px",

                                        left:"18px",

                                        background:"#ec4899",

                                        color:"white",

                                        padding:"10px 18px",

                                        borderRadius:"25px",

                                        fontWeight:"600"
                                    }}
                                >

                                    🎀 20% OFF

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* DETAILS */}

                    <div className="col-lg-7">

                        <span

                            style={{

                                background:"#ffe4ec",

                                color:"#ec4899",

                                padding:"10px 18px",

                                borderRadius:"30px",

                                fontWeight:"600"
                            }}
                        >

                            🧸 MiniNest Special
                        </span>

                        {/* TITLE */}

                        <h1

                            className="fw-bold mt-4"

                            style={{

                                color:"#334155",

                                fontSize:"50px"
                            }}
                        >

                            {product.name}

                        </h1>

                        {/* RATING */}

                        <div

                            className="d-flex align-items-center gap-3 mt-3"
                        >

                            <div

                                style={{

                                    background:"#fff",

                                    padding:"8px 15px",

                                    borderRadius:"18px",

                                    color:"#ec4899",

                                    fontWeight:"600",

                                    boxShadow:

                                        "0 8px 20px rgba(0,0,0,0.05)"
                                }}
                            >

                                <Star
                                    size={16}
                                    fill="#facc15"
                                    color="#facc15"
                                />

                                {" "}
                                4.8

                            </div>

                            <small
                                className="text-muted"
                            >

                                2,500+ Happy Parents Reviews 💖

                            </small>

                        </div>

                        {/* DESCRIPTION */}

                        <p

                            className="mt-4"

                            style={{

                                color:"#64748b",

                                lineHeight:"34px",

                                fontSize:"17px"
                            }}
                        >

                            {

                                product.description ||

                                "Premium quality kids product made with care and love."
                            }

                        </p>

                        {/* PRICE */}

                        <div className="mt-4">

                            <h2

                                className="fw-bold"

                                style={{
                                    color:"#ec4899"
                                }}
                            >

                                ₹ {product.price}

                                <small

                                    className="ms-3"

                                    style={{

                                        textDecoration:

                                            "line-through",

                                        color:"#94a3b8",

                                        fontSize:"22px"
                                    }}
                                >

                                    ₹ {product.price + 300}

                                </small>

                            </h2>

                            <span

                                style={{

                                    background:"#dcfce7",

                                    color:"#16a34a",

                                    padding:"8px 14px",

                                    borderRadius:"18px",

                                    fontWeight:"600"
                                }}
                            >

                                Save 20% ✨
                            </span>

                        </div>

                        {/* STOCK */}

                        <div className="mt-4">

                            <h5
                                style={{
                                    color:"#334155"
                                }}
                            >

                                Stock Available:

                                <span
                                    style={{
                                        color:"#16a34a"
                                    }}
                                >

                                    {" "}
                                    {product.quantity}

                                </span>

                            </h5>

                            <small
                                className="text-muted"
                            >

                                🚚 Free delivery in 3–5 days

                            </small>

                        </div>

                        {/* BUTTONS */}

                        <div

                            className="d-flex gap-3 mt-5 flex-wrap"
                        >

                            <button

                                className="btn text-white px-5 py-3"

                                style={{

                                    borderRadius:"20px",

                                    background:

                                        "linear-gradient(135deg,#ec4899,#f472b6)",

                                    fontWeight:"600"
                                }}

                                onClick={addToCart}
                            >

                                Add To Cart 🛒

                            </button>

                            <button

                                className="btn px-5 py-3"

                                style={{

                                    borderRadius:"20px",

                                    background:"#fff",

                                    border:

                                        "2px solid #fbcfe8",

                                    color:"#ec4899",

                                    fontWeight:"600"
                                }}
                            >

                                Buy Now ✨

                            </button>

                        </div>
                        {/* PRODUCT DETAILS */}

                        <div

                            className="mt-5 p-4"

                            style={{

                                background:"#fff",

                                borderRadius:"28px",

                                boxShadow:

                                    "0 12px 30px rgba(0,0,0,0.05)"
                            }}
                        >

                            <h4

                                className="fw-bold"

                                style={{
                                    color:"#334155"
                                }}
                            >

                                Product Details ✨

                            </h4>

                            <div className="mt-3">

                                <p className="mb-2">

                                    🧸 Premium Quality Material

                                </p>

                                <p className="mb-2">

                                    👶 Kid Friendly & Safe

                                </p>

                                <p className="mb-2">

                                    🎀 Cute Design & Soft Finish

                                </p>

                                <p className="mb-0">

                                    💖 Loved by Parents & Kids

                                </p>

                            </div>

                        </div>

                        {/* DELIVERY */}

                        <div

                            className="mt-4 p-4"

                            style={{

                                background:"#fff",

                                borderRadius:"28px",

                                boxShadow:

                                    "0 12px 30px rgba(0,0,0,0.05)"
                            }}
                        >

                            <h4

                                className="fw-bold"

                                style={{
                                    color:"#334155"
                                }}
                            >

                                Delivery & Returns 🚚

                            </h4>

                            <p

                                className="mt-3 mb-2"

                                style={{
                                    color:"#64748b"
                                }}
                            >

                                🚚 Delivery in 3–5 days

                            </p>

                            <p

                                className="mb-2"

                                style={{
                                    color:"#64748b"
                                }}
                            >

                                🔄 Easy 7-Day Returns

                            </p>

                            <p

                                className="mb-0"

                                style={{
                                    color:"#64748b"
                                }}
                            >

                                🛡️ Secure & Safe Checkout

                            </p>

                        </div>

                        {/* WHY LOVE */}

                        <div

                            className="mt-4 p-4"

                            style={{

                                background:

                                    "linear-gradient(135deg,#ffe4ec,#fff1f2)",

                                borderRadius:"28px"
                            }}
                        >

                            <h4

                                className="fw-bold"

                                style={{
                                    color:"#334155"
                                }}
                            >

                                Why Parents Love This 💖

                            </h4>

                            <p

                                className="mt-3 mb-0"

                                style={{

                                    color:"#64748b",

                                    lineHeight:"32px"
                                }}
                            >

                                Carefully selected for
                                comfort, safety and joyful
                                little moments. MiniNest
                                products bring smiles and
                                happy memories ✨

                            </p>

                        </div>

                    </div>

                </div>
                

            {/* RELATED PRODUCTS */}

            <div className="mt-5">

                <h2

                    className="fw-bold mb-4"

                    style={{
                        color:"#334155"
                    }}
                >

                    You May Also Like 💖

                </h2>

                <div className="row">

                    {

                        [1,2,3].map((item)=>(

                            <div

                                className="col-md-4 mb-4"

                                key={item}
                            >

                                <div

                                    className="card border-0 h-100"

                                    style={{

                                        borderRadius:"30px",

                                        overflow:"hidden",

                                        background:"#fff",

                                        boxShadow:

                                            "0 15px 35px rgba(0,0,0,0.06)"
                                    }}
                                >

                                    <img

                                        src={product.imageUrl}

                                        alt="related"

                                        style={{

                                            height:"220px",

                                            objectFit:"cover"
                                        }}
                                    />

                                    <div className="card-body">

                                        <span

                                            style={{

                                                background:"#ffe4ec",

                                                color:"#ec4899",

                                                padding:"8px 14px",

                                                borderRadius:"18px",

                                                fontSize:"13px",

                                                fontWeight:"600"
                                            }}
                                        >

                                            ⭐ 4.8
                                        </span>

                                        <h5

                                            className="fw-bold mt-3"

                                            style={{
                                                color:"#334155"
                                            }}
                                        >

                                            MiniNest Favorite 🧸

                                        </h5>

                                        <p
                                            className="text-muted"
                                        >

                                            Cute & premium pick
                                            for little stars.

                                        </p>

                                        <button

                                            className="btn text-white"

                                            style={{

                                                borderRadius:"18px",

                                                background:

                                                    "linear-gradient(135deg,#ec4899,#f472b6)"
                                            }}

                                            onClick={()=>
                                                navigate("/products")
                                            }
                                        >

                                            Explore

                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

            {/* FOOTER */}

            <footer

                className="mt-5"

                style={{

                    background:

                        "linear-gradient(135deg,#ff8fab,#f472b6)",

                    color:"white",

                    borderTopLeftRadius:"45px",

                    borderTopRightRadius:"45px"
                }}
            >

                <div className="container py-5">

                    <div className="row">

                        <div className="col-md-4 mb-4">

                            <h2 className="fw-bold">

                                MiniNest 🧸

                            </h2>

                            <p className="mt-3">

                                Cute shopping world
                                for happy little stars ✨

                            </p>

                        </div>

                        <div className="col-md-4 mb-4">

                            <h5 className="fw-bold">

                                Quick Links

                            </h5>

                            <p
                                className="mt-3"
                                style={{
                                    cursor:"pointer"
                                }}
                                onClick={()=>
                                    navigate("/home")
                                }
                            >

                                Home

                            </p>

                            <p
                                style={{
                                    cursor:"pointer"
                                }}
                                onClick={()=>
                                    navigate("/products")
                                }
                            >

                                Products

                            </p>

                            <p
                                style={{
                                    cursor:"pointer"
                                }}
                                onClick={()=>
                                    navigate("/cart")
                                }
                            >

                                Cart

                            </p>

                        </div>

                        <div className="col-md-4 mb-4">

                            <h5 className="fw-bold">

                                Support

                            </h5>

                            <p className="mt-3">

                                Help Center

                            </p>

                            <p>

                                Contact Us

                            </p>

                            <p>

                                Safe Shopping 💖

                            </p>

                        </div>

                    </div>

                    <hr
                        style={{
                            opacity:"0.4"
                        }}
                    />

                    <p

                        className="text-center mb-0"

                        style={{
                            fontSize:"15px"
                        }}
                    >

                        © 2026 MiniNest.
                        All Rights Reserved ✨

                    </p>

                </div>

            </footer>

            </div>
        </div>
    );
}

export default ProductDetail;