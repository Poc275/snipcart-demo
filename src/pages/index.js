import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.scss'
import MainHomePage from "../components/main-home-page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHomePage />
  </Layout>
)

export default IndexPage
