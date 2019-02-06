import React, { Component } from 'react';
import Country from './Country';
// import { createFragmentContainer, graphql } from 'react-relay';

class CountryList extends Component {

  render() {
    return (
      <div>
        {this.props.countries.map((country) => (
          <Country key={country.code} country={country}/>
        ))}
      </div>
    );
  }
}

export default CountryList;