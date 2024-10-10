import { useState } from "react";
import styles from "./style.module.css";
import coupleImg from "../../assets/coupleImg.svg";
import apple from "../../assets/apple.svg";
import fb from "../../assets/fb.svg";
import google from "../../assets/google.svg";

type Role = "event-organizer" | "bride-groom";

const Register: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<Role>("event-organizer");

    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRole(e.target.value as Role);
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

                    <form className={styles.signupForm}>
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
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="full-name">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="region">Region</label>
                            <select id="region" required>
                                <option value="Australia">Australia</option>
                                <option value="United States">United States</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="tel" id="mobile" placeholder="+61" required />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
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

                        <button type="submit" className={styles.submitButton}>
                            Sign up
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
                </div>
            </div>
        </div>
    );
}

export default Register;
