import { useState } from 'react'
import Logo from "../../../assets/mainlogo.svg"
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context';

function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigation = useNavigate();
    const { isAuthenticated } = useAuth();
    const user = localStorage.getItem('fullName');


    const toggleMenu = (): void => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="GatherGram" className={styles.logo} />
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <ul className={`${styles.navList} ${isOpen ? styles.show : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#works">How it works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.buttonContainer}>
                <button onClick={() => {
                    if (isAuthenticated) {
                        console.log(user);
                    } else {
                        navigation('/login')
                    }
                }} className={styles.signInButton}>{isAuthenticated ? `Welcome ${user === null ? 'User' : user}!` : 'Sign in'}</button>
                <button className={styles.getStartedButton}>{isAuthenticated ? 'Go to Portal' : 'Get started'}</button>

            </div>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </button>
        </header>
    )
}

export default Header