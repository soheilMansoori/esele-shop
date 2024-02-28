import React from 'react'
import { MoonLoader } from 'react-spinners'
export default function Loading() {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center '>
            <MoonLoader color="#ffa6bc" size={70} />
        </div>
    )
}
