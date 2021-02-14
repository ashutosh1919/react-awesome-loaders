import React from 'react'
import { useTheme } from '@xstyled/styled-components'
import { 
    WifiLoader,
    BookLoader,
    XlviLoader,
    SunspotLoader,
    CircleLoader,
    BoltLoader,
    SquircleLoader,
    FlipFlopLoader,
    ThreeDLoader,
    BoxesLoader,
    ScatterBoxLoader
  } from 'react-awesome-loaders'

  function getLoaderList(theme) {
    let li = {
      "WifiLoader": <WifiLoader background={"transparent"} desktopSize={"150px"} mobileSize={"150px"} text={"Wifi Loader"} backColor="#E8F2FC" frontColor="#4645F6"/>,
      "BookLoader": <BookLoader background={"linear-gradient(135deg, #6066FA, #4645F6)"} desktopSize={"100px"} mobileSize={"80px"} textColor={"#4645F6"} />,
      "XlviLoader": <XlviLoader boxColors={['#EF4444', '#F59E0B', '#6366F1']} desktopSize={"128px"} mobileSize={"100px"} />,
      "SunspotLoader": <SunspotLoader gradientColors={["#6366F1", "#E0E7FF"]} shadowColor={"#3730A3"} desktopSize={"128px"} mobileSize={"100px"} />,
      "CircleLoader": <CircleLoader meshColor={"#6366F1"} lightColor={"#E0E7FF"} duration={1.5} desktopSize={"90px"} mobileSize={"64px"} />,
      "BoltLoader": <BoltLoader className={"loaderbolt"} boltColor={"#6366F1"} backgroundBlurColor={"#E0E7FF"} />,
      "SquircleLoader": <SquircleLoader />,
      "FlipFlopLoader": <FlipFlopLoader desktopSize={"128px"} mobileSize={"128px"} />,
      "ThreeDLoader":<ThreeDLoader colorRing1={"#DC2626"} desktopSize={"100px"} mobileSize={"64px"} />,
      "BoxesLoader":<BoxesLoader boxColor={"#6366F1"} style={{marginBottom: "20px"}} desktopSize={"128px"} mobileSize={"80px"} />,
      "ScatterBoxLoader":<ScatterBoxLoader primaryColor={"#6366F1"} background={theme.colors["background"]} />,
    };
    return li;
  }

export function Loader({name, ...rest}) {
    const theme = useTheme()
    const loaderList = getLoaderList(theme);
    // const [mode, setMode] = useColorMode();
    // console.log(mode);
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "50px"
        }}>
            {loaderList[name]}
        </div>
    )
}

export function RandomLoader(props) {
  const loaders = ["WifiLoader",
                  "BookLoader",
                  "XlviLoader",
                  "SunspotLoader",
                  "CircleLoader",
                  "BoltLoader",
                  "SquircleLoader",
                  "FlipFlopLoader",
                  "ThreeDLoader",
                  "BoxesLoader",
                  "ScatterBoxLoader"]
  const randomLoader = () => loaders[Math.floor(Math.random() * loaders.length)]
  console.log(randomLoader())
  return (
      <Loader name={randomLoader()} />
  );
}