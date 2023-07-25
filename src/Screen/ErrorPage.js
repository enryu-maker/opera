import React from 'react'
import { COLORS} from './Components/Theme'
import Header from './Components/Header'
import { IMAGE } from './Components/Image'
import useMediaQuery from './Components/useMediaQuery';
import Menu from './Components/Menu';
export default function ErrorPage() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const [show, setShow] = React.useState(false);
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
      <Header show={show} setShow={setShow}/>  
      {
        !mobile ? null :
          <Menu isOpen={show}/>
      }
      <img 
      alt='404'
      src={IMAGE[404]}
        style={{
          width: mobile?"100%":'100%',
          height:  mobile?"100%":'100%',
          objectFit: 'contain',
        }}
      />      
    </div>
  )
}
