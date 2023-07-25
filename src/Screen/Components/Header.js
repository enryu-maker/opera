import React from 'react'
import { COLORS, FONTS } from './Theme'
import { Link } from 'react-router-dom'
import useMediaQuery from './useMediaQuery'
import { IMAGE } from './Image';
import Menu from './Menu';
export default function Header({
    active,
}) {
    const Mobile = useMediaQuery('(max-width: 768px)');
    const [show, setShow] = React.useState(false);
    return (
        <div style={{
            display: 'flex',
            flexDirection: Mobile ? "row" : "column",
            justifyContent: Mobile ? "flex-end" : "space-evenly",
            alignItems: 'center',
            width: '100%',
            backgroundColor: COLORS.white,
            boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.75)',
            position: 'fixed',
            zIndex: 1,
            top: 0,
            height: Mobile ? 60 : 140,
        }}>
            <img src={IMAGE.One} alt="logo" style={{
                height: Mobile ? 40 : 100,
                width: Mobile ? 40 : 100,
                marginBlock: 0,
                position: "fixed",
                zIndex: 1,
                left: Mobile ? 5 : 30,
            }} />
            <p style={
                Mobile ? {
                    ...FONTS.h1,
                    color: COLORS.green,
                    width: '80%',
                    alignSelf: 'center',
                    textAlign: 'center',

                } :
                    {
                        ...FONTS.largeTitle,
                        color: COLORS.green,
                        marginBlock: 0,
                        letterSpacing: 3,
                    }}>
                OPERA GROUP
            </p>
            {
                Mobile ?
                    <button style={{
                        backgroundColor: COLORS.transparent,
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        justifyContent: "center",
                        alignItems: "center",
                        marginInlineEnd: Mobile ? 10 : 0,

                    }}
                        onClick={() => setShow(!show)}
                    >
                        <img src={show ? IMAGE.close : IMAGE.menu} alt="menu" style={{
                            height:show?25 : 30,
                            width:show?25 : 30,
                            marginBlock: 0,
                        }}
                        /> </button> :
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: '70%',
                        letterSpacing: 1.2
                    }}>
                        <Link
                            to={"/"}
                            style={{
                                ...FONTS.h2,
                                color: active === "home" ? COLORS.green : COLORS.darkGray2,
                                textDecoration: 'none',
                                borderBottom: active === "home" ? `2px solid ${COLORS.green}` : 'none',
                            }}>HOME</Link>
                        <Link
                            to={"/service"}
                            style={{
                                ...FONTS.h2,
                                color: active === "service" ? COLORS.green : COLORS.darkGray2,
                                textDecoration: 'none',
                                borderBottom: active === "service" ? `2px solid ${COLORS.green}` : 'none',
                            }}>SERVICES</Link>
                        <Link
                            to={"/project"}
                            style={{
                                ...FONTS.h2,
                                color: active === "project" ? COLORS.green : COLORS.darkGray2,
                                textDecoration: 'none',
                                borderBottom: active === "project" ? `2px solid ${COLORS.green}` : 'none',
                            }}>PROJECTS</Link>
                        <Link
                            to={"/about"}
                            style={{
                                ...FONTS.h2,
                                color: active === "about" ? COLORS.green : COLORS.darkGray2,
                                textDecoration: 'none',
                                borderBottom: active === "about" ? `2px solid ${COLORS.green}` : 'none',
                            }}>ABOUT</Link>
                        <Link
                            to={"/contact"}
                            style={{
                                ...FONTS.h2,
                                color: active === "contact" ? COLORS.green : COLORS.darkGray2,
                                textDecoration: 'none',
                                borderBottom: active === "contact" ? `2px solid ${COLORS.green}` : 'none',
                            }}>CONTACT</Link>
                    </div>
            }
            {
                Mobile ?

                    <Menu isOpen={show} active={active} />
                    : null
            }
        </div>
    )
}