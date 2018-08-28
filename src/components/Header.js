import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="https://s.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c?s=600" alt="Tiago Romero Garcia" /></a>
                    <h1>Hi. I am <strong>Tiago Romero Garcia</strong>.</h1>
                    <p>Front-end architect in San Francisco. Conference speaker and article writer. Believer in servant leadership and ahimsa. Focusing on equanimity through mindfulness. Platelets donor.</p>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
