import React from 'react'

class Works extends React.Component {
    render() {
        return (
            <section id="works">
                <header className="major">
                    <h2>Get to know my featured works</h2>
                </header>
                <h3>Projects</h3>
                <ul>
                    <li>Authored <a href="https://github.com/tiagorg/marionette-vdom" target="_blank"
                        rel="noopener noreferrer">
                        marionette-vdom</a>, a Virtual DOM implementation for Marionette.js, with 28k
                        downloads on NPM as of 09/2018.</li>
                    <li>Authored <a href="https://github.com/tiagorg/jasmine-precondition" target="_blank"
                        rel="noopener noreferrer">jasmine-precondition</a> and <a
                        href="https://github.com/tiagorg/karma-jasmine-precondition" target="_blank" rel="noopener noreferrer">
                            karma-jasmine-precondition</a>, a Jasmine helper for asynchronous preconditions
                        and its karma adapter, with 47k downloads combined on NPM as of 09/2018.</li>
                </ul>
                <h3>Talks</h3>
                <ul>
                    <li><a href="http://themindfuldev.github.io/lazy-loading-js-modules" target="_blank"
                        rel="noopener noreferrer">Lazy Loading JS modules in the browser</a> is about 
                        loading code during page load time vs lazy loading, then how to load JS modules 
                        both synchronously (during page load) and asynchronously (lazy-load) using System.js 
                        over Babel, as well as how to used Webpack 2 to bundle your app and resolve dependencies.</li>
                    <li><a href="http://themindfuldev.github.io/talk-design-patterns-for-javascript-featuring-modules" target="_blank"
                        rel="noopener noreferrer">Design Patterns for JavaScript featuring Modules</a> is about the 
                        essential design patterns for JavaScript applications such as Constructor, Façade and 
                        Module, focusing on the different module strategies as CommonJS, AMD and ES2015 Modules.</li>
                    <li><a href="http://themindfuldev.github.io/talk-10-tips-for-writing-maintainable-code-in-backbone" target="_blank"
                        rel="noopener noreferrer">10 tips for writing maintainable code in Backbone.js</a> is about some 
                        pitfalls, solutions and good practices for common scenarios in Backbone.js. In this talk the 
                        audience will learn about Marionette.js, React, Epoxy.js and Sinon.JS and how do they solve 
                        problems about performance, memory, productivity and code organization.</li>
                </ul>
                <h3>Articles</h3>
                <ul>
                    <li><a href="https://dzone.com/articles/lazy-loading-es2015-modules-in-the-browser" target="_blank"
                        rel="noopener noreferrer">Lazy Loading ES2015 Modules in the Browser (DZone)</a> is about 
                        how to load ES2015 modules synchronously (during the page load) and asynchronously 
                        (performing lazy-loading) using System.js.</li>
                    <li><a href="https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays" target="_blank"
                        rel="noopener noreferrer">Mastering ES6 higher order functions for Arrays (AirPair)</a> is about
                        the native Higher-order functions for Arrays in JavaScript, and how to develop 
                        your own higher-order function for Arrays.</li>
                    <li><a href="https://www.airpair.com/javascript/posts/catching-up-with-javascript-higher-order-functions" target="_blank"
                        rel="noopener noreferrer">Catching up with JavaScript higher-order functions (AirPair)</a> is about the
                        Higher-order functions in JavaScript.</li>
                    <li><a href="https://www.airpair.com/javascript/posts/the-tipping-point-of-clientside-performance" target="_blank"
                        rel="noopener noreferrer">Leveling up - Simple steps to optimize the Critical Rendering Path (AirPair)</a> is about
                        the Critical Rendering Path and how to optimize it.</li>
                    <li><a href="https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules" target="_blank"
                        rel="noopener noreferrer">The mind-boggling universe of JavaScript Module strategies (AirPair)</a> is about 
                        JavaScript Module strategies and how to work with them.</li>
                    <li><a href="http://www.infoq.com/articles/revisit-p-collective" target="_blank"
                        rel="noopener noreferrer">Revisiting XP - be a thoughtful programmer by exercising more collective ownership (InfoQ)</a> is about 
                        effectively exercising collective ownership to avoid confrontation and technical debt.</li>
                </ul>
                <ul className="actions">
                    <li><a href="#interests" className="button">See my interests</a></li>
                </ul>
            </section>
        )
    }
}

export default Works
