import React from 'react';

function Footer(props) {
    return (
        
<footer className="footer section gray-bg">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
						<img src="/images/logo.png" alt="" className="img-fluid"/>
					</div>
					<p>香港大型及主要的網上購物商場，以科技、自動化系統、智能物流、支援數萬個零售商的網上市集及技術知識，創建電子商貿的新形態及獨特的數碼生態圈。</p>

					<ul className="list-inline footer-socials mt-4">
						<li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="icofont-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="icofont-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin"></i></a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">導航</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="/">首頁 </a></li>
						<li><a href="/about">軟件下載</a></li>

					</ul>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">聯絡方式</h4>
					<div className="divider mb-4"></div>

					<div className="footer-contact-block mb-4">
						<div className="icon d-flex align-items-center">
							<i className="icofont-email mr-3"></i>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">Support@ttmall.info</a></h4>
					</div>

					<div className="footer-contact-block">
						<div className="icon d-flex align-items-center">
							<i className="icofont-support mr-3"></i>
							<span className="h6 mb-0">週一至週五 : 10:00 - 19:00</span>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">852 - 3500 3626</a></h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
    );
}

export default Footer;