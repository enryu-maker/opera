import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import Header from './Components/Header'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import { Link } from 'react-router-dom'
export default function About() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [show, setShow] = React.useState(false);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.layout,
        }}>
            <Header active={"about"}
                show={show}
                setShow={setShow}
            />
            {
                !mobile ? null :
                    <Menu isOpen={show}
                        active={"about"}
                    />
            }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundImage: `url(${IMAGE.A}) `,
                height: mobile ? 480 : 580,
                backgroundSize: 'cover',
                backgroundBlendMode: "darken",
                justifyContent: 'center',
                alignItems: 'center',
                marginBlockStart: mobile ? 60 : 140,
            }}
            >
                <p style={
                    mobile ? {
                        ...FONTS.h1,
                        color: COLORS.white,
                        textAlign: 'center',
                        letterSpacing: 2,
                    } :
                        {
                            ...FONTS.largeTitle,
                            color: COLORS.white,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>
                    ABOUT OPERA GROUP
                </p>
                <Link style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    backgroundColor: COLORS.black,
                    opacity: 0.8,
                    paddingInline: 10,
                    marginBlock: 20,
                    cursor: 'pointer',
                    textDecoration: 'none',
                }}
                    to={'/enquire'}
                >
                    <p
                        style={
                            mobile ? {
                                ...FONTS.h3,
                                color: COLORS.white,
                                textAlign: 'center',
                                letterSpacing: 2,
                            } :

                                {
                                    ...FONTS.h3,
                                    color: COLORS.white,
                                    textAlign: 'center',
                                    letterSpacing: 2,
                                }}>
                        ENQUIRE NOW
                    </p>
                </Link>


            </div>
            <p style={{
                ...FONTS.body3,
                color: COLORS.black,
                letterSpacing: 2,
                width: mobile ? '90%' : '80%',
                textAlign: mobile ? 'left' : 'center',
                marginBlock:mobile?20 : 80,
            }}>
                At Opera Group, we take immense pride in providing top-notch construction, interior design, and painting services. With a strong commitment to excellence, we are dedicated to transforming your vision into reality. Whether you need a complete construction project, a stunning interior makeover, or a fresh coat of paint, we've got you covered!
            </p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                backgroundColor: COLORS.green,
            }}>
                <p style={{
                    ...FONTS.h1,
                    color: COLORS.white,
                    width: mobile ? '90%' : '90%',
                    textAlign: mobile ? 'left' : 'center',
                    letterSpacing: 2,
                }}>
                    why choose us?
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection: mobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: mobile ? '100%' : '100%',
                    paddingBlock: 20,
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: mobile ? '90%' : '70%',
                    }}>
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                            letterSpacing: 2,
                            marginBlockEnd: 0
                        }}>
                            Expertise :
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                        }}>
                            Our team of professionals brings a wealth of experience to the table. With years of industry knowledge, we have successfully completed numerous projects, earning the trust and loyalty of our satisfied clients.
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: mobile ? '90%' : '70%',

                    }}>
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                            letterSpacing: 2,
                            marginBlockEnd: 0
                        }}>
                            Quality :
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                        }}>
                            At Opera Group, we are committed to delivering nothing short of excellence. We prioritize quality materials and workmanship in every project we undertake, ensuring that the final result surpasses your expectations.
                        </p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: mobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: mobile ? '100%' : '100%',
                    paddingBlock: 20,
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: mobile ? '90%' : '70%',
                    }}>
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                            letterSpacing: 2,
                            marginBlockEnd: 0
                        }}>
                            Customer-Centric Approach :
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                        }}>
                            Our team of professionals brings a wealth of experience to the table. With years of industry knowledge, we have successfully completed numerous projects, earning the trust and loyalty of our satisfied clients.
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: mobile ? '90%' : '70%',
                    }}>
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                            letterSpacing: 2,
                            marginBlockEnd: 0
                        }}>
                            Timely Delivery :
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                            width: mobile ? '90%' : '80%',
                            textAlign: 'left',
                        }}>
                            We understand the importance of meeting deadlines. Our team is dedicated to completing projects within agreed-upon timelines, without compromising on the quality of work.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
