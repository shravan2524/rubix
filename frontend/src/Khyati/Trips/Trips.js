import React from 'react';
import './Trips.css';

function Trips() {
	return (
		<React.Fragment>
			<section className="trips-main-section">
				<div className='trips-head'>
					<h1 className="trips-h1">Trips</h1>
					<div className='button-group'>
						<button className='trips-button-active'>Upcoming</button>
						<button className='trips-button'>Completed</button>
					</div>
				</div>
				<hr className="trips-hr" />
				<div className="trips-container">
					<div className="trips-card">
						<div className="trips-card-image"></div>
						<div className="trips-card-content">
							<h1>
								Place:<span> Lonavla</span>
							</h1>
							<p>
								Date:<span> 20-02-2022</span>
							</p>
						</div>
					</div>
					{/* <div className="trips-card">
						<div className="trips-card-image"></div>
						<div className="trips-card-content">
							<h1>
								Place:<span> Pune</span>
							</h1>
							<p>
								Date:<span> 20-02-2022</span>
							</p>
						</div>
					</div> */}
				</div>
			</section>
		</React.Fragment>
	);
}

export default Trips;
