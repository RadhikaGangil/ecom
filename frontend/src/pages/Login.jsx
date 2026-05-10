import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",

        password: "",

        role: ""
    });

    const [message, setMessage] =
        useState("");

    // HANDLE CHANGE

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    // HANDLE LOGIN

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:8080/api/auth/login",

                formData
            );

            console.log(response.data);

            // STORE TOKEN
            localStorage.setItem(

                "token",

                response.data.token
            );

            // STORE ROLE
            localStorage.setItem(

                "role",

                response.data.role
            );

            setMessage("Login Successful");

            // ROLE BASED REDIRECT

            if (response.data.role === "ADMIN") {

                navigate("/admin");

            } else {

                navigate("/home");
            }

        }
        catch (error) {

            console.log(error);

            setMessage("Invalid Credentials");
        }
    };

    return (

        <div

            className="d-flex justify-content-center align-items-center"

            style={{

                minHeight: "100vh",

                backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop')",

                backgroundSize: "cover",

                backgroundPosition: "center"
            }}
        >

            <div

                className="bg-white p-5 shadow"

                style={{

                    width: "500px",

                    borderRadius: "30px"
                }}
            >

                <h1

                    className="text-center fw-bold"

                    style={{
                        fontSize: "70px"
                    }}
                >

                    ShopEase

                </h1>

                <h2

                    className="text-center text-muted mb-5"
                >

                    Welcome Back

                </h2>

                {/* MESSAGE */}

                {

                    message && (

                        <div
                            className="alert alert-info"
                        >

                            {message}

                        </div>
                    )
                }

                {/* FORM */}

                <form onSubmit={handleSubmit}>

                    {/* EMAIL */}

                    <div className="mb-4">

                        <label
                            className="fw-bold mb-2"
                        >

                            Email

                        </label>

                        <input

                            type="email"

                            name="email"

                            className="form-control p-3"

                            placeholder="Enter Email"

                            onChange={handleChange}

                            required
                        />

                    </div>

                    {/* PASSWORD */}

                    <div className="mb-4">

                        <label
                            className="fw-bold mb-2"
                        >

                            Password

                        </label>

                        <input

                            type="password"

                            name="password"

                            className="form-control p-3"

                            placeholder="Enter Password"

                            onChange={handleChange}

                            required
                        />

                    </div>

                    {/* ROLE */}

                    <div className="mb-4">

                        <label
                            className="fw-bold mb-2"
                        >

                            Select Role

                        </label>

                        <select

                            name="role"

                            className="form-control p-3"

                            onChange={handleChange}

                            required
                        >

                            <option value="">

                                Choose Role

                            </option>

                            <option value="USER">

                                USER

                            </option>

                            <option value="ADMIN">

                                ADMIN

                            </option>

                        </select>

                    </div>

                    {/* LOGIN BUTTON */}

                    <button

                        type="submit"

                        className="btn w-100 p-3 fw-bold"

                        style={{

                            background:
                                "#131921",

                            color: "white",

                            borderRadius: "15px",

                            fontSize: "22px"
                        }}
                    >

                        Login

                    </button>

                </form>

                {/* REGISTER */}

                <div className="text-center mt-4">

                    <p className="text-muted">

                        New User?

                    </p>

                    <button

                        className="btn btn-outline-dark w-100 p-3"

                        onClick={() =>
                            navigate("/register")
                        }
                    >

                        Create Account

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Login;