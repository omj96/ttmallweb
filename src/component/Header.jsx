import React from 'react';

function Header(props) {
    return (
        <div>
                   
<header>
	<div className="header-top-bar">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<ul className="top-bar-info list-inline-item pl-0 mb-0">
						<li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@ttbio.info</a></li>
						<li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address - Hong Kong</li>
					</ul>
				</div>
				<div className="col-lg-6">
					<div className="text-lg-right top-right-bar mt-2 mt-lg-0">
						<a href="tel:+23-345-67890" >
							<span>Call Now : </span>
							<span className="h4">852 - 3500 3626</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav className="navbar navbar-expand-lg navigation" id="navbar">
		<div className="container">
		 	 <a className="navbar-brand" href="index.html">
			  	<img src="/images/logo.png" alt="" className="img-fluid"/>
			</a>

		  	<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icofont-navigation-menu"></span>
            </button>
	  
		  <div className="collapse navbar-collapse" id="navbarmain">
			<ul className="navbar-nav ml-auto">
			  <li className="nav-item active">
				<a className="nav-link" href="/">首頁</a>
			  </li>
			   <li className="nav-item"><a className="nav-link" href="/about">軟件下載</a></li>

			    {/* <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down"></i></a>
					<ul className="dropdown-menu" aria-labelledby="dropdown02">
						<li><a className="dropdown-item" href="department.html">Departments</a></li>
						<li><a className="dropdown-item" href="department-single.html">Department Single</a></li>
					</ul>
			  	</li> */}
			</ul>
		  </div>
		</div>
	</nav>
</header>
        </div>
    );
}

export default Header;