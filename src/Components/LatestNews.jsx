import React from 'react'

const LatestNews = () => {
  return (
    <>
         <div className="container margin_60_35">
          <div className="main_title">
            <h2>Latest News</h2>
            <span>Blog</span>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <a className="box_news" href="blog.html">
                <figure>
                  <img src="assets/img/blog-thumb-placeholder.jpg" data-src="assets/img/blog-thumb-1.jpg" alt="" width={400} height={266} className="lazy" />
                  <figcaption><strong>28</strong>Dec</figcaption>
                </figure>
                <ul>
                  <li>by Mark Twain</li>
                  <li>20.11.2017</li>
                </ul>
                <h4>Pri oportere scribentur eu</h4>
                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </a>
            </div>
            {/* /box_news */}
            <div className="col-lg-6">
              <a className="box_news" href="blog.html">
                <figure>
                  <img src="assets/img/blog-thumb-placeholder.jpg" data-src="assets/img/blog-thumb-2.jpg" alt="" width={400} height={266} className="lazy" />
                  <figcaption><strong>28</strong>Dec</figcaption>
                </figure>
                <ul>
                  <li>By Jhon Doe</li>
                  <li>20.11.2017</li>
                </ul>
                <h4>Duo eius postea suscipit ad</h4>
                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </a>
            </div>
            {/* /box_news */}
            <div className="col-lg-6">
              <a className="box_news" href="blog.html">
                <figure>
                  <img src="assets/img/blog-thumb-placeholder.jpg" data-src="assets/img/blog-thumb-3.jpg" alt="" width={400} height={266} className="lazy" />
                  <figcaption><strong>28</strong>Dec</figcaption>
                </figure>
                <ul>
                  <li>By Luca Robinson</li>
                  <li>20.11.2017</li>
                </ul>
                <h4>Elitr mandamus cu has</h4>
                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </a>
            </div>
            {/* /box_news */}
            <div className="col-lg-6">
              <a className="box_news" href="blog.html">
                <figure>
                  <img src="assets/img/blog-thumb-placeholder.jpg" data-src="assets/img/blog-thumb-4.jpg" alt="" width={400} height={266} className="lazy" />
                  <figcaption><strong>28</strong>Dec</figcaption>
                </figure>
                <ul>
                  <li>By Paula Rodrigez</li>
                  <li>20.11.2017</li>
                </ul>
                <h4>Id est adhuc ignota delenit</h4>
                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </a>
            </div>
            {/* /box_news */}
          </div>
          {/* /row */}
        </div>
    </>
  )
}

export default LatestNews