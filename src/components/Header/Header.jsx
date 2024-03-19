import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import left from '../../assets/button-left.png'
import right from '../../assets/button-right.png'
import sheep from '../../assets/sheep.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__information}>
                    <img
                        src={logo}
                        alt={logo}
                        className={styles.logo}
                    />

                    <div className={styles.header__information_middle}>
                        <p className={styles.header__information_text}>
                            info@lead-group.ru
                        </p>
                        <p className={styles.header__information_text}>
                            +7 (495) 123-45-67
                        </p>
                    </div>

                    <img
                        src={search}
                        alt={search}
                        className={styles.search}
                    />
                </div>
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
                <div className={styles.header__content}>
                    <div className={styles.header__content_sea}>
                        <h1 className={styles.header__content_title}>
                            Первый в мире ледокольный газовоз
                        </h1>

                        <p className={styles.header__content_text}>
                            Et elementum penatibus lacinia eget ut amet lorem.
                            Id lectus magna quis odio in. In mi vitae ultrices et
                            luctus eu gravida tincidunt cras. Quisque pellentesque mollis ut sed.
                        </p>

                        <button className={styles.header__content_button}>
                            подробнее
                        </button>

                        <div className={styles.header__contents_buttons}>
                            <button className={styles.header__button_slider}>
                                <img src={left} alt={left}/>
                            </button>
                            <button className={styles.header__button_slider}>
                                <img src={right} alt={right}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.header__content_card}>
                        <h1 className={styles.header__card_title}>
                            Танкер-газовоз СПГ «КАПИТАН ДАНИЛКИН»
                        </h1>
                        <div className={styles.card__content}>
                            <div className={styles.card__column}>
                                <div className={styles.card__row}>
                                    <span className={styles.card__row_text}>
                                        Грузовместимость:
                                    </span>
                                    <span className={styles.card__row_text}>
                                        172 600м3
                                    </span>
                                </div>
                                <div className={styles.card__row}>
                                    <span className={styles.card__row_text}>
                                       Ледопроходимость:
                                    </span>
                                    <span className={styles.card__row_text}>
                                      2,1 м
                                    </span>
                                </div>
                                <div className={styles.card__row}>
                                    <span className={styles.card__row_text}>
                                       Ледовый класс:
                                    </span>
                                    <span className={styles.card__row_text}>
                                     Arc7
                                    </span>
                                </div>
                                <div className={styles.card__row}>
                                    <span className={styles.card__row_text}>
                                      Число «Азиподов»:
                                    </span>
                                    <span className={styles.card__row_text}>
                                     3
                                    </span>
                                </div>
                            </div>
                            <img src={sheep} alt={sheep}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;