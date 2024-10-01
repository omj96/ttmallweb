import React from 'react';
import Header from './Header';
import Footer from './Footer';
function About(props) {
    return (
        <div>
            <Header />
	

<section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">軟件下載</span>
          <h1 className="text-capitalize mb-5 text-lg">軟件下載</h1>

          <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><a href="index.html" className="text-white">首頁</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">下載軟件</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section about-page">
	<div className="container">
		<div className="row">
			<div className="col-lg-4">
				<h2 className="title-color">下載地址：</h2>
			</div>
			<div className="col-lg-8">
				<p>下載地址</p>
			</div>
		</div>
	</div>
</section>

<section className="fetaure-page ">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="images/about/about-1.png" alt="" className="img-fluid w-100"/>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="images/about/about-2.png" alt="" className="img-fluid w-100"/>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="images/about/about-3.png" alt="" className="img-fluid w-100"/>
				</div>
			</div>
			<div className="col-lg-3 col-md-6">
				<div className="about-block-item">
					<img src="images/about/about-4.png" alt="" className="img-fluid w-100"/>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer />
        </div>
    );
}

export default About;