import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'




const BlogPage = ({data}) => {
    return (
        <Layout pageTitle={"My Blog Posts"}>
             {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h1>{node.frontmatter.title}</h1>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
           
            </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
              }
              id
              excerpt
            }
          }
    }`

export const Head = () => {
    return (
        <Seo title="My Blog Posts">
        </Seo>
    )
}

export default BlogPage