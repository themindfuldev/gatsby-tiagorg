import React from 'react'
import ExternalLink from '../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    render() {
        const { siteMetadata } = this.props
        const {
            title,
            twitter,
            github,
            linkedin,
            dev
        } = siteMetadata

        return (
            <section id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <ExternalLink href={github} className="icon" title="Github">
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                                <span className="label">Github</span>
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href={linkedin} className="icon" title="LinkedIn">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                                <span className="label">LinkedIn</span>
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href={dev} className="icon" title="Dev.to">
                                <FontAwesomeIcon icon={['fab', 'dev']} size="2x" />
                                <span className="label">DEV</span>
                            </ExternalLink>
                        </li>                        
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 {title}</li><li>Design: <ExternalLink href="http://html5up.net">HTML5 UP</ExternalLink></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Footer
