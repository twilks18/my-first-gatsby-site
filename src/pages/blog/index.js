import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'




const BlogPage = ({data}) => {
    console.log(data)
    return (
        <Layout pageTitle={"My Blog Posts"}>
             {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                        <p>Posted: {node.frontmatter.date}</p>
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
                slug
              }
              id
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