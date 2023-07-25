import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import Header from './Components/Header'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'
import FlatList from 'flatlist-react/lib'
import ProjectCard from './Components/ProjectCard'
export default function Projects() {
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
        }}>
            <Header active={"project"}
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
                    textAlign: 'center',
                    letterSpacing: 2,
                }}>
                    Over the course of 40 years Opera Group have been involved in the delivery of a multitude of high profile developments around the Bangalore. These include government buildings, hospitals, residential developments, commercial offices, prisons, retail, galleries and sporting complexes which have rewarded us with a wealth of experience and knowledge. Find out more below, some of our most recent projects.
                </p>
            </div>
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
            <Footer />
        </div>
    )
}
