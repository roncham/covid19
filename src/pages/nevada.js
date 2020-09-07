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
				'5/25/20',
				'5/26/20',
				'5/27/20',
				'5/28/20',
				'5/29/20',
				'5/30/20',
				'5/31/20',
				'6/01/20',
				'6/02/20',
				'6/03/20',
				'6/04/20',
				'6/05/20',
				'6/06/20',
				'6/07/20',
				'6/08/20',
				'6/09/20',
				'6/10/20',
				'6/11/20',
				'6/12/20',
				'6/13/20',
				'6/14/20',
				'6/15/20',
				'6/16/20',
				'6/17/20',
				'6/18/20',
				'6/19/20',
				'6/20/20',
				'6/21/20',
				'6/22/20',
				'6/23/20',
				'6/24/20',
				'6/25/20',
				'6/26/20',
				'6/27/20',
				'6/28/20',
				'6/29/20',
				'6/30/20',
				'7/01/20',
				'7/02/20',
				'7/03/20',
				'7/04/20',
				'7/05/20',
				'7/06/20',
				'7/07/20',
				'7/08/20',
				'7/09/20',
				'7/10/20',
				'7/11/20',
				'7/12/20',
				'7/13/20',
				'7/14/20',
				'7/15/20',
				'7/16/20',
				'7/17/20',
				'7/18/20',
				'7/19/20',
				'7/20/20',
				'7/21/20',
				'7/22/20',
				'7/23/20',
				'7/24/20',
				'7/25/20',
				'7/26/20',
				'7/27/20',
				'7/28/20',
				'7/29/20',
				'7/30/20',
				'7/31/20',
				'8/01/20',
				'8/02/20',
				'8/03/20',
				'8/04/20',
				'8/05/20',
				'8/06/20',
				'8/07/20',
				'8/08/20',
				'8/09/20',
				'8/10/20',
				'8/11/20',
				'8/12/20',
				'8/13/20',
				'8/14/20',
				'8/15/20',
				'8/16/20',
				'8/17/20',
				'8/18/20',
				'8/19/20',
				'8/20/20',
				'8/21/20',
				'8/22/20',
				'8/23/20',
				'8/24/20',
				'8/25/20',
				'8/26/20',
				'8/27/20',
				'8/28/20',
				'8/29/20',
				'8/30/20',
				'8/31/20',
				'9/01/20',
				'9/02/20',
				'9/03/20',
				'9/04/20',
				'9/05/20',
				'9/06/20',
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
						7997,
						8114,
						8208,
						8350,
						8495,
						8593,
						8688,
						8830,
						8931,
						9090,
						9266,
						9460,
						9649,
						9786,
						10030,
						10164,
						10399,
						10676,
						10946,
						11173,
						11279,
						11658,
						11842,
						12076,
						12486,
						12931,
						13205,
						13535,
						13997,
						14352,
						14859,
						15240,
						16339,
						17160,
						17894,
						18456,
						19101,
						19733,
						20718,
						21575,
						22418,
						22909,
						23785,
						24301,
						24904,
						25908,
						26838,
						27683,
						28515,
						29619,
						30468,
						31915,
						33295,
						34477,
						35765,
						36713,
						37528,
						38657,
						39919,
						40885,
						41816,
						42834,
						43831,
						44936,
						45806,
						46824,
						48088,
						49074,
						50205,
						51199,
						52179,
						52828,
						53557,
						54533,
						55419,
						56230,
						56972,
						57520,
						58048,
						58650,
						59749,
						60608,
						61305,
						61967,
						62639,
						63028,
						63584,
						64433,
						65069,
						65601,
						66010,
						66413,
						66666,
						67220,
						67852,
						68461,
						68908,
						69228,
						69633,
						69872,
						70223,
						70712,
						71102,
						71610,
						71967,
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
				'5/25/20',
				'5/26/20',
				'5/27/20',
				'5/28/20',
				'5/29/20',
				'5/30/20',
				'5/31/20',
				'6/01/20',
				'6/02/20',
				'6/03/20',
				'6/04/20',
				'6/05/20',
				'6/06/20',
				'6/07/20',
				'6/08/20',
				'6/09/20',
				'6/10/20',
				'6/11/20',
				'6/12/20',
				'6/13/20',
				'6/14/20',
				'6/15/20',
				'6/16/20',
				'6/17/20',
				'6/18/20',
				'6/19/20',
				'6/20/20',
				'6/21/20',
				'6/22/20',
				'6/23/20',
				'6/24/20',
				'6/25/20',
				'6/26/20',
				'6/27/20',
				'6/28/20',
				'6/29/20',
				'6/30/20',
				'7/01/20',
				'7/02/20',
				'7/03/20',
				'7/04/20',
				'7/05/20',
				'7/06/20',
				'7/07/20',
				'7/08/20',
				'7/09/20',
				'7/10/20',
				'7/11/20',
				'7/12/20',
				'7/13/20',
				'7/14/20',
				'7/15/20',
				'7/16/20',
				'7/17/20',
				'7/18/20',
				'7/19/20',
				'7/20/20',
				'7/21/20',
				'7/22/20',
				'7/23/20',
				'7/24/20',
				'7/25/20',
				'7/26/20',
				'7/27/20',
				'7/28/20',
				'7/29/20',
				'7/30/20',
				'7/31/20',
				'8/01/20',
				'8/02/20',
				'8/03/20',
				'8/04/20',
				'8/05/20',
				'8/06/20',
				'8/07/20',
				'8/08/20',
				'8/09/20',
				'8/10/20',
				'8/11/20',
				'8/12/20',
				'8/13/20',
				'8/14/20',
				'8/15/20',
				'8/16/20',
				'8/17/20',
				'8/18/20',
				'8/19/20',
				'8/20/20',
				'8/21/20',
				'8/22/20',
				'8/23/20',
				'8/24/20',
				'8/25/20',
				'8/26/20',
				'8/27/20',
				'8/28/20',
				'8/29/20',
				'8/30/20',
				'8/31/20',
				'9/01/20',
				'9/02/20',
				'9/03/20',
				'9/04/20',
				'9/05/20',
				'9/06/20',
			],
			datasets: [
				{
					label: 'Nevada Daily Cases',
					type: 'bar',
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
						118,
						117,
						94,
						142,
						145,
						98,
						95,
						142,
						101,
						159,
						176,
						194,
						189,
						137,
						244,
						134,
						235,
						277,
						270,
						227,
						106,
						379,
						184,
						234,
						410,
						445,
						274,
						330,
						462,
						355,
						507,
						381,
						1099,
						821,
						734,
						562,
						645,
						632,
						985,
						857,
						843,
						491,
						876,
						516,
						603,
						1004,
						930,
						845,
						832,
						1104,
						849,
						1447,
						1380,
						1182,
						1288,
						948,
						815,
						1129,
						1262,
						966,
						931,
						1018,
						997,
						1105,
						870,
						1018,
						1264,
						986,
						1131,
						994,
						980,
						649,
						729,
						976,
						886,
						811,
						742,
						548,
						528,
						602,
						1099,
						859,
						697,
						662,
						672,
						389,
						556,
						849,
						636,
						532,
						409,
						403,
						253,
						554,
						632,
						609,
						447,
						320,
						405,
						239,
						351,
						489,
						390,
						508,
						357,
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
				'5/25/20',
				'5/26/20',
				'5/27/20',
				'5/28/20',
				'5/29/20',
				'5/30/20',
				'5/31/20',
				'6/01/20',
				'6/02/20',
				'6/03/20',
				'6/04/20',
				'6/05/20',
				'6/06/20',
				'6/07/20',
				'6/08/20',
				'6/09/20',
				'6/10/20',
				'6/11/20',
				'6/12/20',
				'6/13/20',
				'6/14/20',
				'6/15/20',
				'6/16/20',
				'6/17/20',
				'6/18/20',
				'6/19/20',
				'6/20/20',
				'6/21/20',
				'6/22/20',
				'6/23/20',
				'6/24/20',
				'6/25/20',
				'6/26/20',
				'6/27/20',
				'6/28/20',
				'6/29/20',
				'6/30/20',
				'7/01/20',
				'7/02/20',
				'7/03/20',
				'7/04/20',
				'7/05/20',
				'7/06/20',
				'7/07/20',
				'7/08/20',
				'7/09/20',
				'7/10/20',
				'7/11/20',
				'7/12/20',
				'7/13/20',
				'7/14/20',
				'7/15/20',
				'7/16/20',
				'7/17/20',
				'7/18/20',
				'7/19/20',
				'7/20/20',
				'7/21/20',
				'7/22/20',
				'7/23/20',
				'7/24/20',
				'7/25/20',
				'7/26/20',
				'7/27/20',
				'7/28/20',
				'7/29/20',
				'7/30/20',
				'7/31/20',
				'8/01/20',
				'8/02/20',
				'8/03/20',
				'8/04/20',
				'8/05/20',
				'8/06/20',
				'8/07/20',
				'8/08/20',
				'8/09/20',
				'8/10/20',
				'8/11/20',
				'8/12/20',
				'8/13/20',
				'8/14/20',
				'8/15/20',
				'8/16/20',
				'8/17/20',
				'8/18/20',
				'8/19/20',
				'8/20/20',
				'8/21/20',
				'8/22/20',
				'8/23/20',
				'8/24/20',
				'8/25/20',
				'8/26/20',
				'8/27/20',
				'8/28/20',
				'8/29/20',
				'8/30/20',
				'8/31/20',
				'9/01/20',
				'9/02/20',
				'9/03/20',
				'9/04/20',
				'9/05/20',
				'9/06/20',
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
						110,
						120,
						125,
						128,
						133,
						141,
						150,
						158,
						162,
						168,
						171,
						179,
						192,
						201,
						210,
						216,
						229,
						235,
						245,
						251,
						257,
						269,
						277,
						281,
						287,
						291,
						295,
						309,
						318,
						326,
						332,
						337,
						342,
						349,
						354,
						357,
						367,
						368,
						374,
						382,
						389,
						392,
						399,
						402,
						406,
						410,
						412,
						414,
						418,
						427,
						436,
						440,
						445,
						446,
						453,
						456,
						461,
						461,
						464,
						466,
						470,
						473,
						475,
						476,
						477,
						480,
						482,
						486,
						488,
						489,
						494,
						495,
						498,
						501,
						503,
						504,
						508,
						511,
						518,
						524,
						528,
						533,
						537,
						545,
						552,
						563,
						567,
						575,
						583,
						594,
						605,
						613,
						626,
						636,
						644,
						659,
						670,
						683,
						695,
						705,
						720,
						736,
						753,
						771,
						782,
						794,
						809,
						818,
						836,
						851,
						859,
						879,
						891,
						908,
						928,
						944,
						956,
						974,
						1000,
						1024,
						1041,
						1061,
						1081,
						1095,
						1118,
						1132,
						1146,
						1161,
						1183,
						1195,
						1211,
						1223,
						1234,
						1248,
						1260,
						1278,
						1285,
						1301,
						1312,
						1324,
						1335,
						1342,
						1350,
						1357,
						1367,
						1371,
						1382,
						1385,
						1387,
						1387,
						1387,
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
				'5/01/20',
				'5/02/20',
				'5/03/20',
				'5/04/20',
				'5/05/20',
				'5/06/20',
				'5/07/20',
				'5/08/20',
				'5/09/20',
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
				'5/26/20',
				'5/27/20',
				'5/28/20',
				'5/29/20',
				'5/30/20',
				'5/31/20',
				'6/01/20',
				'6/02/20',
				'6/03/20',
				'6/04/20',
				'6/05/20',
				'6/06/20',
				'6/07/20',
				'6/08/20',
				'6/09/20',
				'6/10/20',
				'6/11/20',
				'6/12/20',
				'6/13/20',
				'6/14/20',
				'6/15/20',
				'6/16/20',
				'6/17/20',
				'6/18/20',
				'6/19/20',
				'6/20/20',
				'6/21/20',
				'6/22/20',
				'6/23/20',
				'6/24/20',
				'6/25/20',
				'6/26/20',
				'6/27/20',
				'6/28/20',
				'6/29/20',
				'6/30/20',
				'7/01/20',
				'7/02/20',
				'7/03/20',
				'7/04/20',
				'7/05/20',
				'7/06/20',
				'7/07/20',
				'7/08/20',
				'7/09/20',
				'7/10/20',
				'7/11/20',
				'7/12/20',
				'7/13/20',
				'7/14/20',
				'7/15/20',
				'7/16/20',
				'7/17/20',
				'7/18/20',
				'7/19/20',
				'7/20/20',
				'7/21/20',
				'7/22/20',
				'7/23/20',
				'7/24/20',
				'7/25/20',
				'7/26/20',
				'7/27/20',
				'7/28/20',
				'7/29/20',
				'7/30/20',
				'7/31/20',
				'8/01/20',
				'8/02/20',
				'8/03/20',
				'8/04/20',
				'8/05/20',
				'8/06/20',
				'8/07/20',
				'8/08/20',
				'8/09/20',
				'8/10/20',
				'8/11/20',
				'8/12/20',
				'8/13/20',
				'8/14/20',
				'8/15/20',
				'8/16/20',
				'8/17/20',
				'8/18/20',
				'8/19/20',
				'8/20/20',
				'8/21/20',
				'8/22/20',
				'8/23/20',
				'8/24/20',
				'8/25/20',
				'8/26/20',
				'8/27/20',
				'8/28/20',
				'8/29/20',
				'8/30/20',
				'8/31/20',
				'9/01/20',
				'9/02/20',
				'9/03/20',
				'9/04/20',
				'9/05/20',
				'9/06/20',
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
						9,
						10,
						5,
						3,
						5,
						8,
						9,
						8,
						4,
						6,
						3,
						8,
						13,
						9,
						9,
						6,
						13,
						6,
						10,
						6,
						6,
						12,
						8,
						4,
						6,
						4,
						4,
						14,
						9,
						8,
						6,
						5,
						5,
						7,
						5,
						3,
						10,
						1,
						6,
						8,
						7,
						3,
						7,
						3,
						4,
						4,
						2,
						2,
						4,
						9,
						9,
						4,
						5,
						1,
						7,
						3,
						5,
						0,
						3,
						2,
						4,
						3,
						2,
						1,
						1,
						3,
						2,
						4,
						2,
						1,
						5,
						1,
						3,
						3,
						2,
						1,
						4,
						3,
						7,
						6,
						4,
						5,
						4,
						8,
						7,
						11,
						4,
						8,
						8,
						11,
						11,
						8,
						13,
						10,
						8,
						15,
						11,
						13,
						12,
						10,
						15,
						16,
						17,
						18,
						11,
						12,
						15,
						9,
						18,
						15,
						8,
						20,
						12,
						17,
						20,
						16,
						12,
						18,
						26,
						24,
						17,
						20,
						20,
						14,
						23,
						14,
						14,
						15,
						22,
						12,
						16,
						12,
						11,
						14,
						12,
						18,
						7,
						16,
						11,
						12,
						11,
						7,
						8,
						7,
						10,
						4,
						11,
						3,
						2,
						0,
						0,
					],
				},
			],
		};

		const data2c = {
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
				'5/26/20',
				'5/27/20',
				'5/28/20',
				'5/29/20',
				'5/30/20',
				'5/31/20',
				'6/01/20',
				'6/02/20',
				'6/03/20',
				'6/04/20',
				'6/05/20',
				'6/06/20',
				'6/07/20',
				'6/08/20',
				'6/09/20',
				'6/10/20',
				'6/11/20',
				'6/12/20',
				'6/13/20',
				'6/14/20',
				'6/15/20',
				'6/16/20',
				'6/17/20',
				'6/18/20',
				'6/19/20',
				'6/20/20',
				'6/21/20',
				'6/22/20',
				'6/23/20',
				'6/24/20',
				'6/25/20',
				'6/26/20',
				'6/27/20',
				'6/28/20',
				'6/29/20',
				'6/30/20',
				'7/01/20',
				'7/02/20',
				'7/03/20',
				'7/04/20',
				'7/05/20',
				'7/06/20',
				'7/07/20',
				'7/08/20',
				'7/09/20',
				'7/10/20',
				'7/11/20',
				'7/12/20',
				'7/13/20',
				'7/14/20',
				'7/15/20',
				'7/16/20',
				'7/17/20',
				'7/18/20',
				'7/19/20',
				'7/20/20',
				'7/21/20',
				'7/22/20',
				'7/23/20',
				'7/24/20',
				'7/25/20',
				'7/26/20',
				'7/27/20',
				'7/28/20',
				'7/29/20',
				'7/30/20',
				'7/31/20',
				'8/01/20',
				'8/02/20',
				'8/03/20',
				'8/04/20',
				'8/05/20',
				'8/06/20',
				'8/07/20',
				'8/08/20',
				'8/09/20',
				'8/10/20',
				'8/11/20',
				'8/12/20',
				'8/13/20',
				'8/14/20',
				'8/15/20',
				'8/16/20',
				'8/17/20',
				'8/18/20',
				'8/19/20',
				'8/20/20',
				'8/21/20',
				'8/22/20',
				'8/23/20',
				'8/24/20',
				'8/25/20',
				'8/26/20',
				'8/27/20',
				'8/28/20',
				'8/29/20',
				'8/30/20',
				'8/31/20',
				'9/01/20',
				'9/02/20',
				'9/03/20',
				'9/04/20',
				'9/05/20',
				'9/06/20',
			],
			datasets: [
				{
					label: '% Tests Positive',
					fill: false, // Don't fill area under the line
					backgroundColor: 'rgb(54, 162, 235)', //blue
					borderColor: 'rgb(54, 162, 235)', //blue
					data: [
						8.7,
						8.1,
						6.8,
						5.8,
						4.8,
						5.1,
						5.1,
						7.1,
						7.0,
						5.8,
						5.8,
						5.8,
						5.5,
						5.8,
						5.9,
						6.3,
						6.4,
						7.7,
						7.9,
						8.4,
						9.1,
						9.6,
						10.0,
						10.5,
						10.8,
						11.2,
						11.6,
						11.9,
						11.9,
						11.9,
						11.9,
						11.9,
						12.0,
						12.1,
						12.1,
						12.2,
						12.3,
						12.5,
						12.6,
						12.7,
						12.8,
						12.9,
						12.9,
						13.0,
						13.0,
						13.1,
						13.1,
						13.2,
						13.2,
						13.2,
						13.2,
						13.2,
						13.2,
						13.2,
						13.2,
						13.2,
						13.2,
						13.1,
						12.9,
						12.9,
						12.7,
						12.6,
						12.3,
						12.1,
						11.6,
						11.2,
						11.0,
						10.9,
						10.3,
						9.8,
						9.3,
						8.9,
						8.5,
						8.3,
						8.2,
						8.0,
						7.7,
						7.4,
						7.1,
						6.9,
						6.9,
						6.9,
						6.8,
						6.7,
						6.5,
						6.3,
						6.2,
						6.1,
						6.1,
						6.1,
						6.0,
						6.0,
						5.9,
						5.9,
						5.9,
						5.9,
						5.9,
						5.8,
						5.8,
						5.8,
						5.8,
						5.9,
						5.9,
						5.9,
						6.0,
						6.0,
						6.0,
						6.1,
						6.1,
						6.2,
						6.3,
						6.4,
						6.5,
						6.6,
						6.8,
						6.9,
						7.0,
						7.1,
						7.2,
						7.4,
						7.5,
						7.6,
						7.7,
						7.8,
						8.0,
						8.2,
						8.4,
						8.5,
						8.7,
						8.8,
						8.9,
						9.0,
						9.1,
						9.2,
						9.3,
						9.4,
						9.5,
						9.7,
						9.7,
						9.8,
						9.9,
						9.9,
						10.0,
						10.0,
						10.1,
						10.1,
						10.2,
						10.2,
						10.3,
						10.3,
						10.3,
						10.3,
						10.3,
						10.3,
						10.4,
						10.4,
						10.4,
						10.4,
						10.4,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.6,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.5,
						10.4,
						10.4,
						10.4,
						10.4,
						10.4,
						null,
					],
				},
				{
					label: '7-Day Moving Average',
					fill: false, // Don't fill area under the line
					backgroundColor: 'rgb(255, 99, 132)', //salmon
					borderColor: 'rgb(255, 99, 132)', //salmon
					data: [
						12.8,
						14.0,
						14.7,
						15.9,
						15.1,
						15.9,
						16.4,
						16.3,
						15.8,
						15.6,
						15.1,
						14.3,
						13.8,
						13.3,
						12.9,
						13.3,
						13.6,
						14.3,
						14.6,
						15.1,
						15.5,
						15.9,
						15.8,
						15.9,
						15.5,
						15.8,
						15.1,
						15.1,
						14.8,
						14.8,
						14.6,
						14.4,
						13.7,
						13.2,
						13.2,
						13.1,
						12.8,
						12.4,
						11.8,
						11.5,
						10.8,
						9.8,
						8.8,
						8.0,
						7.1,
						6.4,
						5.7,
						5.7,
						4.9,
						4.5,
						4.0,
						3.8,
						3.6,
						3.4,
						3.0,
						3.1,
						3.1,
						3.0,
						2.9,
						2.9,
						3.1,
						3.0,
						3.2,
						3.2,
						3.3,
						3.3,
						3.3,
						3.2,
						3.6,
						3.7,
						3.7,
						4.0,
						4.2,
						4.5,
						4.9,
						5.4,
						5.3,
						5.5,
						5.6,
						5.8,
						6.0,
						6.5,
						6.3,
						6.8,
						7.5,
						7.9,
						8.0,
						8.2,
						8.5,
						9.1,
						9.4,
						9.6,
						10.2,
						10.9,
						11.3,
						11.7,
						12.3,
						12.4,
						12.4,
						12.5,
						12.7,
						13.0,
						14.1,
						14.2,
						14.7,
						15.3,
						15.5,
						15.6,
						15.5,
						14.9,
						15.4,
						15.4,
						15.5,
						15.7,
						15.8,
						15.8,
						15.9,
						15.3,
						15.6,
						15.3,
						15.2,
						15.1,
						15.1,
						14.9,
						14.8,
						14.4,
						14.6,
						14.5,
						14.7,
						14.9,
						15.0,
						14.7,
						14.3,
						13.8,
						13.7,
						13.4,
						13.2,
						13.0,
						12.8,
						12.9,
						13.2,
						13.0,
						12.8,
						12.7,
						12.7,
						11.9,
						11.4,
						11.1,
						11.0,
						11.0,
						10.8,
						10.7,
						11.4,
						11.4,
						11.4,
						11.2,
						10.9,
						10.7,
						10.3,
						9.6,
						9.3,
						8.9,
						8.5,
						8.4,
						8.3,
						8.3,
						null,
					],
				},
				{
					label: 'Stage-1 Opened 5/9/20',
					fill: false, // Don't fill area under the line
					backgroundColor: '#bdbdbd',
					borderColor: '#bdbdbd',
					pointRadius: 1,
					data: [
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
						11.0,
					],
				},
				{
					label: 'Stage-2 Opened 5/30/20',
					fill: false, // Don't fill area under the line
					backgroundColor: '#933A16',
					borderColor: '#933A16',
					pointRadius: 1,
					data: [
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
						6.0,
					],
				},
			],
		};

		return (
			<Layout pageName='nevada'>
				<Helmet>
					<title>Nevada Covid-19 Stats</title>
				</Helmet>

				{/* content area start */}
				<Container
					type='content'
					className='text-center container-fluid pr-3 pl-3 pt-3 pb-3'
				>
					<article className='canvas-container'>
						<div>
							<h2 className='is-dark-text-light'>Nevada</h2>
							<h5 className='is-dark-text-light'>
								<em>NOTE: Nevada Data Is One Day Old</em>
							</h5>
							<p className='is-dark-text-light'>
								<em>Hover over colored bars/lines to see numbers.</em>
							</p>
						</div>
						<div className='row'>
							<div className='col-lg-3 col-md-6'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-mdall'>
											People Tested
										</div>
									</div>
									<div className='card-value pt-4'>
										<h1>621,990</h1>
										<h2 className='is_salmon'>+ 3,140</h2>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-sm-6'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											Tested Negative
										</div>
									</div>
									<div className='card-value pt-4'>
										<h1>550,675</h1>
										<h2 className='is_salmon'>+ 2,803</h2>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-mdall'>
											Nevada Cases
										</div>
									</div>
									<div className='card-value pt-4'>
										<h1>71,967</h1>
										<h2 className='is_salmon'>+ 357</h2>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											Nevada Deaths
										</div>
									</div>
									<div className='card-value pt-4'>
										<h1>1,387</h1>
										<h2 className='is_salmon'>+ 4</h2>
									</div>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6 is-light-text mb-4'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											Nevada Cases
										</div>
									</div>
									<div className='card-value pt-4'>
										<Bar data={data1} />
									</div>
								</div>
							</div>
							<div className='col-md-6 is-light-text mb-4'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											Nevada Daily Cases
										</div>
									</div>
									<div className='card-value pt-4'>
										<Bar data={data1b} />
									</div>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6 is-light-text mb-4'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											Nevada Deaths - Date of Death
										</div>
									</div>
									<div className='card-value pt-4'>
										<Bar data={data2} />
									</div>
								</div>
							</div>
							<div className='col-md-6 is-light-text mb-4'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											Nevada Daily Deaths
										</div>
									</div>
									<div className='card-value pt-4'>
										<Bar data={data2b} />
									</div>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-12 is-light-text mb-4'>
								<div className='card grid-card is-card-dark'>
									<div className='card-heading'>
										<div className='is-dark-text-light letter-spacing text-small'>
											NV % of Positive Tests
										</div>
									</div>
									<div className='card-value pt-4'>
										<Line data={data2c} />
									</div>
								</div>
							</div>
						</div>

						<div>
							<p className='is-dark-text-light'>
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
									target='_blank'
									rel='noopener noreferrer'
									href='https://app.powerbigov.us/view?r=eyJrIjoiMjA2ZThiOWUtM2FlNS00MGY5LWFmYjUtNmQwNTQ3Nzg5N2I2IiwidCI6ImU0YTM0MGU2LWI4OWUtNGU2OC04ZWFhLTE1NDRkMjcwMzk4MCJ9'
								>
									Nevada DWWS
								</a>
								<br />
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.southernnevadahealthdistrict.org/coronavirus'
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
