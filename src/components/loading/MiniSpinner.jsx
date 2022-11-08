import React from 'react';
import styled from '@emotion/styled';

const SpinnerBox = styled.div`
  @keyframes ldio-kq7rj5oj4a {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  .ldio-kq7rj5oj4a div {
    position: absolute;
    width: 52px;
    height: 52px;
    border: 18px solid #3c4048;
    border-top-color: transparent;
    border-radius: 50%;
  }
  .ldio-kq7rj5oj4a div {
    animation: ldio-kq7rj5oj4a 1s linear infinite;
    top: 50px;
    left: 50px;
  }
  .loadingio-spinner-rolling-17fgm2ly5oi {
    width: 28px;
    height: 28px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-kq7rj5oj4a {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.28);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-kq7rj5oj4a div {
    box-sizing: content-box;
  }
`;

const TextSpinner = () => {
  return (
    <SpinnerBox>
      <div className="loadingio-spinner-rolling-17fgm2ly5oi">
        <div className="ldio-kq7rj5oj4a">
          <div></div>
        </div>
      </div>
    </SpinnerBox>
  );
};

export default TextSpinner;
