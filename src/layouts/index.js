import React from 'react'
import Link from 'gatsby-link'
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
        const { children } = this.props

        return (
            <div>
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
