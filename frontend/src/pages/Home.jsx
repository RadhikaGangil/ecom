import { useNavigate } from "react-router-dom";
import {
    Search,
    ShoppingCart,
    User,
    Package,
    LogOut,
    ArrowRight,
    Heart
} from "lucide-react";

function Home() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";
    };

    const categories = [

        {

            name:"Toys 🧸",

            image:

            "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
        },

        {

            name:"Baby Fashion 👕",

            image:

            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
        },

        {

            name:"Baby Care 🍼",

            image:

            "https://images.unsplash.com/photo-1544126592-807ade215a0b"
        },

        {

            name:"School Essentials 🎒",

            image:

            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
        }
    ];

    return (

        <div

            style={{

                background:

                    "#fff7fb",

                minHeight:

                    "100vh"
            }}
        >

            {/* NAVBAR */}

            <nav

                className="navbar navbar-expand-lg sticky-top px-4 py-3"

                style={{

                    background:

                        "rgba(255,255,255,0.88)",

                    backdropFilter:

                        "blur(14px)",

                    boxShadow:

                        "0 10px 30px rgba(0,0,0,0.06)"
                }}
            >

                <div className="container-fluid">

                    {/* LOGO */}

                    <div

                        className="d-flex align-items-center"

                        style={{
                            cursor:"pointer"
                        }}

                        onClick={() =>
                            navigate("/home")
                        }
                    >

                        <div

                            className="d-flex justify-content-center align-items-center me-3"

                            style={{

                                width:"52px",

                                height:"52px",

                                borderRadius:"18px",

                                background:

                                    "linear-gradient(135deg,#ff8fab,#f9a8d4)",

                                color:"white"
                            }}
                        >

                            <Heart
                                size={22}
                            />

                        </div>

                        <div>

                            <h3

                                className="mb-0 fw-bold"

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

                                Little Joys ✨

                            </small>

                        </div>

                    </div>

                    {/* SEARCH */}

                    <div

                        className="d-none d-md-flex align-items-center mx-auto px-3"

                        style={{

                            width:"420px",

                            height:"52px",

                            background:"#fff",

                            border:

                                "2px solid #fbcfe8",

                            borderRadius:"20px"
                        }}
                    >

                        <Search
                            size={18}
                            color="#ec4899"
                        />

                        <input

                            type="text"

                            placeholder="Search toys, fashion, baby care..."

                            className="form-control border-0 bg-transparent shadow-none ms-2"
                        />

                    </div>

                    {/* BUTTONS */}

                    <div className="d-flex gap-2">

                        <button

                            className="btn px-3"

                            style={{

                                borderRadius:"16px",

                                background:"#fff",

                                border:

                                    "2px solid #fde68a"
                            }}

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

                            className="btn px-3"

                            style={{

                                borderRadius:"16px",

                                background:"#fff",

                                border:

                                    "2px solid #bfdbfe"
                            }}

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

                            className="btn px-3"

                            style={{

                                borderRadius:"16px",

                                background:"#fff",

                                border:

                                    "2px solid #ddd6fe"
                            }}

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

                            className="btn text-white px-3"

                            style={{

                                borderRadius:"16px",

                                background:

                                    "linear-gradient(135deg,#ec4899,#f472b6)"
                            }}

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

                    className="row align-items-center p-5"

                    style={{

                        borderRadius:"40px",

                        background:

                            "linear-gradient(135deg,#ffe4ec,#fdf2f8,#e0f2fe)"
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

                            ✨ Cute Collections for Little Stars

                        </span>

                        <h1

                            className="fw-bold mt-4"

                            style={{

                                fontSize:"64px",

                                color:"#334155"
                            }}
                        >

                            Happy Shopping
                            for Happy Kids 💖

                        </h1>

                        <p

                            className="mt-4"

                            style={{

                                color:"#64748b",

                                fontSize:"19px",

                                lineHeight:"34px"
                            }}
                        >

                            Discover toys,
                            fashion, baby care
                            and magical little
                            essentials.

                        </p>

                        <button

                            className="btn text-white px-4 py-3 mt-3 fw-bold"

                            style={{

                                borderRadius:"18px",

                                background:

                                    "linear-gradient(135deg,#ec4899,#f472b6)"
                            }}

                            onClick={() =>
                                navigate("/products")
                            }
                        >

                            Shop Now

                            <ArrowRight
                                size={18}
                                className="ms-2"
                            />

                        </button>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img

                            src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"

                            alt="kids"

                            style={{

                                width:"100%",

                                maxWidth:"500px"
                            }}
                        />

                    </div>

                </div>
                {/* CATEGORIES */}

                <div className="mt-5">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h2

                            className="fw-bold"

                            style={{
                                color:"#334155"
                            }}
                        >

                            Shop by Category 🧸

                        </h2>

                        <small
                            style={{
                                color:"#ec4899",
                                fontWeight:"600"
                            }}
                        >

                            Explore More →

                        </small>

                    </div>

                    <div className="row">

                        {

                            categories.map(

                                (cat,index) => (

                                    <div

                                        className="col-lg-3 col-md-6 mb-4"

                                        key={index}
                                    >

                                        <div

                                            className="card border-0 h-100"

                                            style={{

                                                borderRadius:"30px",

                                                overflow:"hidden",

                                                background:"#fff",

                                                cursor:"pointer",

                                                boxShadow:

                                                    "0 15px 35px rgba(0,0,0,0.06)"
                                            }}
                                        >

                                            <img

                                                src={cat.image}

                                                alt={cat.name}

                                                style={{

                                                    height:"220px",

                                                    width:"100%",

                                                    objectFit:"cover"
                                                }}
                                            />

                                            <div className="card-body text-center">

                                                <h5

                                                    className="fw-bold"

                                                    style={{
                                                        color:"#475569"
                                                    }}
                                                >

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

                {/* TRENDING PRODUCTS */}

                <div className="mt-5">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h2

                            className="fw-bold"

                            style={{
                                color:"#334155"
                            }}
                        >

                            Trending Picks 💖

                        </h2>

                        <small
                            style={{
                                color:"#ec4899",
                                fontWeight:"600"
                            }}
                        >

                            View All →

                        </small>

                    </div>

                    <div className="row">

                        {

                            [1,2,3,4].map(

                                (item) => (

                                    <div

                                        className="col-lg-3 col-md-6 mb-4"

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

                                                src={`https://picsum.photos/400/320?random=${item}`}

                                                alt="product"

                                                style={{

                                                    height:"240px",

                                                    width:"100%",

                                                    objectFit:"cover"
                                                }}
                                            />

                                            <div className="card-body">

                                                <span

                                                    className="px-3 py-2"

                                                    style={{

                                                        background:"#ffe4ec",

                                                        borderRadius:"20px",

                                                        color:"#ec4899",

                                                        fontSize:"13px",

                                                        fontWeight:"600"
                                                    }}
                                                >

                                                    ⭐ 4.8 Rating

                                                </span>

                                                <h5

                                                    className="fw-bold mt-3"

                                                    style={{
                                                        color:"#334155"
                                                    }}
                                                >

                                                    MiniNest Product

                                                </h5>

                                                <p
                                                    className="text-muted"
                                                >

                                                    Cute premium product
                                                    loved by kids.

                                                </p>

                                                <div className="d-flex justify-content-between align-items-center">

                                                    <h5

                                                        className="fw-bold mb-0"

                                                        style={{
                                                            color:"#ec4899"
                                                        }}
                                                    >

                                                        ₹799

                                                    </h5>

                                                    <button

                                                        className="btn text-white"

                                                        style={{

                                                            borderRadius:"16px",

                                                            background:

                                                                "linear-gradient(135deg,#ec4899,#f472b6)"
                                                        }}

                                                        onClick={() =>
                                                            navigate("/products")
                                                        }
                                                    >

                                                        View

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
                                {/* OFFER BANNER */}

                <div className="mt-5">

                    <div

                        className="p-5"

                        style={{

                            borderRadius:"40px",

                            background:

                                "linear-gradient(135deg,#f9a8d4,#fbcfe8,#fde68a)"
                        }}
                    >

                        <div className="row align-items-center">

                            <div className="col-lg-8">

                                <span

                                    className="px-3 py-2"

                                    style={{

                                        background:"#fff",

                                        borderRadius:"30px",

                                        color:"#ec4899",

                                        fontWeight:"600"
                                    }}
                                >

                                    🎁 Limited Time Offer

                                </span>

                                <h1

                                    className="fw-bold mt-4"

                                    style={{
                                        color:"#334155"
                                    }}
                                >

                                    Up to 50% OFF
                                    on Kids Collection 💖

                                </h1>

                                <p

                                    className="mt-3"

                                    style={{
                                        color:"#475569",
                                        fontSize:"18px"
                                    }}
                                >

                                    Toys, baby fashion,
                                    school essentials
                                    and more.

                                </p>

                            </div>

                            <div className="col-lg-4 text-center">

                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"

                                    alt="offer"

                                    style={{

                                        width:"100%",

                                        maxWidth:"260px"
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* WHY MININEST */}

                <div className="mt-5">

                    <h2

                        className="fw-bold text-center mb-5"

                        style={{
                            color:"#334155"
                        }}
                    >

                        Why Parents Love MiniNest ✨

                    </h2>

                    <div className="row">

                        <div className="col-md-4 mb-4">

                            <div

                                className="card border-0 p-4 h-100 text-center"

                                style={{

                                    borderRadius:"30px",

                                    background:"#fff",

                                    boxShadow:

                                        "0 15px 35px rgba(0,0,0,0.06)"
                                }}
                            >

                                <h1>🧸</h1>

                                <h4

                                    className="fw-bold mt-3"

                                    style={{
                                        color:"#334155"
                                    }}
                                >

                                    Premium Toys

                                </h4>

                                <p
                                    className="text-muted"
                                >

                                    Safe and adorable
                                    products for kids.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mb-4">

                            <div

                                className="card border-0 p-4 h-100 text-center"

                                style={{

                                    borderRadius:"30px",

                                    background:"#fff",

                                    boxShadow:

                                        "0 15px 35px rgba(0,0,0,0.06)"
                                }}
                            >

                                <h1>🚚</h1>

                                <h4

                                    className="fw-bold mt-3"

                                    style={{
                                        color:"#334155"
                                    }}
                                >

                                    Fast Delivery

                                </h4>

                                <p
                                    className="text-muted"
                                >

                                    Quick shipping for
                                    happy little smiles.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mb-4">

                            <div

                                className="card border-0 p-4 h-100 text-center"

                                style={{

                                    borderRadius:"30px",

                                    background:"#fff",

                                    boxShadow:

                                        "0 15px 35px rgba(0,0,0,0.06)"
                                }}
                            >

                                <h1>💖</h1>

                                <h4

                                    className="fw-bold mt-3"

                                    style={{
                                        color:"#334155"
                                    }}
                                >

                                    Trusted by Parents

                                </h4>

                                <p
                                    className="text-muted"
                                >

                                    Loved by thousands
                                    of happy families.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* FOOTER */}

            <footer

                className="mt-5 text-white"

                style={{

                    background:

                        "linear-gradient(135deg,#ec4899,#f472b6)"
                }}
            >

                <div className="container py-5">

                    <div className="row">

                        <div className="col-md-4">

                            <h2 className="fw-bold">

                                MiniNest 🧸

                            </h2>

                            <p
                                className="mt-3"
                            >

                                Cute shopping destination
                                for happy little stars ✨

                            </p>

                        </div>

                        <div className="col-md-4">

                            <h5 className="fw-bold">

                                Quick Links

                            </h5>

                            <p className="mt-3">

                                Home

                            </p>

                            <p>

                                Products

                            </p>

                            <p>

                                Orders

                            </p>

                        </div>

                        <div className="col-md-4">

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

                                Privacy Policy

                            </p>

                        </div>

                    </div>

                    <hr />

                    <p className="text-center mb-0">

                        © 2026 MiniNest.
                        All Rights Reserved 💖

                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Home;