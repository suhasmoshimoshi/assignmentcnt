import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql/types";
const endPoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;
const client = new GraphQLClient(endPoint, {
  fetch,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
  errorPolicy: "all",
});
export const sdk = getSdk(client);