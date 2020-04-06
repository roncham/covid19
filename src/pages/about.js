import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import Container from 'components/Container';

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>

      {/* content area start */}
      <Container
        type="content"
        className="text-center container-fluid pr-5 pl-5 pt-5 pb-5"
      >
        <h2 className="is-dark-text-light">About</h2>

        <Container className="row">
          <Container className="col-lg-10 offset-1 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  Covid-19 Info App
                </Container>
              </Container>
              <Container className="card-value pt-4">
                <div>
                  <p>
                    This is a demo / proof of concept app and is not intended
                    for statystical analysis or anything serious.
                  </p>
                  <p>
                    I created the main page following a tutorial linked below.{' '}
                  </p>
                  <p>
                    This is a work in process and some of the data is hard
                    coded. I am working next on implementing the rest of the
                    API's to fetch the data dynamically.
                  </p>
                  <p>
                    Note: The Nevada page data is from yesterday. The Nevada
                    Health district updates their data the next morning for the
                    day before. You may have noticed different results from the
                    many different apps online. This is because they don't all
                    fetch the data at the same time. Countries across the world
                    update their data at different times.
                  </p>
                  <h3>We hope you stay healthy during this troubling time!</h3>
                </div>
                <hr />
                <div>
                  <h2>Sources:</h2>

                  <p>
                    <Link
                      className="link"
                      to="https://github.com/ExpDev07/coronavirus-tracker-api"
                    >
                      coronavirus-tracker-api
                    </Link>{' '}
                    via
                    <br />
                    <Link
                      className="link"
                      to="https://coronavirus-tracker-api.herokuapp.com"
                    >
                      coronavirus-tracker-api.herokuapp.com
                    </Link>
                    <br />
                    <Link
                      className="link"
                      to="https://github.com/CSSEGISandData/COVID-19"
                    >
                      Worldwide Data repository
                    </Link>
                    <br />
                    <Link
                      className="link"
                      to="https://csbs.org/information-covid-19-coronavirus"
                    >
                      csbs.org/information-covid-19-coronavirus
                    </Link>
                  </p>

                  <p>
                    <h3>Want to build your own map?</h3>
                    <br />
                    Check out:&nbsp;
                    <Link
                      className="link"
                      to="https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/"
                    >
                      How to create a Coronavirus Dashboard & Map App
                    </Link>
                  </p>
                </div>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};

export default AboutPage;
