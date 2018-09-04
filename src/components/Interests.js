import React from 'react'
import Link from 'gatsby-link'
import ExternalLink from './ExternalLink'

class Interests extends React.Component {
    render() {
        return (
            <section id="interests">
                <header className="major">
                    <h2>Know my interests</h2>
                </header>
                <ul>
                    <li>Passionate about clean coding.</li>
                    <li>Fond of spreading good practices and educating people.</li>
                    <li>Fan of functional programming.</li>
                    <li>Strong believer in <ExternalLink href="https://www.skipprichard.com/9-qualities-of-the-servant-leader/">Servant leadership</ExternalLink>.</li>
                </ul>
                <ul>
                    <li>Living by the principle of <ExternalLink href="https://www.artofliving.org/us-en/ahimsa-10-ways-practice-non-violence-your-daily-life">Ahimsa</ExternalLink>.</li>
                    <li>Focusing on equanimity through mindfulness.</li>
                    <li>Regular yogi and meditator.</li>
                    <li>Ethical vegan.</li>
                    <li>Frequent platelets donor.</li>
                    <li>Volunteer with meal shares at communities in need and animal sanctuaries in the Bay Area.</li>
                </ul>
                <ul>
                    <li>Married to <ExternalLink href="https://cintiaromero.com">Cintia Romero</ExternalLink>.</li>
                    <li>Dog daddy.</li>
                    <li>Guitar and ukulele player.</li>
                </ul>
                <ul className="actions">
                    <li><Link to="#contact" className="button">Contact me</Link></li>
                </ul>
            </section>
        )
    }
}

export default Interests
