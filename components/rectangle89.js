import React from 'react'

import PropTypes from 'prop-types'

const Rectangle89 = (props) => {
  return (
    <>
      <div className={`rectangle89-container ${props.rootClassName} `}>
        <img
          alt={props.rectangle89Alt}
          src={props.rectangle89Src}
          className="rectangle89-rectangle89"
        />
      </div>
      <style jsx>
        {`
          .rectangle89-container {
            display: flex;
            position: relative;
          }
          .rectangle89-rectangle89 {
            width: 261px;
            height: 46px;
            position: relative;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 1px;
            animation-name: heartBeat;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
        `}
      </style>
    </>
  )
}

Rectangle89.defaultProps = {
  rootClassName: '',
  rectangle89Src: '/external/rectangle892830-7bk9-200h.webp',
  rectangle89Alt: 'Rectangle892830',
}

Rectangle89.propTypes = {
  rootClassName: PropTypes.string,
  rectangle89Src: PropTypes.string,
  rectangle89Alt: PropTypes.string,
}

export default Rectangle89
