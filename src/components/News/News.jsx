import React from 'react';
import styles from './News.module.css'

const News = () => {
    return (
        <section className={styles.news}>
            <div className={styles.container}>
                <div className={styles.news__header}>
                    <h1 className={styles.news__header_title}>
                        Новости
                    </h1>

                    <button className={styles.news__button}>
                        Все новости
                    </button>
                </div>

                <div className={styles.news__list}>
                    <div className={styles.news__list_item}>
                        <div className={styles.item__date}>
                            <p className={styles.item__date_text}>
                                29 декабря 2022 Г.
                            </p>
                        </div>

                        <div className={styles.card__text_item}>
                            <p className={styles.card__text}>
                                Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.
                            </p>
                            <span className={styles.card__span}>
                                Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.
                           </span>
                        </div>
                    </div>

                    <div className={styles.news__list_item}>
                        <div className={styles.item__date}>
                            <p className={styles.item__date_text}>
                                29 декабря 2022 Г.
                            </p>
                        </div>

                        <div className={styles.card__text_item}>
                            <p className={styles.card__text}>
                                Volutpat vehicula scelerisque consectetur nullam nunc vel. Sagittis enim feugiat
                                maecenas.
                            </p>
                            <span className={styles.card__span}>
                              Facilisis aliquam in velit nibh ipsum quis. Diam nulla fringilla etiam id et egestas dui odio. Lectus nam gravida.
                           </span>
                        </div>
                    </div>

                    <div className={styles.news__list_item}>
                        <div className={styles.item__date}>
                            <p className={styles.item__date_text}>
                                29 декабря 2022 Г.
                            </p>
                        </div>

                        <div className={styles.card__text_item}>
                            <p className={styles.card__text}>
                                Etiam donec fames sed nunc senectus ut eget. Nibh felis eget.
                            </p>
                            <span className={styles.card__span}>
                               Volutpat egestas porttitor duis purus quam est quam. Tempor aliquam vel arcu euismod. Mattis ullamcorper.
                           </span>
                        </div>
                    </div>

                    <div className={styles.news__list_item}>
                        <div className={styles.item__date}>
                            <p className={styles.item__date_text}>
                                29 декабря 2022 Г.
                            </p>
                        </div>

                        <div className={styles.card__text_item}>
                            <p className={styles.card__text}>
                                Amet volutpat urna vitae vitae. Varius accumsan mattis egestas sagittis arcu libero. Sit at.
                            </p>
                            <span className={styles.card__span}>
                               Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris ut nec tellus ante. Sit ac etiam sed vestibulum.
                           </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;