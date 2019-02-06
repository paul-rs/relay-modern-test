import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../lib/RelayEnvironment';
import CountryList from '../components/CountryList';

const query = graphql`
  query CountryListPageQuery {
    countries {
      name
      code
    }
  }
`;

class CountryListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <CountryList countries={props.countries}/>;
          }
          return <div>Loading...</div>;
        }
        }/>
    );
  }
}

export default CountryListPage;