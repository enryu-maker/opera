import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
import Footer from './Components/Footer';
import Header from './Components/Header';
export default function Service() {
    const mobile = useMediaQuery('(max-width: 768px)');
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
            />
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    backgroundColor: COLORS.black,
                    opacity: 0.8,
                    paddingInline: 10,
                    marginBlock: 20,
                }}>
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
                        Enquire Now
                    </p>
                </div>
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
                padding: 20,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: mobile ? 'column' : 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    marginLeft: mobile ? 20 : 0,
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        width: mobile ? "90%" : "25%",
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
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        width: mobile ? "90%" : "25%",
                    }}>
                        <img 
                        alt='breifcase'
                        src={IMAGE.briefcasewhite} style={{
                            width: mobile ? 120 : 180,
                            height: mobile ? 120 : 180,
                            padding: 10,
                        }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            PRINCIPAL CONTRACTING
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
                    marginLeft: mobile ? 20 : 0,
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        width: mobile ? "90%" : "25%",
                    }}>
                        <img 
                        alt='padlock'
                        src={IMAGE.padlockwhite} style={{
                            width: mobile ? 120 : 180,
                            height: mobile ? 120 : 180,
                            padding: 10,
                        }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>
                            SECURITY
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
                        width: mobile ? "90%" : "25%",
                    }}>
                        <img 
                        alt='trash'
                        src={IMAGE.trashwhite} style={{
                            width: mobile ? 120 : 180,
                            height: mobile ? 120 : 180,
                            padding: 10,
                        }}
                        />
                        <p style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>
                            TRASH MANAGEMENT
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
