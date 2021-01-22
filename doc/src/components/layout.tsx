import React from "react"
import { Global } from "@emotion/core"
import { Styled, Box, useColorMode } from "theme-ui"
import Header from "./header"
import "../fonts/atkinson.css"

type LayoutProps = { children: React.ReactNode; className?: string; thought?: boolean }

const Layout = ({ children, className = ``, thought = false }: LayoutProps) => {
  const [mode] = useColorMode();

  return (
    <>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
            cursor: require('../icons/cursor.svg'),
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
          },
          "#___gatsby": {
            position: `relative`,
            overflowX: `hidden`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            textDecoration: `none`,
            outline: `none`,
            "&:focus": {
              boxShadow: theme.shadows.outline,
            },
          },
        })}
      />
      <Header />
      <Box as="main" className={className}>
        {children}
      </Box>
      <Box as="footer" variant="layout.footer">
        &copy; {new Date().getFullYear()} by <Styled.a href="http://ashutoshhathidara.com/">Ashutosh Hathidara</Styled.a>. All rights
        reserved.{` `}
        <br />
        This website is open source on{` `}
        <Styled.a href="https://github.com/ashutosh1919/react-loaders">GitHub</Styled.a>.
      </Box>
    </>
  )
}

export default Layout;