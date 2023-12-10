export const News = () => {
    return (
        <section className="news-preview" id="news">
            <div className="container">
                <div className="news-preview__headline">
                    <h2 className="news-preview__title">
                        Новини
                    </h2>
                    <div className="news-preview__subtitle"><a className="news-preview__post" href="#">
                        Усі новини
                        <svg className="icon icon-arrow news-preview__icon">
                            {/*<use xlink:href="#icon-arrow"></use>*/}
                        </svg>
                    </a></div>
                </div>
                <div className="news-preview__wrapper">
                    <div className="card"><a className="card__img" href="#">
                        <picture>
                            <source srcSet="/img/example.webp 1x, /img/example-2x.webp 2x" type="image/webp" />
                            <img src="/img/example.jpg" alt="card-img" />
                        </picture>
                    </a>
                        <time className="card__date" dateTime="2022-09-23">
                            23.09.2022
                        </time>
                        <a className="card__text" href="#">
                            Humoney
                        </a>
                    </div>
                    <div className="card">
                        <a className="card__img" href="#">
                            <picture>
                                <source srcSet="/img/example.webp 1x, /img/example-2x.webp 2x" type="image/webp" />
                                <img src="/img/example.jpg" alt="card-img" />
                            </picture>
                        </a>
                        <time className="card__date" dateTime="2022-09-23">
                            23.09.2022
                        </time>
                        <a className="card__text" href="#">
                            Humoney запустив платіжну послугу для Укрпошти за
                            допомогою
                            сервісу від Visa. Humoney запустив платіжну послугу для Укрпошти за допомогою сервісу
                            від
                            Visa
                        </a>
                    </div>
                    <div className="card">
                        <a className="card__img" href="#">
                            <picture>
                                <source srcSet="/img/example.webp 1x, /img/example-2x.webp 2x" type="image/webp" />
                                <img src="/img/example.jpg" alt="card-img" />
                            </picture>
                        </a>
                        <time className="card__date" dateTime="2022-09-23">
                            23.09.2022
                        </time>
                        <a className="card__text" href="#">
                            Humoney запустив платіжну послугу для Укрпошти за
                            допомогою
                            сервісу від Visa
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
