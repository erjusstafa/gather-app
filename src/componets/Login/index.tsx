import styles from "./style.module.css";
import gatherGamLogo from '../../assets/gatherGamLogo.svg';
import coupleImg from '../../assets/coupleImg.svg';
import apple from '../../assets/apple.svg';
import fb from '../../assets/fb.svg';
import google from '../../assets/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from "react";
import { Services } from "../../services";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useAuth } from "../../context";


type User = {
    fullName: string;
    email: string;
};
function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const services = new Services();
    const { login } = useAuth();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await services.postAuth('auth/login', { email, password });
            if (response.error) {
                setError(response.error);
            } else {
                sessionStorage.setItem('authToken', response?.data?.accessToken);
                const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
                const user = storedUsers.find((user) => user.email === email);

                if (user) {
                    const { fullName } = user;
                    saveUserData(fullName, email);
                }

                login(response?.data?.accessToken);
                navigate('/');
            }
        } catch (err) {
            setError('An error occurred during login.');
            console.log("err", err);

        } finally {
            setLoading(false);
        }
    };


    const saveUserData = (fullName: string, email: string) => {
        const userData = [fullName, email];
        localStorage.setItem('fullName', JSON.stringify(userData));
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
                            <div className={styles.inputWrapper}>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className={styles.input}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className={styles.toggleButton}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <MdOutlineRemoveRedEye /> : <IoEyeOffOutline />}
                                </button>
                            </div>
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