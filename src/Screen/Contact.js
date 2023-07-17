import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
import Footer from './Components/Footer';
import Header from './Components/Header';
export default function Contact() {
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
            <Header active={"contact"} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundImage: `url(${IMAGE.london}) `,
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
            <Footer />
        </div>

    )
}