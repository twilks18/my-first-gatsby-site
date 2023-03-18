import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.title}</p>
            {children}
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
    }
  }`

export const Head = ({data}) => {
    return (
        <Seo title={data.mdx.frontmatter.title}></Seo>
    )
}

export default BlogPost