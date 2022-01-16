import React, { Fragment } from 'react';
import './Wishlist.css';

function Wishlist() {
	return (
		<React.Fragment>
			<section className="wishlist-main-section">
				<h1 className="wishlist-h1">Wishlist</h1>
				<hr className="wishlist-hr" />
				<div className='wishlist-container'>
				<div className="wishlist-card">
					<div className='heart'></div>
					<div className="wishlist-card-image"></div>
					<div className="wishlist-card-content">
						<h1>lonavala</h1>
					</div>
				</div>
				{/* <div className="wishlist-card">
					<div className='heart'></div>
					<div className="wishlist-card-image"></div>
					<div className="wishlist-card-content">
						<h1>Pune</h1>
					</div>
				</div>
				<div className="wishlist-card">
					<div className='heart'></div>
					<div className="wishlist-card-image"></div>
					<div className="wishlist-card-content">
						<h1>Pune</h1>
					</div>
				</div>
				<div className="wishlist-card">
					<div className='heart'></div>
					<div className="wishlist-card-image"></div>
					<div className="wishlist-card-content">
						<h1>Pune</h1>
					</div>
				</div> */}
				</div>
			</section>
		</React.Fragment>
	);
}

export default Wishlist;
