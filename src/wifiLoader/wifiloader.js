import React from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";

const AnimCircleOuter = keyframes`
    0% {
        stroke-dashoffset: 25;
    }
    25% {
        stroke-dashoffset: 0;
    }
    65% {
        stroke-dashoffset: 301;
    }
    80% {
        stroke-dashoffset: 276;
    }
    100% {
        stroke-dashoffset: 276;
    }
`;

const AnimCircleMiddle = keyframes`
0% {
    stroke-dashoffset: 17;
}
25% {
    stroke-dashoffset: 0;
}
65% {
    stroke-dashoffset: 204;
}
80% {
    stroke-dashoffset: 187;
}
100% {
    stroke-dashoffset: 187;
}
`;

const AnimCircleInner = keyframes`
0% {
    stroke-dashoffset: 9;
}
25% {
    stroke-dashoffset: 0;
}
65% {
    stroke-dashoffset: 106;
}
80% {
    stroke-dashoffset: 97;
}
100% {
    stroke-dashoffset: 97;
}
`;

const AnimText = keyframes`
0% {
    clip-path: inset(0 100% 0 0);
}
50% {
    clip-path: inset(0);
}
100% {
    clip-path: inset(0 0 0 100%);
}
`;

const ParentDiv = styled.div`
  background: ${(props) => props.background};
  font: 400 16px "Varela Round", sans-serif;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.paddingPassed}px;
`;

const StyledDiv = styled.div`
  background: ${(props) => props.background};
  width: ${(props) => props.passedSize}px;
  height: ${(props) => props.passedSize}px;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled.svg`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSVGOuter = styled(StyledSVG)`
  height: ${(props) => props.passedSize}px;
  width: ${(props) => props.passedSize}px;
`;
const StyledSVGMiddle = styled(StyledSVG)`
  height: ${(props) => props.passedSize}px;
  width: ${(props) => props.passedSize}px;
`;
const StyledSVGInner = styled(StyledSVG)`
  height: ${(props) => props.passedSize}px;
  width: ${(props) => props.passedSize}px;
`;

const StyledSVGCircle = styled.circle`
  position: absolute;
  fill: none;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-100deg);
  transform-origin: center;
`;

const StyledSVGCircleOuter = styled(StyledSVGCircle)`
  stroke-dasharray: 62.75 188.25;
`;
const StyledSVGCircleOuterBack = styled(StyledSVGCircleOuter)`
  animation: ${AnimCircleOuter} 1.8s ease infinite 0.3s;
  stroke: ${(props) => props.backColor};
`;
const StyledSVGCircleOuterFront = styled(StyledSVGCircleOuter)`
  animation: ${AnimCircleOuter} 1.8s ease infinite 0.15s;
  stroke: ${(props) => props.frontColor};
`;

const StyledSVGCircleMiddle = styled(StyledSVGCircle)`
  stroke-dasharray: 42.5 127.5;
`;
const StyledSVGCircleMiddleBack = styled(StyledSVGCircleMiddle)`
  animation: ${AnimCircleMiddle} 1.8s ease infinite 0.25s;
  stroke: ${(props) => props.backColor};
`;
const StyledSVGCircleMiddleFront = styled(StyledSVGCircleMiddle)`
  animation: ${AnimCircleMiddle} 1.8s ease infinite 0.1s;
  stroke: ${(props) => props.frontColor};
`;

const StyledSVGCircleInner = styled(StyledSVGCircle)`
  stroke-dasharray: 22 66;
`;
const StyledSVGCircleInnerBack = styled(StyledSVGCircleInner)`
  animation: ${AnimCircleInner} 1.8s ease infinite 0.2s;
  stroke: ${(props) => props.backColor};
`;
const StyledSVGCircleInnerFront = styled(StyledSVGCircleInner)`
  animation: ${AnimCircleInner} 1.8s ease infinite 0.05s;
  stroke: ${(props) => props.frontColor};
`;

const StyledText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: ${(props) => props.passedSize}px;
  letter-spacing: 0.2px;
  margin-top: ${(props) => props.passedMargin}px;
  ::before {
    content: attr(data-text);
    color: ${(props) => props.textColor};
  }
  ::after {
    content: attr(data-text);
    color: ${(props) => props.frontColor};
    animation: ${AnimText} 3.6s ease infinite;
    position: absolute;
  }
`;

const WifiLoader = ({
  className = `wifiloader`,
  text = `Loading...`,
  background = `transparent`,
  frontColor = `#4F29F0`,
  backColor = `#C3C8DE`,
  textColor = `#414856`,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
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

  var sizePassed = parseFloat(sizeFound);
  var ratio = sizePassed / 64;
  var sizeParentPadding = (sizePassed * 20) / 64;
  var sizeText = (ratio * 1.5 * 14) / 2; //(sizePassed * 14)/64;
  var sizeTextMargin = (sizePassed * 120) / 64;
  var sizeOuter = (sizePassed * 86) / 64;
  var sizeMiddle = (sizePassed * 60) / 64;
  var sizeInner = (sizePassed * 34) / 64;

  if (ratio === 1) {
    sizeText = 14;
  }
  console.log(sizeOuter);
  console.log(sizeMiddle);
  console.log(sizeInner);
  return (
    <ParentDiv
      background={background}
      paddingPassed={sizeParentPadding}
      className={className}
    >
      <StyledDiv
        id="wifi-loader"
        background={background}
        passedSize={sizePassed}
      >
        <StyledSVGOuter
          className="circle-outer"
          passedSize={sizeOuter}
          viewBox="0 0 86 86"
        >
          <StyledSVGCircleOuterBack
            className="back"
            backColor={backColor}
            cx="43"
            cy="43"
            r="40"
          ></StyledSVGCircleOuterBack>
          <StyledSVGCircleOuterFront
            className="front"
            frontColor={frontColor}
            cx="43"
            cy="43"
            r="40"
          ></StyledSVGCircleOuterFront>
          {/* <circle className="new" cx="43" cy="43" r="40"></circle> */}
        </StyledSVGOuter>
        <StyledSVGMiddle
          className="circle-middle"
          passedSize={sizeMiddle}
          viewBox="0 0 60 60"
        >
          <StyledSVGCircleMiddleBack
            className="back"
            backColor={backColor}
            cx="30"
            cy="30"
            r="27"
          ></StyledSVGCircleMiddleBack>
          <StyledSVGCircleMiddleFront
            className="front"
            frontColor={frontColor}
            cx="30"
            cy="30"
            r="27"
          ></StyledSVGCircleMiddleFront>
        </StyledSVGMiddle>
        <StyledSVGInner
          className="circle-inner"
          passedSize={sizeInner}
          viewBox="0 0 34 34"
        >
          <StyledSVGCircleInnerBack
            className="back"
            backColor={backColor}
            cx="17"
            cy="17"
            r="14"
          ></StyledSVGCircleInnerBack>
          <StyledSVGCircleInnerFront
            className="front"
            frontColor={frontColor}
            cx="17"
            cy="17"
            r="14"
          ></StyledSVGCircleInnerFront>
        </StyledSVGInner>
        <StyledText
          textColor={textColor}
          frontColor={frontColor}
          passedSize={sizeText}
          passedMargin={sizeTextMargin}
          data-text={text}
        ></StyledText>
      </StyledDiv>
    </ParentDiv>
  );
};

export default WifiLoader;
