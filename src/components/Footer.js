import React from 'react'
import ExternalLink from '../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <ExternalLink href="https://twitter.com/themindfuldev" className="icon" title="Twitter">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                                <span className="label">Twitter</span>
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href="https://github.com/themindfuldev" className="icon" title="Github">
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                                <span className="label">Github</span>
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href="https://www.linkedin.com/in/themindfuldev" className="icon" title="LinkedIn">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                                <span className="label">LinkedIn</span>
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href="https://dev.to/themindfuldev" className="icon" title="DEV">
                                <span className="fa-layers fa-2x">
                                    <FontAwesomeIcon icon="square" style={{ transform: 'scaleX(1.25)' }} />
                                    <span className="fa-layers-text" style={{ fontSize: '0.5em', fontWeight: 900, color: 'black' }}>DEV</span>
                                </span>
                                <span className="label">DEV</span>
                            </ExternalLink>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 Tiago Romero Garcia</li><li>Design: <ExternalLink href="http://html5up.net">HTML5 UP</ExternalLink></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Footer
