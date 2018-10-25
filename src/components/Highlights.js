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
                        for top U.S. e-commerces. I led teams and revamped the architecture, tech stacks and user experience, 
                        targeting productivity, performance, 
                        responsive design, design patterns, unit tests, SEO and accessibility.</li>
                    <li>Empowered companies to achieve admirable results in terms of increased revenue, reduction
                        in page load time and speed index, improved user engagement and boosted SEO ranking. I
                        enhanced team productivity by adopting modern technologies,  
                        teaching innovative techniques and coaching.</li>
                    <li>Started <ExternalLink href="https://avenuecode.com">Avenue Code</ExternalLink>'s
                        branch in Brazil as its first employee, assuming the roles of Software Engineer,
                        Tech Lead and Tech Manager. In the first 4 years,
                        I led the growth to 120 employees in 3 offices.</li>
                    <li>Awarded <ExternalLink href="https://www.airpair.com/100k-writing-competition">First 
                        Prize on AirPair's 2015 Developer Writing Competition</ExternalLink>.</li>
                    <li>Awarded First Place among the Computer Science students (equivalent to <i>summa cum laude</i>).</li>
                    <li>Organized the <ExternalLink href="https://www.meetup.com/Backbone-js-Hackers/">
                        Backbone.js Hackers meetup</ExternalLink> in San Francisco from 2014 to 2016, having 1000 members.</li>
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
