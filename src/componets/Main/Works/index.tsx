import styles from './style.module.css';

interface IBoxData {
    title: string;
    subTitle: string;
    description: string;
}

const boxData: IBoxData[] = [
    {
        title: 'Icon here',
        subTitle: 'Sign Up',
        description: 'Create your free account and get started in minutes.'
    },
    {
        title: 'Icons',
        subTitle: 'Positive Reviews',
        description: 'Turpis nascetur vel malesuada enim eget eget.'
    },
    {
        title: 'Icon',
        subTitle: 'Regular Users',
        description: 'Scale your workload without waiting for the engineering team.'
    },
    {
        title: 'Icon',
        subTitle: 'Team Members',
        description: 'Turpis nascetur vel malesuada enim eget eget.'
    }
];

const Works = () => {
    return (
        <section className={styles.howItWorksSection}>
            <h2 className={styles.title}>How It Works</h2>
            <p className={styles.subtitle}>
                "Easily create and manage your wedding events, from the ceremony to the reception."
            </p>
            <div className={styles.featureFlow}>
                {boxData.map((box, index) => (
                    <div
                        key={index}
                        className={`${styles.featureBox} ${index === 1 ? styles.highlighted : ''}`}
                    >
                        <div className={styles.iconBox}>{box.title}</div>
                        <h4>{box.subTitle}</h4>
                        <p>{box.description}</p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Works;
