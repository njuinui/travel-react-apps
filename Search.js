import React from 'react'
import './SearchStyle.css'
import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div className='search'>
        <div className='container'>
            <div className='left'>
                <h2>LUXURY INCLUDED VACATIONS FOR PEOPLE</h2>
                <p>Help us make search better for youMicrosoft will collect results from searches that you perform in the browser to improve Microsoft products and services. This data is never associated with you or your device.</p>
                <div className='search-col-2'>
                    <div className='box'>
                        <div>
                            <img src={Gold} alt="/" />
                        </div>
                        <div>
                            <h3>WORLD'S LEADING</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='box'>
                       <h3>NO ONE INCLUDES MORE</h3>
                       <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                       <button>View Packages</button>
                    </div>
                </div>
            </div>
            <div className='right'>
                 
            </div>
        </div>
    </div>
  )
}

export default Search