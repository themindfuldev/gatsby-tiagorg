import React from 'react'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'
import ExternalLink from '../components/ExternalLink'

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
                        <p>Since you're here, feel free to browse around to see my work.</p>
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

export default PageNotFound