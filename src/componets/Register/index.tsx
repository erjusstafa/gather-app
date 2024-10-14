import { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import coupleImg from "../../assets/coupleImg.svg";
import apple from "../../assets/apple.svg";
import fb from "../../assets/fb.svg";
import google from "../../assets/google.svg";

import { Services } from "../../services";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
/* import PhoneInput from "../PhoneInput";
 */import { Link, useNavigate } from "react-router-dom";
import RegionInput from "../RegionInput";
import PhoneInput from "../PhoneInput";

type Role = "event-organizer" | "bride-groom";
interface Message {
    text: string;
    isError: boolean;
}

const Register: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<Role>("event-organizer");
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    // const [region, setRegion] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<Message>({ text: "", isError: false });
    const [phoneNumber, setPhoneNumber] = useState<string>("");


    const services = new Services();
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRole(e.target.value as Role);
    };

    // Validation function
    const validateForm = (): boolean => {
        if (fullName.length < 4 || fullName.length > 50) {
            setMessage({ text: "Full name must be between 4 and 50 characters.", isError: true });
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setMessage({ text: "Email is invalid.", isError: true });
            return false;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            setMessage({ text: "Phone number must be 10 digits long and contain only numbers.", isError: true });
            return false;
        }
        if (!validatePassword(password)) {
            setMessage({ text: "Password must be at least 8 characters long and include 1 uppercase letter, 1 number, and 1 symbol.", isError: true });
            return false;
        }
        setMessage({ text: "", isError: false });
        return true;
    };

    // Phone number validation function
    const validatePhoneNumber = (phone: string): boolean => {
        const phonePattern =
            /^\(?([2-9][0-9]{2})\)?[-.● ]?([2-9][0-9]{2})[-.● ]?([0-9]{4})$/;
        return phonePattern.test(phone);
    };
    // Password validation function
    const validatePassword = (password: string): boolean => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log("");
        }
        setLoading(true);
        try {
            const data = await services.postRegister("auth/register", { fullName, email, phoneNumber, password });
            // Check for any error messages in the response
            if (data && data.error) {
                setMessage({ text: data.message || 'Registration failed. Please try again.', isError: true });
                return;
            }


            // Save fullName and email as an array of objects in localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push({ fullName, email });
            localStorage.setItem('users', JSON.stringify(users));

            setMessage({ text: 'Registration successful! Redirecting to login...', isError: false });
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error("Error:", error);
            setMessage({ text: 'An unexpected error occurred. Please try again.', isError: true });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.coupleImage}>
                <img src={coupleImg} alt="Couple" />
            </div>

            <div className={styles.registerFormContainer}>
                <div className={styles.formContent}>
                    <div className={styles.roleSelectionContainer}>
                        <h2 className={styles.roleTitle}>
                            Welcome! Please tell us a bit about yourself
                        </h2>
                        <div className={styles.roleOptions}>
                            <label className={styles.roleLabel}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="event-organizer"
                                    checked={selectedRole === "event-organizer"}
                                    onChange={handleRoleChange}
                                    className={styles.radioInput}
                                />
                                <span className={styles.radioCustom}></span>I am an event
                                organizer
                            </label>
                            <label className={styles.roleLabel}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="bride-groom"
                                    checked={selectedRole === "bride-groom"}
                                    onChange={handleRoleChange}
                                    className={styles.radioInput}
                                />
                                <span className={styles.radioCustom}></span>I am Bride/Groom
                            </label>
                        </div>
                    </div>

                    <form className={styles.signupForm} onSubmit={handleSubmit}>
                        <h2>Signup</h2>
                        <p>
                            Enter your details below to signup or sign in with an existing
                            account.
                        </p>
                        <div className={styles.formField}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setEmail(e.target.value)
                                }
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="full-name">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setFullName(e.target.value)
                                }
                                required
                            />
                        </div>
                        <RegionInput />
                        <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                        <div className={styles.formField}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter password"
                                    className={styles.input}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className={styles.toggleButton}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <MdOutlineRemoveRedEye />
                                    ) : (
                                        <IoEyeOffOutline />
                                    )}
                                </button>
                            </div>
                        </div>


                        {message.text && (
                            <p
                                className={styles.errorMessage}
                                style={{ border: `1px solid ${message.isError ? 'rgb(255 0 27)' : 'rgb(43 109 79)'} `, color: message.isError ? "rgb(255, 0, 27)" : "rgb(43 109 79)", backgroundColor: message.isError ? "rgb(255 183 191)" : "rgb(168 200 185)" }}
                            >
                                {message.text}
                            </p>
                        )}
                        <div className={styles.termsAndConditions}>
                            <label htmlFor="terms">
                                By signing up, I agree to the{" "}
                                <a href="/terms">terms and conditions</a> and have read the{" "}
                                <a href="/privacy">privacy policy</a>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={loading}
                        >
                            {loading ? "Signing up..." : "Sign up"}
                        </button>

                        <div className={styles.divider}>
                            <hr />
                            <span>Or</span>
                            <hr />
                        </div>
                        <div className={styles.socialButtons}>
                            <button className={styles.socialButton}>
                                <img src={google} alt="Google" />
                                Google
                            </button>
                            <button className={styles.socialButton}>
                                <img src={fb} alt="Facebook" />
                                Facebook
                            </button>
                            <button className={styles.socialButton}>
                                <img src={apple} alt="Apple" />
                                Apple
                            </button>
                        </div>

                        <p className={styles.loginLink}>
                            Already have an account? <Link to="/login">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
