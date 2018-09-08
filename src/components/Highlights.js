import React from 'react'
import Link from 'gatsby-link'
import ExternalLink from './ExternalLink'

class Highlights extends React.Component {
    render() {
        return (
            <section id="highlights">
                <header className="major">
                    <h2>Here are my highlights</h2>
                </header>
                <ul>                    
                    <li>Architected and led the implementation of a brand new Product Details Page for a top U.S. department store:
                        fully responsive, universally rendered (isomorphic), with a loosely-coupled
                        component-based architecture, consuming microservices and lazy-loading
                        components not needed during the page load. Results: $150 Million
                        increase in annual revenue, 50% reduction in the page load time,
                        80% reduction in the speed index, while close to 100% in unit test coverage.</li>
                    <li>Awarded First Prize on AirPair's 2015 Developer Writing Competition with his article <ExternalLink
                        href="https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules">
                        The mind-boggling universe of JavaScript Module strategies</ExternalLink>.</li>
                    <li>Started <ExternalLink href="https://avenuecode.com">Avenue Code</ExternalLink>'s
                        branch in Brazil as its first employee, assuming the roles of software engineer,
                        tech lead and technical manager. In the first 4 years,
                        led the growth to 120 employees in 3 offices in Belo Horizonte and São Paulo.</li>
                    <li>Organized the <ExternalLink href="https://www.meetup.com/Backbone-js-Hackers/">
                        Backbone.js Hackers meetup</ExternalLink> in San Francisco, with 1000 members.</li>
                    <li>Awarded First Place among the Computer Science undergraduates at UNIFEI (equivalent to <i>summa cum laude</i>).</li>
                </ul>
                <ul className="actions">
                    <li><Link to="#works" className="button">See my works</Link></li>
                </ul>
            </section>
        )
    }
}

export default Highlights
