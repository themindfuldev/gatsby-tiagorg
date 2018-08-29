import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <a href="https://twitter.com/themindfuldev" className="icon" target="_blank" rel="noopener noreferrer" title="Twitter">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/themindfuldev" className="icon" target="_blank" rel="noopener noreferrer" title="Github">
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                                <span className="label">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/4438850/tiago-garcia" className="icon" target="_blank" rel="noopener noreferrer" title="Stack Overflow">
                                <FontAwesomeIcon icon={['fab', 'stack-overflow']} size="2x" />
                                <span className="label">Stack Overflow</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/themindfuldev" className="icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@themindfuldev" className="icon" target="_blank" rel="noopener noreferrer" title="Medium">
                                <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
                                <span className="label">Medium</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/themindfuldev" className="icon" target="_blank" rel="noopener noreferrer" title="DEV">
                                <span className="fa-layers fa-2x">
                                    <FontAwesomeIcon icon="square" style={{ transform: 'scaleX(1.25)' }} />
                                    <span className="fa-layers-text" style={{ fontSize: '0.5em', fontWeight: 900, color: 'black' }}>DEV</span>
                                </span>
                                <span className="label">DEV</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 Tiago Romero Garcia</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
