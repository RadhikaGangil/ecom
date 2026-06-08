import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
    ShoppingCart,
    Heart,
    User,
    Trash2
} from "lucide-react";

function CartPage() {

    const navigate = useNavigate();

    const [cartItems, setCartItems] =
        useState([]);

    // FETCH CART

    const fetchCartItems =
        useCallback(async () => {

        try {

            const response =
                await axios.get(

                    "/api/cart"
                );

            setCartItems(
                response.data
            );

        }

        catch(error) {

            console.log(error);
        }

    }, []);

    useEffect(() => {

        fetchCartItems();

    }, [fetchCartItems]);

    // REMOVE ITEM

    const removeItem =
        async (id) => {

        try {

            await axios.delete(

                `/api/cart/${id}`
            );

            alert(
                "Item Removed ❌"
            );

            fetchCartItems();

        }

        catch(error) {

            console.log(error);
        }
    };

    // UPDATE QUANTITY

    const updateQuantity =
        async (

            item,

            newQuantity

        ) => {

        if(newQuantity < 1) {

            return;
        }

        try {

            await axios.put(

                `/api/cart/${item.id}`,

                {

                    productName:
                        item.productName,

                    price:
                        item.price,

                    quantity:
                        newQuantity,

                    imageUrl:
                        item.imageUrl
                }
            );

            fetchCartItems();

        }

        catch(error) {

            console.log(error);
        }
    };

    // TOTAL

    const totalPrice =
        cartItems.reduce(

        (total,item)=>

            total +
            item.price *
            item.quantity,

        0
    );

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

                                My Happy Cart ✨

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

                </div>

            </nav>

            <div className="container py-5">
                {/* TOP */}

                <div

                    className="d-flex justify-content-between align-items-center flex-wrap mb-5"
                >

                    <div>

                        <h1

                            className="fw-bold"

                            style={{

                                fontSize:"55px",

                                color:"#ec4899"
                            }}
                        >

                            My Cart 🛒

                        </h1>

                        <p
                            style={{
                                color:"#64748b"
                            }}
                        >

                            Tiny happiness waiting 💖

                        </p>

                    </div>

                    <button

                        className="btn text-white px-4 py-3"

                        style={{

                            borderRadius:"18px",

                            background:

                                "linear-gradient(135deg,#ec4899,#f472b6)"
                        }}

                        onClick={()=>
                            navigate("/products")
                        }
                    >

                        Continue Shopping ✨

                    </button>

                </div>

                <div className="row">

                    {/* LEFT */}

                    <div className="col-lg-8">

                        {

                            cartItems.length === 0

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

                                        Cart Is Empty 🧸

                                    </h2>

                                    <p
                                        style={{
                                            color:"#64748b"
                                        }}
                                    >

                                        Add cute MiniNest
                                        goodies to continue ✨

                                    </p>

                                </div>
                            )

                            :

                            (

                                cartItems.map((item)=>(

                                    <div

                                        className="card border-0 mb-4"

                                        key={item.id}

                                        style={{

                                            borderRadius:"35px",

                                            overflow:"hidden",

                                            background:"#fff",

                                            boxShadow:

                                                "0 18px 40px rgba(0,0,0,0.06)"
                                        }}
                                    >

                                        <div className="row g-0">

                                            {/* IMAGE */}

                                            <div className="col-md-4">

                                                <img

                                                    src={item.imageUrl}

                                                    alt={item.productName}

                                                    style={{

                                                        width:"100%",

                                                        height:"100%",

                                                        minHeight:"280px",

                                                        objectFit:"cover"
                                                    }}
                                                />

                                            </div>

                                            {/* DETAILS */}

                                            <div className="col-md-8">

                                                <div className="card-body p-4">

                                                    <h3

                                                        className="fw-bold"

                                                        style={{
                                                            color:"#334155"
                                                        }}
                                                    >

                                                        {item.productName}

                                                    </h3>

                                                    <h4

                                                        className="my-3 fw-bold"

                                                        style={{
                                                            color:"#ec4899"
                                                        }}
                                                    >

                                                        ₹ {item.price}

                                                    </h4>
                                                    {/* QUANTITY */}

                                                    <div

                                                        className="d-flex align-items-center gap-3 mt-4"
                                                    >

                                                        <button

                                                            className="btn"

                                                            style={{

                                                                width:"45px",

                                                                height:"45px",

                                                                borderRadius:"14px",

                                                                background:"#ffe4ec",

                                                                color:"#ec4899",

                                                                fontWeight:"700"
                                                            }}

                                                            onClick={()=>

                                                                updateQuantity(

                                                                    item,

                                                                    item.quantity - 1
                                                                )
                                                            }
                                                        >

                                                            −

                                                        </button>

                                                        <h5
                                                            className="m-0 fw-bold"
                                                        >

                                                            {item.quantity}

                                                        </h5>

                                                        <button

                                                            className="btn"

                                                            style={{

                                                                width:"45px",

                                                                height:"45px",

                                                                borderRadius:"14px",

                                                                background:"#ffe4ec",

                                                                color:"#ec4899",

                                                                fontWeight:"700"
                                                            }}

                                                            onClick={()=>

                                                                updateQuantity(

                                                                    item,

                                                                    item.quantity + 1
                                                                )
                                                            }
                                                        >

                                                            +

                                                        </button>

                                                    </div>

                                                    {/* REMOVE */}

                                                    <button

                                                        className="btn mt-4"

                                                        style={{

                                                            borderRadius:"16px",

                                                            background:"#fee2e2",

                                                            color:"#dc2626",

                                                            fontWeight:"600"
                                                        }}

                                                        onClick={()=>

                                                            removeItem(
                                                                item.id
                                                            )
                                                        }
                                                    >

                                                        <Trash2
                                                            size={18}
                                                        />

                                                        {" "}

                                                        Remove

                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            )
                        }

                    </div>

                    {/* RIGHT SUMMARY */}

                    <div className="col-lg-4">

                        <div

                            className="card border-0 p-4"

                            style={{

                                borderRadius:"35px",

                                background:"#fff",

                                boxShadow:

                                    "0 18px 40px rgba(0,0,0,0.06)"
                            }}
                        >

                            <h2

                                className="fw-bold mb-4"

                                style={{
                                    color:"#334155"
                                }}
                            >

                                Price Details 💖

                            </h2>

                            <div

                                className="d-flex justify-content-between mb-3"
                            >

                                <h5>

                                    Total Items

                                </h5>

                                <h5>

                                    {cartItems.length}

                                </h5>

                            </div>

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

                            <div

                                className="mb-4"

                                style={{

                                    background:"#fff1f2",

                                    padding:"15px",

                                    borderRadius:"18px",

                                    color:"#ec4899"
                                }}
                            >

                                🚚 Free Delivery Available ✨

                            </div>

                            <button

                                className="btn text-white w-100 py-3"

                                style={{

                                    borderRadius:"18px",

                                    background:

                                        "linear-gradient(135deg,#ec4899,#f472b6)",

                                    fontWeight:"600"
                                }}

                                onClick={()=>
                                    navigate("/checkout")
                                }
                            >

                                Proceed To Checkout 🚀

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

export default CartPage;