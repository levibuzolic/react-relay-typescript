import * as React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";

function App() {
  const data = useLazyLoadQuery(
    graphql`
      query AppQuery {
        continents {
          code
          name
          countries {
            name
          }
        }
        countries {
          name
          languages {
            name
          }
        }
      }
    `,
    {},
    { fetchPolicy: "store-and-network" }
  );

  console.log({ data });

  return null;
}

export default function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback={"Loading Continent/Country Data..."}>
        <App />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}
