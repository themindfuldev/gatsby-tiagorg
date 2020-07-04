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
                    <li>Passionate about accessibility.</li>
                    <li>Fond of spreading good practices and mentoring people.</li>
                    <li>Strong believer in <ExternalLink href="https://www.skipprichard.com/9-qualities-of-the-servant-leader/">Servant leadership</ExternalLink>.</li>
                </ul>
                <ul className="single-line">
                    <li>Latinx, from Brazil.</li>
                    <li>Driven by empathy, kindness and creativity.</li>
                    <li>Ethical vegan.</li>
                    <li>Capoeirista.</li>
                    <li>Daily meditator.</li>
                    <li>Kombucha brewer.</li>
                    <li>Sober.</li>
                </ul>
                <ul className="single-line">
                    <li>Married to <ExternalLink href="https://cintiaromero.com">Cintia Romero</ExternalLink> and dog daddy.</li>
                    <li>Enjoy playing guitar, ukulele, berimbau, pandeiro, atabaque and other hand percussion instruments.</li>
                    <li>Practictioner of Ahiṃsā (the virtue of nonviolence).</li>
                    <li>I believe that Black Lives Matter and Love is Love, and I refuse to work for who doesn't share these values.</li>
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
