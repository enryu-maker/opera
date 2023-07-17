import React from 'react'
import { COLORS} from './Components/Theme'
import Header from './Components/Header'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
export default function ErrorPage() {
  const mobile = useMediaQuery('(max-width: 768px)');
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.layout,
        height: '100vh',
        width: '100vw',
    }}
    >
      <Header/>  
      <img 
      alt='404'
      src={IMAGE[404]}
        style={{
          width: mobile?"100%":'40%',
          height:  mobile?"60%":'80%',
        }}
      />      
    </div>
  )
}
