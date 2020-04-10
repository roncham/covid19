import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import axios from 'axios';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
//import GlobalList from 'containers/GlobalList';

const LOCATION = {
  lat: 0,
  lng: 0
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
      response = await axios.get('https://corona.lmao.ninja/countries');
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
            ...country
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          }
        };
      })
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
            html
          }),
          riseOnHover: true,
          clickable: true
        });
      }
    });

    geoJsonLayers.addTo(map);
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'Mapbox',
    zoom: DEFAULT_ZOOM,
    maxZoom: 8,
    maxNativeZoom: 7,
    mapEffect
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Covid-19 Overview map</title>
      </Helmet>

      <Map {...mapSettings} />

      {/* content area start */}
      <Container
        type="content"
        className="text-center container-fluid pr-5 pl-5 pt-5 pb-5"
      >
        <h2 className="is-dark-text-light">Global Cases</h2>
        {/* row 1 - global */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 is-light-text mb-4">
            <div className="card grid-card is-card-dark h-100">
              <div className="card-heading">
                <div className="is-dark-text-light letter-spacing text-small">
                  Total Cases
                </div>
              </div>

              <div className="card-value pt-4 text-x-large">
                <h2 className="is-orange">1,696,244</h2>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 is-light-text mb-4">
            <div className="card grid-card is-card-dark h-100">
              <div className="card-heading">
                <div className="is-dark-text-light letter-spacing text-small">
                  Global Deaths
                </div>
              </div>

              <div className="card-value pt-4 text-x-large">
                <h2 className="is-red">102,594</h2>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 is-light-text mb-4">
            <div className="card grid-card is-card-dark h-100">
              <div className="card-heading">
                <div className="is-dark-text-light letter-spacing text-small">
                  Recovered
                </div>
              </div>

              <div className="card-value pt-4 text-x-large">
                <h2 className="is-green">375,958</h2>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 is-light-text mb-4">
            <div className="card grid-card is-card-dark h-100">
              <div className="card-heading">
                <div className="is-dark-text-light letter-spacing text-small">
                  Countries
                </div>
              </div>

              <div className="card-value pt-4">
                <h2>212</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
