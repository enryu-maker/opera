import React from 'react'
import { COLORS, FONTS } from './Theme'
import useMediaQuery from './useMediaQuery'
import { IMAGE } from './Image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function ProjectCard({
    image = IMAGE.A,
    name = "PROJECT NAME",
    description = "PROJECT DESCRIPTION",
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [hover, setHover] = React.useState(false)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: mobile ? '90%' : 400,
            height:mobile? 350 : 400,
            marginInline: mobile?15:22,
            marginBlock: 5,
            backgroundColor: COLORS.white,
        }}
            onMouseEnter={()=>{
                setHover(true)
            }}
            onMouseLeave={()=>{
                setHover(false)
                }}
        >
            <LazyLoadImage
                src={IMAGE.A}
                placeholderSrc={IMAGE.close}
                height={"100%"}
                width={"100%"} 
                effect='blur'
                />
            {
                hover ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: COLORS.transparent,
                        justifyContent: 'center',
                        transition: 'all 0.5s ease',
                    }}>
                        <p style={{
                            ...FONTS.h1,
                            color: COLORS.black,
                            marginBlock: 0,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>{name}</p>
                        <p style={{
                            ...FONTS.body4,
                            color: COLORS.black,
                            marginBlock: 0,
                            textAlign: 'center',
                            letterSpacing: 2,
                        }}>{description}</p>
                    </div>
                    : null
            }
        </div>
    )
}
