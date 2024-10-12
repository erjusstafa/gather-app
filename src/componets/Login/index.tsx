import styles from "./style.module.css";
import gatherGamLogo from '../../assets/gatherGamLogo.svg';
import coupleImg from '../../assets/coupleImg.svg';
import apple from '../../assets/apple.svg';
import fb from '../../assets/fb.svg';
import google from '../../assets/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from "react";
import { Services } from "../../services";

function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const services = new Services();

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');
    
        try {
            const response = await services.postAuth('auth/login', { email, password });
            
            if (response.error) {
                setError(response.error);
            } else {
                localStorage.setItem('authToken', response.token); // Save token in local storage
                console.log('Login successful:', response);
                navigate('/'); 
             }
        } catch (err) {
            setError('An error occurred during login.');
            console.log("er",err);
            
        } finally {
            setLoading(false);
        }
    };
    
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
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formField}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}

                                required
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
                        <button type="submit" className={styles.submitButton}>
                        {loading ? 'Logging in...' : 'Get Started'}
                        </button>
                        {error && <p className={styles.errorMessage}>{error}</p>} {/* Display error message */}

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