import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import Header from './Components/Header'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
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

            </div>
            <Footer />
        </div>
    )
}
