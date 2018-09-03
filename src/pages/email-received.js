import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ExternalLink from '../components/ExternalLink'

class EmailReceived extends React.Component {

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

                    <section id="email-received">
                        <header className="major">
                            <h2>Thank you for contacting me!</h2>
                        </header>
                        <p>Your email has been received and will be given attention as soon as possible.</p>
                        <p>In the meanwhile, feel free to browse around to see my work, checking out the links below in the footer.</p>
                        <p>You can also view my <ExternalLink href="https://www.linkedin.com/in/themindfuldev">LinkedIn profile</ExternalLink> and follow me on social networks.</p>
                        <ul className="actions">
                            <li><Link to='/' className="button">Know me better</Link></li>
                        </ul>
                    </section>

                </div>

            </div>
        )
    }
}

export default EmailReceived

export const pageQuery = graphql`
    query EmailReceivedPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`