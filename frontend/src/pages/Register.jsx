import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                formData
            );

            setMessage(response.data);

            setFormData({
                name: "",
                email: "",
                password: "",
                role: "USER"
            });

        }
        catch (error) {

            console.log(error);

            if (error.response && error.response.data) {

                setMessage(JSON.stringify(error.response.data));

            } else {

                setMessage("Registration Failed");
            }
        }
    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",

                backgroundImage:
                    "url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1974&auto=format&fit=crop')",

                backgroundSize: "cover",

                backgroundPosition: "center",

                backgroundRepeat: "no-repeat"
            }}
        >

            <div
                className="card border-0 shadow-lg p-4"
                style={{
                    width: "100%",
                    maxWidth: "450px",
                    borderRadius: "25px",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(8px)"
                }}
            >

                <div className="text-center mb-4">

                    <h1
                        style={{
                            color: "#131921",
                            fontWeight: "bold",
                            letterSpacing: "1px"
                        }}
                    >
                        ShopEase
                    </h1>

                    <p className="text-muted fs-5">
                        Create Your Shopping Account
                    </p>

                </div>

                {
                    message && (

                        <div className="alert alert-info text-center">
                            {message}
                        </div>
                    )
                }

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            Full Name
                        </label>

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required

                            style={{
                                borderRadius: "12px"
                            }}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            Email Address
                        </label>

                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required

                            style={{
                                borderRadius: "12px"
                            }}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required

                            style={{
                                borderRadius: "12px"
                            }}
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-bold">
                            Select Role
                        </label>

                        <select
                            className="form-select form-select-lg"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}

                            style={{
                                borderRadius: "12px"
                            }}
                        >

                            <option value="USER">
                                USER
                            </option>

                            <option value="ADMIN">
                                ADMIN
                            </option>

                        </select>

                    </div>

                    <button
                        type="submit"
                        className="btn w-100 py-3 fw-bold"

                        style={{
                            background:
                                "linear-gradient(to right, #ff9900, #ff6600)",

                            color: "white",

                            borderRadius: "14px",

                            fontSize: "18px",

                            border: "none"
                        }}
                    >

                        Create Account

                    </button>

                </form>

                <div className="text-center mt-4">

                    <span className="text-muted">
                        Already have an account?
                    </span>

                    <button
                        className="btn btn-outline-dark w-100 mt-3 py-2"

                        style={{
                            borderRadius: "12px"
                        }}

                        onClick={() => navigate("/login")}
                    >

                        Login

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Register;