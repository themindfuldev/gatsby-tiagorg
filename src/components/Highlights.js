import React from 'react'
import Link from 'gatsby-link'
import ExternalLink from './ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Highlights extends React.Component {
    render() {
        return (
            <section id="highlights">
                <header className="major">
                    <h2>Here are my highlights</h2>
                </header>
                <ul>
                    <li>Strong expertise in JavaScript, CSS, Node.js, React, Redux, Flow, Marionette.js, Backbone.js, Jasmine, Jest, Cypress, Python, Flask, Java, Git, SQL, Unit Tests, Functional Programming, Web Performance, Design Patterns, Responsive Design, Design Systems.</li>
                    <li>Architected, orchestrated and spearheaded the implementation of several pages and features for top U.S. e-commerce sites and social media. Led teams and redesigned architectures, tech stacks and user experiences, focusing on increased engineering productivity, better code performance, a more responsive design and evangelizing good practices such as A/B testing, design patterns, unit tests, integration tests, SEO and accessibility.</li>
                    <li>Lectured and empowered companies to achieve excellent results in terms of increased revenue, reduction in page load time and speed index, improved user engagement and boosted SEO ranking.</li>
                    <li>Works at <ExternalLink href="https://pinterest.com">Pinterest</ExternalLink>'s Advertiser Interfaces and Growth, by leading complete projects from planning to A/B testing and shipped, while collaborating cross-functionally and advocating for the best user experience and accessibility. At the same time, doing mentoring, code reviewing, bug fixing, giving lectures/workshops and sharing oncall responsibilities (deploying, keeping systems healthy, responding to incidents and other critical demands).</li>
                    <li>Co-leads Todos Pincluídos, the <ExternalLink href="https://www.pinterestcareers.com/inclusion-and-diversity">Pinterest community</ExternalLink> representing Latinx employees, contributing to initiatives and ultimately to the company culture.</li>
                    <li>Started <ExternalLink href="https://avenuecode.com">Avenue Code</ExternalLink>'s branch in Brazil as its first employee, assuming the roles of Software Engineer, Tech Lead and Tech Manager. In the first 4 years, I led the growth to 120 employees in 3 offices.</li>
                    <li>Awarded <ExternalLink href="https://www.airpair.com/100k-writing-competition">First Prize on AirPair's 2015 Developer Writing Competition</ExternalLink>.</li>
                    <li>Awarded First Place among the Computer Science students at <ExternalLink href="https://en.unifei.edu.br/">UNIFEI</ExternalLink> (equivalent to <i>summa cum laude</i>).</li>
                    <li>Organized the <ExternalLink href="https://www.meetup.com/Backbone-js-Hackers/">Backbone.js Hackers meetup</ExternalLink> in San Francisco from 2014 to 2016, having 1000 members at the time.</li>
                </ul>
                <ul className="actions">
                    <li>
                        <Link to='#works' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'arrow-down']} /></span>
                            <span>View my works</span>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Highlights
