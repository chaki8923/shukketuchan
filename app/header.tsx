import React from "react";
import Link from "next/link";
import styles from './index.module.scss'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.flex}>
                    <img src="/logo.png" alt="Service Logo" className={styles.logo} />
                    <h1 className={styles.serviceName}>調整ちゃん</h1>
                </Link>
                <div>
                    <p className={styles.serviceDescription}>プライベートでも仕事でも</p>
                    <p className={styles.serviceDescription}>2ステップで簡単日程調整！</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
