export const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__pattern"></div>
            <div className="container">
                <h1 className="hero__title">
                    <span>
                        Optimize Corporation.
                    </span>
                    <span>
                        Оptimize to Improve.
                    </span>
                </h1>
                <div className="hero-banner">
                    <div className="hero-banner__icon"></div>
                    <p className="hero-banner__text">
                        Request your free digital footprint analysis
                    </p>
                    <a className="button button--blue" href="#contacts">
                        Get started
                    </a>
                </div>
            </div>
            <div className="hero__img"></div>
        </section>
    )
}
