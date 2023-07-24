import React from 'react'
import "./home.css"
import Social from './Social.jsx'
import Data from './Data.jsx'
import Scrolldown from './Scrolldown.jsx'

export default function Home() {
  return (
    <div>
        <section className='home section' id='home'>
            <div className='home_container container grid'>
                <div className='home_content grid'>
                    <Social />
                    <div className='home_img'></div>
                      <Data />
                    </div>
                <Scrolldown />
            </div>
        </section>
    </div>
  )
}
