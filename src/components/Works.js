import React from 'react'
import ExternalLink from './ExternalLink'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Works extends React.Component {
    render() {
        return (
            <section id="works">
                <header className="major">
                    <h2>These are my featured works</h2>
                </header>        
                <ul className="actions">      
                    <li>
                        <Link to='#talks' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'microphone']} /></span>
                            <span>View my talks</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#articles' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'book']} /></span>
                            <span>View my articles</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#projects' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'cog']} /></span>
                            <span>View my projects</span>
                        </Link>
                    </li>
                </ul>  
                <h3 id="talks">Talks</h3>
                <ul>
                    <li>
                        <ExternalLink href="https://docs.google.com/presentation/d/e/2PACX-1vSwbqJQqDupt9FVM9G-PgaUmMk0wcMsKoJhAUl67Z2VpVqwAsd3ks_wWDevuCayTVSyKrlA6njSdPld/pub?start=false&loop=false&delayms=5000&slide=id.p">Acessibilidade na web: milhõe$ de motivos</ExternalLink> is about web accessibily, types of impairments, current legislation, the WCAG, WAI-ARIA and three pragmatic rules for implementing accessibility. [in Portuguese]
                        <br/>
                        Presented at:
                        <ul className="single-line">
                            <li><ExternalLink href="https://braziljs.org/artigos/on-the-road-sao-carlos-tera-palestra-com-engenheiro-de-software-do-pinterest/">BrazilJS On The Road (2019)</ExternalLink> in São Carlos, SP, Brazil. <ExternalLink href="https://www.youtube.com/watch?v=4SSsnglewkY">[Video minute mark 11:00]</ExternalLink></li>
                        </ul></li>
                    <li>
                        <ExternalLink href="http://themindfuldev.github.io/lazy-loading-js-modules">Lazy Loading JS modules in the browser</ExternalLink> is about loading JS modules both synchronously (during page load) and asynchronously (performing lazy-loading) using System.js over Babel, as well as using Webpack to bundle your app and resolve dependencies.
                        <br/>
                        Presented at: 
                        <ul className="single-line">
                            <li><ExternalLink href="https://forwardjs.com/">ForwardJS (2017)</ExternalLink> in San Francisco, CA</li>
                            <li><ExternalLink href="http://mobilewebdevconference.com/san-francisco-2017/agenda/">Mobile+Web Devcon (2017)</ExternalLink> in San Francisco, CA, USA.</li>
                            <li><ExternalLink href="http://abstractions.io/">Abstractions (2016)</ExternalLink> in Pittsburgh, PA, USA.</li>
                            <li><ExternalLink href="http://www.html5report.com/conference/newyork/">DevCon5 (2016)</ExternalLink> in New York, NY, USA.</li>
                            <li><ExternalLink href="http://frontenddesignconference.com/2016/">Front-End Design Conference (2016)</ExternalLink> in St. Petersburg, FL, USA.</li>
                            <li><ExternalLink href="http://www.meetup.com/SF-Web-Performance-Group/events/233976760/">SF Web Performance Meetup (2016)</ExternalLink> in San Francisco, CA, USA.</li>
                            <li><ExternalLink href="https://www.meetup.com/Women-Who-Code-SF/events/233503274/">Women Who Code Meetup (2016)</ExternalLink> in San Francisco, CA, USA.</li>
                        </ul></li>
                    <li>
                        <ExternalLink href="http://themindfuldev.github.io/talk-design-patterns-for-javascript-featuring-modules">Design Patterns for JavaScript featuring Modules</ExternalLink> is about some essential design patterns for JavaScript applications such as Constructor, Façade and Module, focusing on the different module strategies as CommonJS, AMD and ES2015 Modules.
                        <br/>
                        Presented at:
                        <ul className="single-line">
                            <li><ExternalLink href="https://www.meetup.com/Women-Who-Code-SF/events/233503303/">Women Who Code Meetup (2016)</ExternalLink> in San Francisco, CA, USA.</li>
                            <li><ExternalLink href="http://www.html5report.com/conference/newyork/">DevCon5 (2015)</ExternalLink> in New York, NY, USA.</li>
                        </ul></li>
                    <li>
                        <ExternalLink href="http://themindfuldev.github.io/talk-10-tips-for-writing-maintainable-code-in-backbone">10 tips for writing maintainable code in Backbone.js</ExternalLink> and <ExternalLink
                        href="http://themindfuldev.github.io/talk-backbone-tricks-or-treats-html5devconf">Backbone.js tricks or treats</ExternalLink> are about some pitfalls, solutions and good practices in Backbone.js, covering Marionette.js, React, Epoxy.js and Sinon.JS and how do they solve problems with performance, memory, productivity and code organization.
                        <br/>
                        Presented at:
                        <ul className="single-line">
                            <li><ExternalLink href="http://www.meetup.com/Dancing-with-Marionette-js/">Dancing with Marionette.js meetup (2015)</ExternalLink> in New York, NY, USA.</li>
                            <li><ExternalLink href="http://html5devconf.com/speakers/tiago_romerogarcia.html">HTMLDevConf (2014)</ExternalLink> in San Francisco, CA, USA.</li>
                        </ul></li>
                </ul>
                <h3 id="articles">Articles</h3>
                <ul>
                    <li>
                        <ExternalLink href="https://medium.freecodecamp.org/pragmatic-rules-of-web-accessibility-that-will-stick-to-your-mind-9d3eb85a1a28">Pragmatic rules of web accessibility that will stick to your mind</ExternalLink> is a refresher on web accessibility (ADA, WCAG, WAI-ARIA, impairment types and exclusions) and 3 practical rules that will stick to your mind and give you guidance on implementing a11y in your project. Published on FreeCodeCamp Medium.</li>
                    <li>
                        <ExternalLink href="https://medium.freecodecamp.org/a-brief-review-of-scoping-and-hoisting-in-javascript-e74c38283b65">A brief review of Scoping and Hoisting in JavaScript</ExternalLink> is about how Scoping and Hoisting effect the way code we write will deal with our declarations (such as var, let, const and function) with a few examples. Published on FreeCodeCamp Medium.</li>
                    <li>
                        <ExternalLink href="https://dzone.com/articles/lazy-loading-es2015-modules-in-the-browser">Lazy Loading ES2015 Modules in the Browser</ExternalLink> is about how to load ES2015 modules synchronously (during the page load) and asynchronously (performing lazy-loading) using System.js. Published on DZone.</li>
                    <li>
                        <ExternalLink href="https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays">Mastering ES6 higher order functions for Arrays</ExternalLink> is aboutthe native Higher-order functions for Arrays in JavaScript, and how to develop your own higher-order function for Arrays. Published on AirPair.</li>
                    <li>
                        <ExternalLink href="https://www.airpair.com/javascript/posts/catching-up-with-javascript-higher-order-functions">Catching up with JavaScript higher-order functions</ExternalLink> is about the Higher-order functions in JavaScript. Published on AirPair.</li>
                    <li>
                        <ExternalLink href="https://www.airpair.com/javascript/posts/the-tipping-point-of-clientside-performance">Leveling up - Simple steps to optimize the Critical Rendering Path</ExternalLink> is about the Critical Rendering Path and how to optimize it. Published on AirPair.</li>
                    <li>
                        <ExternalLink href="https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules">The mind-boggling universe of JavaScript Module strategies</ExternalLink> is about JavaScript Module strategies and how to work with them. Published on AirPair.</li>
                    <li>
                        <ExternalLink href="http://www.infoq.com/articles/revisit-p-collective">Revisiting XP - be a thoughtful programmer by exercising more collective ownership</ExternalLink> is about effectively exercising collective ownership to avoid confrontation and technical debt. Published on InfoQ.</li>
                </ul>
                <h3 id="projects">Projects</h3>
                <ul>
                    <li>Authored <ExternalLink href="https://github.com/tiagorg/marionette-vdom">marionette-vdom</ExternalLink>, a Virtual DOM implementation for Marionette.js, with 34k downloads on NPM as of 07/2020.</li>
                    <li>Authored <ExternalLink href="https://github.com/tiagorg/jasmine-precondition">jasmine-precondition</ExternalLink> and <ExternalLink href="https://github.com/tiagorg/karma-jasmine-precondition">karma-jasmine-precondition</ExternalLink>, a Jasmine helper for asynchronous preconditions and its karma adapter, with 100k downloads combined on NPM as of 07/2020.</li>
                </ul>
                <ul className="actions">
                    <li>
                        <Link to='#interests' className="button icon">
                            <span><FontAwesomeIcon icon={['fas', 'arrow-down']} /></span>
                            <span>View my interests</span>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Works
