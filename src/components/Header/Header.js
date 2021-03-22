import React from 'react'
import NavBar from '../NavBar/NavBar'

import LogoWhite from '../../img/logo-white.svg'
import BrandingLogo from '../../img/Branding_logo.png'

import './Header.scss'

export default function Header() {
  const currentPath = window.location.pathname;
  let page;
  page = (currentPath === '/')? 'home': null;
  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="logo">
                <a href="/">
                { /* Hide on Home page */}
                <img src={LogoWhite} className={page} alt="Logo White"/>
                </a>
              </div>
            </div>
          
            <div className="offset-sm-2 col-sm-7 col-md-9 offset-md-0">
              <NavBar />
            </div>
            
          </div>
        </div>
        
      </nav>

      <div className="branding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <img src={BrandingLogo} className={page} alt="MegaMix Band Branding Logo" />
              <h1 className="title">MegaMixBand Preko 20 godina sa vama</h1>
              <p className="subtitle">
                MegaMixBand je nastao spajanjem najboljih muzičara iz okoline Šapca. 
                Svojim nastupima nikoga ne ostavljaju ravnodušnim. 
                Izadali su 5 albuma, 10 hit singlova na domaćim top listama, učestvovali na TV show programima, 
                nastupali u inostranstvu kao i na mnogobrojnim festivalima.
              </p>
              <div className="btn btn_default">
                <a href="/#contact">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </header>
  )
}
