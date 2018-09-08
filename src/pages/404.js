import React from 'react'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'
import ExternalLink from '../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../assets/pdf/Tiago Romero Garcia - Web Resume.pdf'


class PageNotFound extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="robots" content="noindex,follow" />
                </Helmet>
                <div id="main">

                    <section id="email-received">
                        <header className="major">
                            <h2>Page not found</h2>
                        </header>
                        <p>Oops! Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                        <p>Since you're here, I invite you to browse around to see my work, and connect with me on social networks.</p>
                        <ul className="actions">
                            <li>
                                <ExternalLink href={resume} className="button icon">
                                    <span><FontAwesomeIcon icon={['far', 'file-alt']} /></span>
                                    <span>Open my Resume</span>
                                </ExternalLink>
                            </li>
                            <li>
                                <Link to='/' className="button icon">
                                    <span><FontAwesomeIcon icon={['far', 'user']} /></span>
                                    <span>Know me better</span>
                                </Link>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        )
    }
}

export default PageNotFound