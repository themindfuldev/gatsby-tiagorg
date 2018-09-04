import React from 'react'
import Helmet from 'react-helmet'

import '../assets/scss/main.scss'

import Sidebar from '../components/Sidebar'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faSquare, faEnvelope, faTwitter, faGithub, faLinkedin)

class Template extends React.Component {
    render() {
        const { title, description, twitter, github, linkedin, dev } = this.props.data.site.siteMetadata;
        const image = "https://s.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c?s=600"
        const twitterHandle = "@themindfuldev"
        const url = "https://tiagorg.com"
        const jsonLd = {
            "@context": "http://schema.org/",
            "@type": "Person",
            "name": title,
            "jobTitle": description,
            "url": url,
            "sameAs": [twitter, github, linkedin, dev]
        }

        const { children } = this.props

        return (
            <div>
                <Helmet>
                    <html lang="en" role="main" />
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="image" content={image} />
                    <meta name="robots" content="index,follow" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:site" content={twitterHandle} />
                    <meta name="twitter:creator" content={twitterHandle} />
                    <meta name="twitter:image:src" content={image} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:url" content={url} />
                    <meta property="og:image" content={image} />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                </Helmet>
                <Sidebar />
                {children()}
            </div>
        )
    }

    componentDidMount() {
        dom.watch()
    }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template

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