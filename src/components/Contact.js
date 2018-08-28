import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <section id="three">
                <h2>Get In Touch</h2>
                <p>Hit me up! I would love to hear out from you.</p>
                <div className="row">
                    <div className="12u">
                        <form method="post" action="https://formspree.io/tiagoromerogarcia+contact@gmail.com">
                            <input type="hidden" name="_subject" value="Message received from tiagorg.com" />
                            <input type="hidden" name="_next" value="https://tiagorg.com/email-received" />
                            <input type="text" name="_gotcha" style={{display : 'none'}} />
                            <div className="row uniform 50%">
                                <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" required /></div>
                                <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" required /></div>
                                <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4" required></textarea></div>
                            </div>                        
                            <div className="row uniform 50%">
                                <ul className="actions">
                                    <li>
                                        <button type="submit" className="icon">
                                            <span><i className="icon fa-envelope-o" /></span>
                                            <span>Send Message</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </form> 
                    </div>                    
                </div>
            </section>
        )
    }
}

export default Contact
