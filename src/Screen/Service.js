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
                marginBlock: 100
            }}>
                <p style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textAlign: 'center',
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
                    }}>
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
                            DEVELOPERS
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            We are a one stop shop for construction support services and can tailor these services to meet your requirement and budget. Please see below for the full suite of services we can provide.
                        </p>
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
                            CONSTRUCTION
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            We are a one stop shop for construction support services and can tailor these services to meet your requirement and budget. Please see below for the full suite of services we can provide.
                        </p>
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
                            INTERIOR DESIGN
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            We are a one stop shop for construction support services and can tailor these services to meet your requirement and budget. Please see below for the full suite of services we can provide.
                        </p>
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
                            BASKET PLUS
                        </p>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            letterSpacing: 2,
                        }}>
                            We are a one stop shop for construction support services and can tailor these services to meet your requirement and budget. Please see below for the full suite of services we can provide.
                        </p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
