import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Tab Tastic Theatre</div>
            <nav className={styles.nav}>
                {/* Navigation links */}
            </nav>
        </header>
    );
}

export default Header;
