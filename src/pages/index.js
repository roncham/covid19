import React from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import axios from 'axios';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import GlobalList from 'models/GlobalList';
import USAList from 'models/usaList';

const LOCATION = {
	lat: 0,
	lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const IndexPage = () => {
	/**
	 * mapEffect
	 * @description Fires a callback once the page renders
	 */

	async function mapEffect({ leafletElement: map } = {}) {
		let response;

		try {
			response = await axios.get('https://corona.lmao.ninja/v2/countries');
		} catch (e) {
			console.log(`Failed to fetch countries: ${e.message}`, e);
			return;
		}

		const { data = [] } = response;
		const hasData = Array.isArray(data) && data.length > 0;

		if (!hasData) return;

		const geoJson = {
			type: 'FeatureCollection',
			features: data.map((country = {}) => {
				const { countryInfo = {} } = country;
				const { lat, long: lng } = countryInfo;
				return {
					type: 'Feature',
					properties: {
						...country,
					},
					geometry: {
						type: 'Point',
						coordinates: [lng, lat],
					},
				};
			}),
		};

		const geoJsonLayers = new L.GeoJSON(geoJson, {
			pointToLayer: (feature = {}, latlng) => {
				const { properties = {} } = feature;
				let updatedFormatted;
				let casesString;

				const { country, updated, cases, deaths, recovered } = properties;

				casesString = `${cases}`;

				if (cases > 1000) {
					casesString = `${casesString.slice(0, -3)}k+`;
				}

				if (updated) {
					updatedFormatted = new Date(updated).toLocaleString();
				}

				const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h2>${country}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${cases}</li>
                <li><strong>Deaths:</strong> ${deaths}</li>
                <li><strong>Recovered:</strong> ${recovered}</li>
                <li><strong>Last Update:</strong> ${updatedFormatted}</li>
              </ul>
            </span>
            ${casesString}
          </span>
        `;

				return L.marker(latlng, {
					icon: L.divIcon({
						className: 'icon',
						html,
					}),
					riseOnHover: true,
				});
			},
		});

		geoJsonLayers.addTo(map);
	}

	const mapSettings = {
		center: CENTER,
		defaultBaseMap: 'Mapbox',
		zoom: DEFAULT_ZOOM,
		maxZoom: 8,
		maxNativeZoom: 7,
		mapEffect,
	};

	return (
		<Layout pageName="home">
			<Helmet>
				<title>Covid-19 Overview map</title>
			</Helmet>

			<Map {...mapSettings} />

			{/* content area start */}
			<Container type="content" className="container-fluid pr-3 pl-3 pt-3 pb-3">
				<div className="row">
					<div className="col-lg-6 is-light-text mb-4">
						<div className="card grid-card is-card-dark h-100">
							<div className="card-heading">
								<div className="is-dark-text-light letter-spacing text-small">
									<h2>Global</h2>
								</div>
							</div>

							<div className="card-value pt-4 text-x-large">
								<div className="is-dark-text-light">
									<GlobalList />
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 is-light-text mb-4">
						<div className="card grid-card is-card-dark h-100">
							<div className="card-heading">
								<div className="is-dark-text-light letter-spacing text-small">
									<h2>United States</h2>
								</div>
							</div>

							<div className="card-value pt-4 text-x-large">
								<div className="is-dark-text-light">
									<USAList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default IndexPage;
