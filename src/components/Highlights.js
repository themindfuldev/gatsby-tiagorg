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
                    <li>Strong expertise in: JavaScript, CSS, Node.js, React, Redux, Marionette.js, Backbone.js,
                        Jasmine, Java, Git, Webpack, Unit Tests, Functional Programming, Lazy Loading,
                        Design Patterns, Responsive Design.</li>         
                    <li>Architected, orchestrated and spearheaded the implementation of several pages and features
                        for top U.S. e-commerces, by leading teams and performing redesigns and modernizations on 
                        their architecture, tech stacks and user experience, always favoring performance, team productivity, 
                        componentization, responsive design, design patterns, unit tests, SEO and accessibility.</li>
                    <li>Empowered companies to achieve admirable results in terms of increased revenue, reduction
                        in page load time and speed index, improved user engagement, boosted SEO ranking
                        while enhancing the team's productivity by adopting modern technologies, coaching and 
                        teaching innovative techniques.</li>
                    <li>Started <ExternalLink href="https://avenuecode.com">Avenue Code</ExternalLink>'s
                        branch in Brazil as its first employee, assuming the roles of Software Engineer,
                        Tech Lead and Tech Manager. In the first 4 years,
                        I led the growth to 120 employees in 3 offices.</li>
                    <li>Awarded First Prize on AirPair's 2015 Developer Writing Competition with my article <ExternalLink
                        href="https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules">
                        The mind-boggling universe of JavaScript Module strategies</ExternalLink>.</li>
                    <li>Awarded First Place among the Computer Science studends (equivalent to <i>summa cum laude</i>).</li>
                    <li>Organized the <ExternalLink href="https://www.meetup.com/Backbone-js-Hackers/">
                        Backbone.js Hackers meetup</ExternalLink> in San Francisco, with 1000 members.</li>
                </ul>
                <ul className="actions">
                    <li>
                        <Link to='#works' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'arrow-down']} /></span>
                            <span>See my works</span>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Highlights
