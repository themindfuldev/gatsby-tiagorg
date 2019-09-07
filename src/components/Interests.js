import React from 'react'
import Link from 'gatsby-link'
import ExternalLink from './ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Interests extends React.Component {
    render() {
        return (
            <section id="interests">
                <header className="major">
                    <h2>Know my interests</h2>
                </header>
                <ul className="single-line">
                    <li>Passionate about clean coding.</li>
                    <li>Fond of spreading good practices and mentoring people.</li>
                    <li>Fan of functional programming.</li>
                    <li>Strong believer in <ExternalLink href="https://www.skipprichard.com/9-qualities-of-the-servant-leader/">Servant leadership</ExternalLink>.</li>
                </ul>
                <ul className="single-line">
                    <li>Driven by empathy, kindness and creativity.</li>
                    <li>Ethical vegan.</li>
                    <li>Capoeirista.</li>
                    <li>Sober.</li>
                    <li>Frequent platelets donor.</li>
                    <li>Mindfulness practitioner.</li>
                </ul>
                <ul className="single-line">
                    <li>Married to <ExternalLink href="https://cintiaromero.com">Cintia Romero</ExternalLink> and dog daddy.</li>
                    <li>Guitar, ukulele, berimbau and hand percussion player.</li>
                </ul>
                <ul className="actions">
                    <li>
                        <Link to='#contact' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'arrow-down']} /></span>
                            <span>Contact me</span>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Interests
