import React from 'react'
import Modal from 'react-modal';
import { COLORS, FONTS } from './Theme';
import { Link } from 'react-router-dom';
export default function Menu({
    isOpen,
    active,
}) {
    return (
        <Modal
            isOpen={isOpen}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: COLORS.green,
                    padding: 'none'
                },
                content: {
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    border: '1px solid transparent',
                    background: COLORS.green,
                    outline: 'none',

                }
            }}

        >
            <div style={{
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'flex-start',
                height: '100vh',
                width: '100%',
                marginBlockStart: 15,
            }}>

                <Link
                    to={"/"}
                    style={{
                        ...FONTS.h2,
                        color: active === "home" ? COLORS.white : COLORS.white,
                        textDecoration: 'none',
                        marginBlock: 5,
                        width: 80,
                        borderBottom: active === "home" ? `2px solid ${COLORS.white}` : 'none',
                    }}>HOME</Link>
                <Link
                    to={"/service"}
                    style={{
                        ...FONTS.h2,
                        marginBlock: 5,
                        color: active === "service" ? COLORS.white : COLORS.white,
                        textDecoration: 'none',
                        width: 120,

                        borderBottom: active === "service" ? `2px solid ${COLORS.white}` : 'none',
                    }}>SERVICES</Link>
                <Link
                    to={"/project"}
                    style={{
                        ...FONTS.h2,
                        marginBlock: 5,
                        color: active === "project" ? COLORS.white : COLORS.white,
                        textDecoration: 'none',
                        width: 125,
                        borderBottom: active === "project" ? `2px solid ${COLORS.white}` : 'none',
                    }}>PROJECTS</Link>
                <Link
                    to={"/about"}
                    style={{
                        ...FONTS.h2,
                        marginBlock: 5,
                        color: active === "about" ? COLORS.white : COLORS.white,
                        textDecoration: 'none',
                        width: 90,
                        borderBottom: active === "about" ? `2px solid ${COLORS.white}` : 'none',
                    }}>ABOUT</Link>
                <Link
                    to={"/contact"}
                    style={{
                        ...FONTS.h2,
                        marginBlock: 5,
                        color: active === "contact" ? COLORS.white : COLORS.white,
                        textDecoration: 'none',
                        width: 120,
                        borderBottom: active === "contact" ? `2px solid ${COLORS.white}` : 'none',
                    }}>CONTACT</Link>
            </div>

        </Modal>
    )
}
