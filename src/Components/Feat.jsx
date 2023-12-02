import React from 'react'

const Feat = () => {
  return (
    <>
        <div className="feat">
          <div className="container">
            <ul>
              <li>
                <div className="box">
                  <i className="ti-gift" />
                  <div className="justify-content-center">
                    <h3>Free Shipping</h3>
                    <p>For all oders over $99</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="box">
                  <i className="ti-wallet" />
                  <div className="justify-content-center">
                    <h3>Secure Payment</h3>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="box">
                  <i className="ti-headphone-alt" />
                  <div className="justify-content-center">
                    <h3>24/7 Support</h3>
                    <p>Online top support</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Feat