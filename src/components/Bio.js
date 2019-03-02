import React from 'react'
import Link from 'gatsby-link'
import ExternalLink from '../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../assets/pdf/Tiago Romero Garcia - Web Resume.pdf'

class Bio extends React.Component {
    render() {
        return (
            <section id="bio">
                <header className="major">
                    <h2>Nice to meet you, my name is Tiago!</h2>
                </header>
                <p>I'm a Tech Lead with 12 years of experience in full-stack software development, software architecture, web performance, leadership, and agile methodologies. Throughout my career, I've acted as an evangelist for good practices, code quality, unit tests, and positive collaboration, through servant leadership. I've mentored individuals and trained entire teams with diverse skill sets in front-end, back-end, leadership, and agile practices.</p>
                <p>My published body of work includes more than a dozen articles in renowned websites and magazines such as InfoQ, DZone, FreeCodeCamp Medium, Dev.to, AirPair and Java Magazine. I've spoken at several major conferences internationally, such as ForwardJS, FEDC, Abstractions, DevCon5, and HTML5DevConf, as well as in meetups and corporate training in San Francisco and New York.</p>
                <p>Last but not least, I'm a keen member of the developer community, both authoring and contributing to existing open-source software, and volunteering with non-profits for under-represented groups.</p>
                <ul className="actions">
                    <li>
                        <ExternalLink href={resume} className="button icon">
                            <span><FontAwesomeIcon icon={['far', 'file-alt']} /></span>
                            <span>View my resume</span>
                        </ExternalLink>
                    </li>
                    <li>
                        <Link to='#highlights' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'arrow-down']} /></span>
                            <span>View my highlights</span>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Bio
