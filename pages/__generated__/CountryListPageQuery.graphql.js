/**
 * @flow
 * @relayHash 83276ee6cf177c416b73de91f5b33f3c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountryListPageQueryVariables = {||};
export type CountryListPageQueryResponse = {|
  +countries: ?$ReadOnlyArray<?{|
    +name: ?string,
    +code: ?string,
  |}>
|};
export type CountryListPageQuery = {|
  variables: CountryListPageQueryVariables,
  response: CountryListPageQueryResponse,
|};
*/


/*
query CountryListPageQuery {
  countries {
    name
    code
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "countries",
    "storageKey": null,
    "args": null,
    "concreteType": "Country",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CountryListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CountryListPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CountryListPageQuery",
    "id": null,
    "text": "query CountryListPageQuery {\n  countries {\n    name\n    code\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67fb3c14bb8698bfc28fbe1cd32b3fa0';
module.exports = node;
