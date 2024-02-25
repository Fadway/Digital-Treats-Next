import React from 'react'
import Head from 'next/head'

const SignIn = (props) => {
  return (
    <>
      <div className="sign-in-container">
        <Head>
          <title>Sign-in - Digital Treats</title>
          <meta property="og:title" content="Sign-in - Digital Treats" />
        </Head>
        <div className="sign-in-login">
          <span className="sign-in-text">
            No Account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="sign-in-text01">
            <span>OR</span>
          </span>
          <img
            alt="Line22812"
            src="/external/line22812-2cn.svg"
            className="sign-in-line2"
          />
          <img
            alt="Line32813"
            src="/external/line32813-hvxt.svg"
            className="sign-in-line3"
          />
          <img
            alt="Rectangle292814"
            src="/external/rectangle292814-c11c-200h.webp"
            className="sign-in-rectangle29"
          />
          <img
            alt="Rectangle292814"
            src="/external/rectangle292814-c11c-200h.webp"
            className="sign-in-rectangle291"
          />
          <span className="sign-in-text03"> Login with Apple</span>
          <span className="sign-in-text04">Login with Google</span>
          <img
            alt="Rectangle292814"
            src="/external/rectangle292814-c11c-200h.webp"
            className="sign-in-rectangle292"
          />
          <div className="sign-in-iconly-light-outline-hide">
            <div className="sign-in-iconly-light-outline-hide1">
              <div className="sign-in-hide">
                <img
                  alt="Fill1I282"
                  src="/external/fill1i282-70iv.svg"
                  className="sign-in-fill1"
                />
                <img
                  alt="Fill3I282"
                  src="/external/fill3i282-cowp.svg"
                  className="sign-in-fill3"
                />
                <div className="sign-in-group7">
                  <img
                    alt="Fill5I282"
                    src="/external/fill5i282-wynb.svg"
                    className="sign-in-fill5"
                  />
                </div>
                <div className="sign-in-group10">
                  <img
                    alt="Fill8I282"
                    src="/external/fill8i282-sfow.svg"
                    className="sign-in-fill8"
                  />
                </div>
                <div className="sign-in-group13">
                  <img
                    alt="Fill11I282"
                    src="/external/fill11i282-wczs.svg"
                    className="sign-in-fill11"
                  />
                </div>
              </div>
            </div>
          </div>
          <span className="sign-in-text05">
            <span>LogIn</span>
          </span>
          <span className="sign-in-text07">
            <span>Create New Account</span>
          </span>
          <span className="sign-in-text09">
            <span>
              Digital
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="sign-in-text11">Treats</span>
            <br></br>
          </span>
          <span className="sign-in-text13">Login</span>
          <img
            alt="Line42824"
            src="/external/line42824-lm27.svg"
            className="sign-in-line4"
          />
          <span className="sign-in-text14">
            EMAIL
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="sign-in-text15">
            <span className="sign-in-text16">PASSWORD</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="sign-in-rectangle88"></div>
          <div className="sign-in-rectangle87">
            <input
              type="text"
              placeholder="placeholder"
              className="sign-in-textinput input"
            />
            <input
              type="text"
              placeholder="placeholder"
              className="sign-in-textinput1 input"
            />
          </div>
          <span className="sign-in-text18">FORGOT PASSWORD?</span>
          <img alt="image" src="/google.svg" className="sign-in-image" />
          <button type="button" className="sign-in-button button">
            Login
          </button>
          <img
            alt="Rectangle292814"
            src="/external/rectangle292814-c11c-200h.webp"
            className="sign-in-rectangle293"
          />
          <span className="sign-in-text19"> Login with Facebook</span>
          <img alt="image" src="/facebook.svg" className="sign-in-image1" />
          <img
            alt="image"
            src="/104490_apple_icon-200h.webp"
            className="sign-in-image2"
          />
        </div>
      </div>
      <style jsx>
        {`
          .sign-in-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-login {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: center;
            background-color: #ffffff;
          }
          .sign-in-text {
            top: 561px;
            left: 520px;
            color: rgb(0, 0, 0);
            width: 149px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Bold;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-text01 {
            top: 720px;
            left: 718px;
            color: rgba(0, 0, 0, 1);
            width: 30px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Extra Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-line2 {
            top: 728px;
            left: 0px;
            width: 685px;
            height: 1px;
            position: absolute;
          }
          .sign-in-line3 {
            top: 728px;
            left: 778px;
            width: 662px;
            height: 1px;
            position: absolute;
          }
          .sign-in-rectangle29 {
            left: 426px;
            width: 617px;
            bottom: 60px;
            height: 56px;
            margin: auto;
            position: absolute;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
          }
          .sign-in-rectangle291 {
            left: 425px;
            width: 617px;
            bottom: 200px;
            height: 56px;
            margin: auto;
            position: absolute;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
          }
          .sign-in-text03 {
            top: 921px;
            left: 0px;
            color: rgb(0, 0, 0);
            right: 0px;
            width: 205px;
            height: auto;
            margin: auto;
            z-index: 100;
            position: absolute;
            font-size: 20px;
            font-style: Extra Bold;
            text-align: center;
            font-family: 'Inter';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-text04 {
            top: 781px;
            color: rgb(0, 0, 0);
            width: 205px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Extra Bold;
            text-align: center;
            font-family: 'Inter';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-rectangle292 {
            left: 426px;
            width: 617px;
            bottom: 60px;
            height: 56px;
            margin: auto;
            position: absolute;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
          }
          .sign-in-iconly-light-outline-hide {
            top: 384px;
            left: 917px;
            width: 41px;
            height: 24px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .sign-in-iconly-light-outline-hide1 {
            top: 0px;
            left: 0px;
            width: 41px;
            height: 24px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .sign-in-hide {
            top: 4.000400066375732px;
            left: 3.4166667461395264px;
            width: 34.166664123535156px;
            height: 17.273000717163086px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .sign-in-fill1 {
            top: 4.720799922943115px;
            left: 10.396574974060059px;
            width: 12px;
            height: 7px;
            position: absolute;
          }
          .sign-in-fill3 {
            top: 8.449695587158203px;
            left: 16.77274513244629px;
            width: 7px;
            height: 4px;
            position: absolute;
          }
          .sign-in-group7 {
            top: 0.6240725517272949px;
            left: 0px;
            width: 27.48065185546875px;
            height: 14.098128318786621px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .sign-in-fill5 {
            top: 0px;
            left: -0.0001709461212158203px;
            width: 27px;
            height: 14px;
            position: absolute;
          }
          .sign-in-group10 {
            top: 4.740794658660889px;
            left: 11.475674629211426px;
            width: 22.690990447998047px;
            height: 11.94820499420166px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .sign-in-fill8 {
            top: 0px;
            left: 0px;
            width: 23px;
            height: 12px;
            position: absolute;
          }
          .sign-in-group13 {
            top: 0px;
            left: 2.3293979167938232px;
            width: 29.50889778137207px;
            height: 17.273000717163086px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .sign-in-fill11 {
            top: -0.0007500648498535156px;
            left: 0px;
            width: 30px;
            height: 17px;
            position: absolute;
          }
          .sign-in-text05 {
            top: 496px;
            left: 715px;
            color: rgba(255, 255, 255, 1);
            width: 51px;
            height: auto;
            position: absolute;
            font-size: 11px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-text07 {
            top: 561px;
            left: 680px;
            color: rgba(39, 84, 242, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Bold;
            text-align: left;
            font-family: 'poppins';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: underline;
          }
          .sign-in-text09 {
            top: 23px;
            left: 0px;
            color: rgb(0, 0, 0);
            right: 0px;
            height: auto;
            margin: auto;
            position: absolute;
            font-size: 32px;
            font-style: Bold;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-text11 {
            color: #ff6a00;
          }
          .sign-in-text13 {
            top: 23px;
            left: 27px;
            color: rgb(0, 0, 0);
            height: auto;
            position: absolute;
            font-size: 32px;
            font-style: Bold;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-line4 {
            top: 85px;
            left: 0px;
            width: 1440px;
            height: 1px;
            position: absolute;
          }
          .sign-in-text14 {
            top: 183px;
            left: 468px;
            color: rgb(0, 0, 0);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Semi Bold;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-text15 {
            top: 320px;
            left: 468px;
            color: rgb(0, 0, 0);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Semi Bold;
            text-align: left;
            font-family: 'Inter';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-text16 {
            font-family: 'Poppins';
          }
          .sign-in-rectangle88 {
            top: 375px;
            left: 468px;
            width: 504px;
            height: 42px;
            display: flex;
            position: absolute;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
            background-size: cover;
            background-image: url('/external/rectangle882828-6pga-200h.webp');
            background-position: center;
          }
          .sign-in-rectangle87 {
            top: 238px;
            left: 468px;
            width: 504px;
            height: 42px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
            background-size: cover;
            justify-content: center;
            background-image: url('/external/rectangle872826-5c3o-200h.webp');
            background-position: center;
          }
          .sign-in-textinput {
            left: 10px;
            width: 479px;
            bottom: -127px;
            height: 24px;
            position: absolute;
          }
          .sign-in-textinput1 {
            left: 10px;
            width: 479px;
            bottom: 10px;
            height: 24px;
            position: absolute;
          }
          .sign-in-text18 {
            top: 427px;
            left: 759px;
            color: rgb(0, 0, 0);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Semi Bold;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-image {
            top: 780px;
            left: 450px;
            width: 24px;
            height: 24px;
            position: absolute;
            object-fit: cover;
          }
          .sign-in-button {
            top: 475px;
            left: 653px;
            position: absolute;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Poppins';
            font-weight: 700;
            text-transform: uppercase;
          }
          .sign-in-button:hover {
            background-color: #ff6a00;
          }
          .sign-in-rectangle293 {
            left: 426px;
            width: 617px;
            bottom: 130px;
            height: 56px;
            margin: auto;
            position: absolute;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
          }
          .sign-in-text19 {
            left: 0px;
            color: rgb(0, 0, 0);
            right: 0px;
            width: 205px;
            bottom: 148px;
            height: auto;
            margin: auto;
            z-index: 100;
            position: absolute;
            font-size: 20px;
            font-style: Extra Bold;
            text-align: center;
            font-family: 'Inter';
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-in-image1 {
            left: 451px;
            width: 20px;
            bottom: 142px;
            height: 37px;
            position: absolute;
            object-fit: cover;
          }
          .sign-in-image2 {
            left: 442px;
            width: 37px;
            bottom: 74px;
            height: 37px;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default SignIn
