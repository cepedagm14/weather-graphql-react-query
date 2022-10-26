import { useMutation, useQuery } from "@tanstack/react-query";
import { GraphQLClient, request } from "graphql-request";

const url = "https://graphql-weather-api.herokuapp.com/";
const token = `Bearer token`;

export const useClientGQL = (key, query, variables, config = {}) => {
  let endpoint = url;
  const headers = {
    headers: {
      authorization: `${token} `,
    },
  };
  const graphQLClient = new GraphQLClient(endpoint, headers);
  const fetchData = async () => await graphQLClient.request(query, variables);
  // const fetchData = async () => await request(endpoint, query, variables);
  return useQuery(key, fetchData, config);
};

export const useMutationGQL = (key, query, variables, config = {}) => {
    let endpoint = url;
    const headers = {
      headers: {
        authorization: `${token} `,
      },
    };
    const graphQLClient = new GraphQLClient(endpoint, headers);
    const fetchData = async () => await graphQLClient.request(query, variables);
    // const fetchData = async () => await request(endpoint, query, variables);
    return useMutation(key, fetchData, config);
  };
