import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const USStatesPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>US States</title>
      </Helmet>

      {/* content area start */}
      <Container
        type="content"
        className="text-center container-fluid pr-5 pl-5 pt-5 pb-5"
      >
        <h2 className="is-dark-text-light">US States</h2>

        <Container className="row">
          <Container className="col-lg-10 offset-1 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </p>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};

export default USStatesPage;
