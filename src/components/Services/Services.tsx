import SpriteIcon from "@/components/SpriteIcon/SpriteIcon"

export const Services = () => {
    return (
        <section className="services" id="why">
            <div className="container">
                <h2 className="services__title">
                    Why Choose Optimize Corporation
                </h2>
                <p className="services__subtitle">
                    Services to assist businesses and individuals in managing their digital presence, privacy, and image.
                </p>
                <div className="services__list">
                    <div className="services-item">
                        <SpriteIcon name='services-1' className='services-item__icon' />
                        <h3 className="services-item__title">
                            You work - we help you improve your online presence
                        </h3>
                    </div>
                    <div className="services-item">
                        <SpriteIcon name='services-2' className='services-item__icon' />
                        <h3 className="services-item__title">
                            We have experience working with numerous industries
                        </h3>
                    </div>
                    <div className="services-item">
                        <SpriteIcon name='services-3' className='services-item__icon' />
                        <h3 className="services-item__title">
                            We are passionate about tackling challenges
                        </h3>
                    </div>
                    <div className="services-item">
                        <SpriteIcon name='services-4' className='services-item__icon' />
                        <h3 className="services-item__title">
                            We only do what works, at an optimal price
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
