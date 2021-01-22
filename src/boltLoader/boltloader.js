import React, { useEffect } from "react";
import { Back, gsap } from "gsap";
import styled from "styled-components";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";

const ParentDiv = styled.div`
  width: ${props => props.bolterWidth}px;
  height: ${props => props.bolterHeight}px;
  position: relative;
  padding: 20px;
  background: ${props => props.background};
`;

const StyledSVG = styled.svg`
  position: absolute;
  display: block;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke: ${(props) => props.boltColor};
`;

const StyledSVGCircle = styled(StyledSVG)`
  left: 7px;
  top: 100%;
  width: 112px;
  height: 44px;
  stroke-dashoffset: 179px;
  stroke-dasharray: 0px 178px;
`;

const StyledSVGLine = styled(StyledSVG)`
  --r: 0deg;
  top: 95%;
  width: 70px;
  height: 3px;
  stroke-dashoffset: 71px;
  stroke-dasharray: 0px 70px;
  transform: rotate(var(--r));
`;

const StyledSVGWhite = styled(StyledSVG)`
  --r: 0deg;
  --s: 1;
  top: 30%;
  z-index: 1;
  stroke: #fff;
  stroke-dashoffset: 241px;
  stroke-dasharray: 0px 240px;
  transform: rotate(var(--r)) scaleX(var(--s));
`;

const StyledSVGLineLeft = styled(StyledSVGLine)`
  --r: 130deg;
  left: -24px;
`;

const StyledSVGLineRight = styled(StyledSVGLine)`
  --r: 40deg;
  right: -24px;
`;

const StyledSVGWhiteLeft = styled(StyledSVGWhite)`
  --r: -20deg;
  left: 0;
`;

const StyledSVGWhiteRight = styled(StyledSVGWhite)`
  --r: 20deg;
  --s: -1;
  right: 0;
`;

const StyledDiv = styled.div`
  display: block;
  position: relative;
  :before {
    content: "";
    position: absolute;
    left: 50%;
    top: 44%;
    width: 112px;
    height: 112px;
    margin: -56px 0 0 -56px;
    background: #cdd9ed;
    filter: blur(124px);
  }
  :after {
    content: "";
    position: absolute;
    left: 50%;
    top: 44%;
    width: 64px;
    height: 64px;
    margin: -32px 0 0 -32px;
    background: ${props => props.backgroundBlurColor};
    z-index: 1;
    filter: blur(60px);
  }
`;

const StyledSpan = styled.span`
  display: block;
  width: ${props => props.bolterWidth}px;
  height: ${props => props.bolterHeight}px;
  background: ${(props) => props.boltColor};
  clip-path: polygon(40% 0%, 100% 0, 65% 40%, 88% 40%, 8% 100%, 36% 50%, 0 50%);
`;

const BoltLoader = ({
  className = `boltloader`,
  background = `transparent`,
  boltColor = `#f2de10`,
  backgroundBlurColor = `#fff9bc`,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  let sizeFound = 0.0;
    if(isDesktopOrLaptop){
        if(desktopSize!=='')
            sizeFound = parseFloat(desktopSize);
        else
            sizeFound = parseFloat(size)*2;
    }
    if(isTabletOrMobile){
        if(mobileSize!=='')
            sizeFound = parseFloat(mobileSize);
        else
            sizeFound = parseFloat(size);
    }

    let sizePassed = parseFloat(sizeFound);
    let bolterWidth = (sizePassed * 63)/64;
    let bolterHeight = (sizePassed * 93)/64;

  useEffect(() => {
    $("." + className).each(function (e) {
      var bolt = $(this),
        div = $(this).children(".boltloadersparkdiv");

      bolt.addClass("boltloaderanimatedelement");

      var tween = gsap
        .timeline({
          onComplete() {
            bolt.removeClass("boltloaderanimatedelement");
            repeat();
          },
        })
        .set(div, {
          rotation: 360,
        })
        .to(div, 0.7, {
          y: 80,
          rotation: 370,
        })
        .to(div, 0.6, {
          y: -140,
          rotation: 20,
        })
        .to(div, 0.1, {
          rotation: -24,
          y: 80,
        })
        .to(div, 0.8, {
          ease: Back.easeOut.config(1.6),
          rotation: 0,
          y: 0,
        });

      function repeat() {
        setTimeout(() => {
          bolt.addClass("boltloaderanimatedelement");
          tween.restart();
        }, 400);
      }
    });
  });

  return (
    <div>
      <style>
        {`
          .${className}.boltloaderanimatedelement div:before, .${className}.boltloaderanimatedelement div:after {
                animation: shine 2s ease; 
            } 
            .${className}.boltloaderanimatedelement div span {
                animation: morph 2s ease;
            }
            .${className}.boltloaderanimatedelement svg.circle {
                animation: circle 0.45s cubic-bezier(0.77, 0, 0.175, 1) forwards 1.3s;
            }
            .${className}.boltloaderanimatedelement svg.line {
                animation: line 0.45s cubic-bezier(0.77, 0, 0.175, 1) forwards 1.3s;
            }
            .${className}.boltloaderanimatedelement svg.white {
                animation: white 0.45s cubic-bezier(0.77, 0, 0.175, 1) forwards 1.45s;
            }
            .${className}.boltloaderanimatedelement svg.white.right {
                animation-delay: 1.6s;
            }
            @keyframes circle {
                100% {
                    stroke-dasharray: 178px 178px;
            }
            }
            @keyframes white {
                100% {
                    stroke-dasharray: 240px 240px;
            }
            }
            @keyframes line {
                100% {
                    stroke-dasharray: 70px 70px;
            }
            }
            @keyframes shine {
                30%, 70% {
                    opacity: 0;
            }
            }
            @keyframes morph {
                12% {
                    clip-path: polygon(40% 5%, 100% 0, 65% 40%, 65% 40%, 8% 100%, 24% 50%, 24% 50%);
            }
                24%, 72% {
                    clip-path: polygon(36% 40%, 82% 40%, 82% 40%, 82% 40%, 36% 71%, 36% 40%, 36% 40%);
            }
                84% {
                    clip-path: polygon(40% 5%, 100% 0, 65% 40%, 65% 40%, 8% 100%, 24% 50%, 24% 50%);
            }
            } 
    `}
      </style>
      <ParentDiv className={className} background={background} bolterWidth={bolterWidth} bolterHeight={bolterHeight}>
        <StyledSVGWhiteLeft
          boltColor={boltColor}
          viewBox="0 0 170 57"
          className="white left"
        >
          <path d="M36.2701759,17.9733192 C-0.981139498,45.4810755 -7.86361824,57.6618438 15.6227397,54.5156241 C50.8522766,49.7962945 201.109341,31.1461782 161.361488,2"></path>
        </StyledSVGWhiteLeft>
        <StyledSVGWhiteRight
          boltColor={boltColor}
          viewBox="0 0 170 57"
          className="white right"
        >
          <path d="M36.2701759,17.9733192 C-0.981139498,45.4810755 -7.86361824,57.6618438 15.6227397,54.5156241 C50.8522766,49.7962945 201.109341,31.1461782 161.361488,2"></path>
        </StyledSVGWhiteRight>
        <StyledDiv className="boltloadersparkdiv" backgroundBlurColor={backgroundBlurColor}>
          <StyledSpan
            boltColor={boltColor}
            bolterWidth={bolterWidth} bolterHeight={bolterHeight}
            className="boltloadersparkdivspan"
          ></StyledSpan>
        </StyledDiv>
        <StyledSVGCircle
          boltColor={boltColor}
          viewBox="0 0 112 44"
          className="circle"
        >
          <path d="M96.9355003,2 C109.46067,13.4022454 131.614152,42 56.9906735,42 C-17.6328048,42 1.51790702,13.5493875 13.0513641,2"></path>
        </StyledSVGCircle>
        <StyledSVGLineLeft
          boltColor={boltColor}
          viewBox="0 0 70 3"
          className="line left"
        >
          <path
            transform="translate(-2.000000, 0.000000)"
            d="M2,1.5 L70,1.5"
          ></path>
        </StyledSVGLineLeft>
        <StyledSVGLineRight
          boltColor={boltColor}
          viewBox="0 0 70 3"
          className="line right"
        >
          <path
            transform="translate(-2.000000, 0.000000)"
            d="M2,1.5 L70,1.5"
          ></path>
        </StyledSVGLineRight>
      </ParentDiv>
    </div>
  );
};

export default BoltLoader;
