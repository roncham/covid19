import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Bar, Doughnut, defaults } from 'react-chartjs-2';

// @ts-ignore
import clarkCity from '../assets/images/Clark-by-City.png';
// @ts-ignore
import clarkZip from '../assets/images/Clark-by-Zip.png';

import Layout from '../components/Layout';
import Container from '../components/Container';

defaults.global.maintainAspectRatio = false;

class ClarkPage extends Component {
	render() {
		const data3a = {
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
				'5/25/20',
			],
			datasets: [
				{
					label: 'Clark Co Cases',
					backgroundColor: '#933A16',
					data: [
						0,
						1,
						1,
						1,
						1,
						1,
						1,
						2,
						5,
						11,
						20,
						21,
						35,
						42,
						69,
						74,
						121,
						126,
						151,
						212,
						249,
						350,
						443,
						528,
						612,
						753,
						869,
						961,
						1125,
						1279,
						1418,
						1519,
						1608,
						1734,
						1878,
						2009,
						2144,
						2258,
						2324,
						2444,
						2509,
						2559,
						2625,
						2738,
						2882,
						2940,
						2998,
						3099,
						3218,
						3314,
						3443,
						3570,
						3665,
						3717,
						3793,
						3891,
						3979,
						4118,
						4225,
						4274,
						4411,
						4408,
						4473,
						4573,
						4616,
						4704,
						4750,
						4762,
						4869,
						5045,
						5144,
						5235,
						5298,
						5366,
						5463,
						5536,
						5650,
						5734,
						5815,
						6048,
						6140,
						6183,
						6226,
					],
				},
			],
		};

		const data3a2 = {
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
				'5/25/20',
			],
			datasets: [
				{
					label: '5 Day Moving Avg', // 5day case avg
					type: 'line',
					fill: false, // Don't fill area under the line
					backgroundColor: '#ccc',
					borderColor: '#ccc',
					pointRadius: 1,
					data: [
						0,
						1,
						1,
						1,
						0,
						0,
						0,
						0,
						1,
						2,
						4,
						4,
						7,
						7,
						12,
						11,
						20,
						18,
						22,
						29,
						35,
						46,
						63,
						75,
						80,
						101,
						104,
						104,
						119,
						133,
						133,
						130,
						129,
						122,
						120,
						118,
						125,
						130,
						118,
						113,
						100,
						83,
						73,
						83,
						88,
						86,
						88,
						95,
						96,
						86,
						101,
						114,
						113,
						100,
						96,
						90,
						82,
						91,
						102,
						96,
						104,
						86,
						71,
						70,
						68,
						59,
						68,
						58,
						59,
						86,
						88,
						97,
						107,
						99,
						84,
						78,
						83,
						87,
						90,
						117,
						121,
						107,
						98,
					],
				},
				{
					label: 'Clark Daily Cases',
					backgroundColor: '#933A16',
					data: [
						0,
						1,
						0,
						0,
						0,
						0,
						0,
						1,
						3,
						6,
						9,
						1,
						14,
						7,
						27,
						5,
						47,
						5,
						25,
						61,
						37,
						101,
						93,
						85,
						84,
						141,
						116,
						92,
						164,
						154,
						139,
						101,
						89,
						126,
						144,
						131,
						135,
						114,
						66,
						120,
						65,
						50,
						66,
						113,
						144,
						58,
						58,
						101,
						119,
						96,
						129,
						127,
						95,
						52,
						76,
						98,
						88,
						139,
						107,
						49,
						137,
						-3,
						65,
						100,
						43,
						88,
						46,
						12,
						107,
						176,
						99,
						91,
						63,
						68,
						97,
						73,
						114,
						84,
						81,
						233,
						92,
						43,
						43,
					],
				},
			],
		};

		const data3 = {
			labels: [
				'3/20/20',
				'3/23/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
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
				'5/25/20',
			],
			datasets: [
				{
					label: 'CC Hospitalized',
					backgroundColor: '#933A16',
					data: [
						20,
						44,
						74,
						90,
						106,
						115,
						167,
						224,
						309,
						367,
						401,
						408,
						410,
						469,
						560,
						603,
						653,
						711,
						717,
						717,
						749,
						789,
						816,
						856,
						887,
						893,
						893,
						934,
						962,
						1006,
						1034,
						1066,
						1072,
						1074,
						1098,
						1131,
						1152,
						1169,
						1195,
						1201,
						1206,
						1232,
						1270,
						1292,
						1311,
						1326,
						1326,
						1327,
						1353,
						1377,
						1397,
						1416,
						1430,
						1436,
						1437,
						1460,
						1475,
						1501,
						1513,
						1522,
						1524,
						1525,
						1525,
					],
				},
			],
		};
		const data3b = {
			labels: [
				'3/20/20',
				'3/23/20',
				'3/25/20',
				'3/26/20',
				'3/27/20',
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
				'5/25/20',
			],
			datasets: [
				{
					label: 'Clark Co. Hosp Increase',
					backgroundColor: 'maroon',
					data: [
						20,
						24,
						30,
						6,
						12,
						8,
						52,
						57,
						85,
						58,
						34,
						7,
						2,
						59,
						91,
						43,
						50,
						58,
						6,
						0,
						32,
						40,
						27,
						40,
						31,
						6,
						0,
						41,
						28,
						44,
						28,
						32,
						6,
						2,
						24,
						33,
						21,
						17,
						26,
						6,
						5,
						26,
						38,
						22,
						19,
						15,
						0,
						1,
						26,
						24,
						20,
						19,
						14,
						6,
						1,
						23,
						15,
						26,
						12,
						9,
						2,
						1,
						0,
					],
				},
			],
		};

		const data4 = {
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
				'5/25/20',
			],
			datasets: [
				{
					label: 'Clark County Deaths',
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
						1,
						1,
						2,
						2,
						2,
						4,
						6,
						10,
						10,
						10,
						14,
						15,
						23,
						28,
						34,
						39,
						41,
						41,
						41,
						54,
						65,
						71,
						75,
						96,
						100,
						101,
						106,
						115,
						121,
						124,
						133,
						137,
						137,
						141,
						150,
						163,
						168,
						174,
						174,
						174,
						186,
						196,
						202,
						206,
						215,
						218,
						223,
						226,
						238,
						245,
						253,
						256,
						260,
						260,
						267,
						275,
						282,
						291,
						293,
						296,
						296,
						304,
						314,
						320,
						322,
						329,
						329,
						329,
						329,
					],
					backgroundColor: 'maroon',
				},
			],
		};

		const data4b = {
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
				'5/25/20',
			],
			datasets: [
				{
					label: '5 Day Moving Avg', // 5day death avg
					type: 'line',
					fill: false, // Don't fill area under the line
					backgroundColor: '#ccc',
					borderColor: '#ccc',
					pointRadius: 1,
					data: [
						1,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						1,
						2,
						2,
						2,
						2,
						2,
						3,
						4,
						5,
						5,
						5,
						4,
						3,
						4,
						5,
						6,
						7,
						11,
						9,
						7,
						7,
						8,
						5,
						5,
						6,
						6,
						4,
						4,
						5,
						6,
						6,
						7,
						7,
						5,
						5,
						6,
						6,
						6,
						8,
						6,
						5,
						5,
						6,
						6,
						7,
						7,
						7,
						4,
						4,
						4,
						5,
						6,
						7,
						6,
						4,
						4,
						5,
						5,
						5,
						7,
						5,
						3,
						2,
					],
				},
				{
					label: 'Clark Co. Daily Deaths',
					backgroundColor: 'maroon',
					data: [
						1,
						0,
						0,
						0,
						1,
						0,
						0,
						2,
						2,
						4,
						0,
						0,
						4,
						1,
						8,
						5,
						6,
						5,
						2,
						0,
						0,
						13,
						11,
						6,
						4,
						21,
						4,
						1,
						5,
						9,
						6,
						3,
						9,
						4,
						0,
						4,
						9,
						13,
						5,
						6,
						0,
						0,
						12,
						10,
						6,
						4,
						9,
						3,
						5,
						3,
						12,
						7,
						11,
						3,
						4,
						0,
						7,
						8,
						7,
						9,
						2,
						3,
						0,
						8,
						10,
						6,
						2,
						7,
						0,
						0,
						0,
					],
				},
			],
		};

		const data5 = {
			labels: ['0-4', '5-17', '18-24', '25-49', '50-64', '65+'],
			datasets: [
				{
					label: 'Age of Cases',
					data: [62, 207, 435, 2627, 1602, 1290],
					backgroundColor: [
						'rgb(54, 162, 235)', //blue
						'rgb(255, 99, 132)', //salmon
						'rgb(255, 205, 86)', //yellow
						'rgb(147, 58, 22)', //rust
						'rgb(181, 234, 215)', //light green
						'rgb(179, 153, 212)', //light purple
					],
				},
			],
		};

		const data6 = {
			labels: ['Female', 'Male', '* Unknown'],
			datasets: [
				{
					label: 'Sex',
					data: [3170, 2966, 90],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
					],
				},
			],
		};

		return (
			<Layout pageName="nevada">
				<Helmet>
					<title>Clark County NV Stats</title>
				</Helmet>

				{/* content area start */}
				<Container
					type="content"
					className="text-center container-fluid pr-3 pl-3 pt-3 pb-3"
				>
					<article className="canvas-container">
						<div>
							<h2 className="is-dark-text-light">Clark County Nevada</h2>
							<h5 className="is-dark-text-light">
								<em>NOTE: Clark County Nevada Data Is One Day Old</em>
							</h5>
							<p className="is-dark-text-light">
								<em>Hover over colored bars/sections to see numbers.</em>
							</p>
						</div>
						<div>
							<h2 className="is-dark-text-light">Clark County NV</h2>
							<div className="row">
								<div className="col-lg-3 col-md-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Cases
											</div>
										</div>
										<div className="card-value pt-4">
											<h1>6,226</h1>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark Co Hospitalized
											</div>
										</div>
										<div className="card-value pt-4">
											<h1>1,525</h1>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark Co Recovered
											</div>
										</div>
										<div className="card-value pt-4">
											<h1>4,853</h1>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Deaths
											</div>
										</div>
										<div className="card-value pt-4">
											<h1>329</h1>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Cases
											</div>
										</div>
										<div className="card-value pt-4">
											<Bar data={data3a} />
										</div>
									</div>
								</div>
								<div className="col-lg-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												CC Daily Cases - Date Reported
											</div>
										</div>
										<div className="card-value pt-4">
											<Bar data={data3a2} />
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Hospitalized
											</div>
										</div>
										<div className="card-value pt-4">
											<Bar data={data3} />
										</div>
									</div>
								</div>
								<div className="col-lg-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												CC Increase of Hospitalized
											</div>
										</div>
										<div className="card-value pt-4">
											<Bar data={data3b} />
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Deaths - Date Reported
											</div>
										</div>
										<div className="card-value pt-4">
											<Bar data={data4} />
										</div>
									</div>
								</div>
								<div className="col-md-6 is-light-text mb-4">
									<div className="card grid-card is-card-dark">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Daily Deaths
											</div>
										</div>
										<div className="card-value pt-4">
											<Bar data={data4b} />
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 mb-4">
									<div className="card is-card-dark chart-card">
										<div className="chart-container large">
											<div className="card-heading">
												<div className="is-dark-text-light letter-spacing text-small">
													Clark County Age of Cases
												</div>
											</div>
											<div className="card-value pt-4">
												<Bar data={data5} />
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-6 mb-4">
									<div className="card is-card-dark chart-card">
										<div className="chart-container large">
											<div className="card-heading">
												<div className="is-dark-text-light letter-spacing text-small">
													Clark County Gender of Cases
												</div>
											</div>
											<div className="card-value pt-4">
												<Doughnut data={data6} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 mb-4">
								<div className="card is-card-dark">
									<div className="card-heading">
										<div className="is-dark-text-light letter-spacing text-small">
											Clark County Cases By City
										</div>
									</div>
									<div className="card-value pt-4">
										<img
											src={clarkCity}
											className="img-fluid"
											alt="Covid-19 in Clark Co Cities"
										/>
									</div>
								</div>
							</div>

							<div className="col-md-6 mb-4">
								<div className="card is-card-dark chart-card">
									<div className="chart-container large">
										<div className="card-heading">
											<div className="is-dark-text-light letter-spacing text-small">
												Clark County Cases By Zip
											</div>
										</div>
										<div className="card-value pt-4">
											<img
												src={clarkZip}
												className="img-fluid"
												alt="Covid-19 in Clark Co by zip code"
											/>
										</div>
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

export default ClarkPage;
