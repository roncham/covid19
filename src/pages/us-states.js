import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Container from '../components/Container';
import StatesList from '../models/usList';

const USStatesPage = () => {
	return (
		<Layout pageName="us-states">
			<Helmet>
				<title>US States</title>
			</Helmet>
			<Container type="content" className="pr-3 pl-3 pt-3 pb-3">
				<h2 className="is-dark-text-light">US States</h2>

				<div className="col-xs-12 is-light-text mb-4">
					<div>
						<table className="table table-dark table-striped">
							<thead>
								<tr>
									<th scope="col">State</th>
									<th scope="col" className="is-yellow">
										Cases
									</th>
									<th scope="col" className="is-red">
										Deaths
									</th>
									<th scope="col" className="is-orange">
										Active
									</th>
									<th scope="col" className="is-blue">
										Tests
									</th>
								</tr>
							</thead>
							<tbody>
								<StatesList />
							</tbody>
						</table>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default USStatesPage;
