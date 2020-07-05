import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import './border-examples.scss'

const BorderExamples = ({ data }) => (
    <div>
        <h1>Border Examples</h1>
        {/* {
            data.allStrapiProduct.edges.map((product) => (
                <Img key={product.node.sku} fixed={product.node.image.childImageSharp.fixed} alt="" className={product.node.sku} />
            ))
        } */}
        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="simple-border" />
            <p>Simple, 1 pixel single line border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="simple-thicker-border" />
            <p>Simple, 3 pixel single line border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="dashed-border" />
            <p>3 pixel dashed border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="double-border" />
            <p>Double border in gold</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="ridge-border" />
            <p>Ridge border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="inset-border" />
            <p>Inset border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="outset-border" />
            <p>Outset border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="radius-border" />
            <p>Outset border with corner radius</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="groove-border" />
            <p>Groove border</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="spaced-border" />
            <p>Border with spacing</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="double-colour-border" />
            <p>Double border with separate colours</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="double-colour-spaced-border" />
            <p>Double border with separate colours and spacing between</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="sided-border" />
            <p>Different borders per side</p>
        </div>

        <div className="example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" className="border-gradient" />
            <p>Gradient Border</p>
        </div>

        <div className="clipped-example">
            <div className="clipped-example-inside">
                <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" />
            </div>
        </div>
        <p>Polygon border which masks the image</p>

        <div className="border-image-example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" />
        </div>
        <p>Using an image as a border (image can be anything you like)</p>

        <div className="animated-border-example">
            <Img fixed={data.allStrapiProduct.edges[0].node.image.childImageSharp.fixed} alt="" />
        </div>
        <p>Animated border</p>
    </div>
)

export default BorderExamples

export const pageQuery = graphql`
{
  allStrapiProduct(filter: {shops: {elemMatch: {title: {eq: "demo_shop_one"}}}}) {
    edges {
      node {
        sku
        image {
          childImageSharp {
            fixed(height: 300, width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
