import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Link } from 'react-router-dom';
import Menu from './Components/Menu';
export default function Contact() {
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
            <Header active={"contact"}
                show={show}
                setShow={setShow}
            />

            {
                !mobile ? null :
                    <Menu isOpen={show}
                        active={"contact"}
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
                    CONTACT US
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
                display: 'flex',
                flexDirection: mobile ? "column" : 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                alignItems: "flex-start",
                marginBlock: mobile ? 0 : 60,

            }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 20,

                }}
                >
                    <p style={{
                        ...FONTS.h1,
                        color: COLORS.darkGray,
                        textAlign: 'center',
                        letterSpacing: 2,
                        marginBlock: 0,

                    }}>
                        CONTACT
                    </p>
                    <a href="tel:+91 9986004000" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}>
                        <img src={IMAGE.phone} alt="phone" style={{
                            width: 20,
                            height: 20,
                            paddingInlineEnd: 10,
                        }} />
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            +91 9986004000
                        </p>
                    </a>
                    <a href="mailto:info@operagroup.in" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}>
                        <img src={IMAGE.open} alt="open" style={{
                            width: 20,
                            height: 20,
                            paddingInlineEnd: 10,
                        }} />
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            info@operagroup.in
                        </p>
                    </a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 20,
                }}
                >
                    <p style={{
                        ...FONTS.h1,
                        color: COLORS.darkGray,
                        textAlign: 'center',
                        letterSpacing: 2,
                        marginBlock: 0,
                    }}>
                        ADDRESS
                    </p>
                    <a href="https://goo.gl/maps/6Z3Z6Z7Z6Z6Z6Z6Z6" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                            width: mobile ? "85%" : 300,
                        }}>
                            OPERA HOUSE, NO-31/3, 1ST MAIN ,5THCROSS,PIPE LINE ROAD OFF-SNN RAJ SPIRITUA, UMAR BAGH LAYOUT, BANASHANKARI,J.P.NAGER POST BANGALORE-560078
                        </p>
                    </a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 20,
                }}
                >
                    <p style={{
                        ...FONTS.h1,
                        color: COLORS.darkGray,
                        textAlign: 'center',
                        letterSpacing: 2,
                        marginBlock: 0,

                    }}>
                        FOLLOW US
                    </p>
                    <a href="mailto:info@operagroup.in" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}>
                        <img src={IMAGE.facebook} alt="facebook" style={{
                            width: 20,
                            height: 20,
                            paddingInlineEnd: 10,
                        }} />
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            Facebook
                        </p>
                    </a>
                    <a href="mailto:info@operagroup.in" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}>
                        <img src={IMAGE.instagram} alt="instagram" style={{
                            width: 20,
                            height: 20,
                            paddingInlineEnd: 10,
                        }} />
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            Instagram
                        </p>
                    </a>
                    <a href="mailto:info@operagroup.in" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}>
                        <img src={IMAGE.twitter} alt="twitter" style={{
                            width: 20,
                            height: 20,
                            paddingInlineEnd: 10,
                        }} />
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            Twitter
                        </p>
                    </a>
                    <a href="mailto:info@operagroup.in" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}>
                        <img src={IMAGE.linkedin} alt="linkdien" style={{
                            width: 20,
                            height: 20,
                            paddingInlineEnd: 10,
                        }} />
                        <p style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            textAlign: 'flex-start',
                            letterSpacing: 2,
                        }}>
                            Linkedin
                        </p>
                    </a>
                </div>

            </div>

            <iframe
                title="map"
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.959919693171!2d77.5690578751413!3d12.910297616219253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15905c4c0d9f%3A0x7a97c545423135cf!2sOpera%20group!5e0!3m2!1sen!2sin!4v1689749606521!5m2!1sen!2sin'
                width="90%"
                height={mobile ? "500" : "550"}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
            <Footer />
        </div>

    )
}