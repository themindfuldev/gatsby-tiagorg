import React from 'react'
import Helmet from 'react-helmet'

import '../assets/scss/main.scss'

import Sidebar from '../components/Sidebar'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faMicrophone, faBook, faCog } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFileAlt, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowDown, faMicrophone, faBook, faCog, faEnvelope, faFileAlt, faUser, faTwitter, faGithub, faLinkedin, faDev)

class Template extends React.Component {
    render() {
        const { siteMetadata } = this.props.data.site
        const { 
            title,
            description,
            twitter,
            github,
            linkedin,
            dev,
            avatar,
            twitterHandle,
            facebookAppId,
            url 
        } = siteMetadata

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
                    <meta name="image" content={avatar} />
                    <meta name="robots" content="index,follow" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:url" content={url} />
                    <meta property="og:image" content={avatar} />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:site" content={twitterHandle} />
                    <meta name="twitter:creator" content={twitterHandle} />
                    <meta name="twitter:image:src" content={avatar} />
                    <meta property="fb:app_id" content={facebookAppId} />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#00aba9" />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Sidebar siteMetadata={siteMetadata} />
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
                twitter
                github
                linkedin
                dev
                twitterHandle
                facebookAppId
                avatar
                url
            }
        }
    }
`