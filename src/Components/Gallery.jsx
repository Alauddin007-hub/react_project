import React from 'react'

const Gallery = () => {
  return (
    <>
       <div className="container margin_60_35">
          <div className="row small-gutters categories_grid">
            <div className="col-sm-12 col-md-6">
              <a href="listing-grid-1-full.html">
                <img src="assets/img/img_cat_home_1_placeholder.png" data-src="assets/img/img_cat_home_1.jpg" alt="" className="img-fluid lazy" />
                <div className="wrapper">
                  <h2>Life Style</h2>
                  <p>115 Products</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row small-gutters mt-md-0 mt-sm-2">
                <div className="col-sm-6">
                  <a href="listing-grid-1-full.html">
                    <img src="assets/img/img_cat_home_2_placeholder.png" data-src="assets/img/img_cat_home_2.jpg" alt="" className="img-fluid lazy" />
                    <div className="wrapper">
                      <h2>Running</h2>
                      <p>150 Products</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="listing-grid-1-full.html">
                    <img src="assets/img/img_cat_home_2_placeholder.png" data-src="assets/img/img_cat_home_3.jpg" alt="" className="img-fluid lazy" />
                    <div className="wrapper">
                      <h2>Football</h2>
                      <p>90 Products</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-12 mt-sm-2">
                  <a href="listing-grid-1-full.html">
                    <img src="assets/img/img_cat_home_4_placeholder.png" data-src="assets/img/img_cat_home_4.jpg" alt="" className="img-fluid lazy" />
                    <div className="wrapper">
                      <h2>Training</h2>
                      <p>120 Products</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*/categories_grid*/}
        </div> 
    </>
  )
}

export default Gallery