import React from 'react'

export default function TabButton({children, isActive}) {
    const activeClass = isActive && "tab-button--active"
    return (
        <button className={`tab-button ${activeClass}`}>
            {children}
        </button>
    )
}