import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Container from '../components/Container';

const AboutPage = () => {
	return (
		<Layout pageName="about">
			<Helmet>
				<title>About</title>
			</Helmet>

			{/* content area start */}
			<Container type="content" className="pr-3 pl-3 pt-3 pb-3">
				<h2 className="is-dark-text-light">About</h2>

				<div className="card is-card-dark">
					<div className="card-heading">
						<div className="is-dark-text-light letter-spacing text-small">
							Covid-19 Info App
						</div>
					</div>
					<div className="card-value pt-4">
						<div>
							<p>
								This is a demo / proof of concept app and is not intended for
								statystical analysis or anything serious.
							</p>
							<p>
								<em>This is a work in process</em> and some of the data is hard
								coded. I am working next on implementing the rest of the API's
								to fetch the data dynamically.
							</p>
							<p>
								<em>
									Note: The Nevada page data is from yesterday. The Nevada
									Health district updates their data the next morning for the
									day before. You may have noticed different results from the
									many different apps online. This is because they don't all
									fetch the data at the same time. Countries across the world
									update their data at different times.
								</em>
							</p>
							<h3>Best viewed on a tablet or larger!</h3>
							<h3>We hope you stay healthy during this troubling time!</h3>
						</div>
						<hr />
						<div>
							<h3>Global Sources:</h3>

							<p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/novelcovid/api"
								>
									NOVELCovid/API
								</a>
								<br />
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/CSSEGISandData/COVID-19"
								>
									Worldwide Data repository
								</a>
								<br />
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://csbs.org/information-covid-19-coronavirus"
								>
									csbs.org/information-covid-19-coronavirus
								</a>
							</p>
						</div>
						<div>
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
								<br />
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://thenevadaindependent.com/article/coronavirus-live-blog-week-three"
								>
									The Nevada Independent
								</a>
							</p>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default AboutPage;
