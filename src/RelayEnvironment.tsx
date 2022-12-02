import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphQL from "./FetchGraphQL";

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create((operation, variables) => {
    console.log(`[Relay] ${operation.name}`);
    return fetchGraphQL(operation.text, variables);
  }),
  store: new Store(new RecordSource())
});
