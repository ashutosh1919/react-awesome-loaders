import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ParentDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  display: flex;
  font-family: "Roboto", Arial;
  padding: 20px;
`;

const LoaderDiv = styled.div`
  width: ${(props) => props.sizeParentWidth}px;
  height: ${(props) => props.sizeParentHeight}px;
  position: relative;
  &:before {
    --r: -6deg;
    content: "";
    position: absolute;
    width: ${(props) => props.sizeParentBeforeWidth}px;
    box-shadow: 0 ${(props) => props.sizeParentShadow1}px
      ${(props) => props.sizeParentShadow2}px ${(props) => props.shadowColor};
    transform: rotate(var(--r));
  }
  &:after {
    --r: -6deg;
    content: "";
    position: absolute;
    box-shadow: 0 ${(props) => props.sizeParentShadow1}px
      ${(props) => props.sizeParentShadow2}px ${(props) => props.shadowColor};
    transform: rotate(var(--r));
    --r: 6deg;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.sizeDivBorderRadius}px;
  position: relative;
  z-index: 1;
  perspective: 600px;
  box-shadow: 0 4px 6px ${(props) => props.shadowColor};
  background-image: ${(props) => props.background};
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
`;

const StyledInnerSVG = styled.svg`
  width: ${(props) => props.sizeSVGWidth}px;
  height: ${(props) => props.sizeSVGHeight}px;
  display: block;
`;

const StyledLi = styled.li`
  --r: 180deg;
  --o: 0;
  --c: ${(props) => props.pageColor};
  position: absolute;
  top: ${(props) => props.sizeLi}px;
  left: ${(props) => props.sizeLi}px;
  transform-origin: 100% 50%;
  color: var(--c);
  opacity: var(--o);
  transform: rotateY(var(--r));
  animation: ${(props) => props.duration} ease infinite;
`;

const StyledLi1 = styled(StyledLi)`
  --r: 0deg;
  --o: 1;
`;

const StyledLi2 = styled(StyledLi)`
  @keyframes page-2 {
    0% {
      transform: rotateY(180deg);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    35%,
    100% {
      opacity: 0;
    }
    50%,
    100% {
      transform: rotateY(0deg);
    }
  }
  --c: ${(props) => props.foldPageColor};
  animation-name: page-2;
`;

const StyledLi3 = styled(StyledLi)`
  @keyframes page-3 {
    15% {
      transform: rotateY(180deg);
      opacity: 0;
    }
    35% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
    65%,
    100% {
      transform: rotateY(0deg);
    }
  }
  --c: ${(props) => props.foldPageColor};
  animation-name: page-3;
`;

const StyledLi4 = styled(StyledLi)`
  @keyframes page-4 {
    30% {
      transform: rotateY(180deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    65%,
    100% {
      opacity: 0;
    }
    80%,
    100% {
      transform: rotateY(0deg);
    }
  }
  --c: ${(props) => props.foldPageColor};
  animation-name: page-4;
`;

const StyledLi5 = styled(StyledLi)`
  @keyframes page-5 {
    45% {
      transform: rotateY(180deg);
      opacity: 0;
    }
    65% {
      opacity: 1;
    }
    80%,
    100% {
      opacity: 0;
    }
    95%,
    100% {
      transform: rotateY(0deg);
    }
  }
  --c: ${(props) => props.foldPageColor};
  animation-name: page-5;
`;

const StyledLi6 = styled(StyledLi)`
  --o: 1;
`;

const StyledSpan = styled.span`
  display: block;
  top: 100%;
  font-size: ${(props) => props.sizeText}px;
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.textColor};
`;

const BookLoader = ({
  className = `bookloader`,
  text = `Loading...`,
  background = `linear-gradient(135deg, #23c4f8, #275efe)`,
  shadowColor = `rgba(39, 94, 254, .28)`,
  textColor = `#6c7486`,
  pageColor = `rgba(255, 255, 255, .36)`,
  foldPageColor = `rgba(255, 255, 255, .52)`,
  duration = `3s`,
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
  var sizeParentBeforeWidth = (sizePassed * 120) / 64;
  var sizeParentWidth = (sizePassed * 200) / 64;
  var sizeParentHeight = (sizePassed * 140) / 64;
  var sizeParentShadow1 = (sizePassed * 16) / 64;
  var sizeParentShadow2 = (sizePassed * 12) / 64;
  var sizeDivBorderRadius = (sizePassed * 13) / 64;
  var sizeLi = (sizePassed * 10) / 64;
  var sizeSVGWidth = (sizePassed * 90) / 64;
  var sizeSVGHeight = (sizePassed * 120) / 64;
  var sizeText = (ratio * 1.5 * 20) / 2;
  if (ratio === 1) {
    sizeText = 14;
  }

  return (
    <ParentDiv className={className}>
      <LoaderDiv
        sizeParentShadow1={sizeParentShadow1}
        sizeParentShadow2={sizeParentShadow2}
        sizeParentBeforeWidth={sizeParentBeforeWidth}
        sizeParentWidth={sizeParentWidth}
        sizeParentHeight={sizeParentHeight}
        shadowColor={shadowColor}
        className="loader"
      >
        <StyledDiv
          sizeDivBorderRadius={sizeDivBorderRadius}
          shadowColor={shadowColor}
          background={background}
        >
          <StyledUl>
            <StyledLi1
              sizeLi={sizeLi}
              pageColor={pageColor}
              duration={duration}
            >
              <StyledInnerSVG
                sizeSVGWidth={sizeSVGWidth}
                sizeSVGHeight={sizeSVGHeight}
                viewBox="0 0 90 120"
                fill="currentColor"
              >
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </StyledInnerSVG>
            </StyledLi1>
            <StyledLi2
              sizeLi={sizeLi}
              pageColor={pageColor}
              duration={duration}
              foldPageColor={foldPageColor}
            >
              <StyledInnerSVG
                sizeSVGWidth={sizeSVGWidth}
                sizeSVGHeight={sizeSVGHeight}
                viewBox="0 0 90 120"
                fill="currentColor"
              >
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </StyledInnerSVG>
            </StyledLi2>
            <StyledLi3
              sizeLi={sizeLi}
              pageColor={pageColor}
              duration={duration}
              foldPageColor={foldPageColor}
            >
              <StyledInnerSVG
                sizeSVGWidth={sizeSVGWidth}
                sizeSVGHeight={sizeSVGHeight}
                viewBox="0 0 90 120"
                fill="currentColor"
              >
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </StyledInnerSVG>
            </StyledLi3>
            <StyledLi4
              sizeLi={sizeLi}
              pageColor={pageColor}
              duration={duration}
              foldPageColor={foldPageColor}
            >
              <StyledInnerSVG
                sizeSVGWidth={sizeSVGWidth}
                sizeSVGHeight={sizeSVGHeight}
                viewBox="0 0 90 120"
                fill="currentColor"
              >
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </StyledInnerSVG>
            </StyledLi4>
            <StyledLi5
              sizeLi={sizeLi}
              pageColor={pageColor}
              duration={duration}
              foldPageColor={foldPageColor}
            >
              <StyledInnerSVG
                sizeSVGWidth={sizeSVGWidth}
                sizeSVGHeight={sizeSVGHeight}
                viewBox="0 0 90 120"
                fill="currentColor"
              >
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </StyledInnerSVG>
            </StyledLi5>
            <StyledLi6
              sizeLi={sizeLi}
              pageColor={pageColor}
              duration={duration}
            >
              <StyledInnerSVG
                sizeSVGWidth={sizeSVGWidth}
                sizeSVGHeight={sizeSVGHeight}
                viewBox="0 0 90 120"
                fill="currentColor"
              >
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </StyledInnerSVG>
            </StyledLi6>
          </StyledUl>
        </StyledDiv>
        <StyledSpan sizeText={sizeText} textColor={textColor}>
          {text}
        </StyledSpan>
      </LoaderDiv>
    </ParentDiv>
  );
};

export default BookLoader;
