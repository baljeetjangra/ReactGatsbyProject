import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"
const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>Hi, My name is Baljeet jangra. I'm from India.</p>
      <p>
        <Link to="/contact">Contact Page</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
