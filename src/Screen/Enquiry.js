import React from 'react'
import { COLORS, FONTS } from './Components/Theme'
import Header from './Components/Header'
import useMediaQuery from './Components/useMediaQuery'
import Menu from './Components/Menu'
import { IMAGE } from './Components/Image'
import { Triangle } from 'react-loader-spinner'
import Footer from './Components/Footer'
export default function Enquiry() {
  const mobile = useMediaQuery('(max-width: 768px)')
  const [show, setShow] = React.useState(false)
  const [Message, setMessage] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [Sucess, setSucess] = React.useState(false);
  async function sendEmail() {
    setLoading(true);
    const data = {
      fullname: Name,
      phone: Phone,
      email: Email,
      message: Message,
    };
    await fetch(
      "https://formspree.io/f/xbjvrwqp",
      {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => {
        console.log(data);
        setSucess(true);
        setMsg("Thanks, We will contact you soon");
        setLoading(false);
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);

        setSucess(false);
        setMsg("Something went wrong");
        setLoading(false);
      });
  }
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      height: mobile ? '100vh' : "",
      width: mobile ? '100vw' : "",
      alignItems: "center",
      backgroundColor: COLORS.layout,
    }}>
      <Header
        show={show}
        setShow={setShow}
      />
      {
        !mobile ? null :
          <Menu isOpen={show}
          />
      }
      <div style={{
        display: 'flex',
        flexDirection: mobile ? "column" : 'row',
        width: '100vw',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBlockStart: mobile ? 60 : 140,
      }}
      >
        <img src={IMAGE.contact} alt='contact' style={{
          width: mobile ? "100%" : "",
          objectFit: 'contain',
        }}
        loading='lazy'
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.layout,
            overflowY: "scroll",
            width: mobile ? "100%" : 500,
          }}
        >
          <p
            style={{
              color: COLORS.darkGray,
              textAlign: "center",
              ...FONTS.h1,
              letterSpacing: "2px",
            }}
          >
            REQUEST A CALLBACK
          </p>
          <p
            style={{
              color: Sucess ? COLORS.green : COLORS.red,
              textAlign: "center",
              ...FONTS.h3,
              letterSpacing: "2px",
              width: mobile ? "90%" : 400,
            }}
          >
            {msg}
          </p>
          <p
            style={{
              color: COLORS.darkGray,
              textAlign: "left",
              ...FONTS.h3,
              letterSpacing: "2px",
              marginBlock: 0,
              width: mobile ? "90%" : 400,
            }}
          >
            Full Name*
          </p>
          <input
            style={{
              height: 50,
              width: mobile ? "90%" : 400,
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
              outline: "none",

            }}
            placeholder="John Doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
          />
          <p
            style={{
              color: COLORS.darkGray,
              textAlign: "left",
              ...FONTS.h3,
              letterSpacing: "2px",
              marginBlock: 0,
              marginTop: 20,
              width: mobile ? "90%" : 400,
            }}
          >
            Email*
          </p>
          <input
            style={{
              height: 50,
              width: mobile ? "90%" : 400,
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
              outline: "none",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmail.com"
            type="email"
            name="Email"
          />
          <p
            style={{
              color: COLORS.darkGray,
              textAlign: "left",
              ...FONTS.h3,
              letterSpacing: "2px",
              marginBlock: 0,
              marginTop: 20,
              width: mobile ? "90%" : 400,
            }}
          >
            Phone*
          </p>
          <input
            style={{
              height: 50,
              width: mobile ? "90%" : 400,
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
              outline: "none",

            }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="+91 1234567890"
            type="text"
            name="Phone"
          />
          <p
            style={{
              color: COLORS.darkGray,
              textAlign: "left",
              ...FONTS.h3,
              letterSpacing: "2px",
              marginBlock: 0,
              marginTop: 20,
              width: mobile ? "90%" : 400,
            }}
          >
            Message*
          </p>
          <textarea
            style={{
              height: 120,
              width: mobile ? "90%" : 400,
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
              outline: "none",

            }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your Message"
            type="text"
            name="Message"
          />
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.green,
              marginBlock: "30px",
              fontWeight: "bold",
              borderRadius: "10px",
              width: mobile ? "90%" : 200,
              height: "50px",
              border: "none",
            }}
            onClick={() => {
              sendEmail();
            }}
          >
            {loading ? (
              <Triangle
                height="40"
                width="40"
                color={COLORS.white}
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={loading}
              />
            ) : (
              <p
                style={{
                  color: COLORS.white,
                  textAlign: "center",
                  ...FONTS.h3,
                  letterSpacing: "2px",
                }}
              >
                SUBMIT
              </p>
            )}
          </button>
        </div>
      </div>
      <Footer show={false} />
    </div>
  )
}
