import React from "react"
import "@styles/index.scss"

import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function IndexPage({ data }) {
  return (
    <div className="main main--index">
      <div className="main__sections">
        <section className="hero">
          <div className="section-background">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"
            />
          </div>
          <div className="hero__inner">
            <div className="wrapper">
              <div className="hero__content">
                <h2 className="hero__heading">実験生活</h2>
                <div class="hero__cta-container">
                  <div class="hero__cta hero__cta--secondary">
                    <a href="/" class="button button--outline button--large">
                      CHECK MY PROFILE<span></span>
                    </a>
                  </div>

                  <div class="hero__cta hero__cta--primary">
                    <a href="/" class="button button--primary button--large">
                      DOWNLOAD MY CV<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "image/1200px-Google_Images_2015_logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
