import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Bar, Line, defaults } from 'react-chartjs-2';

import Layout from '../components/Layout';
import Container from '../components/Container';

defaults.global.maintainAspectRatio = false;

class NevadaPage extends Component {
	render() {
		const data1 = {
			labels: [
				'3/4/20',
				'3/5/20',
				'3/6/20',
				'3/7/20',
				'3/8/20',
				'3/9/20',
				'3/10/20',
				'3/11/20',
				'3/12/20',
				'3/13/20',
				'3/14/20',
				'3/15/20',
				'3/16/20',
				'3/17/20',
				'3/18/20',
				'3/19/20',
				'3/20/20',
				'3/21/20',
				'3/22/20',
				'3/23/20',
				'3/24/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
				'3/28/20',
				'3/29/20',
				'3/30/20',
				'3/31/20',
				'4/1/20',
				'4/2/20',
				'4/3/20',
				'4/4/20',
				'4/5/20',
				'4/6/20',
				'4/7/20',
				'4/8/20',
				'4/9/20',
				'4/10/20',
				'4/11/20',
				'4/12/20',
				'4/13/20',
				'4/14/20',
				'4/15/20',
				'4/16/20',
				'4/17/20',
				'4/18/20',
				'4/19/20',
				'4/20/20',
				'4/21/20',
				'4/22/20',
				'4/23/20',
				'4/24/20',
				'4/25/20',
				'4/26/20',
				'4/27/20',
				'4/28/20',
				'4/29/20',
				'4/30/20',
				'5/1/20',
				'5/2/20',
				'5/3/20',
				'5/4/20',
				'5/5/20',
				'5/6/20',
				'5/7/20',
				'5/8/20',
				'5/9/20',
				'5/10/20',
				'5/11/20',
				'5/12/20',
				'5/13/20',
				'5/14/20',
				'5/15/20',
				'5/16/20',
				'5/17/20',
				'5/18/20',
				'5/19/20',
				'5/20/20',
				'5/21/20',
				'5/22/20',
				'5/23/20',
				'5/24/20',
			],
			datasets: [
				{
					label: 'Nevada Cases',
					data: [
						1,
						3,
						4,
						4,
						5,
						5,
						9,
						12,
						22,
						34,
						45,
						63,
						73,
						78,
						101,
						109,
						124,
						154,
						190,
						278,
						321,
						420,
						535,
						621,
						738,
						996,
						1113,
						1279,
						1458,
						1514,
						1742,
						1836,
						1953,
						2087,
						2318,
						2456,
						2584,
						2700,
						2836,
						2971,
						3088,
						3211,
						3321,
						3524,
						3626,
						3728,
						3830,
						3937,
						4081,
						4208,
						4398,
						4539,
						4602,
						4690,
						4805,
						4898,
						4998,
						5227,
						5311,
						5423,
						5491,
						5594,
						5633,
						5766,
						5884,
						6028,
						6098,
						6152,
						6311,
						6394,
						6499,
						6614,
						6709,
						6857,
						6906,
						7046,
						7166,
						7255,
						7401,
						7696,
						7770,
						7879,
					],
					fill: false, // Don't fill area under the line
					backgroundColor: '#933A16', // Line color
				},
			],
		};
		const data1b = {
			labels: [
				'3/4/20',
				'3/5/20',
				'3/6/20',
				'3/7/20',
				'3/8/20',
				'3/9/20',
				'3/10/20',
				'3/11/20',
				'3/12/20',
				'3/13/20',
				'3/14/20',
				'3/15/20',
				'3/16/20',
				'3/17/20',
				'3/18/20',
				'3/19/20',
				'3/20/20',
				'3/21/20',
				'3/22/20',
				'3/23/20',
				'3/24/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
				'3/28/20',
				'3/29/20',
				'3/30/20',
				'3/31/20',
				'4/1/20',
				'4/2/20',
				'4/3/20',
				'4/4/20',
				'4/5/20',
				'4/6/20',
				'4/7/20',
				'4/8/20',
				'4/9/20',
				'4/10/20',
				'4/11/20',
				'4/12/20',
				'4/13/20',
				'4/14/20',
				'4/15/20',
				'4/16/20',
				'4/17/20',
				'4/18/20',
				'4/19/20',
				'4/20/20',
				'4/21/20',
				'4/22/20',
				'4/23/20',
				'4/24/20',
				'4/25/20',
				'4/26/20',
				'4/27/20',
				'4/28/20',
				'4/29/20',
				'4/30/20',
				'5/1/20',
				'5/2/20',
				'5/3/20',
				'5/4/20',
				'5/5/20',
				'5/6/20',
				'5/7/20',
				'5/8/20',
				'5/9/20',
				'5/10/20',
				'5/11/20',
				'5/12/20',
				'5/13/20',
				'5/14/20',
				'5/15/20',
				'5/16/20',
				'5/17/20',
				'5/18/20',
				'5/19/20',
				'5/20/20',
				'5/21/20',
				'5/22/20',
				'5/23/20',
				'5/24/20',
			],
			datasets: [
				{
					label: 'Nevada Daily Cases',
					data: [
						1,
						2,
						1,
						0,
						1,
						0,
						4,
						3,
						10,
						12,
						11,
						18,
						10,
						5,
						23,
						8,
						15,
						30,
						36,
						88,
						43,
						99,
						115,
						86,
						117,
						258,
						117,
						166,
						179,
						56,
						228,
						94,
						117,
						134,
						231,
						138,
						128,
						116,
						136,
						135,
						117,
						123,
						110,
						203,
						102,
						102,
						102,
						107,
						144,
						127,
						190,
						141,
						63,
						88,
						115,
						93,
						100,
						229,
						84,
						112,
						68,
						103,
						39,
						133,
						118,
						144,
						70,
						54,
						159,
						83,
						105,
						115,
						95,
						148,
						49,
						140,
						120,
						89,
						146,
						295,
						74,
						109,
					],
					fill: false, // Don't fill area under the line
					backgroundColor: '#933A16', // Bar color
				},
			],
		};
		const data2 = {
			labels: [
				'3/4/20',
				'3/5/20',
				'3/6/20',
				'3/7/20',
				'3/8/20',
				'3/9/20',
				'3/10/20',
				'3/11/20',
				'3/12/20',
				'3/13/20',
				'3/14/20',
				'3/15/20',
				'3/16/20',
				'3/17/20',
				'3/18/20',
				'3/19/20',
				'3/20/20',
				'3/21/20',
				'3/22/20',
				'3/23/20',
				'3/24/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
				'3/28/20',
				'3/29/20',
				'3/30/20',
				'3/31/20',
				'4/1/20',
				'4/2/20',
				'4/3/20',
				'4/4/20',
				'4/5/20',
				'4/6/20',
				'4/7/20',
				'4/8/20',
				'4/9/20',
				'4/10/20',
				'4/11/20',
				'4/12/20',
				'4/13/20',
				'4/14/20',
				'4/15/20',
				'4/16/20',
				'4/17/20',
				'4/18/20',
				'4/19/20',
				'4/20/20',
				'4/21/20',
				'4/22/20',
				'4/23/20',
				'4/24/20',
				'4/25/20',
				'4/26/20',
				'4/27/20',
				'4/28/20',
				'4/29/20',
				'4/30/20',
				'5/1/20',
				'5/2/20',
				'5/3/20',
				'5/4/20',
				'5/5/20',
				'5/6/20',
				'5/7/20',
				'5/8/20',
				'5/9/20',
				'5/10/20',
				'5/11/20',
				'5/12/20',
				'5/13/20',
				'5/14/20',
				'5/15/20',
				'5/16/20',
				'5/17/20',
				'5/18/20',
				'5/19/20',
				'5/20/20',
				'5/21/20',
				'5/22/20',
				'5/23/20',
				'5/24/20',
			],
			datasets: [
				{
					label: 'Nevada Deaths',
					data: [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						1,
						2,
						3,
						3,
						5,
						7,
						8,
						13,
						13,
						17,
						21,
						25,
						28,
						32,
						37,
						46,
						51,
						59,
						70,
						76,
						79,
						91,
						101,
						111,
						121,
						126,
						129,
						134,
						142,
						151,
						159,
						163,
						169,
						173,
						180,
						193,
						202,
						211,
						216,
						229,
						236,
						246,
						252,
						257,
						268,
						275,
						280,
						286,
						291,
						296,
						309,
						318,
						325,
						332,
						335,
						340,
						347,
						353,
						357,
						367,
						368,
						374,
						381,
						387,
						388,
						389,
						391,
						392,
						393,
					],
					backgroundColor: 'maroon',
				},
			],
		};

		const data2b = {
			labels: [
				'3/16/20',
				'3/17/20',
				'3/18/20',
				'3/19/20',
				'3/20/20',
				'3/21/20',
				'3/22/20',
				'3/23/20',
				'3/24/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
				'3/28/20',
				'3/29/20',
				'3/30/20',
				'3/31/20',
				'4/1/20',
				'4/2/20',
				'4/3/20',
				'4/4/20',
				'4/5/20',
				'4/6/20',
				'4/7/20',
				'4/8/20',
				'4/9/20',
				'4/10/20',
				'4/11/20',
				'4/12/20',
				'4/13/20',
				'4/14/20',
				'4/15/20',
				'4/16/20',
				'4/17/20',
				'4/18/20',
				'4/19/20',
				'4/20/20',
				'4/21/20',
				'4/22/20',
				'4/23/20',
				'4/24/20',
				'4/25/20',
				'4/26/20',
				'4/27/20',
				'4/28/20',
				'4/29/20',
				'4/30/20',
				'5/1/20',
				'5/2/20',
				'5/3/20',
				'5/4/20',
				'5/5/20',
				'5/6/20',
				'5/7/20',
				'5/8/20',
				'5/9/20',
				'5/10/20',
				'5/11/20',
				'5/12/20',
				'5/13/20',
				'5/14/20',
				'5/15/20',
				'5/16/20',
				'5/17/20',
				'5/18/20',
				'5/19/20',
				'5/20/20',
				'5/21/20',
				'5/22/20',
				'5/23/20',
				'5/24/20',
			],
			datasets: [
				{
					label: 'Nevada Daily Deaths',
					backgroundColor: 'maroon',
					data: [
						1,
						0,
						1,
						1,
						0,
						2,
						2,
						1,
						5,
						0,
						4,
						4,
						4,
						3,
						4,
						5,
						9,
						5,
						8,
						11,
						6,
						3,
						12,
						10,
						10,
						10,
						5,
						3,
						5,
						8,
						9,
						8,
						4,
						6,
						4,
						7,
						13,
						9,
						9,
						5,
						13,
						7,
						10,
						6,
						5,
						11,
						7,
						5,
						6,
						5,
						5,
						13,
						9,
						7,
						7,
						3,
						5,
						7,
						6,
						4,
						10,
						1,
						6,
						7,
						6,
						1,
						1,
						2,
						1,
						1,
					],
				},
			],
		};

		const data2c = {
			labels: [
				'3/24/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
				'3/28/20',
				'3/29/20',
				'3/30/20',
				'3/31/20',
				'4/1/20',
				'4/2/20',
				'4/3/20',
				'4/4/20',
				'4/5/20',
				'4/6/20',
				'4/7/20',
				'4/8/20',
				'4/9/20',
				'4/10/20',
				'4/11/20',
				'4/12/20',
				'4/13/20',
				'4/14/20',
				'4/15/20',
				'4/16/20',
				'4/17/20',
				'4/18/20',
				'4/19/20',
				'4/20/20',
				'4/21/20',
				'4/22/20',
				'4/23/20',
				'4/24/20',
				'4/25/20',
				'4/26/20',
				'4/27/20',
				'4/28/20',
				'4/29/20',
				'4/30/20',
				'5/1/20',
				'5/2/20',
				'5/3/20',
				'5/4/20',
				'5/5/20',
				'5/6/20',
				'5/7/20',
				'5/8/20',
				'5/9/20',
				'5/10/20',
				'5/11/20',
				'5/12/20',
				'5/13/20',
				'5/14/20',
				'5/15/20',
				'5/16/20',
				'5/17/20',
				'5/18/20',
				'5/19/20',
				'5/20/20',
				'5/21/20',
				'5/22/20',
				'5/23/20',
				'5/24/20',
			],
			datasets: [
				{
					label: 'Test Positivity Rate',
					fill: false, // Don't fill area under the line
					backgroundColor: 'rgb(54, 162, 235)', //blue
					borderColor: 'rgb(54, 162, 235)', //blue
					data: [
						7.0,
						8.2,
						8.0,
						7.3,
						8.1,
						8.9,
						9.5,
						10.0,
						10.4,
						10.4,
						10.8,
						10.9,
						11.1,
						11.2,
						11.3,
						11.3,
						11.4,
						11.4,
						11.5,
						11.7,
						11.6,
						11.6,
						11.7,
						11.8,
						11.8,
						11.8,
						11.8,
						11.9,
						12.0,
						12.1,
						12.2,
						12.2,
						12.1,
						12.1,
						12.0,
						11.9,
						11.9,
						12.0,
						12.0,
						12.0,
						11.9,
						11.7,
						11.5,
						11.2,
						11.0,
						10.7,
						10.4,
						10.2,
						9.8,
						9.6,
						9.4,
						9.2,
						9.0,
						8.5,
						8.4,
						8.0,
						7.9,
						7.7,
						7.4,
						7.2,
						7.0,
						6.9,
					],
				},
				{
					label: 'WHO Max Rate Before Re-Opening',
					fill: false, // Don't fill area under the line
					backgroundColor: '#933A16',
					borderColor: '#933A16',
					pointRadius: 1,
					data: [
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
						10.0,
					],
				},
				{
					label: 'Test + Rate Goal',
					fill: false, // Don't fill area under the line
					backgroundColor: 'green',
					borderColor: 'green',
					pointRadius: 1,
					data: [
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
						5.0,
					],
				},
			],
		};

		return (
			<Layout pageName="nevada">
				<Helmet>
					<title>Nevada Stats</title>
				</Helmet>

				{/* content area start */}
				<Container
					type="content"
					className="text-center container-fluid pr-3 pl-3 pt-3 pb-3"
				>
					<article className="canvas-container">
						<div>
							<h2 className="is-dark-text-light">Nevada</h2>
							<h5 className="is-dark-text-light">
								<em>NOTE: Nevada Data Is One Day Old</em>
							</h5>
							<p className="is-dark-text-light">
								<em>Hover over colored sections to see numbers.</em>
							</p>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-mdall">
											People Tested
										</div>
									</div>
									<div className="card-value pt-4">
										<h1>114,704</h1>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Tested Negative
										</div>
									</div>
									<div className="card-value pt-4">
										<h1>106,852</h1>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-mdall">
											Nevada Cases
										</div>
									</div>
									<div className="card-value pt-4">
										<h1>7,879</h1>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Nevada Deaths
										</div>
									</div>
									<div className="card-value pt-4">
										<h1>393</h1>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 is-light-text mb-4">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Nevada Cases
										</div>
									</div>
									<div className="card-value pt-4">
										<Bar data={data1} />
									</div>
								</div>
							</div>
							<div className="col-md-6 is-light-text mb-4">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Nevada Daily Cases
										</div>
									</div>
									<div className="card-value pt-4">
										<Bar data={data1b} />
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 is-light-text mb-4">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Nevada Deaths - Date of Death
										</div>
									</div>
									<div className="card-value pt-4">
										<Bar data={data2} />
									</div>
								</div>
							</div>
							<div className="col-md-6 is-light-text mb-4">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Nevada Daily Deaths
										</div>
									</div>
									<div className="card-value pt-4">
										<Bar data={data2b} />
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 is-light-text mb-4">
								<div className="card grid-card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											NV Test Positivity Rate
										</div>
									</div>
									<div className="card-value pt-4">
										<Line data={data2c} />
									</div>
								</div>
							</div>
						</div>

						<div>
							<p className="is-dark-text-light">
								<em>
									*Information is based on current investigations and may not be
									complete.
									<br />
									Due to limited weekend reporting counts may be artificially
									low Saturday - Monday.
								</em>
							</p>
							<h3>Nevada Data Sources:</h3>
							<p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://app.powerbigov.us/view?r=eyJrIjoiMjA2ZThiOWUtM2FlNS00MGY5LWFmYjUtNmQwNTQ3Nzg5N2I2IiwidCI6ImU0YTM0MGU2LWI4OWUtNGU2OC04ZWFhLTE1NDRkMjcwMzk4MCJ9"
								>
									Nevada DWWS
								</a>
								<br />
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.southernnevadahealthdistrict.org/coronavirus"
								>
									SNHD
								</a>
							</p>
						</div>
					</article>
				</Container>
			</Layout>
		);
	}
}

export default NevadaPage;
