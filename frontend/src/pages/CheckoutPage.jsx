import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {

    ShoppingCart,
    Heart,
    User,
    MapPin,
    CreditCard,
    ShieldCheck,
    Smartphone

} from "lucide-react";

function CheckoutPage() {

    const navigate = useNavigate();

    const [cartItems,setCartItems] =
        useState([]);

    // ADDRESS STATES

    const [fullName,setFullName] =
        useState("");

    const [phone,setPhone] =
        useState("");

    const [street,setStreet] =
        useState("");

    const [city,setCity] =
        useState("");

    const [stateName,setStateName] =
        useState("");

    const [pincode,setPincode] =
        useState("");

    const [addressType,setAddressType] =
        useState("Home");

    // PAYMENT

    const [paymentMethod,setPaymentMethod] =
        useState("COD");

    const [processing,setProcessing] =
        useState(false);

    // FETCH CART

    const fetchCartItems =
        useCallback(async()=>{

        try{

            const response =
                await axios.get(

                    "/api/cart"
                );

            setCartItems(
                response.data
            );
        }

        catch(error){

            console.log(error);
        }

    },[]);

    useEffect(()=>{

        fetchCartItems();

    },[fetchCartItems]);

    // TOTAL

    const totalPrice =
        cartItems.reduce(

            (total,item)=>

                total+
                item.price*
                item.quantity,

            0
        );

    // PLACE ORDER

    const placeOrder =
        async()=>{

        if(

            !fullName ||
            !phone ||
            !street ||
            !city ||
            !stateName ||
            !pincode

        ){

            alert(
                "Please Fill Complete Address 📍"
            );

            return;
        }

        const fullAddress =

            `${street}, ${city},
             ${stateName} - ${pincode}`;

        try{

            // FAKE PAYMENT FLOW

            if(
                paymentMethod ===
                "ONLINE"
            ){

                setProcessing(true);

                setTimeout(

                    async()=>{

                        await axios.post(

                            "/api/orders",

                            {

                                customerName:
                                    fullName,

                                address:
                                    fullAddress,

                                totalAmount:
                                    totalPrice,

                                paymentMethod:
                                    "Online Payment"
                            }
                        );

                        setProcessing(false);

                        alert(
                            "Payment Successful 🎉"
                        );

                        navigate(
                            "/orders"
                        );

                    },

                    2500
                );

                return;
            }

            // COD

            await axios.post(

                "/api/orders",

                {

                    customerName:
                        fullName,

                    address:
                        fullAddress,

                    totalAmount:
                        totalPrice,

                    paymentMethod:
                        "Cash On Delivery"
                }
            );

            alert(
                "Order Placed 🎉"
            );

            navigate(
                "/orders"
            );

        }

        catch(error){

            console.log(error);

            alert(
                "Checkout Failed ❌"
            );
        }
    };

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

                                Real Checkout ✨

                            </small>

                        </div>

                    </div>

                    <button

                        className="btn text-white"

                        style={{

                            borderRadius:"16px",

                            background:

                                "linear-gradient(135deg,#ec4899,#f472b6)"
                        }}
                    >

                        <ShoppingCart size={18}/>

                    </button>

                </div>

            </nav>

            <div className="container py-5">
                {/* TITLE */}

                <div className="text-center mb-5">

                    <h1

                        className="fw-bold"

                        style={{

                            fontSize:"55px",

                            color:"#ec4899"
                        }}
                    >

                        Secure Checkout 🛍️

                    </h1>

                    <p
                        style={{
                            color:"#64748b"
                        }}
                    >

                        Safe & happy MiniNest shopping 💖

                    </p>

                </div>

                {/* SECURE BANNER */}

                <div

                    className="mb-4 p-4"

                    style={{

                        background:

                            "linear-gradient(135deg,#ffe4ec,#fff1f2)",

                        borderRadius:"28px"
                    }}
                >

                    <div className="d-flex align-items-center gap-3">

                        <ShieldCheck
                            size={34}
                            color="#ec4899"
                        />

                        <div>

                            <h5
                                className="fw-bold mb-1"
                            >

                                Secure Checkout 🔒

                            </h5>

                            <p
                                className="mb-0"
                                style={{
                                    color:"#64748b"
                                }}
                            >

                                Protected payments & safe delivery ✨

                            </p>

                        </div>

                    </div>

                </div>

                <div className="row">

                    {/* LEFT */}

                    <div className="col-lg-7">

                        {/* ADDRESS CARD */}

                        <div

                            className="card border-0 p-4"

                            style={{

                                borderRadius:"35px",

                                background:"#fff",

                                boxShadow:

                                    "0 18px 40px rgba(0,0,0,0.06)"
                            }}
                        >

                            <div

                                className="d-flex align-items-center gap-3 mb-4"
                            >

                                <MapPin
                                    size={28}
                                    color="#ec4899"
                                />

                                <h3
                                    className="fw-bold m-0"
                                >

                                    Delivery Address

                                </h3>

                            </div>

                            {/* NAME */}

                            <input

                                className="form-control mb-3"

                                placeholder="Full Name"

                                value={fullName}

                                onChange={(e)=>

                                    setFullName(
                                        e.target.value
                                    )
                                }

                                style={{

                                    borderRadius:"18px",

                                    padding:"15px",

                                    border:

                                        "2px solid #fbcfe8"
                                }}
                            />

                            {/* PHONE */}

                            <input

                                className="form-control mb-3"

                                placeholder="Mobile Number"

                                value={phone}

                                onChange={(e)=>

                                    setPhone(
                                        e.target.value
                                    )
                                }

                                style={{

                                    borderRadius:"18px",

                                    padding:"15px",

                                    border:

                                        "2px solid #fbcfe8"
                                }}
                            />

                            {/* STREET */}

                            <textarea

                                className="form-control mb-3"

                                rows="3"

                                placeholder="House No / Street / Area"

                                value={street}

                                onChange={(e)=>

                                    setStreet(
                                        e.target.value
                                    )
                                }

                                style={{

                                    borderRadius:"18px",

                                    padding:"15px",

                                    border:

                                        "2px solid #fbcfe8"
                                }}
                            />

                            <div className="row">

                                <div className="col-md-4">

                                    <input

                                        className="form-control mb-3"

                                        placeholder="City"

                                        value={city}

                                        onChange={(e)=>

                                            setCity(
                                                e.target.value
                                            )
                                        }

                                        style={{

                                            borderRadius:"18px",

                                            padding:"15px",

                                            border:

                                                "2px solid #fbcfe8"
                                        }}
                                    />

                                </div>

                                <div className="col-md-4">

                                    <input

                                        className="form-control mb-3"

                                        placeholder="State"

                                        value={stateName}

                                        onChange={(e)=>

                                            setStateName(
                                                e.target.value
                                            )
                                        }

                                        style={{

                                            borderRadius:"18px",

                                            padding:"15px",

                                            border:

                                                "2px solid #fbcfe8"
                                        }}
                                    />

                                </div>

                                <div className="col-md-4">

                                    <input

                                        className="form-control mb-3"

                                        placeholder="Pincode"

                                        value={pincode}

                                        onChange={(e)=>

                                            setPincode(
                                                e.target.value
                                            )
                                        }

                                        style={{

                                            borderRadius:"18px",

                                            padding:"15px",

                                            border:

                                                "2px solid #fbcfe8"
                                        }}
                                    />

                                </div>

                            </div>

                            {/* ADDRESS TYPE */}

                            <h5
                                className="fw-bold mt-3 mb-3"
                            >

                                Address Type

                            </h5>

                            <div className="d-flex gap-3">

                                <button

                                    className="btn"

                                    style={{

                                        borderRadius:"18px",

                                        background:

                                            addressType==="Home"

                                            ?

                                            "#ec4899"

                                            :

                                            "#fff",

                                        color:

                                            addressType==="Home"

                                            ?

                                            "white"

                                            :

                                            "#ec4899",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}

                                    onClick={()=>

                                        setAddressType(
                                            "Home"
                                        )
                                    }
                                >

                                    🏠 Home

                                </button>

                                <button

                                    className="btn"

                                    style={{

                                        borderRadius:"18px",

                                        background:

                                            addressType==="Work"

                                            ?

                                            "#ec4899"

                                            :

                                            "#fff",

                                        color:

                                            addressType==="Work"

                                            ?

                                            "white"

                                            :

                                            "#ec4899",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}

                                    onClick={()=>

                                        setAddressType(
                                            "Work"
                                        )
                                    }
                                >

                                    🏢 Work

                                </button>

                            </div>

                        </div>
                        {/* PAYMENT CARD */}

                        <div

                            className="card border-0 p-4 mt-4"

                            style={{

                                borderRadius:"35px",

                                background:"#fff",

                                boxShadow:

                                    "0 18px 40px rgba(0,0,0,0.06)"
                            }}
                        >

                            <div

                                className="d-flex align-items-center gap-3 mb-4"
                            >

                                <CreditCard
                                    size={28}
                                    color="#ec4899"
                                />

                                <h3
                                    className="fw-bold m-0"
                                >

                                    Payment Method

                                </h3>

                            </div>

                            {/* COD */}

                            <div

                                onClick={()=>
                                    setPaymentMethod("COD")
                                }

                                style={{

                                    cursor:"pointer",

                                    border:

                                        paymentMethod==="COD"

                                        ?

                                        "2px solid #ec4899"

                                        :

                                        "2px solid #eee",

                                    borderRadius:"22px",

                                    padding:"18px",

                                    marginBottom:"15px",

                                    background:

                                        paymentMethod==="COD"

                                        ?

                                        "#fff1f2"

                                        :

                                        "#fff"
                                }}
                            >

                                <div

                                    className="d-flex justify-content-between align-items-center"
                                >

                                    <div>

                                        <h5
                                            className="fw-bold mb-1"
                                        >

                                            Cash On Delivery 💵

                                        </h5>

                                        <small
                                            style={{
                                                color:"#64748b"
                                            }}
                                        >

                                            Pay when your order arrives

                                        </small>

                                    </div>

                                    <input

                                        type="radio"

                                        checked={
                                            paymentMethod==="COD"
                                        }

                                        readOnly
                                    />

                                </div>

                            </div>

                            {/* ONLINE */}

                            <div

                                onClick={()=>
                                    setPaymentMethod(
                                        "ONLINE"
                                    )
                                }

                                style={{

                                    cursor:"pointer",

                                    border:

                                        paymentMethod==="ONLINE"

                                        ?

                                        "2px solid #ec4899"

                                        :

                                        "2px solid #eee",

                                    borderRadius:"22px",

                                    padding:"18px",

                                    background:

                                        paymentMethod==="ONLINE"

                                        ?

                                        "#fff1f2"

                                        :

                                        "#fff"
                                }}
                            >

                                <div

                                    className="d-flex justify-content-between align-items-center"
                                >

                                    <div>

                                        <h5
                                            className="fw-bold mb-1"
                                        >

                                            Online Payment 💳

                                        </h5>

                                        <small
                                            style={{
                                                color:"#64748b"
                                            }}
                                        >

                                            UPI, Cards & Wallets

                                        </small>

                                    </div>

                                    <input

                                        type="radio"

                                        checked={
                                            paymentMethod==="ONLINE"
                                        }

                                        readOnly
                                    />

                                </div>

                                {

                                    paymentMethod==="ONLINE"

                                    &&

                                    (

                                        <div className="mt-4">

                                            <div className="d-flex gap-2 flex-wrap">

                                                <button

                                                    className="btn"

                                                    style={{

                                                        borderRadius:"16px",

                                                        background:"#fff",

                                                        border:

                                                            "2px solid #ddd"
                                                    }}
                                                >

                                                    <Smartphone size={18}/>

                                                    {" "}

                                                    GPay

                                                </button>

                                                <button

                                                    className="btn"

                                                    style={{

                                                        borderRadius:"16px",

                                                        background:"#fff",

                                                        border:

                                                            "2px solid #ddd"
                                                    }}
                                                >

                                                    PhonePe

                                                </button>

                                                <button

                                                    className="btn"

                                                    style={{

                                                        borderRadius:"16px",

                                                        background:"#fff",

                                                        border:

                                                            "2px solid #ddd"
                                                    }}
                                                >

                                                    Paytm

                                                </button>

                                            </div>

                                            <div

                                                className="mt-3"

                                                style={{

                                                    background:"#ecfeff",

                                                    padding:"14px",

                                                    borderRadius:"18px",

                                                    color:"#0891b2"
                                                }}
                                            >

                                                🔒 100% Secure Transaction

                                            </div>

                                        </div>
                                    )
                                }

                            </div>

                        </div>

                    </div>
                    {/* RIGHT */}

                    <div className="col-lg-5">

                        <div

                            className="card border-0 p-4"

                            style={{

                                borderRadius:"35px",

                                background:"#fff",

                                boxShadow:

                                    "0 18px 40px rgba(0,0,0,0.06)"
                            }}
                        >

                            <h3

                                className="fw-bold mb-4"

                                style={{
                                    color:"#334155"
                                }}
                            >

                                Order Summary 💖

                            </h3>

                            {

                                cartItems.map((item)=>(

                                    <div

                                        className="d-flex justify-content-between align-items-center mb-3"

                                        key={item.id}
                                    >

                                        <div>

                                            <h6
                                                className="mb-1 fw-bold"
                                            >

                                                {item.productName}

                                            </h6>

                                            <small
                                                style={{
                                                    color:"#64748b"
                                                }}
                                            >

                                                Qty:
                                                {item.quantity}

                                            </small>

                                        </div>

                                        <h6

                                            className="fw-bold"

                                            style={{
                                                color:"#ec4899"
                                            }}
                                        >

                                            ₹

                                            {

                                                item.price *
                                                item.quantity
                                            }

                                        </h6>

                                    </div>
                                ))
                            }

                            <hr />

                            {/* DELIVERY */}

                            <div

                                className="mb-3"

                                style={{

                                    background:"#fff1f2",

                                    padding:"15px",

                                    borderRadius:"18px",

                                    color:"#ec4899"
                                }}
                            >

                                🚚 Free Delivery • 3–5 Days ✨

                            </div>

                            {/* TOTAL */}

                            <div

                                className="d-flex justify-content-between mb-4"
                            >

                                <h4
                                    className="fw-bold"
                                >

                                    Total

                                </h4>

                                <h4

                                    className="fw-bold"

                                    style={{
                                        color:"#ec4899"
                                    }}
                                >

                                    ₹ {totalPrice}

                                </h4>

                            </div>

                            {/* PROCESSING */}

                            {

                                processing

                                &&

                                (

                                    <div

                                        className="mb-3 text-center"

                                        style={{

                                            background:"#ecfeff",

                                            padding:"18px",

                                            borderRadius:"20px",

                                            color:"#0891b2",

                                            fontWeight:"600"
                                        }}
                                    >

                                        Processing Payment... 💳✨

                                    </div>
                                )
                            }

                            {/* PLACE ORDER */}

                            <button

                                className="btn text-white w-100 py-3"

                                style={{

                                    borderRadius:"20px",

                                    background:

                                        "linear-gradient(135deg,#ec4899,#f472b6)",

                                    fontWeight:"600"
                                }}

                                disabled={processing}

                                onClick={placeOrder}
                            >

                                {

                                    paymentMethod==="ONLINE"

                                    ?

                                    "Pay Now 💳"

                                    :

                                    "Place Order 🎉"
                                }

                            </button>

                        </div>

                    </div>

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

                                Safe shopping
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

                                Secure Checkout 💖

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

export default CheckoutPage;