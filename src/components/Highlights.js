import React from 'react'

class Highlights extends React.Component {
    render() {
        return (
            <section id="highlights">
                <header className="major">
                    <h2>Here are my highlights</h2>
                </header>
                <ul>
                    <li>Authored a brand new Product Details Page for a <a href="https://www.macys.com/shop/product/kitchenaid-ksm150ps-artisan-5-qt.-stand-mixer?ID=77589" target="_blank" rel="noopener noreferrer">Fortune 500 company</a>:
                        fully responsive, universally (isomorphically) rendered, with a loosely-coupled
                        component-based architecture, consuming microservices and lazy-loading
                        components not needed during the page load. This project resulted in a $150 Million
                        increase in yearly profits, as well as cutting off the page load time by 50%,
                        reducing the speed index by 80%, while getting close to 100% of unit test coverage.</li>
                    <li>Awarded First Prize on AirPair's 2015 Developer Writing Competition with his article <a
                        href="https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules"
                            target="_blank" rel="noopener noreferrer">
                            The mind-boggling universe of JavaScript Module strategies</a>.</li>
                    <li>Started <a href="https://avenuecode.com" target="_blank" rel="noopener noreferrer">Avenue Code</a>'s
                        branch in Brazil as its first employee, assuming the roles of software engineer,
                        tech lead and technical manager. In the first 4 years,
                        led the growth to 120 employees in 3 offices in Belo Horizonte and São Paulo.</li>
                    <li>Was the main organizer of the <a href="https://www.meetup.com/Backbone-js-Hackers/" target="_blank" rel="noopener noreferrer">
                        Backbone.js Hackers meetup</a> in San Francisco.</li>
                    <li>Awarded First Place among the Computer Science undergraduates at UNIFEI (equivalent to <i>summa cum laude</i>).</li>
                </ul>
                <ul className="actions">
                    <li><a href="#works" className="button">See my works</a></li>
                </ul>
            </section>
        )
    }
}

export default Highlights
