import Image from 'next/image'

export const About = () => {
    return (
        <section className="about" id="who">
            <div className="container">
                <h2 className="about__title">
                    Who We Are
                </h2>
                <div className="about__info">
                    <p>
                        We are a team of digital reputation management experts specializing in assisting individuals and businesses in the management and enhancement of their online reputation. We provide services related to cyber intelligence, design and branding, as well as website development.
                    </p>
                    <div className="about-banner">
                        <div className="about-banner__icon"></div>
                        <p className="about-banner__text">
                            Established in 2020, we operate from offices in Poland (Warsaw) and Cyprus (Limassol).
                        </p>
                    </div>
                </div>
                <div className="about__picture">
                    <Image
                        width={1000}
                        height={1000}
                        alt="vertically-img"
                        src="/img/about-img.jpg"
                    />
                </div>
            </div>
        </section>
    )
}
