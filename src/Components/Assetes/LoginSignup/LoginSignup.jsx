import { useState } from "react";
import './LoginSignup.css';
import user_icon from '../../../assets/user_icon.png';
import email from '../../../assets/email_icon.webp';
import password from '../../../assets/password_icon.webp';

export default function LoginSignup() {

    const [action, setAction] = useState("Sign Up");

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    {action === "Sign Up" && (
                        <div className="input">
                            <img src={user_icon} width={"30px"} />
                            <input type="text" placeholder="Enter your Username" />
                        </div>
                    )}

                    <div className="input">
                        <img src={email} width={"30px"} />
                        <input type="email" placeholder="Enter your Email" />
                    </div>

                    <div className="input">
                        <img src={password} width={"30px"} />
                        <input type="password" placeholder="Enter your Password" />
                    </div>
                </div>
            </div>

            {action === "Sign Up" && (
                <div className="forgot-password">
                    Forgot Password? <span>Click Here</span>
                </div>
            )}

            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
            </div>
        </>
    );
}
