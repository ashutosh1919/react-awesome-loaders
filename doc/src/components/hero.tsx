/** @jsx jsx */
import { Box, Container, Flex, jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import { Circle, Donut } from "./shapes"
import CircleGrid from "../icons/circle-grid"
import Star from "../icons/star"
import { down, up } from "../styles/animations"
import { useMove } from 'react-use-gesture'
import { useSpring, animated } from 'react-spring'


type StarsType = {
  githubData: {
    data: {
      repository: {
        stargazers: {
          totalCount: number
        }
      }
    }
  }
}

const HeroTitle = animated(Styled.h1);

const Hero = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  useMove(({ xy: [x, y] }) => set({ x: x / window.innerWidth }), {
    domTarget: typeof window === 'object' ? window : null,
  })
//   const isBigScreen = useMediaQuery({ minWidth: `1100px` })
//   const data = useStaticQuery<StarsType>(graphql`
//     {
//       githubData {
//         data {
//           repository {
//             stargazers {
//               totalCount
//             }
//           }
//         }
//       }
//     }
//   `)
  const starsCount = 100 //data?.githubData?.data?.repository?.stargazers?.totalCount

  return (
    <div>
      <Container as="section" data-name="hero" sx={{ my: [5, 6], mb: [6, 7] }}>
        <Flex sx={{ justifyContent: `space-between` }}>
          <Box>
            <Box sx={{ maxWidth: `490px` }}>
              <HeroTitle sx={{
                  fontWeight: 800,
                  background: "linear-gradient(120deg, #6066FA 0%, #EF4444 50%, #8B5CF6 100%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                  backgroundSize: "200% auto",
              }}
              style={{ backgroundPositionX: x.interpolate({range: [0, 1], output: [0, 200]}).interpolate(x => `${x}%`) }}
              >Free & Open Source Loading Animations</HeroTitle>
              <Styled.p sx={{ color: `dark`, mt: 3, mb: 4 }}>
                Create <span sx={{ fontWeight: `bold` }}>high-quality, super-responsive</span> and{` `}
                <span sx={{ fontWeight: `bold` }}>customizable</span> loading animations to insert into your website
              </Styled.p>
            </Box>
            <Box>
              <a
                href="https://github.com/LekoArts/gatsby-themes"
                rel="noopener noreferrer"
                target="_blank"
                sx={{
                  variant: `buttons.heroStars`,
                  display: `inline-flex`,
                  alignItems: `center`,
                }}
              >
                <div
                  sx={{
                    display: `inline-flex`,
                    svg: { width: `20px`, height: `auto`, mr: 2, color: `indigo.2` },
                    px: 3,
                    py: 1,
                    backgroundColor: `primary`,
                    borderTopLeftRadius: `default`,
                    borderBottomLeftRadius: `default`,
                    alignItems: `center`,
                  }}
                >
                  <Star /> Star
                </div>
                <div
                  sx={{
                    px: 3,
                    py: 1,
                    backgroundColor: `starsCount`,
                    borderTopRightRadius: `default`,
                    borderBottomRightRadius: `default`,
                  }}
                >
                  {starsCount || `0`}
                </div>
              </a>
            </Box>
          </Box>
        </Flex>
      </Container>
      <div data-name="shapes">
        <Circle
          size="210px"
          color="orange"
          top="170px"
          left={[`-185px`, `-185px`, `-185px`, `-120px`]}
          sx={{ display: [`none`, `none`, `none`, `block`] }}
        />
        <Circle size="35px" color="blue" top={[`165px`, `130px`]} left={[`-5px`, `40px`]} />
        <Circle size="120px" color="green" top="620px" right={[`-80px`, `50px`, `90px`]} />
        <Circle
          size="40px"
          color="pink"
          top="750px"
          right={[`30px`, `210px`, `250px`]}
          sx={{ animation: `${up} 6s ease-in-out infinite alternate` }}
        />
        <Donut
          size="30px"
          color="green"
          width="5px"
          top="465px"
          left={[`-15px`, `-5px`, `-5px`, `20px`]}
          sx={{ display: [`none`, `none`, `none`, `block`] }}
        />
        <Donut
          size={[`130px`, `130px`, `230px`]}
          color="red"
          width={[`20px`, `20px`, `50px`]}
          top={[`700px`, `668px`]}
          left={[`-75px`, `-75px`, `-102px`]}
          sx={{ animation: `${down} 10s ease-in-out infinite alternate` }}
        />
        <CircleGrid color="indigo" size={175} top="220px" right={[`-180px`, `-120px`, `-120px`, `-70px`]} />
      </div>
    </div>
  )
}

export default Hero
