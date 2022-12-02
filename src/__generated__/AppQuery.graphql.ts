/**
 * @generated SignedSource<<2245ec76f7240cd538884e6ea9d39a41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly continents: ReadonlyArray<{
    readonly code: string | null;
    readonly countries: ReadonlyArray<{
      readonly name: string | null;
    } | null> | null;
    readonly name: string | null;
  } | null> | null;
  readonly countries: ReadonlyArray<{
    readonly languages: ReadonlyArray<{
      readonly name: string | null;
    } | null> | null;
    readonly name: string | null;
  } | null> | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Continent",
    "kind": "LinkedField",
    "name": "continents",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "code",
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "countries",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Language",
        "kind": "LinkedField",
        "name": "languages",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "31e3d167ebf148ff47a3d2423ceeb117",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  continents {\n    code\n    name\n    countries {\n      name\n    }\n  }\n  countries {\n    name\n    languages {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0b6544d8e791d9ceefdfe1ad2d0b48f6";

export default node;
