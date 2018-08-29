import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Header from '../components/Header'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

library.add(faSquare, faEnvelope, faTwitter, faGithub, faLinkedin, faMedium, faStackOverflow);

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                {children()}
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template
