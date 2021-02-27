import React from 'react'

import Intro from './Intro'
import Trend from './Trend'
import Brands from './Brands'
import Showcase from './Showcase'
import Landing from './Landing'

export default function Main() {
    return (
        <main>
            <Intro />
            <Trend />
            <Brands />
            <Showcase />
            <Landing />
        </main>
    )
}