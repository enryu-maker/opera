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
                width: '80vw',
            }}>
                <Link to='/' 
                style={{
                    textDecoration: 'none',
                }}
                >
                    <p style={
                        active === 'home' ? {
                            ...FONTS.h2,
                            color: COLORS.white,
                            marginBlockEnd: 0,
                        }:
                        {
                        ...FONTS.body2,
                        color: COLORS.white,
                        marginBlockEnd: 0,
                    }}>
                        HOME
                    </p>
                </Link>
                <Link to='/service' 
                style={{
                    textDecoration: 'none',
                }}
                >
                    <p style={
                        active === 'service' ? {
                            ...FONTS.h2,
                            color: COLORS.white,
                            marginBlockEnd: 0,
                        }:
                        {
                        ...FONTS.body2,
                        color: COLORS.white,
                        marginBlockEnd: 0,
                    }}>
                        SERVICES
                    </p>
                </Link>
                <Link to='/about' 
                style={{
                    textDecoration: 'none',
                }}
                >
                    <p style={
                        active === 'about' ? {
                            ...FONTS.h2,
                            color: COLORS.white,
                            marginBlockEnd: 0,
                        }:
                        {
                        ...FONTS.body2,
                        color: COLORS.white,
                        marginBlockEnd: 0,
                    }}>
                        ABOUT US
                    </p>
                </Link>
                <Link to='/project' 
                style={{
                    textDecoration: 'none',
                }}
                >
                    <p style={
                        active === 'project' ? {
                            ...FONTS.h2,
                            color: COLORS.white,
                            marginBlockEnd: 0,
                        }:
                        {
                        ...FONTS.body2,
                        color: COLORS.white,
                        marginBlockEnd: 0,
                    }}>
                        PROJECTS
                    </p>
                </Link>
                <Link to='/contact' 
                style={{
                    textDecoration: 'none',
                }}
                >
                    <p style={
                        active === 'contact' ? {
                            ...FONTS.h2,
                            color: COLORS.white,
                            marginBlockEnd: 0,
                        }:
                        {
                        ...FONTS.body2,
                        color: COLORS.white,
                        marginBlockEnd: 0,
                    }}>
                        CONTACT US
                    </p>
                </Link>
            </div>

        </Modal>
    )
}
