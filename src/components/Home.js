import React, { useEffect } from 'react'
import Banner from './Banner'
import Strugle from './Strugle'
import Work from './Work'
import OverWelming from './OverWelming'
import Offer from './Offer'
import HowItsWork from './HowItsWork'
import Help from './Help'
import LastBanner from './LastBanner'

const Home = () => {
  
  return (
    <div className='home'>
      <Banner />
      <div className='banner-border'>
        <div className='banner-border-container section-center'>
          <article>
            <span className='line-vertical'></span>
            <h3>Save Money</h3>
          </article>
          <article>
            <span className='line-vertical'></span>
            <h3>Have A Lawyer On your Side</h3>
          </article>
          <article>
            <span className='line-vertical'></span>
            <h3>Gain Peace Of Mind</h3>
          </article>
        </div>
      </div>
      <Strugle/>
      <Work/>
      <OverWelming/>
      <Offer/>
      <HowItsWork/>
      <Help/>
      <LastBanner/>
    </div>
  )
}

export default Home