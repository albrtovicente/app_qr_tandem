import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="containerLayout">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer> 
      </div>
    </>
  )
}

export default Layout