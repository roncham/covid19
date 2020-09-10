import React from 'react';

class USAList extends React.Component {
	state = {
		usaData: [],
	};

	async componentDidMount() {
		// Load async data.
		await fetch('https://corona.lmao.ninja/v2/countries/USA')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				this.setState({
					isLoaded: true,
					usaData: json,
				});
				//console.log(this.state.usaData);
			});
		(error) => {
			this.setState({ error });
		};
	}

	render() {
		const { isLoaded, usaData } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<>
					<ul
						key={
							// @ts-ignore
							usaData._id
						}
					>
						<li>
							<strong>Confirmed:</strong>{' '}
							{
								// @ts-ignore
								usaData.cases
							}
						</li>
						<li>
							<strong>Deaths:</strong>{' '}
							{
								// @ts-ignore
								usaData.deaths
							}
						</li>
						<li>
							<strong>Active:</strong>{' '}
							{
								// @ts-ignore
								usaData.active
							}
						</li>
						<li>
							<strong>Critical:</strong>{' '}
							{
								// @ts-ignore
								usaData.critical
							}
						</li>

						<li>
							<strong>Recovered:</strong>{' '}
							{
								// @ts-ignore
								usaData.recovered
							}
						</li>
						<li>
							<strong>Tests Done:</strong>{' '}
							{
								// @ts-ignore
								usaData.tests
							}
						</li>
					</ul>
				</>
			);
		}
	}
}

export default USAList;
