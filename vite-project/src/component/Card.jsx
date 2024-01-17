import React from 'react'

function Card(props) {

    return (
        <>

            <div>

                <div onClick={props.onClick} className="w-100">
                    <a href=''><img width='200px' height='240px' src={props.image} alt="" /></a>
                    <p>{props.title} <br />{props.desc} <br /> </p>
                </div>
            </div>
        </>



    )
}

export default Card