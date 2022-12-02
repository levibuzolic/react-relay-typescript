import React from "react";
import "./App.css";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";
import Header from "./Header";
import Guide from "./Guide";
import Countries from "./Countries";

const { Suspense } = React;

function App() {
  return (
    <div className="App">
      <Header />
      <div className="col50">
        <div className="pad-md">
          <Guide />
        </div>
      </div>
      <div className="col50">
        <div className="pad-md">
          <Countries />
        </div>
      </div>
    </div>
  );
}

export default function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading Continent/Country Data..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
