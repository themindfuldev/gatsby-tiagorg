import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Highlights from '../components/Highlights'
import Works from '../components/Works'
import Interests from '../components/Interests'
import Contact from '../components/Contact'

class HomeIndex extends React.Component {
    
    render() {
        return (
            <div id="main">
                <Bio />
                <Highlights />
                <Works />
                <Interests />
                <Contact />
            </div>

        )
    }
}

export default HomeIndex