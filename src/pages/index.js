import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Highlights from '../components/Highlights'
import Works from '../components/Works'
import Interests from '../components/Interests'
import Contact from '../components/Contact'

class HomeIndex extends React.Component {
    
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />                   
                </Helmet>

                <div id="main">

                    <Bio />

                    <Highlights />

                    <Works />

                    <Interests />

                    <Contact />

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`