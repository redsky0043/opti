import Image from 'next/image'

export const Vertically = () => {
    return (
        <div className="container">
            <section className="vertically" id="about">
                <div className="vertically__left">
                    <Image
                        width={1000}
                        height={1000}
                        alt="vertically-img"
                        src="/img/vertically.jpg"
                    />
                    <div className="vertically-banner">
                        <div className="vertically-banner__icon">
                            📈
                        </div>
                        <p className="vertically-banner__text">
                            Our team comprises experienced experts who develop and implement programs to enhance search engine results for individuals, companies and brands.
                        </p>
                    </div>
                </div>
                <div className="vertically__right">
                    <h2 className="vertically__title">
                        Our Team
                    </h2>
                    <div className="vertically__list">
                        <p>
                            Lawyers
                        </p>
                        <p>
                            Technical Search Engine Optimizers
                        </p>
                        <p>
                            Public Relations Experts
                        </p>
                        <p>
                            Designers
                        </p>
                        <p>
                            Cyber Intelligence Experts
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
