import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    ShoppingCart,
    Package,
    User,
    Search,
    Heart
} from "lucide-react";

function ProductList() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [filteredProducts, setFilteredProducts] = useState([]);

    // FETCH PRODUCTS

    const fetchProducts = useCallback(async () => {

        try {

            const response = await axios.get(

                "/api/products"
            );

            setProducts(response.data);

            setFilteredProducts(response.data);

        }

        catch(error) {

            console.log(error);
        }

    }, []);

    useEffect(() => {

        fetchProducts();

    }, [fetchProducts]);

    // SEARCH

    const handleSearch = (value) => {

        setSearch(value);

        const filtered = products.filter((product)=>

            product.name
                .toLowerCase()
                .includes(
                    value.toLowerCase()
                )
        );

        setFilteredProducts(filtered);
    };

    // ADD CART

    const addToCart = async (product) => {

        try {

            await axios.post(

                "/api/cart",

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

            alert("Added To Cart 🛒");

        }

        catch(error) {

            console.log(error);

            alert(
                "Failed To Add Cart"
            );
        }
    };

    return (

        <div

            style={{

                background:

                    "#fffafc",

                minHeight:

                    "100vh"
            }}
        >

            {/* NAVBAR */}

            <nav

                className="navbar navbar-expand-lg sticky-top px-4 py-3"

                style={{

                    background:

                        "rgba(255,255,255,0.94)",

                    backdropFilter:

                        "blur(18px)",

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

                            <Heart
                                size={24}
                            />

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

                    {/* SEARCH */}

                    <div

                        className="d-none d-md-flex align-items-center px-3 mx-auto"

                        style={{

                            width:"420px",

                            height:"52px",

                            background:"#fff",

                            border:

                                "2px solid #fbcfe8",

                            borderRadius:"18px"
                        }}
                    >

                        <Search
                            size={18}
                            color="#ec4899"
                        />

                        <input

                            type="text"

                            placeholder="Search toys, baby care..."

                            className="form-control border-0 bg-transparent shadow-none ms-2"

                            value={search}

                            onChange={(e)=>

                                handleSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    {/* BUTTONS */}

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

                            <User
                                size={18}
                            />

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

                            <Package
                                size={18}
                            />

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

                            <ShoppingCart
                                size={18}
                            />

                        </button>

                    </div>

                </div>

            </nav>

            {/* HERO */}

            <div className="container py-4">

                <div

                    className="row align-items-center p-5"

                    style={{

                        borderRadius:"40px",

                        background:

                            "linear-gradient(135deg,#ffe4ec,#fff1f2,#e0f2fe)"
                    }}
                >

                    <div className="col-lg-6">

                        <span

                            className="px-3 py-2"

                            style={{

                                background:"#fff",

                                borderRadius:"30px",

                                color:"#ec4899",

                                fontWeight:"600"
                            }}
                        >

                            🎀 Kids Special Collection
                        </span>

                        <h1

                            className="fw-bold mt-4"

                            style={{

                                fontSize:"62px",

                                color:"#334155"
                            }}
                        >

                            Cute Things
                            for Tiny
                            Smiles 💖

                        </h1>

                        <p

                            className="mt-4"

                            style={{

                                color:"#64748b",

                                fontSize:"18px",

                                lineHeight:"34px"
                            }}
                        >

                            Toys, baby fashion,
                            essentials and magical
                            collections for little stars.

                        </p>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img

                            src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"

                            alt="kids"

                            style={{

                                width:"100%",

                                maxWidth:"420px"
                            }}
                        />

                    </div>

                </div>
            </div>
            {/* CATEGORY CHIPS */}

            <div className="container mt-4">

                <div

                    className="d-flex flex-wrap gap-3 justify-content-center"
                >

                    {

                        [

                            "🧸 Toys",

                            "👕 Baby Fashion",

                            "🍼 Baby Care",

                            "🎒 School",

                            "🎁 Gifts",

                            "⭐ Best Sellers"

                        ].map((item,index)=>(

                            <button

                                key={index}

                                className="btn"

                                style={{

                                    borderRadius:"30px",

                                    background:"#fff",

                                    border:

                                        "2px solid #fbcfe8",

                                    color:"#ec4899",

                                    fontWeight:"600",

                                    padding:

                                        "10px 22px"
                                }}
                            >

                                {item}

                            </button>
                        ))
                    }

                </div>

            </div>

            {/* SECTION TITLE */}

            <div className="container mt-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2

                            className="fw-bold"

                            style={{
                                color:"#334155"
                            }}
                        >

                            Trending Kids Picks 💖

                        </h2>

                        <p
                            className="text-muted"
                        >

                            Loved by parents & little stars ✨

                        </p>

                    </div>

                    <small

                        style={{

                            color:"#ec4899",

                            fontWeight:"600"
                        }}
                    >

                        View All →

                    </small>

                </div>

                {/* PRODUCT GRID START */}

                <div className="row">
                    {

                        filteredProducts.map(

                            (product)=>(

                                <div

                                    className="col-lg-3 col-md-6 mb-4"

                                    key={product.id}
                                >

                                    <div

                                        className="card border-0 h-100"

                                        style={{

                                            borderRadius:"34px",

                                            overflow:"hidden",

                                            background:"#fff",

                                            boxShadow:

                                                "0 18px 40px rgba(0,0,0,0.06)",

                                            transition:

                                                "0.35s"
                                        }}
                                    >

                                        {/* IMAGE */}

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

                                                    height:"260px",

                                                    width:"100%",

                                                    objectFit:"cover"
                                                }}
                                            />

                                            {/* DISCOUNT */}

                                            <span

                                                style={{

                                                    position:"absolute",

                                                    top:"16px",

                                                    left:"16px",

                                                    background:

                                                        "#ec4899",

                                                    color:"white",

                                                    padding:

                                                        "8px 14px",

                                                    borderRadius:

                                                        "22px",

                                                    fontSize:"13px",

                                                    fontWeight:"600"
                                                }}
                                            >

                                                🎀 20% OFF

                                            </span>

                                            {/* HEART */}

                                            <div

                                                style={{

                                                    position:"absolute",

                                                    top:"16px",

                                                    right:"16px",

                                                    width:"42px",

                                                    height:"42px",

                                                    borderRadius:"50%",

                                                    background:

                                                        "rgba(255,255,255,0.95)",

                                                    display:"flex",

                                                    justifyContent:"center",

                                                    alignItems:"center",

                                                    boxShadow:

                                                        "0 8px 20px rgba(0,0,0,0.12)"
                                                }}
                                            >

                                                💖

                                            </div>

                                        </div>

                                        {/* BODY */}

                                        <div className="card-body p-4">

                                            {/* RATING */}

                                            <span

                                                style={{

                                                    background:

                                                        "#ffe4ec",

                                                    color:"#ec4899",

                                                    padding:

                                                        "8px 14px",

                                                    borderRadius:

                                                        "20px",

                                                    fontSize:"13px",

                                                    fontWeight:"600"
                                                }}
                                            >

                                                ⭐ 4.8
                                            </span>

                                            {/* TITLE */}

                                            <h5

                                                className="fw-bold mt-3"

                                                style={{
                                                    color:"#334155"
                                                }}
                                            >

                                                {product.name}

                                            </h5>

                                            {/* DESC */}

                                            <p
                                                className="text-muted"
                                            >

                                                {

                                                    product.description
                                                }

                                            </p>

                                            {/* PRICE */}

                                            <div className="d-flex align-items-center gap-2">

                                                <h4

                                                    className="fw-bold mb-0"

                                                    style={{
                                                        color:"#ec4899"
                                                    }}
                                                >

                                                    ₹{product.price}

                                                </h4>

                                                <small

                                                    style={{

                                                        textDecoration:

                                                            "line-through",

                                                        color:"#94a3b8"
                                                    }}
                                                >

                                                    ₹{product.price + 250}

                                                </small>

                                            </div>

                                            {/* STOCK */}

                                            <small
                                                className="text-muted"
                                            >

                                                Stock:
                                                {" "}
                                                {

                                                    product.quantity
                                                }

                                            </small>

                                            {/* BUTTONS */}

                                            <div

                                                className="d-flex gap-2 mt-4"
                                            >

                                                <button

                                                    className="btn w-50"

                                                    style={{

                                                        borderRadius:"18px",

                                                        border:

                                                            "2px solid #fbcfe8",

                                                        background:"#fff",

                                                        color:"#ec4899",

                                                        fontWeight:"600"
                                                    }}

                                                    onClick={()=>

                                                        navigate(

                                                            `/products/${product.id}`
                                                        )
                                                    }
                                                >

                                                    View

                                                </button>

                                                <button

                                                    className="btn text-white w-50"

                                                    style={{

                                                        borderRadius:"18px",

                                                        background:

                                                            "linear-gradient(135deg,#ec4899,#f472b6)",

                                                        fontWeight:"600"
                                                    }}

                                                    onClick={()=>

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
                            )
                        )
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

                    borderTopLeftRadius:"50px",

                    borderTopRightRadius:"50px"
                }}
            >

                <div className="container py-5">

                    <div className="row">

                        {/* BRAND */}

                        <div className="col-md-4 mb-4">

                            <h2 className="fw-bold">

                                MiniNest 🧸

                            </h2>

                            <p
                                className="mt-3"
                                style={{
                                    lineHeight:"30px"
                                }}
                            >

                                Cute little shopping
                                world made with love 💖
                                for babies and kids.

                            </p>

                        </div>

                        {/* LINKS */}

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
                                    navigate("/orders")
                                }
                            >

                                Orders

                            </p>

                        </div>

                        {/* SUPPORT */}

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
    );
}

export default ProductList;