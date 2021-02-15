import React from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
// import "./xlviroundedloader.css";

const Anim = (animParams) => keyframes`
0% {
    width: ${animParams.w[0]}px;
    height: ${animParams.h[0]}px;
    margin-top: ${animParams.mt[0]}px;
    margin-left: ${animParams.ml[0]}px;
}

12.5% {
    width: ${animParams.w[1]}px;
    height: ${animParams.h[1]}px;
    margin-top: ${animParams.mt[1]}px;
    margin-left: ${animParams.ml[1]}px;
}

25% {
    width: ${animParams.w[2]}px;
    height: ${animParams.h[2]}px;
    margin-top: ${animParams.mt[2]}px;
    margin-left: ${animParams.ml[2]}px;
}

37.5% {
    width: ${animParams.w[3]}px;
    height: ${animParams.h[3]}px;
    margin-top: ${animParams.mt[3]}px;
    margin-left: ${animParams.ml[3]}px;
}

50% {
    width: ${animParams.w[4]}px;
    height: ${animParams.h[4]}px;
    margin-top: ${animParams.mt[4]}px;
    margin-left: ${animParams.ml[4]}px;
}

62.5% {
    width: ${animParams.w[5]}px;
    height: ${animParams.h[5]}px;
    margin-top: ${animParams.mt[5]}px;
    margin-left: ${animParams.ml[5]}px;
}

75% {
    width: ${animParams.w[6]}px;
    height: ${animParams.h[6]}px;
    margin-top: ${animParams.mt[6]}px;
    margin-left: ${animParams.ml[6]}px;
}

87.5% {
    width: ${animParams.w[7]}px;
    height: ${animParams.h[7]}px;
    margin-top: ${animParams.mt[7]}px;
    margin-left: ${animParams.ml[7]}px;
}

100% {
    width: ${animParams.w[8]}px;
    height: ${animParams.h[8]}px;
    margin-top: ${animParams.mt[8]}px;
    margin-left: ${animParams.ml[8]}px;
}
`;

const StyledContainer = styled.div`
  background: ${(props) => props.background};
  width: ${(props) => props.sizeContainer}px;
  height: ${(props) => props.sizeContainer}px;
  padding: 20px;
`;

const StyledBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: block;
  border-radius: ${(props) => props.sizeBorderRadius}px;
  border: ${(props) => props.sizeBorderThickness}px solid
    ${(props) => props.borderColor};
  width: ${(props) => props.boxParams.w}px;
  height: ${(props) => props.boxParams.h}px;
  margin-top: ${(props) => props.boxParams.mt}px;
  margin-left: ${(props) => props.boxParams.ml}px;
  animation: ${(props) => Anim(props.animParams)} 3s 0s forwards
    cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
`;

const XlviLoader = ({
  className = `xlviloader`,
  backgound = `transparent`,
  boxColors = [`#333`],
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
  let colorsToFill = [];
  if (boxColors.constructor === String) {
    if (boxColors === ``) {
      boxColors = "#333";
    }
    colorsToFill.push(boxColors);
  }
  if (boxColors.constructor === Array) {
    let asize = boxColors.length;
    if (asize === 0) {
      boxColors.push("#333");
      asize = boxColors.length;
    }
    for (let i = 0; i < 3; i += 1) {
      if (i < asize) colorsToFill.push(boxColors[i]);
      else colorsToFill.push(boxColors[asize - 1]);
    }
  }

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  var sizeFound = 0.0;
  if (isDesktopOrLaptop) {
    if (desktopSize !== "") sizeFound = parseFloat(desktopSize);
    else sizeFound = parseFloat(size) * 2;
  }

  if (isTabletOrMobile) {
    if (mobileSize !== "") sizeFound = parseFloat(mobileSize);
    else sizeFound = parseFloat(size);
  }

  let sizePassed = parseFloat(sizeFound);
  let sizeContainer = (sizePassed * 112) / 64;
  let sizeBorderRadius = (sizePassed * 24) / 64;
  let sizeBorderThickness = (sizePassed * 16) / 64;

  let box1Params = {
    w: (sizePassed * 112) / 64,
    h: (sizePassed * 48) / 64,
    mt: (sizePassed * 64) / 64,
    ml: 0,
  };

  let box2Params = {
    w: (sizePassed * 48) / 64,
    h: (sizePassed * 48) / 64,
    mt: 0,
    ml: 0,
  };

  let box3Params = {
    w: (sizePassed * 48) / 64,
    h: (sizePassed * 48) / 64,
    mt: 0,
    ml: (sizePassed * 64) / 64,
  };

  let anim1Params = {
    w: [
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    h: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    mt: [
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      0,
      0,
      0,
    ],
    ml: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  let anim2Params = {
    w: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    h: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    mt: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ml: [
      0,
      0,
      0,
      0,
      0,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
    ],
  };

  let anim3Params = {
    w: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
    ],
    h: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    mt: [
      0,
      0,
      0,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
    ],
    ml: [
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      0,
    ],
  };

  return (
    <StyledContainer
      sizeContainer={sizeContainer}
      background={backgound}
      className={className}
    >
      <StyledBox
        boxParams={box1Params}
        sizeBorderRadius={sizeBorderRadius}
        sizeBorderThickness={sizeBorderThickness}
        borderColor={colorsToFill[0]}
        animParams={anim1Params}
        className="box1"
      ></StyledBox>
      <StyledBox
        boxParams={box2Params}
        sizeBorderRadius={sizeBorderRadius}
        sizeBorderThickness={sizeBorderThickness}
        borderColor={colorsToFill[1]}
        animParams={anim2Params}
        className="box2"
      ></StyledBox>
      <StyledBox
        boxParams={box3Params}
        sizeBorderRadius={sizeBorderRadius}
        sizeBorderThickness={sizeBorderThickness}
        borderColor={colorsToFill[2]}
        animParams={anim3Params}
        className="box3"
      ></StyledBox>
    </StyledContainer>
  );
};

export default XlviLoader;
