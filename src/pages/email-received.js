import React from 'react'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'
import ExternalLink from '../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../assets/pdf/Tiago Romero Garcia - Web Resume.pdf'

class EmailReceived extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="robots" content="noindex,follow" />
                </Helmet>
                <div id="main">

                    <section id="email-received">
                        <header className="major">
                            <h2>Thank you for contacting me!</h2>
                        </header>
                        <p>Your email has been received and will be given attention as soon as possible.</p>
                        <p>In the meanwhile, I invite you to browse around to see my work, and connect with me on social networks.</p>
                        <ul className="actions">
                            <li>
                                <ExternalLink href={resume} className="button icon">
                                    <span><FontAwesomeIcon icon={['far', 'file-alt']} /></span>
                                    <span>View my Resume</span>
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

export default EmailReceived