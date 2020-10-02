import React from 'react'

export default function Wrapper({children}) {
    const Style = {
        border:'1px solid black',
        padding:'10px'
    }
    return (
        <div style={Style}>
            {children}
        </div>
    )
}
