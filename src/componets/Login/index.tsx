import styles from "./style.module.css";
import gatherGamLogo from '../../assets/gatherGamLogo.svg';
import coupleImg from '../../assets/coupleImg.svg';
import apple from '../../assets/apple.svg';
import fb from '../../assets/fb.svg';
import google from '../../assets/google.svg';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className={styles.container}>
            <div className={styles.coupleImage}>
                <img src={coupleImg} alt="Couple" />
            </div>

            <div className={styles.authFormContainer}>
                <div className={styles.imageContainer}>
                    <img src={gatherGamLogo} alt="Gather Gam Logo" />
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.formText}>
                        <h2 className={styles.formHeader}>Get Started</h2>
                        <p className={styles.formParagraph}>
                            Enter your email address below to login to your existing account or sign up with a new account.
                        </p>
                    </div>
                    <form>
                        <div className={styles.formField}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                required
                            />
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
                        <button type="submit" className={styles.submitButton}>
                            Get Started
                        </button>
                        <div className={styles.divider}>
                            <hr />
                            <span>Or</span>
                            <hr />
                        </div>
                        <div className={styles.socialButtons}>
                            <button className={styles.socialButton}>
                                <img src={google} alt="Google" style={{ marginRight: '0.521vw' }} />
                                Google
                            </button>
                            <button className={styles.socialButton}>
                                <img src={fb} alt="Facebook" style={{ marginRight: '0.521vw' }} />
                                Facebook
                            </button>
                            <button className={styles.socialButton}>
                                <img src={apple} alt="Apple" style={{ marginRight: '0.521vw' }} />
                                Apple
                            </button>
                        </div>
                    </form>
                    <p className={styles.signUp}>
                        Don’t have an account? <Link to="/register">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login