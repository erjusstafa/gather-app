import { useState } from "react";
import styles from "./style.module.css";
import check from "../../../assets/pricing/check.svg";

interface IPlans{
    name: string;
    price: string;
    period: string;
    description: string;
    details: string;
    featuresOne: string[];
    featuresTwo: string[];
    buttonText: string;
    isPopular?: boolean,
}

const plans:IPlans[] = [
    {
        name: "Basic plan",
        price: "00",
        period: "per month",
        description: "Our most popular plan for small teams.",
        details: "Everything in our free plan.",

        featuresOne: [
            "Access to basic features",
            "Basic reporting + analytics",
            "Up to 10 individual users",
            "20GB individual data",
            "Basic chat support",
        ],

        featuresTwo: [
            "Attend events",
            "Automatic updates",
            "Backup your account",
            "Audit log and notes",
            "Feature requests",
        ],
        buttonText: "Get started",
    },
    {
        name: "Business plan",
        price: "20",
        period: "per month",
        description: "Advanced features and reporting.",
        details: "Everything in our basic plan plus....",
        featuresOne: [
            "200+ integrations",
            "Advanced reporting",
            "Up to 20 individual users",
            "40GB individual data",
            "Priority chat support",
        ],
        featuresTwo: [
            "Advanced custom fields",
            "Audit log and data history",
            "Backup your account",
            "Personalised service",
            "+ many more...",
        ],
        buttonText: "Get started",
        isPopular: true,
    },
];

const PricingPlans = () => {
    const [activeBilling, setActiveBilling] = useState<string>("monthly");

    const handleBillingClick = (billingType: string) => {
        setActiveBilling(billingType);
    };

    return (
        <div className={styles.container} id="pricing">
            <h5>Pricing</h5> 
            <h2 className={styles.title}>Plans that fit your scale</h2>
            <p className={styles.subtitle}>
                Simple, transparent pricing that grows with you. Try any plan free for
                30 days.
            </p>
            <div className={styles.billingOptions}>
                <button
                    className={`${styles.billingButton} ${activeBilling === "monthly" ? styles.active : ""
                        }`}
                    onClick={() => handleBillingClick("monthly")}
                >
                    Monthly billing
                </button>
                <button
                    className={`${styles.billingButton} ${activeBilling === "annual" ? styles.active : ""
                        }`}
                    onClick={() => handleBillingClick("annual")}
                >
                    Annual billing
                </button>
                <span className={styles.saveText}>Save 20%</span>
            </div>

            <div className={styles.planContainer}>
                {plans.map((plan:IPlans, index:number) => (
                    <div key={index} className={styles.planCard}>
                        <div className={styles.headerPlanPrice}>
                            <div>
                                <h3 className={styles.planName}>
                                    {plan.name}
                                    {plan.isPopular && (
                                        <span className={styles.popularTag}>Popular</span>
                                    )}
                                </h3>
                                <p className={styles.planDescription}>{plan.description}</p>
                            </div>
                            <div className={styles.planPrice}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.period}>{plan.period}</span>
                            </div>
                        </div>
                        <hr />
                        <h4 className={styles.featuresTitle}>FEATURES</h4>
                        <p className={styles.details}>{plan.details}</p>
                        <div className={styles.featureListWrapper}>
                            <ul className={styles.featureList}>
                                {plan.featuresOne.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <img src={check} alt="featuresOne" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <ul className={styles.featureList}>
                                {plan.featuresTwo.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <img src={check} alt="featuresTwo" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr />

                        <div  className={styles.buttonContainer}>
                            <button className={styles.getStartedButton}>
                                {plan.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;
