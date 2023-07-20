import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import Header from './Components/Header'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
export default function Projects() {
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
            <Header active={"project"}
                show={show}
                setShow={setShow}
            />
            {
                !mobile ? null :
                    <Menu isOpen={show}
                        active={"project"}
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
                    PROJECTS
                </p>

            </div>
            <div style={{
                width: mobile ? "90%" : "80%",
                marginBlockStart: mobile ? 80 : 100,
            }}>
                <p style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textAlign: 'center',
                    letterSpacing: 2,
                }}>
                    Over the course of 40 years Opera Group have been involved in the delivery of a multitude of high profile developments around the UK. These include government buildings, hospitals, residential developments, commercial offices, prisons, retail, galleries and sporting complexes which have rewarded us with a wealth of experience and knowledge. Find out more below, some of our most recent projects.
                </p>
            </div>
            <Footer />
        </div>
    )
}
