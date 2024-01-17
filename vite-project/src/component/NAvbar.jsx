import React from 'react'
import './NAvbar.css'
// import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const NAvbar = () => {
    return (
        <>
            <div className="heading">
                <a className='nn' href=""><img height='30px' src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="" /></a>
                <input className="input" placeholder="text" />
                <h3 className='mm'>العربية</h3>
                {/* <div className='mm'><div>Log in</div> <div><CgProfile className='icon' /></div></div> */}
                <h5 className='mm'>Wishlist <FaHeart /></h5>
                <h5 className='mm'>cart <FaCartShopping /></h5>



            </div>
        </>

    )
}

export default NAvbar
