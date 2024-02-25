import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <section className={`card-card ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="card-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="card-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="card-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="card-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="card-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="card-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="card-slider-button-next swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="card-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="card-slider-slide3 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="card-slider-slide4 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="card-slider-slide5 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="card-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="card-slider2 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="card-slider-slide6 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="card-slider-slide7 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="card-slider-slide8 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="card-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </section>
      <style jsx>
        {`
          .card-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            border-radius: 20px;
            flex-direction: row;
            justify-content: flex-end;
            background-color: #292929;
          }
          .card-slider {
            width: 300px;
            height: 300px;
            display: inline-block;
          }
          .card-slider-slide {
            display: flex;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-pagination {
            display: block;
          }
          .card-slider-button-prev {
            color: var(--dl-color-gray-black);
            border-radius: var(--dl-radius-radius-radius8);
          }
          .card-slider-button-next {
            color: var(--dl-color-gray-black);
            border-radius: 100px;
          }
          .card-slider1 {
            width: 300px;
            height: 300px;
            display: inline-block;
          }
          .card-slider-slide3 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-slide4 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-slide5 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-pagination1 {
            display: block;
          }
          .card-slider2 {
            width: 300px;
            height: 300px;
            display: inline-block;
          }
          .card-slider-slide6 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-slide7 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-slide8 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=300');
          }
          .card-slider-pagination2 {
            display: block;
          }

          @media (max-width: 991px) {
            .card-root-class-name1 {
              flex: 0 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  imageAlt: 'image',
  imageSrc: '9c95a0b7-e5f0-4f4f-a9ab-97a972197db7',
  description: 'Actress',
  rootClassName: '',
  icon: '19725557-19fc-406f-91f9-9d5288b98e01',
  iconAlt: 'image',
  header: 'Angelina Jolie',
}

Card.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  header: PropTypes.string,
}

export default Card
