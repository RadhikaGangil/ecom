import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
    User,
    Mail,
    Lock,
    Package,
    LogOut,
    Edit3
} from "lucide-react";

function ProfilePage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    // UPDATE PROFILE
    const updateProfile = async () => {

        try {

            await axios.put(

                "http://localhost:8080/api/users/1",

                {
                    name,
                    email,
                    password
                }
            );

            alert("Profile Updated Successfully 🎉");

        }
        catch(error) {

            console.log(error);

            alert("Update Failed ❌");
        }
    };

    // LOGOUT
    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (

        <div
            className="min-vh-100 py-5"
            style={{
                background:
                    "linear-gradient(to right,#eef2ff,#f8fafc)"
            }}
        >

            <div className="container">

                <div className="row">

                    {/* SIDEBAR */}

                    <div className="col-lg-4 mb-4">

                        <div
                            className="card border-0 shadow-lg p-4 text-center"
                            style={{
                                borderRadius: "30px",
                                background:
                                    "linear-gradient(135deg,#111827,#374151)",
                                color: "white"
                            }}
                        >

                            {/* AVATAR */}

                            <div
                                className="mb-3"
                            >

                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

                                    alt="avatar"

                                    width="120"

                                    style={{
                                        borderRadius: "50%",
                                        border:
                                            "4px solid white"
                                    }}
                                />

                            </div>

                            <h3
                                className="fw-bold"
                            >

                                Welcome 👋

                            </h3>

                            <p
                                className="text-light"
                            >

                                Manage your account settings

                            </p>

                            <hr
                                className="bg-light"
                            />

                            {/* BUTTONS */}

                            <button

                                className="btn btn-light rounded-pill w-100 mb-3"

                                onClick={() =>

                                    navigate("/orders")
                                }
                            >

                                <Package
                                    size={18}
                                    className="me-2"
                                />

                                My Orders

                            </button>

                            <button

                                className="btn btn-danger rounded-pill w-100"

                                onClick={logout}
                            >

                                <LogOut
                                    size={18}
                                    className="me-2"
                                />

                                Logout

                            </button>

                        </div>

                    </div>

                    {/* PROFILE FORM */}

                    <div className="col-lg-8">

                        <div
                            className="card border-0 shadow-lg p-5"
                            style={{
                                borderRadius: "30px",
                                background: "white"
                            }}
                        >

                            {/* HEADER */}

                            <div
                                className="d-flex justify-content-between align-items-center mb-4"
                            >

                                <div>

                                    <h2
                                        className="fw-bold"
                                    >

                                        My Profile 👤

                                    </h2>

                                    <p
                                        className="text-muted"
                                    >

                                        Update your personal details

                                    </p>

                                </div>

                                <div
                                    className="bg-dark text-white p-3 rounded-circle"
                                >

                                    <Edit3 size={22} />

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

                                    className="form-control p-3 shadow-sm"

                                    placeholder="Enter Name"

                                    style={{
                                        borderRadius: "15px"
                                    }}

                                    value={name}

                                    onChange={(e) =>

                                        setName(
                                            e.target.value
                                        )
                                    }
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

                                    className="form-control p-3 shadow-sm"

                                    placeholder="Enter Email"

                                    style={{
                                        borderRadius: "15px"
                                    }}

                                    value={email}

                                    onChange={(e) =>

                                        setEmail(
                                            e.target.value
                                        )
                                    }
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

                                    New Password

                                </label>

                                <input

                                    type="password"

                                    className="form-control p-3 shadow-sm"

                                    placeholder="Change Password"

                                    style={{
                                        borderRadius: "15px"
                                    }}

                                    value={password}

                                    onChange={(e) =>

                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            {/* BUTTON */}

                            <button

                                className="btn btn-dark px-5 py-3 rounded-pill fw-bold"

                                onClick={updateProfile}
                            >

                                Update Profile 🚀

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProfilePage;