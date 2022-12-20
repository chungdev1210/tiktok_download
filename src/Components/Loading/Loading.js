import React from 'react'
import "./Loading.scss"

export default function Loading() {
    return (
        <div className='loading__last'>
            <span>Xin chờ</span>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
