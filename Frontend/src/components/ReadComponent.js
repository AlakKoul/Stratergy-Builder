import React from 'react'
import '../styles/ReadPStrategy.css'
export default function ReadComponent(props) {
    return (
        <>
            <div className='readComp'>

                    <div className='bookmark'>
                    {props.name}
                    </div>
                    <div className='text-details'>
                    {props.description}
                </div>
            </div>
        </>
    )
}


