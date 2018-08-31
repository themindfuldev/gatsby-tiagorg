import React from 'react'

class Bio extends React.Component {
    render() {
        return (
            <section id="bio">
                <header className="major">
                    <h2>Nice to meet you, my name is Tiago.</h2>
                </header>
                <p>I'm a front-end architect with 12 years of experience in full-stack software development,
                    software architecture, web performance, technical leadership and agile methodologies.
                    Throughout my career, I've acted as an evangelist for good practices, code quality, unit
                    tests and positive collaboration, and I've mentored individuals and trained entire teams
                    with diverse skillsets in front-end, back-end, leadership and agile practices.</p>
                <p>My published body of work includes more than a dozen articles in renowned websites and magazines
                    such as InfoQ, DZone, Medium, Dev.to, AirPair and Java Magazine. I've spoken at several
                    major conferences internationally, such as ForwardJS, FEDC, Abstractions, DevCon5 and
                    HTML5DevConf, as well as in meetups and corporate trainings in San Francisco and New York.</p>
                <p>Last but not least, I'm a keen member of the developer community, both authoring and contributing
                    to existing open-source software, and volunteering with non-profits for
                    under-represented groups as Women Who Code and Girls Develop It.</p>
                <ul className="actions">
                    <li><a href="#highlights" className="button">See my highlights</a></li>
                </ul>
            </section>
        )
    }
}

export default Bio
