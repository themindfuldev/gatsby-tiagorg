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
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        const { children } = this.props

        return (
            <div>
                <Helmet>
                    <html lang="en" role="main" />
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
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