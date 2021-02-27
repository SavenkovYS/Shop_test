import React from 'react'

export default function Landing() {
    return (
        <section className="landing">
            <h2 className="landing__title">Newsletter</h2>
            <form className="landing__form" method="POST" action="#">
                <div className="landing__form-container">
                    <input 
                        className="landing__email-input input-text" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email address.." 
                    />
                    <button className="button landing__submit">Submit</button>
                </div>
            </form>
        </section>
    )
}