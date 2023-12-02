import React from "react";
import Feat from "../Components/Feat";
import Gallery from "../Components/Gallery";
import NewArrival from "../Components/NewArrival";
import Featured from "../Components/Featured";
import Brands from "../Components/Brands";
import LatestNews from "../Components/LatestNews";

const Home = () => {
  return (
    <>
      <main>
        <div className="header-video">
          <div id="hero_video">
            <div
              className="opacity-mask d-flex align-items-center"
              data-opacity-mask="rgba(0, 0, 0, 0.5)"
            >
              <div className="container">
                <div className="row justify-content-center justify-content-md-start">
                  <div className="col-lg-6">
                    <div className="slide-text white">
                      <h3>
                        Armor Air
                        <br />
                        Max 720 Sage Low
                      </h3>
                      <p>Limited items available at this price</p>
                      <a className="btn_1" href="#0" role="button">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/img/video_fix.png"
            alt=""
            className="header-video--media"
            data-video-src="video/intro"
            data-teaser-source="video/intro"
            data-provider
            data-video-width={1920}
            data-video-height={960}
          />
        </div>
        
        <Feat />

        <Gallery />

        <hr className="mb-0" />

        <NewArrival />

        <Featured />

        <Brands />

        <LatestNews />

        {/* /container */}
      </main>
    </>
  );
};

export default Home;
