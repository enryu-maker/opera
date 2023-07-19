import React from 'react'
import { COLORS, FONTS } from './Theme'
import useMediaQuery from './useMediaQuery'
export default function Footer({
    show=true,
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
        {
            show?
        
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: '100%',
                height: mobile ? 80 : 100,
                backgroundColor: COLORS.layout,
            }} />
            :null
        }
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.green,
                height:mobile? 50:80,
                width: '100%',
            }}
        >

            <p style={
                mobile ? {
                    color: 'white',
                    ...FONTS.body4,
                } : {
                    color: 'white',
                    ...FONTS.body3,
                }}>
                © 2023, Opera Group, All Rights Reserved
            </p>
        </div>
        </>
    )
}
