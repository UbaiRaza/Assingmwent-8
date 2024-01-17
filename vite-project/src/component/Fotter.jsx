import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='bg-dark text-White'>
            <footer className='footer mt-5 '>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>USEFUL LINK</h4>
                            <p><a href="">Shopping Cat</a></p>
                            <p><a href="">WIshlist</a></p>
                            <p><a href="">checkout</a></p>
                            <p><a href="">Support</a></p>
                        </div>
                        <div className="col-md-4">
                            <h4>About us</h4>
                            <p><a href="">About</a></p>
                            <p><a href="">Product</a></p>
                            <p><a href="">Terms and conditions</a></p>
                            <p><a href="">Help Center</a></p>
                        </div>
                        <div className="col-md-4">
                            <h4>NEWSLETTER</h4>
                            <p>Subscribe to get all new updates</p>
                            <input type="text" placeholder='Enter your email' />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer