import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Banner from "./Banner";
import Features from "./Features";
function Main() {
    return (
        <>
            {" "}
            <div className={styles.alertBanner}>
                <span className={styles.alertText}>New</span>
                <span>
                    We are excited to announce Lorem Ipsum. <Link to="/">Learn more</Link>
                </span>
            </div>
            <Header />
            <Home />
            <Banner />
            <Features />
        </>
    );
}

export default Main;
