import React from 'react'
import ExternalLink from './ExternalLink'
import Link from 'gatsby-link'

class Works extends React.Component {
    render() {
        return (
            <section id="works">
                <header className="major">
                    <h2>Get to know my featured works</h2>
                </header>
                <h3>Projects</h3>
                <ul>
                    <li>Authored <ExternalLink href="https://github.com/tiagorg/marionette-vdom">
                        marionette-vdom</ExternalLink>, a Virtual DOM implementation for Marionette.js, with 28k
                        downloads on NPM as of 09/2018.</li>
                    <li>Authored <ExternalLink href="https://github.com/tiagorg/jasmine-precondition">
                        jasmine-precondition</ExternalLink> and <ExternalLink href="https://github.com/tiagorg/karma-jasmine-precondition">
                        karma-jasmine-precondition</ExternalLink>, a Jasmine helper for asynchronous preconditions
                        and its karma adapter, with 47k downloads combined on NPM as of 09/2018.</li>
                </ul>
                <h3>Talks</h3>
                <ul>
                    <li><ExternalLink href="http://themindfuldev.github.io/lazy-loading-js-modules">
                        Lazy Loading JS modules in the browser</ExternalLink> is about 
                        loading code during page load time vs lazy loading, then how to load JS modules 
                        both synchronously (during page load) and asynchronously (performing lazy-loading) using System.js 
                        over Babel, as well as how to use Webpack 2 to bundle your app and resolve dependencies.</li>
                    <li><ExternalLink href="http://themindfuldev.github.io/talk-design-patterns-for-javascript-featuring-modules">
                        Design Patterns for JavaScript featuring Modules</ExternalLink> is about some 
                        essential design patterns for JavaScript applications such as Constructor, Façade and 
                        Module, focusing on the different module strategies as CommonJS, AMD and ES2015 Modules.</li>
                    <li><ExternalLink href="http://themindfuldev.github.io/talk-10-tips-for-writing-maintainable-code-in-backbone">
                        10 tips for writing maintainable code in Backbone.js</ExternalLink> and <ExternalLink
                        href="http://themindfuldev.github.io/talk-backbone-tricks-or-treats-html5devconf">
                        Backbone.js tricks or treats</ExternalLink> are about some 
                        pitfalls, solutions and good practices for common scenarios in Backbone.js, 
                        covering Marionette.js, React, Epoxy.js and Sinon.JS and how do they solve 
                        problems with performance, memory, productivity and code organization.</li>
                </ul>
                <h3>Articles</h3>
                <ul>
                    <li><ExternalLink href="https://dzone.com/articles/lazy-loading-es2015-modules-in-the-browser">
                        Lazy Loading ES2015 Modules in the Browser (DZone)</ExternalLink> is about 
                        how to load ES2015 modules synchronously (during the page load) and asynchronously 
                        (performing lazy-loading) using System.js.</li>
                    <li><ExternalLink href="https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays">
                        Mastering ES6 higher order functions for Arrays (AirPair)</ExternalLink> is about
                        the native Higher-order functions for Arrays in JavaScript, and how to develop 
                        your own higher-order function for Arrays.</li>
                    <li><ExternalLink href="https://www.airpair.com/javascript/posts/catching-up-with-javascript-higher-order-functions">
                        Catching up with JavaScript higher-order functions (AirPair)</ExternalLink> is about the
                        Higher-order functions in JavaScript.</li>
                    <li><ExternalLink href="https://www.airpair.com/javascript/posts/the-tipping-point-of-clientside-performance">
                        Leveling up - Simple steps to optimize the Critical Rendering Path (AirPair)</ExternalLink> is about
                        the Critical Rendering Path and how to optimize it.</li>
                    <li><ExternalLink href="https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules">
                        The mind-boggling universe of JavaScript Module strategies (AirPair)</ExternalLink> is about 
                        JavaScript Module strategies and how to work with them.</li>
                    <li><ExternalLink href="http://www.infoq.com/articles/revisit-p-collective">
                        Revisiting XP - be a thoughtful programmer by exercising more collective ownership (InfoQ)</ExternalLink> is about 
                        effectively exercising collective ownership to avoid confrontation and technical debt.</li>
                </ul>
                <ul className="actions">
                    <li><Link to="#interests" className="button">See my interests</Link></li>
                </ul>
            </section>
        )
    }
}

export default Works
