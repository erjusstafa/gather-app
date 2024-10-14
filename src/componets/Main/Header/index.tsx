import { useState, useEffect } from 'react';
import Logo from "../../../assets/mainlogo.svg";
import styles from "./style.module.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context';

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigation = useNavigate();
    const { isAuthenticated } = useAuth();

    const user = (() => {
        const storedUser = localStorage.getItem('fullName');
        try {
            const parsedUser = JSON.parse(storedUser || '[]');
            return Array.isArray(parsedUser) ? parsedUser[0] : parsedUser;
        } catch {
            return storedUser || ''; 
        }
    })();

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
     
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
                <button 
                    onClick={() => {
                        if (isAuthenticated) {
                            console.log(user);
                        } else {
                            navigation('/login');
                        }
                    }} 
                    className={styles.signInButton}
                >
                    {isAuthenticated ? `Welcome ${user || 'User'}!` : 'Sign in'}
                </button>
                <button className={styles.getStartedButton}>
                    {isAuthenticated ? 'Go to Portal' : 'Get started'}
                </button>
            </div>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </button>
        </header>
    );
}

export default Header;
