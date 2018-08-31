import React from 'react'

class Bio extends React.Component {
    render() {
        return (
            <section id="bio">
                <header className="major">
                    <h2>Hi, I am <strong>Tiago Romero Garcia</strong>.</h2>
                </header>
                <p>Front-end architect in San Francisco. Conference speaker and article writer. Believer in servant leadership and ahimsa. Focusing on equanimity through mindfulness. Platelets donor.</p>
                <ul className="actions">
                    <li><a href="#" className="button">Learn More</a></li>
                </ul>
            </section>
        )
    }
}

export default Bio
