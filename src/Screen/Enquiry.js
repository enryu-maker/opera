import React from 'react'
import { COLORS } from './Components/Theme'
import Header from './Components/Header'
export default function Enquiry () {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.layout,
    }}>
      <Header/>

    </div>
  )
}
