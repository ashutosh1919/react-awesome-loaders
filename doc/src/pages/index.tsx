import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout";
import Hero from "../components/hero";
import { Styled } from 'theme-ui';

const Index: React.FC<PageProps> = () => (
  <Layout>
    <Hero />
  </Layout>
)

export default Index;