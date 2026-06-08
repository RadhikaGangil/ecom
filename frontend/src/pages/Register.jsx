import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Lock,
    Shield,
    Heart
} from "lucide-react";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        role: "USER"
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:

                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "/api/auth/register",

                formData
            );

            setMessage(
                response.data
            );

            setFormData({

                name:"",
                email:"",
                password:"",
                role:"USER"
            });

        }

        catch(error) {

            console.log(error);

            if(

                error.response &&
                error.response.data
            ) {

                setMessage(

                    typeof error.response.data
                    === "string"

                    ?

                    error.response.data

                    :

                    JSON.stringify(
                        error.response.data
                    )
                );
            }

            else {

                setMessage(

                    "Server not reachable"
                );
            }
        }
    };

    return (

        <div

            className="min-vh-100"

            style={{

                background:

                    "linear-gradient(135deg,#ffe4ec,#e0f2fe,#fff7ed)",

                overflow:"hidden"
            }}
        >

            <div className="container-fluid">

                <div className="row min-vh-100">

                    {/* LEFT PANEL */}

                    <div

                        className="col-lg-6 d-none d-lg-flex flex-column justify-content-center px-5"

                    >

                        <div
                            style={{
                                maxWidth:"540px"
                            }}
                        >

                            <div

                                className="d-inline-flex justify-content-center align-items-center mb-4"

                                style={{

                                    width:"90px",

                                    height:"90px",

                                    borderRadius:"30px",

                                    background:

                                        "linear-gradient(135deg,#ff8fab,#f9a8d4)",

                                    color:"white",

                                    boxShadow:

                                        "0 15px 35px rgba(255,105,180,0.3)"
                                }}
                            >

                                <Heart
                                    size={40}
                                />

                            </div>

                            <h1

                                className="fw-bold"

                                style={{

                                    fontSize:"70px",

                                    color:"#ec4899"
                                }}
                            >

                                MiniNest 🧸

                            </h1>

                            <h3

                                className="mt-3"

                                style={{
                                    color:"#475569"
                                }}
                            >

                                Little Joys,
                                Big Smiles ✨

                            </h3>

                            <p

                                className="mt-4"

                                style={{

                                    color:"#64748b",

                                    lineHeight:"34px",

                                    fontSize:"19px"
                                }}
                            >

                                Discover toys,
                                baby fashion,
                                cute essentials and
                                joyful shopping for
                                little ones.

                            </p>

                            <img

                                src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"

                                alt="kids"

                                style={{

                                    width:"100%",

                                    maxWidth:"420px",

                                    marginTop:"25px",

                                    filter:

                                        "drop-shadow(0 15px 30px rgba(0,0,0,0.15))"
                                }}
                            />

                        </div>

                    </div>

                    {/* REGISTER CARD */}

                    <div

                        className="col-lg-6 d-flex justify-content-center align-items-center p-4"

                    >

                        <div

                            className="card border-0 p-5"

                            style={{

                                width:"100%",

                                maxWidth:"540px",

                                borderRadius:"40px",

                                background:

                                    "rgba(255,255,255,0.88)",

                                backdropFilter:

                                    "blur(18px)",

                                boxShadow:

                                    "0 25px 60px rgba(0,0,0,0.15)"
                            }}
                        >

                            <div className="text-center mb-4">

                                <h1

                                    className="fw-bold"

                                    style={{

                                        color:"#ec4899",

                                        fontSize:"42px"
                                    }}
                                >

                                    Join MiniNest 💖

                                </h1>

                                <p
                                    className="text-muted"
                                >

                                    Create your happy little account

                                </p>

                            </div>

                            {

                                message && (

                                    <div

                                        className="alert alert-info text-center"

                                        style={{
                                            borderRadius:"16px"
                                        }}
                                    >

                                        {message}

                                    </div>
                                )
                            }

                            <form onSubmit={handleSubmit}>
                                                             {/* NAME */}

                                <div className="mb-4">

                                    <label className="fw-semibold mb-2">

                                        Full Name

                                    </label>

                                    <div

                                        className="d-flex align-items-center px-3"

                                        style={{

                                            height:"62px",

                                            border:

                                                "2px solid #fbcfe8",

                                            borderRadius:"18px",

                                            background:"#fff"
                                        }}
                                    >

                                        <User
                                            size={20}
                                            color="#ec4899"
                                        />

                                        <input

                                            type="text"

                                            name="name"

                                            placeholder="Enter Full Name"

                                            className="form-control border-0 bg-transparent shadow-none ms-3"

                                            value={formData.name}

                                            onChange={handleChange}

                                            required
                                        />

                                    </div>

                                </div>

                                {/* EMAIL */}

                                <div className="mb-4">

                                    <label className="fw-semibold mb-2">

                                        Email Address

                                    </label>

                                    <div

                                        className="d-flex align-items-center px-3"

                                        style={{

                                            height:"62px",

                                            border:

                                                "2px solid #bfdbfe",

                                            borderRadius:"18px",

                                            background:"#fff"
                                        }}
                                    >

                                        <Mail
                                            size={20}
                                            color="#3b82f6"
                                        />

                                        <input

                                            type="email"

                                            name="email"

                                            placeholder="Enter Email"

                                            className="form-control border-0 bg-transparent shadow-none ms-3"

                                            value={formData.email}

                                            onChange={handleChange}

                                            required
                                        />

                                    </div>

                                </div>

                                {/* PASSWORD */}

                                <div className="mb-4">

                                    <label className="fw-semibold mb-2">

                                        Password

                                    </label>

                                    <div

                                        className="d-flex align-items-center px-3"

                                        style={{

                                            height:"62px",

                                            border:

                                                "2px solid #ddd6fe",

                                            borderRadius:"18px",

                                            background:"#fff"
                                        }}
                                    >

                                        <Lock
                                            size={20}
                                            color="#8b5cf6"
                                        />

                                        <input

                                            type="password"

                                            name="password"

                                            placeholder="Create Password"

                                            className="form-control border-0 bg-transparent shadow-none ms-3"

                                            value={formData.password}

                                            onChange={handleChange}

                                            required
                                        />

                                    </div>

                                </div>

                                {/* ROLE */}

                                <div className="mb-4">

                                    <label className="fw-semibold mb-2">

                                        Select Role

                                    </label>

                                    <div

                                        className="d-flex align-items-center px-3"

                                        style={{

                                            height:"62px",

                                            border:

                                                "2px solid #fde68a",

                                            borderRadius:"18px",

                                            background:"#fff"
                                        }}
                                    >

                                        <Shield
                                            size={20}
                                            color="#f59e0b"
                                        />

                                        <select

                                            name="role"

                                            className="form-select border-0 bg-transparent shadow-none ms-3"

                                            value={formData.role}

                                            onChange={handleChange}
                                        >

                                            <option value="USER">

                                                USER

                                            </option>

                                            <option value="ADMIN">

                                                ADMIN

                                            </option>

                                        </select>

                                    </div>

                                </div>

                                {/* REGISTER BUTTON */}

                                <button

                                    type="submit"

                                    className="btn w-100 text-white fw-bold"

                                    style={{

                                        height:"60px",

                                        borderRadius:"20px",

                                        background:

                                            "linear-gradient(135deg,#ec4899,#f472b6)",

                                        border:"none",

                                        fontSize:"18px",

                                        boxShadow:

                                            "0 15px 30px rgba(236,72,153,0.3)"
                                    }}
                                >

                                    Create MiniNest Account 🎀

                                </button>

                            </form>

                            {/* LOGIN */}

                            <p

                                className="text-center mt-4"

                            >

                                Already have an account?

                                <span

                                    className="fw-bold ms-2"

                                    style={{

                                        cursor:"pointer",

                                        color:"#ec4899"
                                    }}

                                    onClick={() =>
                                        navigate("/login")
                                    }
                                >

                                    Login

                                </span>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;