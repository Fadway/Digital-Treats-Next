import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Review from '../components/review'
import FAQ from '../components/faq'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Digital Treats</title>
          <meta property="og:title" content="Digital Treats" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <section className="home-section">
          <h1 className="home-heading">Connect with your favourite stars</h1>
          <h1 className="home-heading01">Connect with your favourite stars</h1>
          <h1 className="home-heading02">Connect with your favourite stars</h1>
          <div className="home-get-started button">
            <span className="home-text">Get Started</span>
          </div>
          <div className="home-get-started1 button">
            <span className="home-text01">log in</span>
          </div>
          <Link href="/sign-in">
            <a className="home-link">
              <div className="home-get-started2 button">
                <span className="home-text02">log in</span>
              </div>
            </a>
          </Link>
          <div className="home-image">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image01"
            />
          </div>
          <animate-on-reveal
            animation="wobble"
            duration="1000ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <img
              alt="image"
              src="/apple-iphone-15-frame-png-min-500h.webp"
              data-thq-animate-on-reveal="true"
              className="home-image02"
            />
          </animate-on-reveal>
          <img
            alt="image"
            src="/apple-iphone-15-frame-pnsg-min-500h.webp"
            className="home-image03"
          />
          <img
            alt="image"
            src="/apple-iphone-15-frame-pnsg-min-500h.webp"
            className="home-image04"
          />
        </section>
        <section className="home-section1">
          <header className="home-header">
            <h2 className="home-text03">
              Gain access to celebrities worldwide
            </h2>
            <span className="home-text04">
              We&apos;ll promise you&apos;ll have a great experience, money back
              guaranteed 
            </span>
          </header>
          <img alt="image" src="/mrbeast-200h.webp" className="home-image05" />
          <img alt="image" src="/mrbeast-200h.webp" className="home-image06" />
          <img alt="image" src="/mrbeast-200h.webp" className="home-image07" />
          <section className="home-note">
            <div className="home-content"></div>
          </section>
          <section className="home-note1"></section>
          <span className="home-text05">Treats Creators</span>
        </section>
        <section className="home-section2">
          <header className="home-header1">
            <header className="home-left">
              <h2 className="section-heading">
                Introducing our partnership with athletes around the globe
              </h2>
            </header>
            <div className="home-right"></div>
          </header>
          <p className="home-paragraph section-description">
            Wherever they are
          </p>
          <main className="home-cards">
            <Card
              icon="/Icons/group%201314-200h.webp"
              rootClassName="card-root-class-name1"
            ></Card>
          </main>
        </section>
        <section className="home-section3">
          <div className="home-note2">
            <div className="home-image08"></div>
            <div className="home-content1">
              <div className="home-caption"></div>
              <div className="home-heading04">
                <div className="home-header2">
                  <h2 className="section-heading">
                    A follow back, personalized video, and more 
                  </h2>
                </div>
                <Accordion rootClassName="accordion-root-class-name"></Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section4">
          <div className="home-cube">
            <div className="home-top side"></div>
            <div className="home-front side"></div>
            <div className="home-left1 side"></div>
          </div>
          <main className="home-banner">
            <div className="home-header3">
              <h2 className="section-heading">
                Planical makes online doctor visits easier
              </h2>
              <p className="home-description section-description">
                Lorem ipsum dolor sit amet!
              </p>
            </div>
            <div className="home-buttons">
              <div className="home-get-started3 button">
                <span className="home-text06">Get started</span>
              </div>
              <div className="home-book-demo button">
                <span className="home-text07">Book a demo</span>
              </div>
            </div>
          </main>
        </section>
        <section className="home-section5">
          <header className="home-header4">
            <header className="home-left2">
              <h2 className="home-heading07 section-heading">
                What users say about us
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph1 section-description">
                Our services is really something 
              </p>
            </div>
          </header>
          <main className="home-cards1">
            <div className="home-container1">
              <Review rootClassName="review-root-class-name"></Review>
              <Review
                quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container2">
              <Review
                quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
                rootClassName="review-root-class-name"
              ></Review>
              <Review
                quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container3">
              <Review
                quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                rootClassName="review-root-class-name"
              ></Review>
              <Review
                quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
          </main>
          <div className="home-view-more">
            <p className="home-text08">View more</p>
          </div>
        </section>
        <section className="home-section6">
          <header className="home-header5">
            <span className="home-section7 section-head">FAQ</span>
            <h2 className="home-heading08 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="home-accordion">
            <FAQ rootClassName="faq-root-class-name"></FAQ>
          </main>
        </section>
        <section className="home-section8">
          <img
            alt="image"
            src="/pngegg%20(2)-200h.webp"
            className="home-image09"
          />
          <h2 className="home-heading09 section-heading">
            <span>
              Avaliable at all
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>your favourite devices</span>
          </h2>
          <main className="home-content2"></main>
          <img
            alt="image"
            src="/%C3%A2%C2%80%C2%94pngtree%C3%A2%C2%80%C2%94mobile%20mockup%20black%20android%20smartphone_6067790-500h.webp"
            className="home-image10"
          />
          <img
            alt="image"
            src="/apple-iphone-15-frame-png-min1-300w.webp"
            className="home-image11"
          />
        </section>
        <footer className="home-footer">
          <h1 className="home-caption1">Digital Treats</h1>
          <div className="home-content3">
            <main className="home-main-content">
              <div className="home-content4">
                <header className="home-main">
                  <div className="home-header6">
                    <span className="home-text12">
                      <span>Your connection to your famous</span>
                      <br></br>
                      <span>stars become easier than before</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link1"
                    >
                      <img
                        alt="image"
                        src="/Icons/linkedin-200h.webp"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link2"
                    >
                      <img
                        alt="image"
                        src="/Icons/instagram-200h.webp"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link3"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.webp"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="home-categories">
                  <div className="home-category">
                    <div className="home-header7">
                      <span className="footer-header">Categorizations</span>
                    </div>
                    <div className="home-links">
                      <span className="footer-link">Video message</span>
                      <span className="footer-link">followback</span>
                      <span className="footer-link">lessons</span>
                      <span className="footer-link">1-on-1 video calls</span>
                      <span className="footer-link">Comedians</span>
                    </div>
                  </div>
                  <div className="home-category1">
                    <div className="home-header8">
                      <span className="footer-header">Explore</span>
                    </div>
                    <div className="home-links1">
                      <span className="footer-link">Athletes</span>
                      <span className="footer-link">Celebrites</span>
                      <span className="footer-link">Influencers</span>
                      <span className="footer-link">Partners</span>
                      <span className="footer-link">Contact us</span>
                      <span className="footer-link">Press &amp; Media</span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="home-copyright">
                <span className="home-text30">
                  © 2024 Treats All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe">
              <main className="home-main1">
                <h1 className="home-heading10">Subscribe to our newsletter</h1>
                <div className="home-input-field">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="home-textinput input"
                  />
                  <div className="home-buy button">
                    <span className="home-text31">-&gt;</span>
                    <span className="home-text32">
                      <span>Subscribe now</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </main>
              <h1 className="home-notice">
                By subscribing to our newsletter you agree with our Terms and
                Conditions.
              </h1>
            </main>
            <section className="home-copyright1">
              <span className="home-text35">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .home-section {
            width: 781px;
            height: 419px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-heading {
            top: -30px;
            left: 0px;
            color: rgb(255, 255, 255);
            right: 0px;
            width: 732px;
            bottom: 0px;
            margin: auto;
            position: absolute;
            font-size: 50px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-heading01 {
            top: -20px;
            left: 0px;
            color: rgb(255, 255, 255);
            right: 0px;
            width: 732px;
            bottom: 0px;
            margin: auto;
            opacity: 0.25;
            position: absolute;
            font-size: 50px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-heading02 {
            top: -10px;
            left: 0px;
            color: rgb(255, 255, 255);
            right: 0px;
            width: 732px;
            bottom: 0px;
            margin: auto;
            opacity: 0.0625;
            position: absolute;
            font-size: 50px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-get-started {
            top: 0px;
            right: 250px;
            bottom: 100px;
            height: 71px;
            margin: auto;
            position: absolute;
            text-decoration: none;
            background-color: #dc6d08;
          }
          .home-text {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .home-get-started1 {
            top: 0px;
            left: 250px;
            bottom: 100px;
            height: 71px;
            margin: auto;
            position: absolute;
            align-self: flex-start;
            background-color: #2a2a2a;
          }
          .home-text01 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .home-link {
            display: contents;
          }
          .home-get-started2 {
            top: 0px;
            left: 250px;
            bottom: 100px;
            height: 71px;
            margin: auto;
            position: absolute;
            align-self: flex-start;
            text-decoration: none;
            background-color: #2a2a2a;
          }
          .home-text02 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .home-image {
            display: none;
          }
          .home-image02 {
            left: 0px;
            right: 0px;
            width: 200px;
            bottom: 0px;
            margin: auto;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-image03 {
            right: 90px;
            width: 200px;
            bottom: 0px;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            animation-name: headShake;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image04 {
            left: 90px;
            width: 200px;
            bottom: 0px;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            animation-name: headShake;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-section1 {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text03 {
            color: rgb(0, 0, 0);
            font-size: 80px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text04 {
            color: rgb(67, 69, 72);
            width: 100%;
            font-size: 30px;
            max-width: 600px;
            text-align: center;
            font-family: 'Poppins';
            line-height: 40px;
          }
          .home-image05 {
            top: 325px;
            left: 200px;
            right: 0px;
            width: 100px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-image06 {
            top: 325px;
            left: -200px;
            right: 0px;
            width: 100px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-image07 {
            top: 325px;
            left: 0px;
            right: 0px;
            width: 100px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-note {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            top: 0px;
            flex: 1;
            right: 0px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: absolute;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-note1 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-text05 {
            top: 400px;
            left: 0px;
            color: rgb(67, 69, 72);
            right: 0px;
            width: 100%;
            margin: auto;
            position: absolute;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: 'Poppins';
            line-height: 40px;
          }
          .home-section2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-right {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph {
            top: 270px;
            left: 135px;
            width: 100%;
            margin: auto;
            position: absolute;
            max-width: 480px;
            text-align: left;
          }
          .home-cards {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section3 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-note2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-image08 {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading04 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-section4 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube {
            top: 20px;
            left: 0px;
            width: 120px;
            height: 120px;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(25deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top {
            transform: translateZ(-120px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left1 {
            width: 120px;
            transform: translateZ(-120px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            justify-content: space-between;
            background-color: #292929;
          }
          .home-header3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-description {
            font-size: 20px;
            line-height: 30px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-get-started3 {
            display: flex;
            background-color: #ff7200;
          }
          .home-text06 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
          }
          .home-book-demo {
            display: flex;
            background-color: #ffffff;
          }
          .home-text07 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
          }
          .home-section5 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #595987;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #ffffff;
            border-top-width: 1px;
          }
          .home-header4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading07 {
            color: var(--dl-color-gray-black);
            text-align: center;
          }
          .home-right1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph1 {
            color: #5a5858;
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .home-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto auto;
          }
          .home-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-view-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-view-more:hover {
            opacity: 0.5;
          }
          .home-text08 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section6 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section7 {
            color: #ff7200;
          }
          .home-heading08 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section8 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #292929;
          }
          .home-image09 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-heading09 {
            top: 15px;
            left: 26px;
            position: absolute;
            align-self: flex-start;
            text-align: left;
          }
          .home-content2 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image10 {
            right: 0px;
            width: 465px;
            bottom: 0px;
            height: 436px;
            position: absolute;
            object-fit: cover;
          }
          .home-image11 {
            left: 600px;
            width: 256px;
            bottom: 0px;
            height: 435px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-caption1 {
            top: 67px;
            left: 21px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 30px;
            align-self: flex-start;
            text-align: center;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-content3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link1 {
            display: contents;
          }
          .home-link2 {
            display: contents;
          }
          .home-link3 {
            display: contents;
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-category1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header8 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text30 {
            color: rgb(196, 196, 196);
            width: 100%;
            font-size: 14px;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            max-width: 275px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 30px;
          }
          .home-input-field {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .home-textinput {
            flex: 1;
            color: #ffffff;
            height: 24px;
            line-height: 24px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            outline-style: none;
            background-color: rgba(217, 217, 217, 0);
          }
          .home-buy {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #80ff44;
          }
          .home-text31 {
            color: rgb(12, 16, 12);
            display: none;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-text32 {
            color: rgb(12, 16, 12);
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-notice {
            color: #686868;
            font-size: 14px;
            max-width: 400px;
            font-style: normal;
            text-align: left;
            font-weight: 400;
            line-height: 21px;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text35 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .home-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-heading {
              text-align: left;
            }
            .home-heading01 {
              text-align: left;
            }
            .home-heading02 {
              text-align: left;
            }
            .home-get-started {
              flex: 1;
            }
            .home-get-started1 {
              flex: 1;
            }
            .home-get-started2 {
              flex: 1;
            }
            .home-image {
              width: 100%;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .home-image01 {
              width: 600px;
            }
            .home-text03 {
              text-align: center;
            }
            .home-section2 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-header1 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-cards {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-section3 {
              padding-top: 0px;
            }
            .home-note2 {
              flex-direction: column-reverse;
            }
            .home-banner {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-get-started3 {
              width: 100%;
            }
            .home-book-demo {
              width: 100%;
            }
            .home-section5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-cards1 {
              grid-template-columns: auto;
            }
            .home-container3 {
              display: none;
            }
            .home-view-more {
              display: flex;
              border-color: #cccccc;
            }
            .home-text08 {
              color: #cccccc;
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
            }
            .home-content2 {
              align-items: center;
              flex-direction: column;
            }
            .home-caption1 {
              text-align: left;
            }
            .home-content3 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright {
              display: none;
            }
            .home-copyright1 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-heading {
              font-size: 40px;
            }
            .home-heading01 {
              font-size: 40px;
            }
            .home-heading02 {
              font-size: 40px;
            }
            .home-get-started {
              display: none;
            }
            .home-get-started1 {
              display: none;
            }
            .home-get-started2 {
              display: none;
            }
            .home-image01 {
              width: 500px;
            }
            .home-section1 {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text03 {
              font-size: 32px;
              text-align: center;
            }
            .home-note {
              flex-direction: column-reverse;
            }
            .home-note1 {
              flex-direction: column-reverse;
            }
            .home-left {
              gap: var(--dl-space-space-unit);
            }
            .home-content1 {
              width: 100%;
            }
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-section5 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-section8 {
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-content4 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main {
              gap: var(--dl-space-space-twounits);
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text32 {
              color: rgb(12, 16, 12);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-heading {
              max-width: 280px;
            }
            .home-heading01 {
              max-width: 280px;
            }
            .home-heading02 {
              max-width: 280px;
            }
            .home-image01 {
              width: 400px;
            }
            .home-textinput {
              flex: 1;
            }
            .home-text31 {
              color: rgb(12, 16, 12);
              display: flex;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
              white-space: nowrap;
            }
            .home-text32 {
              color: rgb(12, 16, 12);
              display: none;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
