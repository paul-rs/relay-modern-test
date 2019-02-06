import React, { Component } from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';

class Country extends Component {

  render() {
    return (
      <div>
        <div>{this.props.country.name}</div>
      </div>
    );
  }
}

export default Country;
// export default createFragmentContainer(Country, graphql`
//   fragment Country_country on Country {
//     code
//     name
//   }
// `);