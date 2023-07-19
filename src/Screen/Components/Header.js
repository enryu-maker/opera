import React from 'react'
import { COLORS, FONTS } from './Theme'
import useMediaQuery from './useMediaQuery'
import { IMAGE } from './Image'
import { Link } from 'react-router-dom'
export default function Header({
    active
}) {
    const mobile = useMediaQuery('(max-width: 768px)');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: COLORS.green,
            height: mobile ? 60 : 80,
            width: '100%',
            cursor: 'pointer',
            position: "fixed",
            right: 0,
            left: 0,
            top: 0,
            zIndex: 1030,

        }}>
            <img
                alt='logo'
                src={IMAGE.One} style={{
                    width: mobile ? 40 : 65,
                    height: mobile ? 40 : 65,
                    backgroundColor: COLORS.layout,
                    marginLeft: mobile ? 10 : 20,
                    borderRadius: 32.5,
                    objectFit: "fill",

                }}
            />
            {
                mobile ? <img
                    alt='menu'
                    src={IMAGE.menu} style={{
                        width: 35,
                        height: 35,
                        marginRight: 10,
                    }}
                /> :

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        width: '40%',
                    }}>
                        <Link to="/" style={{
                            textDecoration: 'none',
                        }}>
                            <p style={

                                active === 'home' ? {
                                    color: 'white',
                                    ...FONTS.h3,
                                    letterSpacing: 2,
                                } :
                                    {
                                        color: 'white',
                                        ...FONTS.body3,
                                        letterSpacing: 2,

                                    }
                            }>
                                HOME
                            </p>
                        </Link>
                        <Link to="/service" style={{
                            textDecoration: 'none',
                        }}>
                            <p style={

                                active === 'service' ? {
                                    color: 'white',
                                    ...FONTS.h3,
                                    letterSpacing: 2,

                                } :
                                    {
                                        color: 'white',
                                        ...FONTS.body3,
                                        letterSpacing: 2,

                                    }
                            }>
                                SERVICES
                            </p>
                        </Link>
                        <Link to="/about" style={{
                            textDecoration: 'none',
                        }}>
                            <p style={

                                active === 'about' ? {
                                    color: 'white',
                                    ...FONTS.h3,
                                    letterSpacing: 2,

                                } :
                                    {
                                        color: 'white',
                                        ...FONTS.body3,
                                        letterSpacing: 2,

                                    }
                            }>
                                ABOUT US
                            </p>
                        </Link>
                        <Link to="/project" style={{
                            textDecoration: 'none',
                        }}>
                            <p style={

                                active === 'project' ? {
                                    color: 'white',
                                    ...FONTS.h3,
                                    letterSpacing: 2,

                                } :
                                    {
                                        color: 'white',
                                        ...FONTS.body3,
                                        letterSpacing: 2,

                                    }
                            }>
                                PROJECTS
                            </p>
                        </Link>
                        <Link to="/contact" style={{
                            textDecoration: 'none',
                        }}>
                            <p style={

                                active === 'contact' ? {
                                    color: 'white',
                                    ...FONTS.h3,
                                    letterSpacing: 2,

                                } :
                                    {
                                        color: 'white',
                                        ...FONTS.body3,
                                        letterSpacing: 2,

                                    }
                            }>
                                CONTACT US
                            </p>
                        </Link>
                    </div>
            }
        </div>
    )
}
