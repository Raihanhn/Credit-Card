import React from 'react'
import img from '../../src/assets/images/chip.png'
import img1 from '../../src/assets/images/visa.png'
import img2 from '../../src/assets/images/map.png'
import img3 from '../../src/assets/images/pattern.png'

const Credit = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <img src={img2} alt="" className='map-img' />
             <div className="row">
              <img src={img} alt="" width={'60px'} />
              <img src={img1} alt="" width={'80px'} />
             </div>
             <div className="row card-no">
              <p>5244</p>
              <p>2150</p>
              <p>8252</p>
              <p>9873</p>
             </div>
             <div className="row card-holder">
              <p>CARD HOLDER</p>
              <p>VALID TILL</p>
             </div>
             <div className="row name">
              <p>MD RAIHAN</p>
              <p>10 / 25</p>
             </div>
          </div>

          
          <div className="back">
             <img src={img2} alt="" className='map-img' />
              <div className="bar"> </div>
              <div className="row card-cvv">
                <div>
                  <img src={img3} alt="" />
                </div>
                <p>824</p>
              </div>
              <div className="row card-text">
                <p>This is a virtual card. You can use it anywhere anytime via internet. Happy spending money by sharing love.</p>
              </div>
              <div className="row signature">
                <p>CUSTOMER SIGNATURE</p>
                <img src={img1} alt="" width={'80px'} />
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Credit