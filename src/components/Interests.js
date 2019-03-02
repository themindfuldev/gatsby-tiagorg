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
                    <li>Living by the principle of <ExternalLink href="https://mettacenter.org/definitions/gloss-concepts/ahimsa/">Ahimsa</ExternalLink>.</li>
                    <li>Focusing on equanimity through mindfulness.</li>
                    <li>Ethical vegan.</li>
                    <li>Capoeira student.</li>
                    <li>Daily meditator.</li>
                    <li>Frequent platelets donor.</li>
                    <li>Volunteer with meal shares at communities in need and animal sanctuaries in the Bay Area.</li>
                </ul>
                <ul className="single-line">
                    <li>Married to <ExternalLink href="https://cintiaromero.com">Cintia Romero</ExternalLink> and dog daddy.</li>
                    <li>Guitar and ukulele player.</li>
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
