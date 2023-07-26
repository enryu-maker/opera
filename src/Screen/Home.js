import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Link } from 'react-router-dom';
import FlatList from 'flatlist-react';
import ProjectCard from './Components/ProjectCard';
export default function Home() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const data = [
        {
            image: IMAGE.A,
            name: "Opera House",
            description: "sample description"
        },
        {
            image: IMAGE.A,
            name: "Opera House",
            description: "sample description"
        },
        {
            image: IMAGE.A,
            name: "Opera House",
            description: "sample description"
        },
    ]
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
                active={"home"}
            />
            
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
                transition: 'all 0.5s ease',
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
                    WELCOME TO OPERA GROUP
                </p>
                <p style={
                    mobile ? {
                        ...FONTS.body3,
                        color: COLORS.white,
                        textAlign: 'center',
                        letterSpacing: 2,
                        width: '80%',
                        marginBlock: 0
                    } : {
                        ...FONTS.body2,
                        color: COLORS.white,
                        textAlign: 'center',
                        letterSpacing: 2,
                        width: '60%',
                        marginBlock: 0
                    }}>
                    We will offer you exceptional services, outstanding support and superb resources. We have worked with various clients to help them complete numerous prestigious projects
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
                ...FONTS.h1,
                color: COLORS.darkGray,
                textAlign: 'center',
                letterSpacing: 2,
            }}>
                OUR SERVICES
            </p>
            <div style={{
                display: 'flex',
                flexDirection: mobile ? "column " : 'row',
                justifyContent: 'space-evenly',
                width: '100%',
            }}>
                <a style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',

                }}
                onClick={()=>window.open('https://developersplus.in/')}
                >
                    <img
                        loading='lazy'
                        alt='construction'
                        src={IMAGE.hat} style={{
                            width: 100,
                            height: 100,
                        }} />
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.darkGray,

                    }}>
                        DEVELOPERS PLUS
                    </p>
                </a>
                <a style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',

                }}
                    href='/principal-contracting'
                >
                    <img
                        alt='briefcase'
                        loading='lazy'
                        src={IMAGE.trash} style={{
                            width: 100,
                            height: 100,
                        }} />
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.darkGray,
                    }}>
                        CONSTRUCTION PLUS
                    </p>
                </a>
                <a style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',

                }}
                    href='/security'

                >
                    <img
                        alt='padlock'
                        loading='lazy'
                        src={IMAGE.padlock} style={{
                            width: 100,
                            height: 100,
                        }} />
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.darkGray,
                    }}>
                        INTERIOR PLUS
                    </p>
                </a>
                <a style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                }}
                    href='/waste-management'
                >
                    <img
                        alt='trash'
                        loading='lazy'
                        src={IMAGE.briefcase} style={{
                            width: 100,
                            height: 100,
                        }} />
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.darkGray,
                    }}>
                        PAINTING PLUS
                    </p>
                </a>
            </div>
            <div style={{
                width: mobile ? "90%" : "80%"
            }}>
                <p style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textAlign:mobile?"left" : 'center',
                    letterSpacing: 2,
                }}>
                    Thank you for visiting our website which we hope you enjoy. You may want to gain new insights to a specific project or wish to review our contracting capability. There is an excellent chance that you will find what you need right here, however if you require any further information please feel free to pick up the phone and our skilled and experienced staff members will help.
                </p>
                <p style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textAlign:mobile?"left" : 'center',
                    letterSpacing: 2,
                }}>
                    For those reviewing this website as potential employees - do you want the opportunity to be part of our success? Browse through our pages, meet the team and search the recruitment page to see our current vacancies. You will find a wealth of information about the services we provide, ongoing and completed contracts.
                </p>
                <p style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textAlign:mobile?"left" : 'center',
                    letterSpacing: 2,
                }}>
                    Take the first step and get in touch, we'd love to hear from you!
                </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: '100%',
            }}>
                <p style={{
                    ...FONTS.h1,
                    color: COLORS.darkGray,
                    textAlign: 'center',
                    letterSpacing: 2,
                }}>
                    PROJECTS
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection:mobile?'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    flexWrap: 'wrap',

                }}>
                    <FlatList
                        list={data}
                        rowGap='10px'
                        renderItem={(item, index) => (
                            <ProjectCard
                                image={item.image}
                                name={item.name}
                                description={item.description}
                            />
                        )}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                backgroundColor: COLORS.green,
                height: 500,
            }}>
                <p style={{
                    ...FONTS.h1,
                    color: COLORS.white,
                    textAlign: 'center',
                    letterSpacing: 2,

                }}>
                    TESTIMONIALS
                </p>
            </div>
            <Footer />
        </div>
    )
}
