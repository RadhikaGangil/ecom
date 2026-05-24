import { useNavigate } from "react-router-dom";
import {
    Search,
    ShoppingCart,
    User,
    Package,
    LogOut,
    ArrowRight
} from "lucide-react";

function Home() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";
    };

    const categories = [

        {
            name: "Fashion",

            image:

                "https://images.unsplash.com/photo-1445205170230-053b83016050"
        },

        {
            name: "Electronics",

            image:

                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },

        {
            name: "Watches",

            image:

                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
        },

        {
            name: "Laptops",

            image:

                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        }
    ];

    return (

        <div

            style={{

                background: "#f8fafc",

                minHeight: "100vh"
            }}
        >

            {/* NAVBAR */}

            <nav

                className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3 sticky-top"

            >

                <div className="container-fluid">

                    {/* LOGO */}

                    <h2

                        className="fw-bold mb-0"

                        style={{

                            color: "#111827",

                            cursor: "pointer"
                        }}

                        onClick={() =>
                            navigate("/")
                        }
                    >

                        ShopEase 🛍️

                    </h2>

                    {/* SEARCH */}

                    <div

                        className="d-none d-md-flex align-items-center mx-auto px-3"

                        style={{

                            width: "420px",

                            height: "48px",

                            background: "#f1f5f9",

                            borderRadius: "14px"
                        }}
                    >

                        <Search
                            size={18}
                            color="#64748b"
                        />

                        <input

                            type="text"

                            placeholder="Search products..."

                            className="form-control border-0 bg-transparent shadow-none ms-2"
                        />

                    </div>

                    {/* BUTTONS */}

                    <div className="d-flex gap-2">

                        <button

                            className="btn btn-light rounded-pill px-3"

                            onClick={() =>
                                navigate("/products")
                            }
                        >

                            Shop

                        </button>

                        <button

                            className="btn btn-light rounded-pill px-3"

                            onClick={() =>
                                navigate("/orders")
                            }
                        >

                            <Package
                                size={18}
                                className="me-1"
                            />

                            Orders

                        </button>

                        <button

                            className="btn btn-light rounded-pill px-3"

                            onClick={() =>
                                navigate("/cart")
                            }
                        >

                            <ShoppingCart
                                size={18}
                                className="me-1"
                            />

                            Cart

                        </button>

                        <button

                            className="btn btn-light rounded-pill px-3"

                            onClick={() =>
                                navigate("/profile")
                            }
                        >

                            <User
                                size={18}
                                className="me-1"
                            />

                            Profile

                        </button>

                        <button

                            className="btn btn-dark rounded-pill px-3"

                            onClick={logout}
                        >

                            <LogOut
                                size={18}
                                className="me-1"
                            />

                            Logout

                        </button>

                    </div>

                </div>

            </nav>

            {/* HERO */}

            <div className="container py-5">

                <div

                    className="row align-items-center rounded-5 p-5"

                    style={{

                        background:

                            "linear-gradient(135deg,#111827,#374151)",

                        color: "white"
                    }}
                >

                    <div className="col-lg-6">

                        <h1

                            className="fw-bold"

                            style={{

                                fontSize: "58px"
                            }}
                        >

                            Shop Smart,
                            Live Better ✨

                        </h1>

                        <p

                            className="mt-4"

                            style={{

                                color: "#d1d5db",

                                fontSize: "18px",

                                lineHeight: "32px"
                            }}
                        >

                            Discover fashion,
                            gadgets and premium
                            lifestyle products.

                        </p>

                        <button

                            className="btn btn-light rounded-pill px-4 py-3 mt-3 fw-bold"

                            onClick={() =>
                                navigate("/products")
                            }
                        >

                            Explore Products

                            <ArrowRight
                                size={18}
                                className="ms-2"
                            />

                        </button>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img

                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"

                            alt="hero"

                            style={{

                                width: "100%",

                                maxWidth: "500px",

                                borderRadius: "30px",

                                objectFit: "cover",

                                boxShadow:

                                    "0 20px 50px rgba(0,0,0,0.25)"
                            }}
                        />

                    </div>

                </div>

                {/* CATEGORIES */}

                <div className="mt-5">

                    <h3 className="fw-bold mb-4">

                        Shop by Category

                    </h3>

                    <div className="row">

                        {

                            categories.map(

                                (cat,index) => (

                                    <div

                                        className="col-md-3 mb-4"

                                        key={index}
                                    >

                                        <div

                                            className="card border-0 shadow-sm"

                                            style={{

                                                borderRadius: "25px",

                                                overflow: "hidden",

                                                cursor: "pointer"
                                            }}
                                        >

                                            <img

                                                src={cat.image}

                                                alt={cat.name}

                                                style={{

                                                    height:"180px",

                                                    width:"100%",

                                                    objectFit:"cover"
                                                }}
                                            />

                                            <div className="card-body text-center">

                                                <h5 className="fw-bold">

                                                    {cat.name}

                                                </h5>

                                            </div>

                                        </div>

                                    </div>
                                )
                            )
                        }

                    </div>

                </div>
                {/* FEATURED PRODUCTS */}

                <div className="mt-5">

                    <h3 className="fw-bold mb-4">

                        Trending Products 🔥

                    </h3>

                    <div className="row">

                        {

                            [1,2,3,4].map((item) => (

                                <div
                                    className="col-lg-3 col-md-6 mb-4"
                                    key={item}
                                >

                                    <div

                                        className="card border-0 shadow-sm"

                                        style={{

                                            borderRadius: "25px",

                                            overflow: "hidden",

                                            transition: "0.3s"
                                        }}
                                    >

                                        <img

                                            src={`https://picsum.photos/400/300?random=${item}`}

                                            alt="product"

                                            style={{

                                                height: "220px",

                                                width:"100%",

                                                objectFit: "cover"
                                            }}
                                        />

                                        <div className="card-body">

                                            <h5 className="fw-bold">

                                                Premium Product

                                            </h5>

                                            <p className="text-muted">

                                                Trending product
                                                for modern lifestyle.

                                            </p>

                                            <h5 className="fw-bold">

                                                ₹999

                                            </h5>

                                            <button

                                                className="btn btn-dark w-100 rounded-pill mt-2"

                                                onClick={() =>
                                                    navigate("/products")
                                                }
                                            >

                                                View Product

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* OFFER BANNER */}

                <div className="mt-5">

                    <div

                        className="rounded-5 p-5 text-white"

                        style={{

                            background:

                                "linear-gradient(135deg,#7c3aed,#4f46e5)"
                        }}
                    >

                        <div className="row align-items-center">

                            <div className="col-lg-8">

                                <h1 className="fw-bold">

                                    Mega Sale 50% OFF 🎉

                                </h1>

                                <p
                                    className="mt-3"
                                    style={{
                                        color:"#e0e7ff"
                                    }}
                                >

                                    Limited deals on
                                    fashion, electronics
                                    and more.

                                </p>

                            </div>

                            <div className="col-lg-4 text-lg-end">

                                <button

                                    className="btn btn-light rounded-pill px-4 py-3 fw-bold"

                                    onClick={() =>
                                        navigate("/products")
                                    }
                                >

                                    Shop Now

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* WHY CHOOSE US */}

                <div className="mt-5">

                    <h3 className="fw-bold text-center mb-5">

                        Why Shop With Us

                    </h3>

                    <div className="row text-center">

                        <div className="col-md-4 mb-4">

                            <div

                                className="card border-0 shadow-sm p-4"

                                style={{
                                    borderRadius:"25px"
                                }}
                            >

                                <h1>🚚</h1>

                                <h5 className="fw-bold">

                                    Fast Delivery

                                </h5>

                                <p className="text-muted">

                                    Quick and safe shipping.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mb-4">

                            <div

                                className="card border-0 shadow-sm p-4"

                                style={{
                                    borderRadius:"25px"
                                }}
                            >

                                <h1>🔒</h1>

                                <h5 className="fw-bold">

                                    Secure Payments

                                </h5>

                                <p className="text-muted">

                                    Trusted payment gateway.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mb-4">

                            <div

                                className="card border-0 shadow-sm p-4"

                                style={{
                                    borderRadius:"25px"
                                }}
                            >

                                <h1>⭐</h1>

                                <h5 className="fw-bold">

                                    Premium Quality

                                </h5>

                                <p className="text-muted">

                                    Best curated products.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* FOOTER */}

            <footer

                className="text-white mt-5"

                style={{
                    background:"#111827"
                }}
            >

                <div className="container py-5">

                    <div className="row">

                        <div className="col-md-4">

                            <h4 className="fw-bold">

                                ShopEase 🛍️

                            </h4>

                            <p
                                style={{
                                    color:"#9ca3af"
                                }}
                            >

                                Modern ecommerce experience.

                            </p>

                        </div>

                        <div className="col-md-4">

                            <h5>

                                Quick Links

                            </h5>

                            <p>Home</p>

                            <p>Products</p>

                            <p>Orders</p>

                        </div>

                        <div className="col-md-4">

                            <h5>

                                Contact

                            </h5>

                            <p>Email Support</p>

                            <p>Help Center</p>

                        </div>

                    </div>

                    <hr
                        style={{
                            borderColor:"#374151"
                        }}
                    />

                    <p

                        className="text-center mb-0"

                        style={{
                            color:"#9ca3af"
                        }}
                    >

                        © 2026 ShopEase.
                        All Rights Reserved.

                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Home;