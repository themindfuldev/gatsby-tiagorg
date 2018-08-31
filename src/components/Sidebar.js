import React from 'react'

import Footer from './Footer'

class Sidebar extends React.Component {
    render() {
        return (
            <aside id="sidebar">
                <div className="inner">
                    <p className="image avatar"><img src="https://s.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c?s=600" alt="Tiago Romero Garcia" /></p>
                    <p className="my-title">
                        <h1><strong>Tiago Romero Garcia</strong></h1>
                        <p>Front-end architect in San Francisco, conference speaker and article writer.</p>
                    </p>
                </div>
                <Footer />
            </aside>
        )
    }
}

export default Sidebar
