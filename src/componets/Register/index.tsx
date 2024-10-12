import { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import coupleImg from "../../assets/coupleImg.svg";
import apple from "../../assets/apple.svg";
import fb from "../../assets/fb.svg";
import google from "../../assets/google.svg";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Services } from "../../services";
import { useNavigate } from "react-router-dom";
type Role = "event-organizer" | "bride-groom";

const Register: React.FC = () => {


    const [selectedRole, setSelectedRole] = useState<Role>("event-organizer");
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [region, setRegion] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const services = new Services();
/*     const navigate = useNavigate(); */

    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRole(e.target.value as Role);
    };

    // Validation function
    const validateForm = (): boolean => {
        if (fullName.length < 4 || fullName.length > 50) {
            setMessage('Full name must be between 4 and 50 characters.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setMessage('Email is invalid.');
            return false;
        }
        if (!validatePhoneNumber(phone)) {
            setMessage('Phone number must be 10 digits long and contain only numbers.');
            return false;
        }
        if (!validatePassword(password)) {
            setMessage('Password must be at least 8 characters long and include 1 uppercase letter, 1 number, and 1 symbol.');
            return false;
        }
        setMessage(''); // Clear any existing messages
        return true;
    };

    console.log("phone", phone.length);
    
    // Phone number validation function
    const validatePhoneNumber = (phone: string): boolean => {
        const phonePattern = /^\(?([2-9][0-9]{2})\)?[-.● ]?([2-9][0-9]{2})[-.● ]?([0-9]{4})$/;
        return phonePattern.test(phone);
    };
    // Password validation function
    const validatePassword = (password: string): boolean => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/; // At least 1 uppercase, 1 number, 1 symbol, min 8 chars
        return passwordPattern.test(password);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            console.log("weoweweijff");
            
        }

        setLoading(true);

        try {
            const data = await services.postRegister('auth/register', {
                fullName,
                email,
                phone,
                password,
            });

            console.log("---------:", data); // Log the response data

            // Check for any error messages in the response
            if (data && data.error) {
                setMessage(data.message || 'Registration failed. Please try again.');
                return;
            }

            // Registration successful, redirect to login after loading
            setMessage('Registration successful! Redirecting to login...');

         /*    setTimeout(() => {
                navigate('/login');
            }, 2000);  */
        } catch (error) {
            console.error("Error:", error); // Log the error for debugging
        } finally {
            setLoading(false); // End loading state
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
                        <h2 className={styles.roleTitle}>Welcome! Please tell us a bit about yourself</h2>
                        <div className={styles.roleOptions}>
                            <label className={styles.roleLabel}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="event-organizer"
                                    checked={selectedRole === 'event-organizer'}
                                    onChange={handleRoleChange}
                                    className={styles.radioInput}
                                />
                                <span className={styles.radioCustom}></span>
                                I am an event organizer
                            </label>
                            <label className={styles.roleLabel}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="bride-groom"
                                    checked={selectedRole === 'bride-groom'}
                                    onChange={handleRoleChange}
                                    className={styles.radioInput}
                                />
                                <span className={styles.radioCustom}></span>
                                I am Bride/Groom
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
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="full-name">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="region">Region</label>
                            <input value={region} onChange={(e: ChangeEvent<HTMLInputElement>) => setRegion(e.target.value)}
                                type="tel" id="mobile" placeholder="+61" />
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="mobile">Mobile Number</label>
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputStyle={{
                                    padding: '0.55rem 0.9rem',
                                    border: '1px solid #32323266',
                                    borderRadius: '0.5rem',
                                    outline: 'none',
                                    width: '100%',
                                    fontSize: '0.9rem',
                                }}
                                buttonStyle={{
                                    backgroundColor: 'transparent',
                                }}
                            />

                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.termsAndConditions}>
                            <label htmlFor="terms">
                                By signing up, I agree to the{" "}
                                <a href="/terms">terms and conditions</a> and have read the{" "}
                                <a href="/privacy">privacy policy</a>.
                            </label>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={loading}>
                            {loading ? 'Signing up...' : 'Sign up'}
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
                            Already have an account? <a href="/login">Sign in</a>
                        </p>
                    </form>

                    {message && <p className={styles.errorMessage}>{message}</p>}

                </div>
            </div>
        </div>
    );
}

export default Register;
