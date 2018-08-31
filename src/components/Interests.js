import React from 'react'

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
                    <li>Strong believer in <a href="https://www.skipprichard.com/9-qualities-of-the-servant-leader/" target="_blank" rel="noopener noreferrer">Servant leadership</a>.</li>
                    <li>Follower of <a href="https://www.artofliving.org/us-en/ahimsa-10-ways-practice-non-violence-your-daily-life" target="_blank" rel="noopener noreferrer">Ahimsa</a>.</li>
                    <li>Focusing on equanimity through mindfulness.</li>
                    <li>Regular yogi and meditator.</li>
                    <li>Regular platelets donor.</li>
                    <li>Guitar and ukulele player.</li>
                    <li>Ethical vegan.</li>
                    <li>Dog daddy.</li>
                    <li>Volunteer with <a href="http://www.chilisonwheels.org/" target="_blank" rel="noopener noreferrer">Chili on Wheels</a> and some animal sanctuaries in the Bay Area.</li>
                </ul>
                <ul className="actions">
                    <li><a href="#contact" className="button">Contact me</a>.</li>
                </ul>
            </section>
        )
    }
}

export default Interests
