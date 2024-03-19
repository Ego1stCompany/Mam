import React from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.navigation__item}>
                о нас
            </div>
            <div className={styles.navigation__item}>
                флот
            </div>
            <div className={styles.navigation__item}>
                инвесторам
            </div>
            <div className={styles.navigation__item}>
                карьера
            </div>
            <div className={styles.navigation__item}>
                пресс-центр
            </div>
            <div className={styles.navigation__item}>
                устойчивое развитие
            </div>
            <div className={styles.navigation__item}>
                контакты
            </div>
        </nav>
    );
};

export default Navigation;