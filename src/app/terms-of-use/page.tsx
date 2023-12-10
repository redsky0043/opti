import Image from "next/image";

export default function Terms () {
    return (
        <main>
            <section className="text">
                <div className="container text__container">
                    <h2 className="text__headline">
                        Terms of Use
                    </h2>
                    <Image
                        width={1000}
                        height={1000}
                        alt="policy img"
                        className="text__img"
                        src="/img/texture.jpg"
                    />
                    <div className="text__box">
                        <p>
                            BY VISITING OR USING THIS SITE IN ANY WAY, YOU ARE ENTERING INTO AN AGREEMENT WITH OPTIMIZE CORPORATION LLC TO BE BOUND BY THE THEN-CURRENT VERSION OF THESE TERMS AND CONDITIONS. THIS IS THE ENTIRE AGREEMENT BETWEEN YOU AND OPTIMIZE CORPORATION LLC RELATING TO THIS SITE.
                        </p>
                        <p>
                            YOUR ACCESS AND USE OF THE SITE IS SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS AND ALL APPLICABLE LAWS. BY ACCESSING OR USING ANY PART OF THE SITE, YOU ACCEPT, WITHOUT LIMITATION OR QUALIFICATION, THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE WITH ALL OF THE TERMS AND CONDITIONS SET FORTH BELOW, YOU MAY NOT USE ANY PORTION OF THE SITE. OPTIMIZE CORPORATION LLC HAS THE RIGHT TO REVISE THESE TERMS AND CONDITIONS AT ANY TIME
                        </p>
                        <p>
                            By using the website, You warrant that You have read and reviewed this Agreement and that You agree to be bound by it. If You do not agree to be bound by this Agreement, please leave the website immediately. The Company only agrees to provide use of this website and services to You if You assent to this Agreement.
                        </p>
                    </div>
                    <div className="text__wrapper">

                        <h5 className="text__title">
                            1. General provisions
                        </h5>
                        <p className="text__regular">
                            1.1. The website visitors are recommended to be aware of these Rules, as well as the Company Policy on personal data processing. By using the Site you approve your consent with these Rules as well as Company Policy on personal data processing.
                        </p>
                        <p className="text__regular">
                            1.2. The company may at any time amend the conditiins stipulated by these Rules, and the relevant amendments come into force once published on the Site.
                        </p>
                        <p className="text__regular">
                            1.3. You are obliged to review these Rules before each visit of the Site. If you continue usage of the Site after the amendments have been published, you automatically provide us with the consent to follow the amended Rules.
                        </p>
                        <p className="text__regular">
                            1.4. As a rule, be sure to remember these Rules, because you can’t accept them before you can. You don’t need to bother with the Site.
                        </p>

                        <h5 className="text__title">
                            2. Content to the site
                        </h5>
                        <p className="text__regular">
                            2.1. The Company allows you to view and download the materials of this Site for personal non-commercial use only, provided that you retain all copyright information and other proprietary information contained in the source materials and any copies thereof. It is forbidden to modify the materials of this Site, as well as to distribute or display them in any form or use them in any other way for public or commercial purposes. Any use of these materials on other sites or on computer networks is prohibited.
                        </p>
                        <p className="text__regular">
                            2.2. The materials and services of this Site are provided `&quot;`as it does`&quot;` without any warranties. The Company does not guarantee the accuracy and completeness of the materials, programs and services on this Site. The Company may at any time, without notice, make changes to the materials and services provided on this Site. In case of materials and services aging on this Site, the Company is under no obligation to update them. Under any circumstances the Company shall not be liable for any losses (including, but not limited to loss of profit, data or interruption of business activity, loss of profit, etc.) arising out of the use, inability to use, or the results of use of this Site.
                        </p>
                        <p className="text__regular">
                            2.3. By submitting a message on the Site, you agree to provide accurate information about yourself and your contact information. By accessing the Company or leaving comments on the Site, you are responsible that this message is not illegal, harmful, threatening, defamatory, offends morality, violates copyrights, promotes hatred and / or discrimination against people on racial, ethnic, sexual, religious or religious grounds and in any other way violates the current legislation of Ukraine. You agree that any your messages may be deleted by the Company without your consent and may be used free of charge. The Company is not responsible for any information posted by users of the site. The Company uses a variety of technologies to collect and store information when you visit the Site. This may include recording one or more cookies or anonymous identifiers. The company also uses cookies and anonymous identifiers when you interact with services offered by our partners, such as advertising services, that may appear on other sites.
                        </p>

                        <h5 className="text__title">
                            3. Miscellaneous
                        </h5>
                        <p className="text__regular">
                            3.1. These Rules shall be interpreted and applied in accordance with the laws of Ukraine. Any disputes over the implementation of these Rules will be settled by the appropriate court located in the territory of Ukraine.
                        </p>
                        <p className="text__regular">
                            3.2. You agree to immediately report any copyright infringement on the materials of the Site.
                        </p>

                    </div>
                </div>
            </section>
        </main>
    )
}
