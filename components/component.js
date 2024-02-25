import React from 'react'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="app-component-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="app-component-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="app-component-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="app-component-slider-slide2 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="app-component-slider-slide3 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="app-component-slider-slide4 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="app-component-slider-slide5 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="app-component-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
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
      </div>
      <style jsx>
        {`
          .app-component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-slider {
            width: 500px;
            height: 300px;
            display: inline-block;
          }
          .app-component-slider-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .app-component-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .app-component-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .app-component-slider-slide3 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwODc3NzAzOXw&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .app-component-slider-slide4 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1525923838299-2312b60f6d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwODc3NzA1Mnw&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .app-component-slider-slide5 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwODc3NzA1NHw&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .app-component-slider-pagination {
            display: block;
          }
        `}
      </style>
    </>
  )
}

export default AppComponent
