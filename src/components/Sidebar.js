import React from 'react'
import Link from 'gatsby-link'

import Footer from './Footer'

class Sidebar extends React.Component {
    render() {
        const { siteMetadata } = this.props
        const {
            title,
            description,
            avatar
        } = siteMetadata

        return (
            <aside id="sidebar">
                <div className="inner">
                    <div className="image avatar">
                        <Link to='/'>
                            <img src={avatar} alt={title} />
                        </Link>
                    </div>
                    <div className="my-title">
                        <h1><strong>{title}</strong></h1>
                        <p>{description}</p>
                    </div>
                </div>
                <Footer siteMetadata={siteMetadata}/>
            </aside>
        )
    }
}

export default Sidebar
