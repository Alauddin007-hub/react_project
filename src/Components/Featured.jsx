import React from "react";

const Featured = () => {
  return (
    <>
      <div className="featured lazy" data-bg="url(img/featured_home.jpg)">
        <div
          className="opacity-mask d-flex align-items-center"
          data-opacity-mask="rgba(0, 0, 0, 0.5)"
        >
          <div className="container margin_60">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-lg-6 wow" data-wow-offset={150}>
                <h3>
                  Armor
                  <br />
                  Air Color 720
                </h3>
                <p>
                  Lightweight cushioning and durable support with a Phylon
                  midsole
                </p>
                <div className="feat_text_block">
                  <div className="price_box">
                    <span className="new_price">$90.00</span>
                    <span className="old_price">$170.00</span>
                  </div>
                  <a
                    className="btn_1"
                    href="listing-grid-1-full.html"
                    role="button"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
