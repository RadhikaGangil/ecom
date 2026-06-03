import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {

    User,
    Mail,
    Phone,
    MapPin,
    Lock,
    Package,
    ShoppingCart,
    LogOut,
    Edit3,
    Heart

} from "lucide-react";

function ProfilePage() {

    const navigate = useNavigate();

    // STATES

    const [name,setName] =
        useState("");

    const [email,setEmail] =
        useState("");

    const [phone,setPhone] =
        useState("");

    const [address,setAddress] =
        useState("");

    const [password,setPassword] =
        useState("");

    // FETCH USER

    useEffect(()=>{

        fetchUser();

    },[]);

    const fetchUser =
        async()=>{

        try{

            const response =
                await axios.get(

                    "http://localhost:8080/api/users/1"
                );

            const user =
                response.data;

            setName(
                user.name || ""
            );

            setEmail(
                user.email || ""
            );

            setPhone(
                user.phone || ""
            );

            setAddress(
                user.address || ""
            );

        }

        catch(error){

            console.log(error);
        }
    };

    // UPDATE PROFILE

    const updateProfile =
        async()=>{

        try{

            await axios.put(

                "http://localhost:8080/api/users/1",

                {

                    name,
                    email,
                    phone,
                    address
                }
            );

            alert(
                "Profile Updated 🎉"
            );

        }

        catch(error){

            console.log(error);

            alert(
                "Update Failed ❌"
            );
        }
    };

    // LOGOUT

    const logout =
        ()=>{

        localStorage.removeItem(
            "token"
        );

        navigate(
            "/login"
        );
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

                                My Profile ✨

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

                        <User size={18}/>

                    </button>

                </div>

            </nav>

            <div className="container py-5">
                <div className="row">

                    {/* LEFT PROFILE CARD */}

                    <div className="col-lg-4 mb-4">

                        <div

                            className="card border-0 p-4 text-center"

                            style={{

                                borderRadius:"35px",

                                background:

                                    "linear-gradient(135deg,#ff8fab,#f472b6)",

                                color:"white",

                                boxShadow:

                                    "0 20px 45px rgba(236,72,153,0.25)"
                            }}
                        >

                            {/* AVATAR */}

                            <div className="mb-4">

                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

                                    alt="avatar"

                                    width="120"

                                    style={{

                                        borderRadius:"50%",

                                        border:

                                            "4px solid white",

                                        boxShadow:

                                            "0 10px 25px rgba(0,0,0,0.15)"
                                    }}
                                />

                            </div>

                            <h3
                                className="fw-bold"
                            >

                                {name || "MiniNest User"} 💖

                            </h3>

                            <p
                                style={{
                                    opacity:"0.9"
                                }}
                            >

                                Manage your account
                                & little happiness ✨

                            </p>

                            <hr
                                style={{
                                    opacity:"0.3"
                                }}
                            />

                            {/* SHORTCUTS */}

                            <button

                                className="btn btn-light w-100 mb-3"

                                style={{
                                    borderRadius:"18px"
                                }}

                                onClick={()=>
                                    navigate("/orders")
                                }
                            >

                                <Package
                                    size={18}
                                    className="me-2"
                                />

                                My Orders 📦

                            </button>

                            <button

                                className="btn btn-light w-100 mb-3"

                                style={{
                                    borderRadius:"18px"
                                }}

                                onClick={()=>
                                    navigate("/cart")
                                }
                            >

                                <ShoppingCart
                                    size={18}
                                    className="me-2"
                                />

                                My Cart 🛒

                            </button>

                            <button

                                className="btn w-100"

                                style={{

                                    borderRadius:"18px",

                                    background:"#dc2626",

                                    color:"white"
                                }}

                                onClick={logout}
                            >

                                <LogOut
                                    size={18}
                                    className="me-2"
                                />

                                Logout 🚪

                            </button>

                        </div>

                    </div>

                    {/* RIGHT FORM */}

                    <div className="col-lg-8">
                        <div

                            className="card border-0 p-5"

                            style={{

                                borderRadius:"35px",

                                background:"#fff",

                                boxShadow:

                                    "0 18px 40px rgba(0,0,0,0.06)"
                            }}
                        >

                            {/* HEADER */}

                            <div

                                className="d-flex justify-content-between align-items-center mb-4"
                            >

                                <div>

                                    <h2
                                        className="fw-bold"
                                        style={{
                                            color:"#334155"
                                        }}
                                    >

                                        My Profile 👤

                                    </h2>

                                    <p
                                        style={{
                                            color:"#64748b"
                                        }}
                                    >

                                        Update your personal details ✨

                                    </p>

                                </div>

                                <div

                                    className="text-white p-3"

                                    style={{

                                        borderRadius:"18px",

                                        background:

                                            "linear-gradient(135deg,#ec4899,#f472b6)"
                                    }}
                                >

                                    <Edit3 size={22}/>

                                </div>

                            </div>

                            {/* NAME */}

                            <div className="mb-4">

                                <label
                                    className="fw-bold mb-2"
                                >

                                    <User
                                        size={18}
                                        className="me-2"
                                    />

                                    Full Name

                                </label>

                                <input

                                    type="text"

                                    className="form-control p-3"

                                    placeholder="Enter Name"

                                    value={name}

                                    onChange={(e)=>

                                        setName(
                                            e.target.value
                                        )
                                    }

                                    style={{

                                        borderRadius:"18px",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}
                                />

                            </div>

                            {/* EMAIL */}

                            <div className="mb-4">

                                <label
                                    className="fw-bold mb-2"
                                >

                                    <Mail
                                        size={18}
                                        className="me-2"
                                    />

                                    Email Address

                                </label>

                                <input

                                    type="email"

                                    className="form-control p-3"

                                    placeholder="Enter Email"

                                    value={email}

                                    onChange={(e)=>

                                        setEmail(
                                            e.target.value
                                        )
                                    }

                                    style={{

                                        borderRadius:"18px",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}
                                />

                            </div>

                            {/* PHONE */}

                            <div className="mb-4">

                                <label
                                    className="fw-bold mb-2"
                                >

                                    <Phone
                                        size={18}
                                        className="me-2"
                                    />

                                    Mobile Number

                                </label>

                                <input

                                    type="text"

                                    className="form-control p-3"

                                    placeholder="Enter Phone"

                                    value={phone}

                                    onChange={(e)=>

                                        setPhone(
                                            e.target.value
                                        )
                                    }

                                    style={{

                                        borderRadius:"18px",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}
                                />

                            </div>

                            {/* ADDRESS */}

                            <div className="mb-4">

                                <label
                                    className="fw-bold mb-2"
                                >

                                    <MapPin
                                        size={18}
                                        className="me-2"
                                    />

                                    Address

                                </label>

                                <textarea

                                    rows="3"

                                    className="form-control p-3"

                                    placeholder="Enter Address"

                                    value={address}

                                    onChange={(e)=>

                                        setAddress(
                                            e.target.value
                                        )
                                    }

                                    style={{

                                        borderRadius:"18px",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}
                                />

                            </div>

                            {/* PASSWORD */}

                            <div className="mb-5">

                                <label
                                    className="fw-bold mb-2"
                                >

                                    <Lock
                                        size={18}
                                        className="me-2"
                                    />

                                    Change Password

                                </label>

                                <input

                                    type="password"

                                    className="form-control p-3"

                                    placeholder="New Password"

                                    value={password}

                                    onChange={(e)=>

                                        setPassword(
                                            e.target.value
                                        )
                                    }

                                    style={{

                                        borderRadius:"18px",

                                        border:

                                            "2px solid #fbcfe8"
                                    }}
                                />

                            </div>

                            {/* UPDATE BUTTON */}

                            <button

                                className="btn text-white px-5 py-3"

                                style={{

                                    borderRadius:"20px",

                                    background:

                                        "linear-gradient(135deg,#ec4899,#f472b6)",

                                    fontWeight:"600"
                                }}

                                onClick={updateProfile}
                            >

                                Update Profile 🚀

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

                                Little smiles,
                                happy shopping ✨

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

export default ProfilePage;