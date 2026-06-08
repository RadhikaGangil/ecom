import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
    Package,
    MapPin,
    CreditCard,
    ShoppingCart,
    Heart,
    User
} from "lucide-react";

function OrdersPage() {

    const navigate = useNavigate();

    const [orders, setOrders] =
        useState([]);

    // FETCH ORDERS

    const fetchOrders =
        useCallback(async () => {

        try {

            const response =
                await axios.get(

                    "/api/orders"
                );

            setOrders(
                response.data
            );

        }

        catch(error) {

            console.log(error);
        }

    }, []);

    useEffect(() => {

        fetchOrders();

    }, [fetchOrders]);

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

                                Happy Little Orders ✨

                            </small>

                        </div>

                    </div>

                    {/* NAV BUTTONS */}

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

                {/* TITLE */}

                <h1

                    className="fw-bold text-center"

                    style={{

                        fontSize:"55px",

                        color:"#ec4899"
                    }}
                >

                    My Orders 📦

                </h1>

                <p

                    className="text-center mb-5"

                    style={{
                        color:"#64748b"
                    }}
                >

                    Track your MiniNest happiness 💖

                </p>
                {

                    orders.length === 0

                    ?

                    (

                        <div
                            className="text-center mt-5"
                        >

                            <img

                                src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"

                                alt="empty"

                                width="220"
                            />

                            <h2

                                className="mt-4 fw-bold"

                                style={{
                                    color:"#334155"
                                }}
                            >

                                No Orders Yet 🧸

                            </h2>

                            <p
                                style={{
                                    color:"#64748b"
                                }}
                            >

                                Your MiniNest orders
                                will appear here ✨

                            </p>

                            <button

                                className="btn text-white mt-3 px-4 py-3"

                                style={{

                                    borderRadius:"18px",

                                    background:

                                        "linear-gradient(135deg,#ec4899,#f472b6)"
                                }}

                                onClick={()=>
                                    navigate("/products")
                                }
                            >

                                Explore Products 💖

                            </button>

                        </div>
                    )

                    :

                    (

                        <div className="row">

                            {

                                orders.map((order)=>(

                                    <div

                                        className="col-lg-6 mb-4"

                                        key={order.id}
                                    >

                                        <div

                                            className="card border-0 p-4"

                                            style={{

                                                borderRadius:"35px",

                                                background:"#fff",

                                                boxShadow:

                                                    "0 18px 40px rgba(0,0,0,0.06)"
                                            }}
                                        >

                                            {/* TOP */}

                                            <div

                                                className="d-flex justify-content-between align-items-center"
                                            >

                                                <div>

                                                    <h3

                                                        className="fw-bold"

                                                        style={{
                                                            color:"#334155"
                                                        }}
                                                    >

                                                        Order #{order.id}

                                                    </h3>

                                                    <p
                                                        className="mb-0"
                                                        style={{
                                                            color:"#94a3b8"
                                                        }}
                                                    >

                                                        Successfully Placed ✨

                                                    </p>

                                                </div>

                                                <div

                                                    style={{

                                                        background:"#dcfce7",

                                                        color:"#16a34a",

                                                        padding:

                                                            "10px 18px",

                                                        borderRadius:"25px",

                                                        fontWeight:"600"
                                                    }}
                                                >

                                                    Paid 💖

                                                </div>

                                            </div>

                                            <hr />
                                            {/* CUSTOMER */}

                                            <div

                                                className="d-flex align-items-center gap-3 mb-3"
                                            >

                                                <Package
                                                    size={24}
                                                    color="#ec4899"
                                                />

                                                <div>

                                                    <h6
                                                        className="m-0 fw-bold"
                                                    >

                                                        Customer

                                                    </h6>

                                                    <p

                                                        className="m-0"

                                                        style={{
                                                            color:"#64748b"
                                                        }}
                                                    >

                                                        {

                                                            order.customerName
                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                            {/* ADDRESS */}

                                            <div

                                                className="d-flex align-items-center gap-3 mb-3"
                                            >

                                                <MapPin
                                                    size={24}
                                                    color="#ec4899"
                                                />

                                                <div>

                                                    <h6
                                                        className="m-0 fw-bold"
                                                    >

                                                        Delivery Address

                                                    </h6>

                                                    <p

                                                        className="m-0"

                                                        style={{
                                                            color:"#64748b"
                                                        }}
                                                    >

                                                        {order.address}

                                                    </p>

                                                </div>

                                            </div>

                                            {/* PAYMENT */}

                                            <div

                                                className="d-flex align-items-center gap-3 mb-3"
                                            >

                                                <CreditCard
                                                    size={24}
                                                    color="#ec4899"
                                                />

                                                <div>

                                                    <h6
                                                        className="m-0 fw-bold"
                                                    >

                                                        Payment Method

                                                    </h6>

                                                    <p

                                                        className="m-0"

                                                        style={{
                                                            color:"#64748b"
                                                        }}
                                                    >

                                                        {

                                                            order.paymentMethod
                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                            {/* DELIVERY STATUS */}

                                            <div

                                                className="mb-4"
                                            >

                                                <span

                                                    style={{

                                                        background:"#dbeafe",

                                                        color:"#2563eb",

                                                        padding:

                                                            "10px 16px",

                                                        borderRadius:"20px",

                                                        fontWeight:"600"
                                                    }}
                                                >

                                                    🚚 On The Way

                                                </span>

                                            </div>

                                            {/* TOTAL */}

                                            <div

                                                className="d-flex justify-content-between align-items-center"
                                            >

                                                <h4

                                                    className="fw-bold"

                                                    style={{
                                                        color:"#334155"
                                                    }}
                                                >

                                                    Total Amount

                                                </h4>

                                                <h3

                                                    className="fw-bold"

                                                    style={{
                                                        color:"#ec4899"
                                                    }}
                                                >

                                                    ₹ {order.totalAmount}

                                                </h3>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    )
                }
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

                        {/* BRAND */}

                        <div className="col-md-4 mb-4">

                            <h2 className="fw-bold">

                                MiniNest 🧸

                            </h2>

                            <p className="mt-3">

                                Cute shopping world
                                for happy little stars ✨

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
                                    navigate("/cart")
                                }
                            >

                                Cart

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

export default OrdersPage;