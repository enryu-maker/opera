import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Link } from 'react-router-dom';
import Menu from './Components/Menu';
export default function Service() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [show, setShow] = React.useState(false);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.layout,
        }}
        >
            <Header
                active={"service"}
                show={show}
                setShow={setShow}
            />
            {
                !mobile ? null :
                    <Menu isOpen={show}
                        active={"service"}
                    />
            }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundImage: `url(${IMAGE.A}) `,
                height: mobile ? 480 : 580,
                backgroundSize: 'cover',
                // objectFit: 'cover',
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
                    OUR SERVICES
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
            <div style={{
                width: mobile ? "90%" : "80%",
                marginBlock:mobile?20 : 80,
            }}>
                <p style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textAlign:mobile?"left" : 'center',
                    letterSpacing: 2,
                }}>
                    We are a one stop shop for construction support services and can tailor these services to meet your requirement and budget. Please see below for the full suite of services we can provide.
                </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: '100%',
                backgroundColor: COLORS.green,
                paddingBlock: 30,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: mobile ? 'column' : 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        paddingInline: mobile ? 10 : 0,
                        width: mobile ? "" : "25%",
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        window.open("https://developersplus.in")
                    }}
                    >
                        <img
                            alt='construction'
                            src={IMAGE.hatwhite} style={{
                                width: mobile ? 120 : 180,
                                height: mobile ? 120 : 180,
                            }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            DEVELOPERS PLUS
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            Our team of dedicated and experienced real estate professionals is committed to guiding you through every step of your real estate journey. Whether you are a first-time homebuyer, an experienced investor, or looking to sell your property, we are here to provide personalized attention and tailor-made strategies to meet your unique needs and goals. </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        paddingInline: mobile ? 10 : 0,
                        width: mobile ? "" : "25%",

                    }}>
                        <img
                            alt='breifcase'
                            src={IMAGE.trashwhite} style={{
                                width: mobile ? 120 : 180,
                                height: mobile ? 120 : 180,
                            }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            CONSTRUCTION PLUS
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            From the ground up, we have the expertise and experience to handle all aspects of construction projects. Whether it's residential, commercial, or industrial construction, we combine innovation, quality materials, and skilled craftsmanship to create spaces that stand the test of time. Our team of professionals ensures each project is executed with precision, attention to detail, and adherence to safety standards. </p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: mobile ? 'column' : 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    // marginLeft: mobile ? 20 : 0,
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        paddingInline: mobile ? 10 : 0,
                        width: mobile ? "" : "25%",
                    }}>
                        <img
                            alt='padlock'
                            src={IMAGE.padlockwhite} style={{
                                width: mobile ? 120 : 180,
                                height: mobile ? 120 : 180,
                            }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>
                            INTERIOR PLUS
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            Our interior design services are tailored to reflect your unique style and preferences. We believe that a well-designed interior can significantly enhance the functionality and aesthetics of any space. Our team of talented designers will collaborate with you to curate a design that complements your lifestyle, maximizes space utilization, and brings your dream interior to life. </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        paddingInline: mobile ? 10 : 0,
                        width: mobile ? "" : "25%",
                    }}>
                        <img
                            alt='trash'
                            src={IMAGE.briefcasewhite} style={{
                                width: mobile ? 120 : 180,
                                height: mobile ? 120 : 180,
                            }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>
                            PAINTING PLUS
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            A fresh coat of paint can breathe new life into any property. Whether it's a single room or an entire building, our skilled painters are equipped to handle all types of painting projects. We use high-quality paints and modern techniques to ensure a flawless finish that not only looks stunning but also stands the test of time.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
