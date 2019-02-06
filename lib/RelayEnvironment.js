const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

const API_ENDPOINT = 'https://countries.trevorblades.com';

const store = new Store(new RecordSource());
const network = Network.create((operation, variables) => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;