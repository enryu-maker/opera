import React from 'react'
import Home from './Screen/Home'
import ErrorPage from './Screen/ErrorPage'
import Service from './Screen/Service'
import Contact from './Screen/Contact'
import { Routes, Route } from "react-router-dom";
import { Triangle } from 'react-loader-spinner'
import { COLORS } from './Screen/Components/Theme'
import Enquiry from './Screen/Enquiry'
import About from './Screen/About'
import Projects from './Screen/Projects'
import './App.css'
export default function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2500)
  }, [])
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.layout
      }}>
        <Triangle
          height="100"
          width="100"
          color={COLORS.green}
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={loading}
        />
      </div>
    )
  }
  else {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='enquire' element={<Enquiry/>} />
        <Route path='about' element={<About/>} />
        <Route path='project' element={<Projects/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  }


}
