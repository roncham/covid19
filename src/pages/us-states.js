import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import StatesList from 'models/usList';

const USStatesPage = () => {
  return (
    <Layout pageName="us-states">
      <Helmet>
        <title>US States</title>
      </Helmet>
      <Container type="content" className="container-fluid pr-5 pl-5 pt-5 pb-5">
        <h2 className="is-dark-text-light">US States</h2>

        <Container className="is-light-text mb-4">
          <table className="table table-dark table-striped table-fixed">
            <thead>
              <tr>
                <th scope="col">State</th>
                <th scope="col">Cases</th>
                <th scope="col">Deaths</th>
                <th scope="col">Active</th>
                <th scope="col">Tests</th>
              </tr>
            </thead>
            <tbody>
              <StatesList />
            </tbody>
          </table>
        </Container>
      </Container>
    </Layout>
  );
};

export default USStatesPage;
